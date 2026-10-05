export const projects = [
  {
    id: "inventory-beauty",
    categories: ["Web App"],
    info: {
      type: { es: "Aplicacion Web", en: "Web Application" },
      sector: { es: "Industria de belleza y cosmeticos", en: "Beauty & Cosmetics Industry" },
      role: { es: "Desarrollador Junior", en: "Junior Developer" },
      team: { es: "2 desarrolladores", en: "2 developers" },
      duration: { es: "6 meses (entregado en 5)", en: "6 months (delivered in 5)" },
      techStack: "Laravel (PHP), MySQL",
    },
    title: {
      es: "Sistema de Gestion de Inventario Multi-Sucursal",
      en: "Multi-Branch Inventory Management System",
    },
    shortDescription: {
      es: "Sistema web centralizado para administrar inventario de productos en multiples sucursales del sector belleza.",
      en: "Centralized web system to manage product inventory across multiple branches in the beauty sector.",
    },
    context: {
      es: "Empresa del sector de belleza con multiples sucursales que necesitaba un sistema centralizado para administrar el inventario de productos en cada una de sus ubicaciones. El negocio no tenia visibilidad en tiempo real del stock disponible por sucursal, lo que generaba problemas de desabasto, exceso de inventario y perdida de control en las operaciones diarias.",
      en: "A multi-branch beauty company needed a centralized system to manage product inventory across all locations. The business lacked real-time visibility into stock levels per branch, leading to stockouts, excess inventory, and loss of control over daily operations.",
    },
    problem: {
      es: [
        "No existia un sistema unificado para gestionar el inventario entre sucursales.",
        "El registro de entradas y salidas de productos se hacia de forma manual o con herramientas dispersas.",
        "No habia visibilidad en tiempo real del stock disponible por ubicacion.",
        "El proyecto habia sido iniciado previamente por otro equipo, pero fue abandonado sin documentacion, con codigo desorganizado y sin estandares de desarrollo.",
      ],
      en: [
        "No unified system existed to manage inventory across branches.",
        "Product entries and exits were recorded manually or with scattered tools.",
        "There was no real-time visibility of available stock per location.",
        "The project had been previously started by another team but was abandoned with no documentation, disorganized code, and no development standards.",
      ],
    },
    solution: {
      es: [
        "Catalogo de productos con categorias y control de stock por sucursal.",
        "Registro de entradas y salidas de productos con trazabilidad completa.",
        "Dashboard por sucursal para visualizar en tiempo real el inventario disponible.",
        "Alertas de stock bajo para prevenir desabasto en puntos de venta.",
        "Reportes de movimientos para facilitar la toma de decisiones del negocio.",
      ],
      en: [
        "Product catalog with categories and stock control per branch.",
        "Product entry and exit tracking with full traceability.",
        "Per-branch dashboard for real-time inventory visibility.",
        "Low-stock alerts to prevent shortages at points of sale.",
        "Movement reports to support business decision-making.",
      ],
    },
    challenge: {
      es: "El mayor reto no fue construir la funcionalidad, sino heredar un proyecto a medio desarrollar sin ningun tipo de documentacion. El codigo existente carecia de estandares, las convenciones de nombres eran inconsistentes y no habia separacion clara de responsabilidades. Tras evaluar el estado del codigo, se tomo la decision de reestructurar el proyecto desde la base, conservando unicamente la logica de negocio validada, y reescribiendo la arquitectura siguiendo las convenciones de Laravel para garantizar mantenibilidad y escalabilidad.",
      en: "The biggest challenge was not building the features but inheriting a half-built project with no documentation whatsoever. The existing code lacked standards, naming conventions were inconsistent, and there was no clear separation of concerns. After evaluating the codebase, the decision was made to restructure the project from the ground up, keeping only the validated business logic and rewriting the architecture following Laravel conventions to ensure maintainability and scalability.",
    },
    results: {
      es: [
        "Sistema entregado un mes antes del plazo establecido (5 meses vs. 6 meses planificados).",
        "Control de inventario centralizado para todas las sucursales en una sola plataforma.",
        "Eliminacion del registro manual de productos, reduciendo errores operativos.",
        "Codigo reestructurado con arquitectura limpia, facilitando futuras iteraciones y mantenimiento.",
      ],
      en: [
        "System delivered one month ahead of schedule (5 months vs. 6 months planned).",
        "Centralized inventory control for all branches in a single platform.",
        "Elimination of manual product tracking, reducing operational errors.",
        "Codebase restructured with clean architecture, enabling future iterations and maintenance.",
      ],
    },
    technologies: ["Laravel", "PHP", "MySQL", "Blade Templates", "HTML5", "CSS"],
  },
  {
    id: "spa-cryotherapy",
    categories: ["Web App"],
    info: {
      type: { es: "Paginas web informativas", en: "Informational Websites" },
      sector: { es: "Salud, bienestar y crioterapia", en: "Health, Wellness & Cryotherapy" },
      role: { es: "Desarrollador Junior / Diseñador UX/UI", en: "Junior Developer / UX/UI Designer" },
      team: { es: "1 persona (proyecto individual)", en: "1 person (solo project)" },
      duration: { es: "6 meses", en: "6 months" },
      techStack: "HTML5, CSS, JavaScript",
    },
    title: {
      es: "Sitios Web Informativos para Spa de Crioterapia",
      en: "Informational Websites for Cryotherapy Spa",
    },
    shortDescription: {
      es: "Diseño y desarrollo integral de sitios web para un spa especializado en crioterapia y bienestar, sin equipo de diseño.",
      en: "End-to-end design and development of websites for a spa specializing in cryotherapy and wellness, with no design team.",
    },
    context: {
      es: "Un spa especializado en tratamientos de crioterapia y bienestar no tenia presencia digital. Sin un sitio web, sus servicios dependian exclusivamente del marketing de boca en boca y publicidad tradicional, lo que limitaba su alcance a nuevos clientes en un mercado cada vez mas digital.",
      en: "A spa specializing in cryotherapy and wellness treatments had no digital presence. Without a website, their services relied solely on word-of-mouth marketing and traditional advertising, limiting their reach to new clients in an increasingly digital market.",
    },
    problem: {
      es: [
        "La empresa no contaba con ningun sitio web ni presencia digital estructurada.",
        "Los clientes potenciales no tenian forma de consultar servicios, ubicacion o informacion de contacto en linea.",
        "No existia equipo de diseño ni lineamientos de marca para guiar la creacion del sitio.",
        "La empresa necesitaba posicionarse rapidamente en el mercado digital para competir con otros negocios del sector.",
      ],
      en: [
        "The company had no website or structured digital presence.",
        "Potential clients had no way to look up services, location, or contact information online.",
        "There was no design team or brand guidelines to guide the site creation.",
        "The company needed to establish its digital market position quickly to compete with other businesses in the sector.",
      ],
    },
    solution: {
      es: [
        "Diseño UX/UI desde cero: investigacion del sector de crioterapia y bienestar para crear una identidad visual alineada con la imagen del spa.",
        "Paginas informativas con presentacion clara de servicios, tratamientos disponibles, beneficios y precios.",
        "Seccion de contacto y ubicacion para facilitar la conversion de visitantes en clientes.",
        "Diseño responsive optimizado para dispositivos moviles.",
        "Optimizacion SEO basica para mejorar el posicionamiento en motores de busqueda.",
      ],
      en: [
        "UX/UI design from scratch: research into the cryotherapy and wellness sector to create a visual identity aligned with the spa's image.",
        "Informational pages with clear presentation of services, available treatments, benefits, and pricing.",
        "Contact and location section to facilitate visitor-to-client conversion.",
        "Responsive design optimized for mobile devices.",
        "Basic SEO optimization to improve search engine ranking.",
      ],
    },
    challenge: {
      es: "El principal desafio fue asumir un rol dual como desarrollador y diseñador UX/UI. Sin un equipo de diseño ni lineamientos de marca, tuve que investigar la estetica del sector de bienestar, definir paleta de colores, tipografia, estructura de navegacion y flujo de usuario. Esto requirio salir de mi perfil estrictamente tecnico y tomar decisiones de diseño centradas en la experiencia del usuario final.",
      en: "The main challenge was taking on a dual role as developer and UX/UI designer. Without a design team or brand guidelines, I had to research the aesthetics of the wellness sector, define the color palette, typography, navigation structure, and user flow. This required stepping outside my strictly technical profile and making design decisions centered on the end-user experience.",
    },
    results: {
      es: [
        "Sitio web entregado en tiempo reducido, acelerando la entrada de la empresa al mercado digital.",
        "Primera presencia online de la empresa, permitiendoles ser encontrados a traves de buscadores.",
        "Diseño completo realizado sin dependencia de equipo de diseño externo.",
        "Sitio responsive funcional en todos los dispositivos.",
      ],
      en: [
        "Website delivered in reduced time, accelerating the company's entry into the digital market.",
        "First online presence for the company, enabling discoverability through search engines.",
        "Complete design delivered without reliance on an external design team.",
        "Responsive site functional across all devices.",
      ],
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
  },
  {
    id: "mobile-game-unity",
    categories: ["Game Dev", "Mobile"],
    info: {
      type: { es: "Videojuego mobile", en: "Mobile Video Game" },
      sector: { es: "Entretenimiento / Gaming", en: "Entertainment / Gaming" },
      role: { es: "Desarrollador Junior", en: "Junior Developer" },
      team: { es: "8 personas (3 desarrolladores, 5 arte/diseño/QA)", en: "8 people (3 developers, 5 art/design/QA)" },
      duration: { es: "1 año", en: "1 year" },
      techStack: "Unity, C#",
    },
    title: {
      es: "Desarrollo de Videojuego Mobile con Unity",
      en: "Mobile Video Game Development with Unity",
    },
    shortDescription: {
      es: "Desarrollo de un videojuego mobile con Unity y C# como parte de un equipo multidisciplinario de 8 personas.",
      en: "Mobile video game development with Unity and C# as part of a multidisciplinary team of 8 people.",
    },
    context: {
      es: "Una empresa buscaba incursionar en la industria de videojuegos mobile, un mercado en constante crecimiento. El objetivo era desarrollar un primer titulo que sirviera como carta de presentacion en el sector y validara la capacidad del equipo para producir juegos de calidad.",
      en: "A company sought to break into the mobile gaming industry, a constantly growing market. The goal was to develop a first title that would serve as a calling card in the sector and validate the team's ability to produce quality games.",
    },
    problem: {
      es: [
        "La empresa no tenia experiencia previa en desarrollo de videojuegos.",
        "El equipo de desarrollo no contaba con conocimientos en Unity ni en las particularidades del desarrollo de juegos (game loop, fisicas, rendering, optimizacion mobile).",
        "Se necesitaba entregar un producto funcional que demostrara viabilidad tecnica y comercial en el sector gaming.",
      ],
      en: [
        "The company had no prior experience in video game development.",
        "The development team had no knowledge of Unity or the specifics of game development (game loop, physics, rendering, mobile optimization).",
        "A functional product was needed to demonstrate technical and commercial viability in the gaming sector.",
      ],
    },
    solution: {
      es: [
        "Programacion de mecanicas de juego utilizando Unity y C#.",
        "Optimizacion para dispositivos moviles, gestionando rendimiento, memoria y compatibilidad con diferentes resoluciones de pantalla.",
        "Integracion con el equipo de arte y diseño, implementando assets visuales y animaciones dentro del motor de juego.",
        "Testing y debugging de gameplay, asegurando una experiencia fluida en dispositivos Android e iOS.",
      ],
      en: [
        "Game mechanics programming using Unity and C#.",
        "Mobile device optimization, managing performance, memory, and compatibility across different screen resolutions.",
        "Integration with the art and design team, implementing visual assets and animations within the game engine.",
        "Gameplay testing and debugging, ensuring a smooth experience on Android and iOS devices.",
      ],
    },
    challenge: {
      es: "El mayor desafio fue que ninguno de los desarrolladores tenia experiencia previa en desarrollo de videojuegos. La curva de aprendizaje fue significativa: paradigmas como el game loop, sistemas de fisicas, manejo de escenas y optimizacion de rendering eran completamente nuevos para el equipo. Para superar esta barrera, se realizo una capacitacion presencial impartida por especialistas de Unity, lo que permitio adquirir las bases necesarias para ejecutar el proyecto de forma profesional y dentro de los plazos establecidos.",
      en: "The biggest challenge was that none of the developers had prior experience in game development. The learning curve was steep: paradigms like the game loop, physics systems, scene management, and rendering optimization were completely new to the team. To overcome this barrier, in-person training was conducted by Unity specialists, enabling the team to acquire the fundamentals needed to execute the project professionally and within the established deadlines.",
    },
    results: {
      es: [
        "Primera version funcional entregada en 6 meses, la mitad del plazo total del proyecto.",
        "Los 6 meses restantes se dedicaron a refinamiento de mecanicas, optimizacion de rendimiento y pulido general.",
        "El equipo de desarrollo adquirio competencias solidas en Unity y C# aplicadas a videojuegos.",
        "Prototipo funcional completado que demostro la viabilidad tecnica del equipo en la industria gaming.",
      ],
      en: [
        "First functional version delivered in 6 months, half of the total project timeline.",
        "The remaining 6 months were dedicated to mechanic refinement, performance optimization, and general polish.",
        "The development team acquired solid competencies in Unity and C# applied to video games.",
        "Functional prototype completed that demonstrated the team's technical viability in the gaming industry.",
      ],
    },
    technologies: ["Unity", "C#", "Mobile Development", "Android", "iOS", "Game Design"],
  },
  {
    id: "ecommerce-electronics",
    categories: ["E-Commerce", "Web App"],
    info: {
      type: { es: "Tienda en linea (E-Commerce)", en: "Online Store (E-Commerce)" },
      sector: { es: "Retail / Venta de tecnologia y electronica", en: "Retail / Technology & Electronics Sales" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      team: { es: "1 persona (proyecto individual)", en: "1 person (solo project)" },
      duration: { es: "2 años", en: "2 years" },
      techStack: "WordPress, WooCommerce, PHP, MySQL, Payment Gateways",
    },
    title: {
      es: "E-Commerce de Productos Electronicos con Integracion de Pagos",
      en: "Electronics E-Commerce with Payment Gateway Integration",
    },
    shortDescription: {
      es: "Tienda en linea completa con integracion de multiples pasarelas de pago y promociones bancarias, mantenida durante 2 años.",
      en: "Complete online store with multiple payment gateway integrations and bank promotions, maintained for 2 years.",
    },
    context: {
      es: "Una empresa dedicada a la venta de productos electronicos (celulares, pantallas, monitores, soportes y tablets) buscaba expandir su canal de ventas al mercado digital. Necesitaba una tienda en linea funcional que no solo exhibiera su catalogo, sino que permitiera transacciones seguras con multiples formas de pago, incluyendo promociones bancarias como meses sin intereses.",
      en: "A company selling electronic products (phones, screens, monitors, mounts, and tablets) sought to expand its sales channel to the digital market. They needed a functional online store that not only showcased their catalog but also enabled secure transactions with multiple payment methods, including bank promotions like interest-free installments.",
    },
    problem: {
      es: [
        "La empresa no contaba con un canal de venta digital, limitando su alcance comercial.",
        "Se requeria integracion con terminales de pago y multiples instituciones bancarias para ofrecer promociones.",
        "Las promociones bancarias cambiaban con frecuencia, exigiendo actualizaciones rapidas y constantes de la plataforma.",
        "No existia experiencia previa en el equipo con WordPress ni con integracion de pasarelas de pago.",
      ],
      en: [
        "The company lacked a digital sales channel, limiting its commercial reach.",
        "Integration with payment terminals and multiple banking institutions was needed to offer promotions.",
        "Bank promotions changed frequently, requiring fast and constant platform updates.",
        "There was no prior experience on the team with WordPress or payment gateway integration.",
      ],
    },
    solution: {
      es: [
        "Tienda en linea completa con catalogo de productos organizado por categorias.",
        "Integracion de pasarelas de pago con terminales bancarias, habilitando pagos con tarjeta y promociones por institucion bancaria.",
        "Sistema de promociones dinamico que permitia activar y desactivar ofertas bancarias de forma agil.",
        "Multiples iteraciones de la plataforma a lo largo de 2 años, adaptandose a nuevas promociones y necesidades del negocio.",
        "Gestion completa del sitio: desde el diseño del storefront hasta la configuracion del servidor y la base de datos.",
      ],
      en: [
        "Complete online store with product catalog organized by categories.",
        "Payment gateway integration with banking terminals, enabling card payments and bank-specific promotions.",
        "Dynamic promotions system allowing agile activation and deactivation of bank offers.",
        "Multiple platform iterations over 2 years, adapting to new promotions and business needs.",
        "Complete site management: from storefront design to server and database configuration.",
      ],
    },
    challenge: {
      es: "Hubo dos desafios principales. Primero, aprender WordPress desde cero y adaptarlo para un caso de uso de e-commerce complejo que iba mas alla de una tienda basica. Segundo, la integracion de terminales de pago resulto ser el cuello de botella mas critico: los proveedores de las terminales tenian tiempos de respuesta lentos y documentacion limitada. Ante esta situacion, tuve que investigar e implementar las integraciones por cuenta propia, basandome en logica, pruebas y documentacion tecnica general, logrando completar las integraciones en menor tiempo del que los propios proveedores estimaban.",
      en: "There were two main challenges. First, learning WordPress from scratch and adapting it for a complex e-commerce use case that went beyond a basic store. Second, payment terminal integration turned out to be the most critical bottleneck: terminal providers had slow response times and limited documentation. Faced with this situation, I had to research and implement the integrations on my own, relying on logic, testing, and general technical documentation, completing the integrations faster than the providers themselves had estimated.",
    },
    results: {
      es: [
        "Plataforma de e-commerce operativa durante 2 años con actualizaciones continuas.",
        "Integracion exitosa de multiples terminales de pago y promociones bancarias.",
        "Reduccion de tiempos de integracion de pagos al resolver implementaciones de forma autonoma.",
        "Habilitacion de un nuevo canal de ventas digital para la empresa.",
        "Multiples versiones desplegadas con agilidad para responder a promociones bancarias con plazos cortos.",
      ],
      en: [
        "E-commerce platform operational for 2 years with continuous updates.",
        "Successful integration of multiple payment terminals and bank promotions.",
        "Reduced payment integration timelines by resolving implementations independently.",
        "Enabled a new digital sales channel for the company.",
        "Multiple versions deployed quickly to meet tight bank promotion deadlines.",
      ],
    },
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Payment Gateways", "HTML5", "CSS3", "JavaScript"],
  },
  {
    id: "interactive-voice-catalog",
    categories: ["Digital Signage", "IoT"],
    info: {
      type: { es: "Aplicacion web interactiva con interfaz de voz", en: "Interactive Web App with Voice Interface" },
      sector: { es: "Retail / Industria de alimentos y bebidas", en: "Retail / Food & Beverage Industry" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      team: { es: "1 persona (proyecto individual)", en: "1 person (solo project)" },
      duration: { es: "3 meses", en: "3 months" },
      techStack: "HTML5, CSS3, JavaScript, jQuery, Web Speech API",
    },
    title: {
      es: "Catalogo Interactivo con Control por Voz para Kioskos Digitales",
      en: "Interactive Voice-Controlled Catalog for Digital Kiosks",
    },
    shortDescription: {
      es: "Catalogo interactivo con interfaz de voz bidireccional para kioskos en tiendas de cafe, integrado en plataformas de señalizacion digital.",
      en: "Interactive catalog with bidirectional voice interface for in-store coffee kiosks, integrated into digital signage platforms.",
    },
    context: {
      es: "Una empresa del sector de venta de productos tipo cafe buscaba modernizar la experiencia de compra en sus puntos de venta fisicos. La vision era instalar kioskos digitales interactivos donde los clientes pudieran explorar el catalogo de productos y realizar pedidos utilizando comandos de voz, eliminando la necesidad de interaccion tactil y agilizando la operacion.",
      en: "A company in the coffee retail sector sought to modernize the shopping experience at their physical points of sale. The vision was to install interactive digital kiosks where customers could browse the product catalog and place orders using voice commands, eliminating the need for touch interaction and streamlining operations.",
    },
    problem: {
      es: [
        "El proceso de pedidos en punto de venta era lento y dependia completamente de atencion humana.",
        "No existia una herramienta digital en tienda que permitiera a los clientes explorar el catalogo de forma autonoma.",
        "Se buscaba una experiencia innovadora con interaccion por voz bidireccional.",
        "La solucion debia ejecutarse dentro de plataformas de señalizacion digital, que imponen restricciones tecnicas significativas.",
      ],
      en: [
        "The in-store ordering process was slow and entirely dependent on human assistance.",
        "There was no in-store digital tool allowing customers to browse the catalog autonomously.",
        "An innovative experience with bidirectional voice interaction was desired.",
        "The solution had to run within digital signage platforms, which impose significant technical restrictions.",
      ],
    },
    solution: {
      es: [
        "Catalogo visual de productos con categorias, descripciones, imagenes y precios optimizados para pantallas de señalizacion digital.",
        "Reconocimiento de voz que permitia al cliente navegar el catalogo y solicitar pedidos mediante comandos hablados.",
        "Respuestas por voz del sistema que guiaban al usuario, leian informacion de productos y confirmaban pedidos.",
        "Interfaz adaptada para kioskos con diseño visual pensado para pantallas grandes y uso sin teclado ni mouse.",
        "Integracion con base de datos para gestion de catalogo y registro de pedidos.",
      ],
      en: [
        "Visual product catalog with categories, descriptions, images, and pricing optimized for digital signage screens.",
        "Voice recognition enabling customers to browse the catalog and place orders via spoken commands.",
        "System voice responses that guided the user, read product information, and confirmed orders.",
        "Kiosk-adapted interface with visual design for large screens and keyboard/mouse-free usage.",
        "Database integration for catalog management and order tracking.",
      ],
    },
    challenge: {
      es: "El desafio principal fue trabajar dentro de las limitaciones de las plataformas de señalizacion digital. Estas plataformas restringen el acceso a APIs del navegador, limitan la ejecucion de JavaScript avanzado y bloquean funcionalidades que en un entorno web estandar funcionarian sin problema. La integracion de reconocimiento y sintesis de voz dentro de estas restricciones requirio multiples iteraciones, pruebas y soluciones creativas. Se lograron sacar varias versiones funcionales como prototipo, demostrando la viabilidad tecnica del concepto a pesar de las limitaciones de la plataforma.",
      en: "The main challenge was working within the limitations of digital signage platforms. These platforms restrict access to browser APIs, limit advanced JavaScript execution, and block features that would work seamlessly in a standard web environment. Integrating speech recognition and synthesis within these constraints required multiple iterations, testing, and creative workarounds. Several functional prototype versions were produced, demonstrating the technical viability of the concept despite the platform's limitations.",
    },
    results: {
      es: [
        "Prototipo funcional de catalogo interactivo con voz bidireccional operando en kioskos de tienda.",
        "Validacion del concepto de pedidos por voz en punto de venta para el sector de alimentos y bebidas.",
        "Multiples versiones iteradas en solo 3 meses, adaptandose a las restricciones de la plataforma.",
        "Experiencia de usuario innovadora que eliminaba la necesidad de interaccion tactil.",
      ],
      en: [
        "Functional prototype of an interactive catalog with bidirectional voice running on in-store kiosks.",
        "Validation of the voice ordering concept at point of sale for the food and beverage sector.",
        "Multiple versions iterated in just 3 months, adapting to platform restrictions.",
        "Innovative user experience that eliminated the need for touch interaction.",
      ],
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Web Speech API", "Digital Signage"],
  },
  {
    id: "video-call-circular-screens",
    categories: ["Mobile", "Digital Signage"],
    info: {
      type: { es: "Aplicacion mobile nativa Android", en: "Native Android Mobile Application" },
      sector: { es: "Comunicaciones corporativas / Señalizacion digital", en: "Corporate Communications / Digital Signage" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      team: { es: "1 persona (proyecto individual)", en: "1 person (solo project)" },
      duration: { es: "1 mes", en: "1 month" },
      techStack: "Kotlin, Java, Firebase, WebRTC",
    },
    title: {
      es: "Sistema de Videollamadas para Pantallas Circulares Android",
      en: "Video Call System for Circular Android Screens",
    },
    shortDescription: {
      es: "Aplicacion de videollamadas en tiempo real con WebRTC para pantallas corporativas Android con formato circular.",
      en: "Real-time video calling application with WebRTC for corporate Android screens with circular form factor.",
    },
    context: {
      es: "Un entorno corporativo necesitaba una solucion de comunicacion interna entre salas y pisos de sus oficinas. La particularidad del proyecto era que los dispositivos de comunicacion eran pantallas con sistema operativo Android de formato circular, un factor de forma no convencional que requeria una aplicacion completamente adaptada a esta geometria.",
      en: "A corporate environment needed an internal communication solution between rooms and floors of their offices. The unique aspect of this project was that the communication devices were Android screens with a circular form factor, an unconventional shape that required an application fully adapted to this geometry.",
    },
    problem: {
      es: [
        "No existia una solucion de videollamada comercial adaptada a pantallas circulares con Android.",
        "Se necesitaba comunicacion en tiempo real entre pantallas ubicadas en diferentes salas y pisos del corporativo.",
        "La experiencia debia ser similar a plataformas como Microsoft Teams pero optimizada para un dispositivo con forma no estandar.",
        "El plazo de entrega era extremadamente corto: 1 mes para una solucion funcional completa.",
      ],
      en: [
        "No commercial video calling solution existed for circular Android screens.",
        "Real-time communication was needed between screens located on different rooms and floors of the corporate building.",
        "The experience had to be similar to platforms like Microsoft Teams but optimized for a non-standard form factor device.",
        "The delivery deadline was extremely tight: 1 month for a complete functional solution.",
      ],
    },
    solution: {
      es: [
        "Videollamada en tiempo real entre dos pantallas utilizando WebRTC como protocolo de comunicacion peer-to-peer.",
        "Llamada de audio como alternativa a la videollamada.",
        "Interfaz adaptada al formato circular con layout, controles y visualizacion de video optimizados para la geometria redonda.",
        "Señalizacion y estado de conexion gestionados a traves de Firebase Realtime Database.",
        "Directorio de dispositivos para seleccionar a que pantalla/sala llamar dentro del corporativo.",
      ],
      en: [
        "Real-time video calling between two screens using WebRTC as the peer-to-peer communication protocol.",
        "Audio calling as an alternative to video calling.",
        "Interface adapted to the circular form factor with layout, controls, and video display optimized for the round geometry.",
        "Signaling and connection state managed through Firebase Realtime Database.",
        "Device directory to select which screen/room to call within the corporate building.",
      ],
    },
    challenge: {
      es: "El principal desafio fue adaptar toda la interfaz y el renderizado de video a pantallas con factor de forma circular. Los frameworks de UI de Android estan diseñados para pantallas rectangulares, por lo que los layouts estandar no aprovechaban correctamente el area visible, cortaban elementos o dejaban zonas muertas. Fue necesario desarrollar layouts personalizados que respetaran la geometria circular, posicionando los controles de llamada, la vista de video y los elementos de interfaz dentro del area util del circulo. Todo esto en un plazo de un solo mes.",
      en: "The main challenge was adapting the entire interface and video rendering for screens with a circular form factor. Android's UI frameworks are designed for rectangular screens, so standard layouts didn't properly utilize the visible area, cut off elements, or left dead zones. Custom layouts had to be developed that respected the circular geometry, positioning call controls, video views, and interface elements within the circle's usable area. All of this within a one-month deadline.",
    },
    results: {
      es: [
        "Aplicacion de videollamada funcional entregada en 1 mes, cumpliendo el plazo establecido.",
        "Comunicacion en tiempo real operativa entre pantallas en diferentes salas y pisos del corporativo.",
        "Interfaz completamente adaptada al formato circular, aprovechando el area visible sin elementos cortados.",
        "Solucion a medida que cubrio una necesidad que ningun producto comercial resolvia directamente.",
      ],
      en: [
        "Functional video calling application delivered in 1 month, meeting the established deadline.",
        "Real-time communication operational between screens on different rooms and floors of the building.",
        "Interface fully adapted to the circular format, utilizing the visible area without cropped elements.",
        "Custom solution that addressed a need no commercial product could solve directly.",
      ],
    },
    technologies: ["Kotlin", "Java", "Android", "WebRTC", "Firebase Realtime Database", "Custom UI Layouts"],
  },
  {
    id: "digital-signage-templates",
    categories: ["Digital Signage", "Web App"],
    info: {
      type: { es: "Plataforma web con integracion de API externa", en: "Web Platform with External API Integration" },
      sector: { es: "Señalizacion digital / Digital Signage", en: "Digital Signage" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      team: { es: "1 persona (proyecto individual)", en: "1 person (solo project)" },
      duration: { es: "1 mes", en: "1 month" },
      techStack: ".NET, SQL Server, API REST",
    },
    title: {
      es: "Plataforma de Gestion y Publicacion Automatica de Templates",
      en: "Template Management & Auto-Publishing Platform",
    },
    shortDescription: {
      es: "Plataforma web para gestionar y publicar automaticamente 18 templates en pantallas de señalizacion digital multi-sucursal.",
      en: "Web platform to manage and auto-publish 18 templates to multi-branch digital signage screens.",
    },
    context: {
      es: "En la industria de señalizacion digital, los clientes necesitan publicar contenido visual en pantallas distribuidas en multiples sucursales. El proceso de crear, personalizar y publicar contenido en cada pantalla de forma manual era lento, repetitivo y propenso a errores. Se requeria una plataforma centralizada que automatizara este flujo de trabajo.",
      en: "In the digital signage industry, clients need to publish visual content on screens distributed across multiple branches. The process of manually creating, customizing, and publishing content to each screen was slow, repetitive, and error-prone. A centralized platform was needed to automate this workflow.",
    },
    problem: {
      es: [
        "La creacion y publicacion de contenido en pantallas de señalizacion digital se hacia de forma manual para cada sucursal.",
        "No existia una herramienta que permitiera a los clientes personalizar templates y publicarlos automaticamente.",
        "El proceso requeria intervencion tecnica para cada publicacion, generando cuellos de botella operativos.",
        "Se necesitaba integracion directa con la plataforma de señalizacion digital para publicacion automatica.",
      ],
      en: [
        "Content creation and publishing on digital signage screens was done manually for each branch.",
        "No tool existed for clients to customize templates and publish them automatically.",
        "The process required technical intervention for each publication, creating operational bottlenecks.",
        "Direct integration with the digital signage platform was needed for automatic publishing.",
      ],
    },
    solution: {
      es: [
        "Biblioteca de 18 templates diseñados y listos para personalizar, cubriendo distintos casos de uso.",
        "Sistema de registro y personalizacion donde los clientes ingresaban sus datos y contenido.",
        "Publicacion automatica mediante integracion con la API de la plataforma de señalizacion digital.",
        "Distribucion multi-sucursal automatica a todas las pantallas del cliente.",
        "Backend robusto en .NET con SQL Server para gestion de usuarios, templates y logs de publicacion.",
      ],
      en: [
        "Library of 18 pre-designed templates ready for customization, covering different use cases.",
        "Registration and customization system where clients entered their data and content.",
        "Automatic publishing through integration with the digital signage platform API.",
        "Automatic multi-branch distribution to all client screens.",
        "Robust .NET backend with SQL Server for user, template, and publication log management.",
      ],
    },
    challenge: {
      es: "El mayor desafio fue la integracion con la API de la plataforma de señalizacion digital. La publicacion automatica requeria orquestar multiples pasos: autenticacion con la API externa, mapeo de los datos del template al formato esperado por la plataforma, envio del contenido y confirmacion de que la publicacion se reflejo correctamente en las pantallas de cada sucursal. Cualquier fallo en esta cadena dejaba pantallas sin actualizar, por lo que fue necesario implementar un flujo robusto de integracion con manejo de errores en cada paso del proceso.",
      en: "The biggest challenge was the integration with the digital signage platform API. Automatic publishing required orchestrating multiple steps: authentication with the external API, mapping template data to the format expected by the platform, sending the content, and confirming that the publication was correctly reflected on each branch's screens. Any failure in this chain left screens without updates, so a robust integration flow with error handling at each step of the process had to be implemented.",
    },
    results: {
      es: [
        "18 templates funcionales disponibles desde el lanzamiento de la plataforma.",
        "Plataforma completa entregada en 1 mes.",
        "Publicacion automatica operativa, eliminando la intervencion manual en el despliegue de contenido.",
        "Los clientes podian actualizar el contenido de todas sus sucursales desde un solo punto.",
      ],
      en: [
        "18 functional templates available from platform launch.",
        "Complete platform delivered in 1 month.",
        "Automatic publishing operational, eliminating manual intervention in content deployment.",
        "Clients could update content for all their branches from a single point.",
      ],
    },
    technologies: ["C#", ".NET", "SQL Server", "API REST", "Digital Signage", "API Integration"],
  },
  {
    id: "dynamic-pricing",
    categories: ["Digital Signage", "Web App"],
    info: {
      type: { es: "Plataforma web + visualizacion en pantallas digitales", en: "Web Platform + Digital Screen Display" },
      sector: { es: "Señalizacion digital / Retail", en: "Digital Signage / Retail" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      team: { es: "1 persona (proyecto individual)", en: "1 person (solo project)" },
      duration: { es: "1 mes", en: "1 month" },
      techStack: ".NET, PostgreSQL, HTML5, CSS3, JavaScript",
    },
    title: {
      es: "Plataforma de Precios Dinamicos para Señalizacion Digital",
      en: "Dynamic Pricing Platform for Digital Signage",
    },
    shortDescription: {
      es: "Plataforma para gestionar precios de forma individual o masiva por sucursal, con visualizacion en tiempo real en pantallas digitales.",
      en: "Platform to manage prices individually or in bulk per branch, with real-time display on digital screens.",
    },
    context: {
      es: "Clientes del sector retail con multiples sucursales necesitaban actualizar los precios de sus productos en las pantallas de señalizacion digital de forma rapida y centralizada. Los precios varian por sucursal, por temporada y por promocion, y el proceso de actualizacion debia ser agil para responder a cambios del mercado en tiempo real.",
      en: "Retail clients with multiple branches needed to update product prices on their digital signage screens quickly and centrally. Prices vary by branch, season, and promotion, and the update process needed to be agile to respond to market changes in real time.",
    },
    problem: {
      es: [
        "Los precios de productos cambiaban con frecuencia y variaban entre sucursales, pero no existia una forma centralizada de gestionarlos.",
        "La actualizacion de precios en pantallas de señalizacion digital requeria intervencion manual.",
        "Se necesitaba la capacidad de modificar precios de forma individual o masiva.",
        "La plataforma base ya existia pero le faltaban modulos criticos.",
      ],
      en: [
        "Product prices changed frequently and varied across branches, but no centralized management solution existed.",
        "Updating prices on digital signage screens required manual intervention.",
        "The ability to modify prices individually or in bulk was needed.",
        "The base platform already existed but was missing critical modules.",
      ],
    },
    solution: {
      es: [
        "Consola de administracion de precios en .NET donde los clientes podian gestionar todos sus productos organizados por sucursal.",
        "Actualizacion individual y masiva de precios.",
        "Visualizacion en pantallas digitales desarrollada en HTML5, CSS3 y JavaScript, con diseños optimizados para señalizacion digital.",
        "Sincronizacion por sucursal para que cada ubicacion mostrara unicamente sus propios precios.",
        "Base de datos en PostgreSQL para gestion eficiente de catalogos, precios por sucursal y historico de cambios.",
      ],
      en: [
        "Price administration console in .NET where clients could manage all products organized by branch.",
        "Individual and bulk price updates.",
        "Digital screen display developed in HTML5, CSS3, and JavaScript, with designs optimized for digital signage.",
        "Per-branch synchronization so each location displayed only its own prices.",
        "PostgreSQL database for efficient catalog management, per-branch pricing, and change history.",
      ],
    },
    challenge: {
      es: "El principal desafio fue gestionar dos frentes de desarrollo en paralelo con tiempos de prueba muy ajustados. Por un lado, la consola de administracion en .NET con toda la logica de negocio. Por otro, los templates de visualizacion en HTML5/CSS/JavaScript que se renderizaban en las pantallas fisicas. Cada cambio en la consola debia reflejarse correctamente en las pantallas, lo que requeria probar la cadena completa en cada iteracion. Coordinar las pruebas de ambos sistemas dentro del plazo de un mes fue el reto mas exigente.",
      en: "The main challenge was managing two development fronts in parallel with very tight testing timelines. On one hand, the .NET administration console with all the business logic. On the other, the HTML5/CSS/JavaScript display templates rendered on physical screens. Every console change had to be correctly reflected on the screens, requiring full-chain testing on each iteration. Coordinating tests for both systems within the one-month deadline was the most demanding challenge.",
    },
    results: {
      es: [
        "Modulos faltantes integrados y plataforma completa entregada en 1 mes.",
        "Los clientes podian actualizar precios de forma individual o masiva desde una sola consola.",
        "Precios reflejados en pantallas de señalizacion digital por sucursal de forma automatica.",
        "Eliminacion del riesgo de mostrar precios desactualizados o incorrectos en puntos de venta.",
      ],
      en: [
        "Missing modules integrated and complete platform delivered in 1 month.",
        "Clients could update prices individually or in bulk from a single console.",
        "Prices automatically reflected on digital signage screens per branch.",
        "Eliminated the risk of displaying outdated or incorrect prices at points of sale.",
      ],
    },
    technologies: ["C#", ".NET", "PostgreSQL", "HTML5", "CSS3", "JavaScript", "Digital Signage"],
  },
  {
    id: "digital-price-tags",
    categories: ["IoT", "Digital Signage"],
    info: {
      type: { es: "Sistema IoT con backend e integracion de hardware", en: "IoT System with Backend & Hardware Integration" },
      sector: { es: "Farmaceutico / Retail", en: "Pharmaceutical / Retail" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      team: { es: "2 personas", en: "2 people" },
      duration: { es: "1 mes", en: "1 month" },
      techStack: ".NET, SQL Server, API REST, ESL, IoT Router",
    },
    title: {
      es: "Sistema de Etiquetas Digitales de Precios para Farmacias",
      en: "Digital Price Tag System for Pharmacies",
    },
    shortDescription: {
      es: "Backend para sincronizar etiquetas electronicas de precios (ESL) en farmacias, integrando software con hardware IoT.",
      en: "Backend to synchronize electronic shelf labels (ESL) in pharmacies, integrating software with IoT hardware.",
    },
    context: {
      es: "Una cadena farmaceutica gestionaba los precios de sus productos mediante etiquetas de papel impresas. Con miles de productos en anaquel y precios que cambian con frecuencia, el proceso manual era lento, costoso y generaba errores constantes: precios desactualizados, etiquetas faltantes o inconsistencias entre el sistema de punto de venta y lo que el cliente veia en el anaquel.",
      en: "A pharmaceutical chain managed product prices using printed paper labels. With thousands of products on shelves and frequently changing prices, the manual process was slow, costly, and generated constant errors: outdated prices, missing labels, or inconsistencies between the point-of-sale system and what customers saw on the shelf.",
    },
    problem: {
      es: [
        "Los cambios de precio requerian imprimir y reemplazar etiquetas de papel de forma manual, producto por producto.",
        "Con un alto volumen de productos, el proceso de actualizacion era lento y propenso a errores humanos.",
        "Existia riesgo constante de discrepancia entre el precio en el sistema y el precio visible en anaquel.",
        "Se necesitaba una solucion que actualizara los precios de forma automatica, simultanea y sin intervencion fisica.",
      ],
      en: [
        "Price changes required manually printing and replacing paper labels product by product.",
        "With a high volume of products, the update process was slow and prone to human error.",
        "There was constant risk of discrepancy between the system price and the price visible on the shelf.",
        "A solution was needed that could update prices automatically, simultaneously, and without physical intervention.",
      ],
    },
    solution: {
      es: [
        "Integracion con API de precios proporcionada por el cliente para consultar el catalogo y precios actualizados en tiempo real.",
        "Backend en .NET que procesaba los precios recibidos y generaba los comandos de actualizacion para las etiquetas.",
        "Sincronizacion con etiquetas digitales a traves de un router IoT que distribuia la señal en la sucursal.",
        "Actualizacion masiva y simultanea de precios en todos los productos de la sucursal con un solo proceso.",
        "Base de datos para mapeo de productos, etiquetas, precios e historial de actualizaciones.",
      ],
      en: [
        "Integration with the client's pricing API to query the catalog and real-time updated prices.",
        ".NET backend that processed received prices and generated update commands for the labels.",
        "Synchronization with digital labels through an IoT router that distributed the signal within the branch.",
        "Bulk and simultaneous price updates across all products in the branch with a single process.",
        "Database for product-to-label mapping, pricing, and update history.",
      ],
    },
    challenge: {
      es: "El mayor desafio fue la sincronizacion entre el software y el hardware IoT. Las etiquetas digitales dependian de un router que distribuia la señal de actualizacion inalambricamente dentro de la sucursal. La cobertura de señal debia ser suficiente para alcanzar todas las etiquetas en cada pasillo y anaquel. Fue necesario asegurar que la distribucion de la señal cubriera correctamente toda la sucursal, y que el proceso de sincronizacion garantizara que cada etiqueta recibiera y aplicara la actualizacion de precio correcta. Se implementaron mecanismos de verificacion para confirmar que cada actualizacion llegara exitosamente a su destino.",
      en: "The biggest challenge was the synchronization between the software and the IoT hardware. The digital labels depended on a router that wirelessly distributed the update signal within the branch. Signal coverage had to be sufficient to reach all labels on every aisle and shelf. It was necessary to ensure that the router's signal distribution correctly covered the entire branch, and that the synchronization process guaranteed each label received and applied the correct price update. Verification mechanisms were implemented to confirm each update successfully reached its destination.",
    },
    results: {
      es: [
        "Integracion exitosa completada en 1 sucursal piloto en solo 1 mes.",
        "Eliminacion del proceso manual de impresion y colocacion de etiquetas de papel.",
        "Actualizacion simultanea de precios en todos los productos del anaquel desde una sola plataforma.",
        "Reduccion del riesgo de discrepancias entre precio en sistema y precio visible al cliente.",
        "Validacion del modelo de etiquetas digitales para futura expansion a mas sucursales.",
      ],
      en: [
        "Successful integration completed in 1 pilot branch in just 1 month.",
        "Elimination of the manual process of printing and placing paper labels.",
        "Simultaneous price updates across all shelf products from a single platform.",
        "Reduced risk of discrepancies between the system price and the customer-visible price.",
        "Validation of the digital label model for future expansion to more branches.",
      ],
    },
    technologies: ["C#", ".NET", "SQL Server", "API REST", "IoT", "Electronic Shelf Labels (ESL)", "IoT Router", "Hardware Integration"],
  },
  {
    id: "virtual-avatar-generator",
    categories: ["Digital Signage", "Game Dev"],
    info: {
      type: { es: "Aplicacion interactiva con procesamiento de imagen y cloud", en: "Interactive App with Image Processing & Cloud" },
      sector: { es: "Señalizacion digital / Experiencias interactivas", en: "Digital Signage / Interactive Experiences" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      team: { es: "1 persona (proyecto individual)", en: "1 person (solo project)" },
      duration: { es: "1 mes", en: "1 month" },
      techStack: "Unity, C#, AWS S3, Avatar Generation API",
    },
    title: {
      es: "Generador de Avatares Virtuales desde Captura de Imagen",
      en: "Virtual Avatar Generator from Image Capture",
    },
    shortDescription: {
      es: "Aplicacion en Unity que genera avatares personalizados (realistas y estilizados) a partir de fotos capturadas en pantallas digitales.",
      en: "Unity application that generates personalized avatars (realistic and stylized) from photos captured on digital screens.",
    },
    context: {
      es: "Se busco crear una experiencia interactiva para pantallas digitales donde los usuarios pudieran obtener un avatar personalizado generado a partir de su propia imagen en cuestion de segundos. El objetivo era ofrecer una experiencia atractiva e innovadora que captara la atencion del publico frente a las pantallas.",
      en: "The goal was to create an interactive experience for digital screens where users could get a personalized avatar generated from their own image in a matter of seconds. The aim was to offer an engaging and innovative experience that would capture the audience's attention in front of the screens.",
    },
    problem: {
      es: [
        "Se necesitaba una experiencia interactiva que atrajera usuarios hacia las pantallas de señalizacion digital.",
        "El proceso debia ser rapido e intuitivo: el usuario se acerca, se captura su imagen y en segundos obtiene su avatar.",
        "Se requeria almacenamiento en la nube para gestionar las imagenes capturadas.",
        "No existia un flujo automatizado que conectara captura de imagen, procesamiento en la nube y generacion de avatar en un solo pipeline.",
      ],
      en: [
        "An interactive experience was needed to attract users to the digital signage screens.",
        "The process had to be fast and intuitive: the user approaches, their image is captured, and they get their avatar in seconds.",
        "Cloud storage was needed to manage the captured images.",
        "No automated flow existed connecting image capture, cloud processing, and avatar generation in a single pipeline.",
      ],
    },
    solution: {
      es: [
        "Captura de imagen en tiempo real desde la camara de la pantalla digital, activada por la presencia del usuario.",
        "Almacenamiento en AWS S3 de las imagenes capturadas.",
        "Modo realista: generacion de un avatar tridimensional con rasgos fieles a la imagen del usuario.",
        "Modo estilizado: generacion de un avatar tipo cartoon/caricatura, similar al estilo de redes sociales.",
        "Pipeline automatizado: captura, subida a S3, llamada a API de generacion, recepcion del avatar, visualizacion en pantalla.",
      ],
      en: [
        "Real-time image capture from the digital screen's camera, triggered by user presence.",
        "Captured images stored in AWS S3.",
        "Realistic mode: generation of a 3D avatar with features faithful to the user's image.",
        "Stylized mode: cartoon/caricature-style avatar generation, similar to social media avatars.",
        "Automated pipeline: capture, S3 upload, generation API call, avatar reception, on-screen display.",
      ],
    },
    challenge: {
      es: "El principal desafio fue orquestar el pipeline completo entre Unity, AWS S3 y las APIs de generacion de avatares. La aplicacion en Unity debia capturar la imagen, subirla al bucket de S3, disparar el proceso de generacion a traves de la API correspondiente, esperar la respuesta y renderizar el avatar resultante en pantalla, todo en un flujo continuo y en tiempo reducido para que la experiencia del usuario fuera inmediata. Coordinar la comunicacion asincrona entre estos servicios, manejar los tiempos de respuesta de las APIs externas y asegurar que el resultado se mostrara de forma fluida en Unity fue el reto tecnico mas complejo.",
      en: "The main challenge was orchestrating the complete pipeline between Unity, AWS S3, and the avatar generation APIs. The Unity application had to capture the image, upload it to the S3 bucket, trigger the generation process through the corresponding API, wait for the response, and render the resulting avatar on screen — all in a continuous flow and reduced time so the user experience felt immediate. Coordinating asynchronous communication between these services, handling external API response times, and ensuring the result displayed smoothly in Unity was the most complex technical challenge.",
    },
    results: {
      es: [
        "Prototipo funcional entregado en 1 mes con dos modos de generacion de avatar operativos.",
        "Pipeline completo automatizado: desde la captura de imagen hasta la visualizacion del avatar en pantalla.",
        "Integracion exitosa entre Unity, AWS S3 y APIs externas de procesamiento de imagen.",
        "Concepto validado como experiencia interactiva para señalizacion digital.",
      ],
      en: [
        "Functional prototype delivered in 1 month with two operational avatar generation modes.",
        "Fully automated pipeline: from image capture to avatar display on screen.",
        "Successful integration between Unity, AWS S3, and external image processing APIs.",
        "Concept validated as an interactive experience for digital signage.",
      ],
    },
    technologies: ["Unity", "C#", "AWS S3", "API REST", "Image Processing", "Cloud Computing", "Digital Signage"],
  },
  {
    id: "digital-signage-applets",
    categories: ["Digital Signage", "Web App"],
    info: {
      type: { es: "Applets web para plataformas de señalizacion digital", en: "Web Applets for Digital Signage Platforms" },
      sector: { es: "Señalizacion digital / Multiples industrias", en: "Digital Signage / Multiple Industries" },
      role: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
      team: { es: "1 persona (proyecto individual)", en: "1 person (solo project)" },
      duration: { es: "~3 semanas promedio por applet", en: "~3 weeks average per applet" },
      techStack: "HTML5, CSS3, JavaScript, API REST, Google Sheets API",
    },
    title: {
      es: "Desarrollo de Applets Personalizados para Señalizacion Digital",
      en: "Custom Applet Development for Digital Signage",
    },
    shortDescription: {
      es: "Serie de applets personalizados para multiples clientes, integrando APIs, Google Sheets y catalogos de productos en pantallas digitales.",
      en: "Series of custom applets for multiple clients, integrating APIs, Google Sheets, and product catalogs into digital screens.",
    },
    context: {
      es: "Multiples clientes de distintas industrias necesitaban contenido dinamico y personalizado para sus pantallas de señalizacion digital. Cada cliente tenia necesidades especificas: desde mostrar catalogos de productos actualizados en tiempo real, hasta integrar datos desde hojas de calculo de Google o consumir APIs propias. Se requeria desarrollar applets reutilizables pero personalizables para cada caso.",
      en: "Multiple clients across different industries needed dynamic and personalized content for their digital signage screens. Each client had specific needs: from displaying product catalogs updated in real time, to integrating data from Google spreadsheets or consuming their own APIs. Reusable yet customizable applets were needed for each case.",
    },
    problem: {
      es: [
        "Cada cliente tenia requerimientos unicos de contenido dinamico para sus pantallas.",
        "La informacion debia provenir de fuentes externas (APIs, Google Sheets, bases de datos propias) y actualizarse automaticamente.",
        "Los tiempos de entrega eran cortos (~3 semanas), con poco margen para pruebas.",
        "Los applets debian funcionar correctamente dentro de las restricciones de las plataformas de señalizacion digital.",
      ],
      en: [
        "Each client had unique requirements for dynamic content on their screens.",
        "Data had to come from external sources (APIs, Google Sheets, proprietary databases) and update automatically.",
        "Delivery timelines were tight (~3 weeks), with little room for testing.",
        "Applets had to function correctly within the restrictions of digital signage platforms.",
      ],
    },
    solution: {
      es: [
        "Applets de catalogo de productos que mostraban inventario actualizado en pantallas de sucursales.",
        "Applets integrados con Google Sheets que permitian a los clientes actualizar contenido sin conocimientos tecnicos.",
        "Applets con conexion a APIs externas para mostrar informacion en tiempo real.",
        "Diseño personalizado por cliente adaptando la identidad visual a la marca de cada empresa.",
        "Optimizacion para señalizacion digital asegurando rendimiento, legibilidad a distancia y compatibilidad.",
      ],
      en: [
        "Product catalog applets displaying updated inventory on branch screens.",
        "Google Sheets-integrated applets allowing clients to update content without technical knowledge.",
        "Applets connected to external APIs to display real-time information.",
        "Custom design per client, adapting the visual identity to each company's brand.",
        "Digital signage optimization ensuring performance, long-distance readability, and compatibility.",
      ],
    },
    challenge: {
      es: "El mayor desafio fue mantener la velocidad de entrega sin sacrificar calidad. Con ciclos de ~3 semanas por applet, el tiempo para diseño, desarrollo, integracion de APIs y pruebas era muy ajustado. Cada applet tenia fuentes de datos distintas, requisitos visuales unicos y debia funcionar sin fallos en las pantallas del cliente desde el primer despliegue. Fue necesario desarrollar un enfoque de trabajo eficiente que permitiera reutilizar componentes base mientras se personalizaba cada solucion.",
      en: "The biggest challenge was maintaining delivery speed without sacrificing quality. With ~3-week cycles per applet, the time for design, development, API integration, and testing was very tight. Each applet had different data sources, unique visual requirements, and had to work flawlessly on client screens from the first deployment. An efficient workflow approach was developed that allowed reusing base components while customizing each solution.",
    },
    results: {
      es: [
        "Multiples applets entregados exitosamente para distintos clientes y sectores.",
        "Todos los applets desplegados y funcionando correctamente en produccion.",
        "Los clientes podian actualizar contenido de forma autonoma (via Google Sheets o sus propios sistemas).",
        "Mejora de la experiencia visual en sucursales, contribuyendo al objetivo comercial de cada cliente.",
      ],
      en: [
        "Multiple applets successfully delivered for different clients and sectors.",
        "All applets deployed and functioning correctly in production.",
        "Clients could update content autonomously (via Google Sheets or their own systems).",
        "Improved visual experience at branch locations, contributing to each client's commercial goals.",
      ],
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "API REST", "Google Sheets API", "Digital Signage", "Responsive Design"],
  },
];

export const projectCategories = [
  { id: "all", label: { es: "Todos", en: "All" } },
  { id: "Web App", label: { es: "Web App", en: "Web App" } },
  { id: "Mobile", label: { es: "Mobile", en: "Mobile" } },
  { id: "Game Dev", label: { es: "Game Dev", en: "Game Dev" } },
  { id: "Digital Signage", label: { es: "Señalizacion Digital", en: "Digital Signage" } },
  { id: "E-Commerce", label: { es: "E-Commerce", en: "E-Commerce" } },
  { id: "IoT", label: { es: "IoT", en: "IoT" } },
];
