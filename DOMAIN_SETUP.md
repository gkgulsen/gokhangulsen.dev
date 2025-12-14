# Domain Bağlama Rehberi - gokhangulsen.dev

## Adım 1: DNS Kayıtlarını Yapılandırma

Domain sağlayıcınızın DNS yönetim paneline giriş yapın ve şu kayıtları ekleyin:

### A Kaydı (IPv4)
- **Type**: A
- **Name**: @ (veya boş)
- **Value**: Sunucunuzun IP adresi
- **TTL**: 3600 (veya varsayılan)

### A Kaydı (www için)
- **Type**: A
- **Name**: www
- **Value**: Sunucunuzun IP adresi
- **TTL**: 3600 (veya varsayılan)

### Örnek:
```
A     @            YOUR_SERVER_IP    3600
A     www          YOUR_SERVER_IP    3600
```

**Not**: DNS değişikliklerinin yayılması 24-48 saat sürebilir. Kontrol etmek için:
```bash
dig gokhangulsen.dev
# veya
nslookup gokhangulsen.dev
```

## Adım 2: Sunucuda Gerekli Dosyaları Hazırlama

Sunucuda proje klasörüne gidin:
```bash
cd /path/to/gokhangulsen-dev
```

## Adım 3: init-letsencrypt.sh Script'ini Düzenleme

`init-letsencrypt.sh` dosyasını açın ve e-posta adresinizi güncelleyin:
```bash
nano init-letsencrypt.sh
```

Şu satırı bulun ve e-posta adresinizi yazın:
```bash
email="your-email@example.com"  # Buraya gerçek e-posta adresinizi yazın
```

## Adım 4: Script'i Çalıştırılabilir Yapma

```bash
chmod +x init-letsencrypt.sh
```

## Adım 5: DNS Yayılmasını Bekleme

DNS kayıtlarının yayılmasını kontrol edin:
```bash
# Sunucuda çalıştırın
dig gokhangulsen.dev +short
# Sunucu IP'nizi göstermeli
```

## Adım 6: SSL Sertifikası Oluşturma

**ÖNEMLİ**: İlk kez test için `staging=1` yapın, sonra `staging=0` yapıp gerçek sertifikayı alın.

```bash
# Test için (staging=1)
./init-letsencrypt.sh

# Başarılı olursa, staging=0 yapıp tekrar çalıştırın
nano init-letsencrypt.sh  # staging=0 yapın
./init-letsencrypt.sh
```

## Adım 7: Docker Compose'u Yeniden Başlatma

```bash
sudo docker compose down
sudo docker compose up -d
```

## Adım 8: Kontrol

Tarayıcıdan şu adresleri test edin:
- `http://gokhangulsen.dev` (HTTPS'e yönlendirmeli)
- `https://gokhangulsen.dev`
- `https://www.gokhangulsen.dev`

## Sorun Giderme

### DNS yayılmadı
```bash
# Farklı DNS sunucularından kontrol edin
dig @8.8.8.8 gokhangulsen.dev
dig @1.1.1.1 gokhangulsen.dev
```

### SSL sertifikası oluşturulamadı
- Port 80'in açık olduğundan emin olun
- Firewall'da 80 ve 443 portlarının açık olduğunu kontrol edin
- DNS'in tamamen yayıldığından emin olun

### Sertifika yenileme
Sertifikalar otomatik olarak yenilenecek (certbot container'ı çalışıyor). Manuel yenileme için:
```bash
sudo docker compose exec certbot certbot renew
sudo docker compose exec nginx nginx -s reload
```

## Firewall Ayarları

```bash
# UFW kullanıyorsanız
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw reload

# firewalld kullanıyorsanız
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

