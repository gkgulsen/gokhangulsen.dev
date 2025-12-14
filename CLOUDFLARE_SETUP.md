# Cloudflare Full (Strict) SSL Kurulum Rehberi

Cloudflare Full (strict) modu için origin server'da geçerli bir SSL sertifikası gereklidir. İki seçeneğiniz var:

## Seçenek 1: Cloudflare Origin Certificate (Önerilen - Daha Kolay)

Cloudflare Origin Certificate kullanmak daha kolaydır çünkü:
- DNS yayılmasını beklemenize gerek yok
- Let's Encrypt challenge gerektirmez
- Cloudflare panelinden kolayca oluşturulur

### Adımlar:

1. **Cloudflare Origin Certificate Oluşturma**:
   - Cloudflare Dashboard → SSL/TLS → Origin Server
   - "Create Certificate" butonuna tıklayın
   - Hostnames: `gokhangulsen.dev` ve `*.gokhangulsen.dev` ekleyin
   - Private key type: RSA (2048)
   - Certificate Validity: 15 years
   - "Create" butonuna tıklayın

2. **Sertifikaları İndirme**:
   - Origin Certificate (pem formatında) → `cert.pem` olarak kaydedin
   - Private Key → `key.pem` olarak kaydedin

3. **Sunucuya Yükleme**:
   ```bash
   # Sunucuda certbot klasörünü oluşturun
   mkdir -p certbot/conf/live/gokhangulsen.dev
   
   # Sertifikaları yükleyin (SCP ile veya dosya editörü ile)
   # cert.pem → certbot/conf/live/gokhangulsen.dev/fullchain.pem
   # key.pem → certbot/conf/live/gokhangulsen.dev/privkey.pem
   ```

4. **Nginx Konfigürasyonunu Güncelleme**:
   Nginx konfigürasyonu zaten hazır. Sadece sertifikaları yükleyin.

5. **Docker Compose'u Yeniden Başlatma**:
   ```bash
   sudo docker compose down
   sudo docker compose up -d
   ```

## Seçenek 2: Let's Encrypt (Mevcut Yapılandırma)

Let's Encrypt kullanmak için:

1. **Cloudflare DNS Ayarları**:
   - DNS kayıtlarını Cloudflare'de ekleyin
   - **ÖNEMLİ**: Proxy durumunu geçici olarak "DNS only" (gri bulut) yapın
   - A kaydı: `gokhangulsen.dev` → Sunucu IP
   - A kaydı: `www.gokhangulsen.dev` → Sunucu IP

2. **DNS Yayılmasını Bekleyin**:
   ```bash
   dig gokhangulsen.dev +short
   # Sunucu IP'nizi göstermeli
   ```

3. **Let's Encrypt Sertifikası Oluşturma**:
   ```bash
   # init-letsencrypt.sh dosyasını düzenleyin
   nano init-letsencrypt.sh
   # email="your-email@example.com" satırını güncelleyin
   
   # Script'i çalıştırın
   chmod +x init-letsencrypt.sh
   ./init-letsencrypt.sh
   ```

4. **Cloudflare Proxy'yi Aktif Edin**:
   - SSL/TLS ayarlarını "Full (strict)" olarak bırakın
   - DNS kayıtlarında proxy'yi aktif edin (turuncu bulut)

## Cloudflare DNS Ayarları

Cloudflare Dashboard → DNS → Records:

```
Type    Name    Content              Proxy
A       @       YOUR_SERVER_IP       Proxied (orange cloud)
A       www     YOUR_SERVER_IP       Proxied (orange cloud)
```

## SSL/TLS Ayarları (Cloudflare Dashboard)

- **SSL/TLS encryption mode**: Full (strict)
- **Always Use HTTPS**: On (önerilir)
- **Automatic HTTPS Rewrites**: On (önerilir)
- **Minimum TLS Version**: 1.2 (önerilir)

## Kontrol

1. **Cloudflare'den Test**:
   ```bash
   curl -I https://gokhangulsen.dev
   # HTTP/2 200 dönmeli
   ```

2. **SSL Test**:
   - https://www.ssllabs.com/ssltest/analyze.html?d=gokhangulsen.dev
   - A+ veya A notu almalısınız

3. **Tarayıcıdan Test**:
   - `https://gokhangulsen.dev` → Yeşil kilit ikonu görünmeli
   - `https://www.gokhangulsen.dev` → Yeşil kilit ikonu görünmeli

## Sorun Giderme

### "525: SSL handshake failed" Hatası
- Origin server'da SSL sertifikası eksik veya geçersiz
- Cloudflare Origin Certificate kullanıyorsanız, sertifikanın doğru yüklendiğinden emin olun
- Let's Encrypt kullanıyorsanız, sertifikanın geçerli olduğundan emin olun

### "526: Invalid SSL certificate" Hatası
- Origin server'da self-signed veya geçersiz sertifika var
- Cloudflare Full (strict) modu için geçerli bir sertifika gerekli

### Gerçek IP Adresi Gösterilmiyor
- Nginx konfigürasyonunda Cloudflare IP ranges zaten eklendi
- `real_ip_header CF-Connecting-IP;` ayarı mevcut

## Öneriler

1. **Cloudflare Origin Certificate kullanın** (daha kolay)
2. **Always Use HTTPS'i aktif edin**
3. **Automatic HTTPS Rewrites'i aktif edin**
4. **Minimum TLS Version: 1.2** ayarlayın
5. **Browser Integrity Check'i aktif edin** (güvenlik için)

