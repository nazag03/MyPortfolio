export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      education: 'Formación',
      skills: 'Skills',
      projects: 'Proyectos',
      services: 'Servicios',
      contact: 'Contacto',
      downloadCV: 'Descargar CV',
    },
    hero: {
      badge: 'Disponible para nuevas oportunidades',
      role: 'Técnico Universitario en Programación',
      roleSecondary: 'Desarrollador de Software Junior',
      tagline: 'Construyo soluciones digitales con código limpio y criterio técnico.',
      description: 'Técnico Universitario en Programación graduado en UTN San Francisco. Desarrollé proyectos reales para clientes, abarcando frontend, backend y bases de datos. Busco incorporarme a un equipo donde pueda aportar, crecer y seguir aprendiendo.',
      viewProjects: 'Ver proyectos',
      contact: 'Contactarme',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Desarrollador con base técnica sólida y proyectos reales',
      paragraphs: [
        'Técnico Universitario en Programación graduado en 2025 en la Universidad Tecnológica Nacional, Facultad Regional San Francisco. Además, cursé dos años de Ingeniería en Sistemas de Información, lo que me dio una base sólida en análisis, lógica y fundamentos de ingeniería de software.',
        'Desde que empecé a programar me apasionó la capacidad de construir soluciones concretas a partir de la lógica y el pensamiento estructurado. Tuve la oportunidad de desarrollar proyectos reales para distintos clientes, lo que me permitió aplicar conocimientos técnicos en contextos prácticos y aprender mucho más allá del aula.',
        'Me defino como alguien ordenado, proactivo y con capacidad de aprendizaje rápido. Busco incorporarme a un equipo de desarrollo donde pueda contribuir con responsabilidad, seguir creciendo técnicamente y trabajar en proyectos con impacto real.'
      ],
      ageLabel: 'Edad',
      ageDetail: 'años',
      ageIntro: 'Soy Nazareno Garrone, tengo {n} años.',
      highlights: [
        { label: 'Graduado', value: '2025', detail: 'UTN San Francisco' },
        { label: 'Formación', value: 'TUP', detail: 'Técnico Universitario en Programación' },
        { label: 'Proyectos', value: '8+', detail: 'Sistemas y aplicaciones reales' },
        { label: 'Stack', value: 'Full', detail: 'Frontend + Backend + BD' }
      ],
      traits: ['Aprendizaje rápido', 'Pensamiento lógico', 'Responsabilidad', 'Trabajo en equipo', 'Resolución de problemas', 'Adaptabilidad'],
      utn: 'Universidad Tecnológica Nacional',
      utnCampus: 'Facultad Regional San Francisco',
    },
    education: {
      eyebrow: 'Formación',
      title: 'Educación y formación técnica',
      subtitle: 'Mi recorrido académico en la Universidad Tecnológica Nacional.',
      items: [
        {
          id: 1,
          institution: 'Universidad Tecnológica Nacional',
          campus: 'Facultad Regional San Francisco',
          degree: 'Técnico Universitario en Programación',
          period: '2023 – 2025',
          status: 'Graduado',
          statusType: 'completed',
          description: 'Carrera de grado orientada al desarrollo de software, abarcando programación, bases de datos, desarrollo web, estructuras de datos y metodologías de trabajo. Egresé el 5 de septiembre de 2025 con un promedio general de 8,06.',
          highlights: ['Desarrollo Web', 'Bases de Datos', 'Programación Orientada a Objetos', 'Estructuras de Datos'],
          documents: [
            { label: 'Ver diploma', href: '/docs/diploma.jpg' },
            { label: 'Ver analítico', href: '/docs/analitico.pdf' }
          ]
        },
        {
          id: 2,
          institution: 'Universidad Tecnológica Nacional',
          campus: 'Facultad Regional San Francisco',
          degree: 'Ingeniería en Sistemas de Información',
          period: '2021 – 2022',
          status: '2 años cursados',
          statusType: 'partial',
          description: 'Dos años de cursado de la carrera de Ingeniería, que aportaron una base sólida en análisis matemático, álgebra, física, algoritmos y fundamentos de ingeniería de software.',
          highlights: ['Análisis Matemático', 'Algoritmos', 'Fundamentos de Ingeniería', 'Lógica']
        }
      ]
    },
    skills: {
      eyebrow: 'Tecnologías',
      title: 'Skills y herramientas',
      subtitle: 'Tecnologías con las que trabajo en el desarrollo de aplicaciones web y sistemas.',
      categories: {
        languages: 'Lenguajes',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Bases de datos',
        tools: 'Herramientas'
      }
    },
    projects: {
      eyebrow: 'Proyectos',
      title: 'Proyectos desarrollados',
      subtitle: 'Sistemas y aplicaciones web que desarrollé para distintos clientes y contextos. Hacé clic en cada proyecto para ver más detalles.',
      filters: ['Todos', 'Destacados', 'Web', 'Sistema', 'E-commerce'],
      viewProject: 'Ver proyecto',
      pendingTech: 'Tecnologías por agregar',
      pendingImage: 'Imagen próximamente',
      featured: 'Destacado',
      noProjects: 'No hay proyectos en esta categoría aún.',
      categoryLabels: { Sistema: 'Sistema', Web: 'Web', 'E-commerce': 'E-commerce' }
    },
    projectModal: {
      viewCode: 'Ver código',
      viewDemo: 'Ver demo',
      technologies: 'Tecnologías utilizadas',
      description: 'Descripción',
      problem: 'Problema',
      solution: 'Solución',
      features: 'Funcionalidades',
      participation: 'Mi participación',
      learnings: 'Qué aprendí',
      screenshots: 'Capturas de pantalla',
      pending: 'La información detallada de este proyecto será agregada próximamente.',
      pendingImage: 'Imagen del proyecto próximamente',
    },
    experience: {
      eyebrow: 'Experiencia',
      title: 'Experiencia laboral',
      subtitle: 'Proyectos freelance y trabajos desarrollados para distintos clientes.',
      current: 'Actual',
      emptyTitle: 'Experiencia en proceso',
      emptyDesc: 'He desarrollado proyectos reales para distintos clientes como trabajos freelance. Esta sección se completará con el detalle de cada experiencia próximamente.',
      previewLabel: 'Proyectos realizados para clientes',
      previewProjects: [
        'CRM para concesionaria',
        'Web para turismo Miramar de Ansenuza',
        'Web para inmobiliaria de San Francisco',
        'E-commerce Zeta Telefonía',
        'Plataforma de cursos Celeste Platini Pastelería',
        'E-commerce para tienda de ropa',
        'Sistema de reparto para Aguas Balnearia (C# / .NET)',
        'Sistema de pedidos de comidas online',
        'Sistema de gestión agrícola AgroGestión'
      ]
    },
    services: {
      eyebrow: 'Qué puedo hacer',
      title: 'Áreas de desarrollo',
      subtitle: 'Las áreas en las que tengo conocimientos y experiencia práctica como desarrollador.',
      items: [
        { id: 1, icon: 'globe', title: 'Desarrollo Web', description: 'Desarrollo de sitios y aplicaciones web modernas, responsivas y con buenas prácticas de accesibilidad y rendimiento.' },
        { id: 2, icon: 'layout', title: 'Desarrollo Frontend', description: 'Construcción de interfaces de usuario con Vue.js y Angular. Componentes reutilizables, diseño responsivo y consumo de APIs.' },
        { id: 3, icon: 'server', title: 'Desarrollo Backend', description: 'Desarrollo de APIs REST y lógica de servidor con Node.js y Express. CRUD, validación de datos e integración con bases de datos.' },
        { id: 4, icon: 'database', title: 'Bases de datos', description: 'Diseño, modelado e implementación de bases de datos relacionales con SQL. Consultas, relaciones e integración con aplicaciones.' },
        { id: 5, icon: 'code', title: 'Sistemas a medida', description: 'Desarrollo de soluciones digitales adaptadas a los requerimientos de cada proyecto o cliente. Desde la idea hasta el producto funcional.' },
      ]
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos',
      subtitle: '¿Tenés un proyecto en mente o buscás un desarrollador para tu equipo? Podés escribirme directamente o usar el formulario.',
      formTitle: 'Enviame un mensaje',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Email',
      emailPlaceholder: 'tu@email.com',
      message: 'Mensaje',
      messagePlaceholder: 'Contame en qué puedo ayudarte...',
      send: 'Enviar mensaje',
      formNote: 'El formulario abrirá Gmail con el mensaje listo para enviar.',
      availabilityTitle: 'Disponible para nuevas oportunidades',
      availabilityDesc: 'Abierto a posiciones junior, proyectos freelance y pasantías en desarrollo de software.',
      location: 'Ubicación',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      tagline: 'Desarrollador de Software Junior',
      sections: 'Secciones',
      contact: 'Contacto',
      copyright: 'Todos los derechos reservados.',
      downloadCV: 'Descargar CV',
    }
  },

  en: {
    nav: {
      about: 'About me',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },
    hero: {
      badge: 'Available for new opportunities',
      role: 'Computer Programming Technician',
      roleSecondary: 'Junior Software Developer',
      tagline: 'I build digital solutions with clean code and technical judgment.',
      description: 'Computer Programming Technician graduated from UTN San Francisco. I developed real projects for clients, covering frontend, backend and databases. Looking to join a team where I can contribute, grow and keep learning.',
      viewProjects: 'View projects',
      contact: 'Contact me',
    },
    about: {
      eyebrow: 'About me',
      title: 'Developer with a solid technical foundation and real projects',
      paragraphs: [
        "Computer Programming Technician graduated in 2025 from the National Technological University, San Francisco Regional Faculty. I also completed two years of Information Systems Engineering, which gave me a solid foundation in analysis, logic and software engineering fundamentals.",
        'Since I started programming, I became passionate about building concrete solutions from logic and structured thinking. I had the opportunity to develop real projects for different clients, which allowed me to apply technical knowledge in practical contexts and learn much more than in the classroom.',
        "I define myself as an organized, proactive person with a fast learning ability. I'm looking to join a development team where I can contribute responsibly, continue to grow technically and work on projects with real impact."
      ],
      ageLabel: 'Age',
      ageDetail: 'years old',
      ageIntro: "I'm Nazareno Garrone, {n} years old.",
      highlights: [
        { label: 'Graduated', value: '2025', detail: 'UTN San Francisco' },
        { label: 'Degree', value: 'CPT', detail: 'Computer Programming Technician' },
        { label: 'Projects', value: '8+', detail: 'Real systems and applications' },
        { label: 'Stack', value: 'Full', detail: 'Frontend + Backend + DB' }
      ],
      traits: ['Fast learner', 'Logical thinking', 'Responsibility', 'Teamwork', 'Problem solving', 'Adaptability'],
      utn: 'National Technological University',
      utnCampus: 'San Francisco Regional Faculty',
    },
    education: {
      eyebrow: 'Education',
      title: 'Education & technical training',
      subtitle: 'My academic journey at the National Technological University.',
      items: [
        {
          id: 1,
          institution: 'National Technological University',
          campus: 'San Francisco Regional Faculty',
          degree: 'Computer Programming Technician',
          period: '2023 – 2025',
          status: 'Graduated',
          statusType: 'completed',
          description: 'Undergraduate degree focused on software development, covering programming, databases, web development, data structures and work methodologies. Graduated on September 5, 2025 with an overall GPA of 8.06/10.',
          highlights: ['Web Development', 'Databases', 'Object-Oriented Programming', 'Data Structures'],
          documents: [
            { label: 'View diploma', href: '/docs/diploma.jpg' },
            { label: 'View transcript', href: '/docs/analitico.pdf' }
          ]
        },
        {
          id: 2,
          institution: 'National Technological University',
          campus: 'San Francisco Regional Faculty',
          degree: 'Information Systems Engineering',
          period: '2021 – 2022',
          status: '2 years completed',
          statusType: 'partial',
          description: 'Two years of Engineering studies that provided a solid foundation in mathematical analysis, algebra, physics, algorithms and software engineering fundamentals.',
          highlights: ['Mathematical Analysis', 'Algorithms', 'Engineering Fundamentals', 'Logic']
        }
      ]
    },
    skills: {
      eyebrow: 'Technologies',
      title: 'Skills & tools',
      subtitle: 'Technologies I work with when developing web applications and systems.',
      categories: {
        languages: 'Languages',
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases',
        tools: 'Tools'
      }
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Developed projects',
      subtitle: 'Web systems and applications I developed for different clients and contexts. Click on each project to see more details.',
      filters: ['All', 'Featured', 'Web', 'Sistema', 'E-commerce'],
      viewProject: 'View project',
      pendingTech: 'Technologies to be added',
      pendingImage: 'Image coming soon',
      featured: 'Featured',
      noProjects: 'No projects in this category yet.',
      categoryLabels: { Sistema: 'System', Web: 'Web', 'E-commerce': 'E-commerce' }
    },
    projectModal: {
      viewCode: 'View code',
      viewDemo: 'View demo',
      technologies: 'Technologies used',
      description: 'Description',
      problem: 'Problem',
      solution: 'Solution',
      features: 'Features',
      participation: 'My role',
      learnings: 'What I learned',
      screenshots: 'Screenshots',
      pending: 'Detailed information about this project will be added soon.',
      pendingImage: 'Project image coming soon',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Work experience',
      subtitle: 'Freelance projects and work developed for different clients.',
      current: 'Current',
      emptyTitle: 'Experience in progress',
      emptyDesc: 'I developed real projects for different clients as freelance work. This section will be completed with the details of each experience soon.',
      previewLabel: 'Projects built for clients',
      previewProjects: [
        'CRM for car dealership',
        'Tourism website for Miramar de Ansenuza',
        'Real estate website for San Francisco',
        'Zeta Telefonía e-commerce',
        'Celeste Platini Pastelería course platform',
        'E-commerce for clothing store',
        'Delivery system for Aguas Balnearia (C# / .NET)',
        'Online food ordering system',
        'AgroGestión agricultural management system'
      ]
    },
    services: {
      eyebrow: 'What I can do',
      title: 'Development areas',
      subtitle: 'The areas where I have knowledge and practical experience as a developer.',
      items: [
        { id: 1, icon: 'globe', title: 'Web Development', description: 'Development of modern, responsive websites and applications with good accessibility and performance practices.' },
        { id: 2, icon: 'layout', title: 'Frontend Development', description: 'Building user interfaces with Vue.js and Angular. Reusable components, responsive design and API consumption.' },
        { id: 3, icon: 'server', title: 'Backend Development', description: 'REST API development and server-side logic with Node.js and Express. CRUD, data validation and database integration.' },
        { id: 4, icon: 'database', title: 'Databases', description: 'Design, modeling and implementation of relational databases with SQL. Queries, relationships and application integration.' },
        { id: 5, icon: 'code', title: 'Custom systems', description: 'Development of digital solutions tailored to the requirements of each project or client. From idea to functional product.' },
      ]
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      subtitle: 'Do you have a project in mind or are you looking for a developer for your team? You can write to me directly or use the form.',
      formTitle: 'Send me a message',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      message: 'Message',
      messagePlaceholder: 'Tell me how I can help you...',
      send: 'Send message',
      formNote: 'The form will open Gmail with the message ready to send.',
      availabilityTitle: 'Available for new opportunities',
      availabilityDesc: 'Open to junior positions, freelance projects and internships in software development.',
      location: 'Location',
      emailLabel: 'Email',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
    },
    footer: {
      tagline: 'Junior Software Developer',
      sections: 'Sections',
      contact: 'Contact',
      copyright: 'All rights reserved.',
      downloadCV: 'Download CV',
    }
  }
}
