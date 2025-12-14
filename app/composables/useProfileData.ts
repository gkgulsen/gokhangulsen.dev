export const useProfileData = () => {
  const profile = {
    name: 'Gökhan Gülşen',
    title: 'Software Developer',
    location: 'Kars',
    avatar: '/img/cv-avatar.jpg',
    description: 'Software developer with 5+ years of experience in building web apps.\nSkilled in : .Net, Vue.js, Nuxt.js, Typescript',
    skills: {
      backend: [
        { name: 'C#', icon: '/icons/cs.svg' },
        { name: '.NET', icon: '/icons/dotnet.svg' },
        { name: '.EF Core', icon: '/icons/entityframeworkcore-original.svg' },
        { name: 'Docker', icon: '/icons/docker.svg' },
        { name: 'Kubernetes', icon: '/icons/kubernetes.svg' },
        { name: 'RabbitMQ', icon: '/icons/rabbitmq-auto.svg' },
        // { name: 'Keycloak', icon: '/icons/keycloak.svg' },
        { name: 'JWT', icon: '/icons/jwt-auto.svg' },
        { name: 'Linux', icon: '/icons/linux-auto.svg' }
      ],
      frontend: [
        { name: 'HTML', icon: '/icons/html.svg' },
        { name: 'CSS', icon: '/icons/css.svg' },
        { name: 'JavaScript', icon: '/icons/javascript.svg' },
        { name: 'Vue.js', icon: '/icons/vuejs-auto.svg' },
        { name: 'Nuxt.js', icon: '/icons/nuxtjs-auto.svg' },
        { name: 'PrimeVue', icon: '/icons/primevue-auto.svg' },
        { name: 'TypeScript', icon: '/icons/typescript.svg' },
        { name: 'Tailwind CSS', icon: '/icons/tailwindcss-auto.svg' }
      ],
      database: [
        { name: 'PostgreSQL', icon: '/icons/postgresql-auto.svg' },
        { name: 'SQL Server', icon: '/icons/sqlserver-auto.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        { name: 'Redis', icon: '/icons/redis-auto.svg' },
        { name: 'SQLite', icon: '/icons/sqlite.svg' },
        { name: 'Elasticsearch', icon: '/icons/elasticsearch-auto.svg' }
      ],
      observability: [
        { name: 'OpenTelemetry', icon: '/icons/opentelemetry-auto.svg' },
        { name: 'Prometheus', icon: '/icons/prometheus.svg' },
        { name: 'Grafana', icon: '/icons/grafana-auto.svg' },
        { name: 'Jaeger', icon: '/icons/jaeger-auto.svg' },
        
        { name: 'Kibana', icon: '/icons/kibana-auto.svg' }
      ],
      other: [
        { name: 'Git', icon: '/icons/git-auto.svg' },
        { name: 'Azure', icon: '/icons/azure-auto.svg' },
        { name: 'Azure DevOps', icon: '/icons/azuredevops-auto.svg' },
        { name: 'Jira', icon: '/icons/jira-auto.svg' },
        // { name: 'Postman', icon: '/icons/postman.svg' },
        { name: 'n8n', icon: '/icons/n8n-auto.svg' },
        // { name: 'Ollama', icon: '/icons/ollama-auto.svg' }
      ]
    },
    cvUrl: '/sener-yilmaz-cv-2025.pdf'
  }

  const aboutMe = {
    description: 'Software developer with expertise in .NET and Vue.js. Focused on building scalable REST APIs, microservices, and managing databases. Skilled in CI/CD implementation and modern technologies like Docker, RabbitMQ, and Redis.',
    links: [
      {
        href: 'https://gokhangulsen.dev',
        text: 'gokhangulsen.dev',
        icon: 'ExternalLink'
      },
      {
        href: 'mailto:gkadirgil@yahoo.com',
        text: 'gkadirgil@yahoo.com',
        icon: 'Email'
      },
      {
        href: 'https://github.com/gkadirgil',
        text: 'github/gkadirgil',
        icon: 'Github'
      },
      {
        href: 'https://www.linkedin.com/in/gokhangulsen/',
        text: 'linkedin.com/in/gokhangulsen/',
        icon: 'LinkedIn'
      }
    ]
  }

  const information = [
    { label: 'Location', value: 'Kars, Türkiye' },
    { label: 'Experience', value: '>5 years' },
    { label: 'Availability', value: 'In 1 month' },
    { label: 'Remote', value: 'Yes' },
    { label: 'Relocation', value: 'No' }
  ]

  const experiences = [
    {
      title: 'Fullstack Developer',
      type: 'Full-time',
      company: 'Berkut Technology',
      companyUrl: 'https://berkut.tech/',
      location: 'İstanbul, Türkiye',
      period: 'Sep 2023 - Present',
      logo: '/img/berkut_teknoloji_logo.jpeg',
      logo2: '/img/d-teknoloji-logo.jpeg',
      description: 'As an outsource software developer for Volkswagen at Doğuş Technology, I specialize in the development, management, and optimization of REST API projects. My role within the Interactive and Web Projects team involves a diverse range of responsibilities and contributions.',
      projects: [
        'Develop and support Vue.js front-end applications with TypeScript and .NET back-end for various web applications',
        'Design, maintain, and optimize CI/CD pipelines using Azure DevOps for automated deployments and continuous integration',
        'Manage and support Microsoft SQL Server (MSSQL) and PostgreSQL databases, ensuring high availability and performance optimization',
        'Implement real-time messaging notifications using SignalR and utilize Redis, and Hangfire for enhanced application performance and scalability',
        'Adhere to SonarQube standards, engage in code reviews, and write comprehensive Unit Tests using xUnit to ensure code quality and robustness',
        'Work closely with DevOps, networking, and database management teams to ensure cohesive system integration'
      ],
      technologies: [     
        '.NET Core',
        'API',
        'MVC',
        'EF Core',
        'CQRS',
        'MSSQL',
        'PostgreSQL',  
        'Elasticsearch',
        'MediatR',  
        'Redis',
        'SignalR',       
        'OpenTelemetry',
        'Grafana',
        'Hangfire',
        'Azure DevOps',
        'VueJS',
        'TypeScript',        
        'SonarQube',  
        'xUnit'
      ],
      additionalInfo: 'Technologies and tools I used during this role: Backend: .NET Web API, ASP.NET Core MVC, Entity Framework Core, T-SQL | Frontend: Vue.js, TypeScript | Others: JWT, SignalR, Redis, Hangfire | Cloud: Microsoft Azure (including Azure DevOps) | Database: MSSQL, PostgreSQL | Architecture: Modular Monolith, Monolith | Practices: Agile/Scrum, CI/CD, Code Reviews, Unit Testing, SonarQube'
    },
    {
      title: 'Fullstack Developer',
      type: 'Freelance',
      company: 'Hemen Başvur',
      companyUrl: 'https://test.hemenbasvur.com',
      location: 'Remote',
      period: '2025 - Present',
      logo: '/img/hemenbasvur_logo.svg',
      description: 'Developing and maintaining a comprehensive financial platform that enables users to compare and apply for various banking products including loans, credit cards, and deposits. The platform provides real-time market data, financial calculators, and a user-friendly interface for financial product comparison.',
      projects: [
        'Developed a microservices-based financial platform using .NET, Docker, and Kubernetes for scalable and containerized architecture',
        'Built credit application and calculation modules with real-time processing using RabbitMQ for message queuing and Redis for caching',
        'Developed deposit management system with interest rate comparisons and product filtering capabilities',
        'Created stock market, financial markets, and cryptocurrency management modules with real-time data tracking using Elasticsearch for search and analytics',
        'Implemented user authentication and authorization system using JWT for secure access to financial services',
        'Built responsive frontend using Nuxt.js with Server-Side Rendering (SSR) for improved performance and SEO optimization, integrated with PrimeVue, TypeScript, and Tailwind CSS',
        'Integrated OpenTelemetry for distributed tracing and monitoring, with Grafana and Kibana for observability and log analysis',
        'Managed CI/CD pipelines using Azure DevOps for automated deployments and continuous integration',
        'Stored and managed financial data using MongoDB for flexible document-based storage and Elasticsearch for advanced search capabilities'
      ],
      technologies: [
        '.NET',
        'EF Core',
        'Microservices',
        'Refit',
        'Polly',
        'Docker',
        'Kubernetes',
        'RabbitMQ',
        'Redis',
        'JWT',
        'Nuxt.js',
        'SSR',
        'SEO',
        'PrimeVue',
        'TypeScript',
        'Tailwind CSS',
        'MongoDB',
        'Elasticsearch',
        'OpenTelemetry',
        'Grafana',
        'Kibana',
        'Azure DevOps'
      ],
      additionalInfo: 'Technologies and tools I used during this role: Backend: .NET, Microservices Architecture | Frontend: Nuxt.js (SSR), PrimeVue, TypeScript, Tailwind CSS | Infrastructure: Docker, Kubernetes, Azure DevOps | Messaging & Caching: RabbitMQ, Redis | Database: MongoDB, Elasticsearch | Security: JWT | Observability: OpenTelemetry, Grafana, Kibana | SEO: Server-Side Rendering (SSR) for improved search engine optimization and performance | Features: Credit card management, credit applications and calculations, deposit management, stock market tracking, financial markets, cryptocurrency management'
    },
    {
      title: 'Software Developer',
      type: 'Full-time',
      company: 'NETAX',
      companyUrl: 'https://netaxtech.com/',
      location: 'Ankara, Türkiye',
      period: 'Dec 2022 - Sep 2023',
      logo: '/img/netax_logo.jpeg',
      description: 'Worked as a Fullstack Developer on backend systems and frontend applications, implementing modern architectural patterns and best practices.',
      projects: [
        'Added new features to the backend system which is based on Onion Architecture',
        'Developed new pages using VueJS CLI and JavaScript',
        'Implemented CQRS (Command and Query Responsibility Segregation) architectural pattern via MediatR',
        'Generated data models in Web API using Entity Framework Core Code First approach with Fluent API',
        'Implemented token-based authentication using JWT to secure Web API',
        'Implemented Custom Exception Filters to handle internal errors for Web API',
        'Tested Web API HTTP calls using Postman'
      ],
      technologies: [
        '.NET',
        'Web API',
        'EF Core',
        'CQRS',
        'MediatR',
        'Onion Architecture',
        'VueJS',
        'JavaScript',
        'JWT',
        'Fluent API',
        'Postman',
        'Bitbucket'
      ],
      additionalInfo: 'Technologies and tools I used during this role: Backend: ASP.NET Core, Web API, Entity Framework Core, Onion Architecture, CQRS, MediatR | Frontend: VueJS, JavaScript | Others: JWT, Fluent API, Custom Exception Filters | Testing: Postman | Practices: End-to-End Software Development Life Cycle, Agile Methodologies, Jira'
    },
    {
      title: 'Fullstack Developer',
      type: 'Full-time',
      company: 'Endeksa',
      companyUrl: 'https://www.endeksa.com/tr/',
      location: 'Ankara, Türkiye (Hybrid)',
      period: 'May 2020 - Dec 2022',
      logo: '/img/endeksa_logo.png',
      description: 'Worked on a comprehensive software project that organizes workflows between requesting companies, valuation companies, and valuation experts, facilitating the valuation process and recording every transaction.',
      projects: [
        'Proficient in implementation of N-Tier Architecture Data Access Layer, Business Logic Layer and User Interface',
        'Developed web pages and style sheets using JavaScript, HTML and CSS',
        'Handled file uploads with multer package. Files are uploaded to AWS S3 storage via aws-sdk',
        'Send all emails with the Sendgrid package',
        'Involved in complete Software Development Life Cycle (SDLC) including Agile Methodologies'
      ],
      technologies: [
        '.NET',
        'MVC',
        'N-Tier Architecture',
        'JavaScript',
        'Ajax',
        'jQuery',
        'HTML',
        'CSS',
        'AWS S3',
        'Sendgrid',
        'Agile',
        'Bitbucket'
      ],
      additionalInfo: 'Technologies and tools I used during this role: Architecture: N-Tier Architecture (Data Access Layer, Business Logic Layer, User Interface) | Frontend: JavaScript, HTML, CSS | Cloud: AWS S3 | Others: Multer (file uploads), Sendgrid (email), AWS SDK | Practices: Software Development Life Cycle (SDLC), Agile Methodologies'
    },    
  ]

  const educations = [
    {
      university: 'Ordu University',
      department: 'Computer Programming',
      period: '2013-2015'
    },
    {
      university: 'Anadolu University',
      department: 'Management Information Systems',
      period: '2017-2019'
    }
  ]

  return {
    profile,
    aboutMe,
    information,
    experiences,
    educations
  }
}

