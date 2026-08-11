// icon: clase de devicon (https://devicon.dev/) o null para usar badge de texto
// color: color asociado al icono / badge
export const skillCategories = [
  {
    id: 'languages',
    label: 'Lenguajes',
    skills: [
      {
        name: 'JavaScript',
        nameEn: 'JavaScript',
        icon: 'devicon-javascript-plain',
        color: '#F7DF1E',
        description: 'Lenguaje principal para desarrollo frontend y backend',
        descriptionEn: 'Main language for frontend and backend development'
      },
      {
        name: 'C#',
        nameEn: 'C#',
        icon: 'devicon-csharp-plain',
        color: '#9b4f96',
        description: 'Desarrollo de aplicaciones y servicios backend',
        descriptionEn: 'Application and backend service development'
      },
      {
        name: 'HTML5',
        nameEn: 'HTML5',
        icon: 'devicon-html5-plain',
        color: '#E34F26',
        description: 'Estructura y marcado semántico de páginas web',
        descriptionEn: 'Semantic structure and markup of web pages'
      },
      {
        name: 'CSS3',
        nameEn: 'CSS3',
        icon: 'devicon-css3-plain',
        color: '#264de4',
        description: 'Estilos, diseño visual y animaciones',
        descriptionEn: 'Styles, visual design and animations'
      },
      {
        name: 'SQL',
        nameEn: 'SQL',
        icon: null,
        color: '#336791',
        abbr: 'SQL',
        description: 'Consultas y manipulación de bases de datos relacionales',
        descriptionEn: 'Queries and manipulation of relational databases'
      }
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      {
        name: 'Vue.js',
        nameEn: 'Vue.js',
        icon: 'devicon-vuejs-plain',
        color: '#42b883',
        description: 'Framework progresivo para construcción de interfaces',
        descriptionEn: 'Progressive framework for building user interfaces'
      },
      {
        name: 'Angular',
        nameEn: 'Angular',
        icon: 'devicon-angularjs-plain',
        color: '#DD0031',
        description: 'Framework para aplicaciones web escalables',
        descriptionEn: 'Framework for scalable web applications'
      },
      {
        name: 'Responsive Design',
        nameEn: 'Responsive Design',
        icon: null,
        color: '#0ea5e9',
        abbr: 'RWD',
        description: 'Diseño adaptable a distintos tamaños de pantalla',
        descriptionEn: 'Adaptive design for different screen sizes'
      },
      {
        name: 'Componentización',
        nameEn: 'Component Architecture',
        icon: null,
        color: '#8b5cf6',
        abbr: 'CMP',
        description: 'Arquitectura de interfaces basada en componentes',
        descriptionEn: 'Component-based interface architecture'
      },
      {
        name: 'Consumo de APIs',
        nameEn: 'API Consumption',
        icon: null,
        color: '#f59e0b',
        abbr: 'API',
        description: 'Integración con servicios externos mediante REST APIs',
        descriptionEn: 'Integration with external services via REST APIs'
      }
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      {
        name: 'Node.js',
        nameEn: 'Node.js',
        icon: 'devicon-nodejs-plain',
        color: '#339933',
        description: 'Entorno de ejecución JavaScript del lado del servidor',
        descriptionEn: 'Server-side JavaScript runtime environment'
      },
      {
        name: 'Express.js',
        nameEn: 'Express.js',
        icon: 'devicon-express-original',
        color: '#888888',
        description: 'Framework minimalista para APIs con Node.js',
        descriptionEn: 'Minimalist framework for APIs with Node.js'
      },
      {
        name: 'APIs REST',
        nameEn: 'REST APIs',
        icon: null,
        color: '#10b981',
        abbr: 'REST',
        description: 'Diseño y desarrollo de APIs RESTful',
        descriptionEn: 'Design and development of RESTful APIs'
      },
      {
        name: 'CRUD',
        nameEn: 'CRUD',
        icon: null,
        color: '#6366f1',
        abbr: 'CRUD',
        description: 'Operaciones de creación, lectura, actualización y eliminación',
        descriptionEn: 'Create, read, update and delete operations'
      },
      {
        name: 'Validación',
        nameEn: 'Validation',
        icon: null,
        color: '#f97316',
        abbr: 'VAL',
        description: 'Validación y sanitización de datos de entrada',
        descriptionEn: 'Input data validation and sanitization'
      }
    ]
  },
  {
    id: 'databases',
    label: 'Bases de datos',
    skills: [
      {
        name: 'SQL',
        nameEn: 'SQL',
        icon: null,
        color: '#336791',
        abbr: 'SQL',
        description: 'Lenguaje de consultas estructuradas',
        descriptionEn: 'Structured query language'
      },
      {
        name: 'Diseño de BD',
        nameEn: 'DB Design',
        icon: null,
        color: '#ec4899',
        abbr: 'DIS',
        description: 'Modelado y diseño de esquemas de base de datos',
        descriptionEn: 'Database schema modeling and design'
      },
      {
        name: 'Relaciones',
        nameEn: 'Relationships',
        icon: null,
        color: '#14b8a6',
        abbr: 'REL',
        description: 'Manejo de relaciones entre tablas y entidades',
        descriptionEn: 'Handling relationships between tables and entities'
      },
      {
        name: 'Integración',
        nameEn: 'Integration',
        icon: null,
        color: '#a855f7',
        abbr: 'INT',
        description: 'Conexión de aplicaciones con bases de datos',
        descriptionEn: 'Connecting applications to databases'
      }
    ]
  },
  {
    id: 'tools',
    label: 'Herramientas',
    skills: [
      {
        name: 'Git',
        nameEn: 'Git',
        icon: 'devicon-git-plain',
        color: '#F05032',
        description: 'Control de versiones de código',
        descriptionEn: 'Source code version control'
      },
      {
        name: 'GitHub',
        nameEn: 'GitHub',
        icon: 'devicon-github-original',
        color: '#888888',
        description: 'Repositorios, colaboración y gestión de proyectos',
        descriptionEn: 'Repositories, collaboration and project management'
      },
      {
        name: 'JSON',
        nameEn: 'JSON',
        icon: null,
        color: '#f59e0b',
        abbr: 'JSON',
        description: 'Formato estándar de intercambio de datos',
        descriptionEn: 'Standard data interchange format'
      },
      {
        name: 'LocalStorage',
        nameEn: 'LocalStorage',
        icon: null,
        color: '#6366f1',
        abbr: 'LS',
        description: 'Persistencia de datos en el navegador',
        descriptionEn: 'Browser-side data persistence'
      },
      {
        name: 'IA como herramienta',
        nameEn: 'AI as a tool',
        icon: null,
        color: '#10b981',
        abbr: 'AI',
        description: 'Apoyo en programación, debugging e investigación',
        descriptionEn: 'Support in programming, debugging and research'
      }
    ]
  }
]
