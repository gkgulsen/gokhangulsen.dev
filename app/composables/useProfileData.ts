export const useProfileData = () => {
  const profile = {
    name: 'Gökhan Gülşen',
    title: 'Software Developer',
    location: 'Çanakkale',
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
      ],
      aiTools: [       
        { name: 'GitHub Copilot', icon: '/icons/githubcopilot.svg' },
        { name: 'Claude', icon: '/icons/claude-color.svg' },
        { name: 'Codex', icon: '/icons/codex-color.svg' }
      ]
    },
    cvUrl: '/'
  }

  const aboutMe = {
    description: 'Software developer with expertise in .NET and Vue.js. Focused on building scalable REST APIs, microservices, and database-driven applications. Experienced in CI/CD, Docker, RabbitMQ, Redis, and AI-assisted development workflows using tools such as ChatGPT, GitHub Copilot, Cursor, and Codex.',
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
    { label: 'Location', value: 'Çanakkale, Türkiye' },
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
        'Apply AI-assisted development practices using ChatGPT, GitHub Copilot, Cursor, and Codex to speed up implementation, refactoring, documentation, and technical problem solving',
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
        'ChatGPT',
        'GitHub Copilot',
        'Cursor',
        'Codex',
        'SonarQube',  
        'xUnit'
      ],
      additionalInfo: 'Technologies and tools I used during this role: Backend: .NET Web API, ASP.NET Core MVC, Entity Framework Core, T-SQL | Frontend: Vue.js, TypeScript | Others: JWT, SignalR, Redis, Hangfire | Cloud: Microsoft Azure (including Azure DevOps) | Database: MSSQL, PostgreSQL | Architecture: Modular Monolith, Monolith | AI-assisted development: ChatGPT, GitHub Copilot, Cursor, Codex | Practices: Agile/Scrum, CI/CD, Code Reviews, Unit Testing, SonarQube'
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

