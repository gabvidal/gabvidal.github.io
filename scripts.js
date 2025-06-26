document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name-title");

    let index = 0;

    function typeWriter() {
        if (index < nameText.length) {
            nameElement.textContent += nameText.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});

function selectProfile(profile) {
    const profilePhoto = document.getElementById("profile-photo");
    const profileTitle = document.getElementById("profile-title");
    const trainingBox = document.getElementById("training-box");
    const experienceBox = document.getElementById("experience-box");
    const detailsSection = document.getElementById("details-section");

    const profileData = {
        frontend: {
            photo: "Fotos/Front.jpg",
            title: "Diseñador Front End",
            training: [
                { title: "Introducción a la ciencia de datos (Nivel 1)", description: "INAP - 2024" },
                { title: "Programación web full stack (Nivel 1)", description: "INAP - 2024" },
                { title: "Inglés general para desarrolladores de software A2.2", description: "CUI UBA - 2023" },
                { title: "Procesamiento de Datos con Python", description: "TICMAS - 2023" },
                { title: "Primeros pasos del desarrollo frontend", description: "TICMAS - 2022" }
            ],
            experience: [
                      {
                        title: "Desarrollador Front End – DNRPA </br> Desde 01/01/2025",
                        description: `
                    Trabajo actualmente en el equipo de desarrollo de la DNRPA, enfocado en la digitalización de procesos internos y mejora de la experiencia de usuario en el sistema de gestión de piezas reutilizables. Desarrollo interfaces modernas con React, Vite y TypeScript, validación avanzada con React Hook Form y Zod, carga y edición de archivos, generación automática de formularios PDF, y conexión con servicios API RESTful.
                    
                    Participo activamente en el diseño de componentes reutilizables, control de flujo de estados, paginación de datos y migración de formularios físicos a plataformas digitales. El proyecto cumple un rol clave en la trazabilidad y control documental de vehículos dados de baja o desarmados.`
                      },  
                {
                    title: "Proyectos Freelance y Personales",
                    description: `
                Además de mi rol actual, llevo adelante un proyecto personal con integración de Firebase (Auth y Firestore), validación de formularios, lógica de precios para sistemas de venta, previsualización y recorte de imágenes, construcción de componentes visuales reutilizables y pruebas de integración.`
                  },            
            ]
        },
        helpdesk: {
            photo: "Fotos/MDA.jpg",
            title: "Agente de Mesa de Ayuda",
            training: [
                { title: "Manejo de Herramientas de Gestión de Tickets", description: "He desarrollado habilidades en administración y uso de OsTicket a través de la experiencia práctica, gestionando consultas y solicitudes." }
            ],
            experience: [
                { title: "DNRPA - Agente de mesa de ayuda </br> 2019 - Actualidad", description: "Ingresé a la DNRPA el 18/08/2005 como pasante mientras estudiaba ingeniería en sistemas, realizando tareas de perito técnico. Mi labor consistía en verificar automóviles y maquinarias importadas, comprobando los datos declarados en la DJIM por el importador. En el año 2019 decidí unirme al área de sistemas, donde actualmente brindo soluciones y resuelvo consultas de usuarios de MiArgentina relacionadas con la cédula digital, desde el inicio de su implementación (05/06/2019). Participé en la implementación del sistema de tickets OsTicket, conectándolo con el correo electrónico de contacto, lo que me ha permitido adquirir experiencia en la administración y uso de dicho sistema. Actualmente, también atiendo consultas de los registros seccionales sobre el sistema SURA, utilizando OsTicket como herramienta de gestión. Además, a fin de mes realizo informes detallados que incluyen estadísticas, incidentes y novedades, proporcionando una visión clara y organizada del soporte brindado." }
            ]
        },
        electromechanical: {
            photo: "Fotos/Electromecanico.jpg",
            title: "Electromecánico",
            training: [
                { title: "Técnico en equipos e instalaciones electromecánicas", description: "2003 - EET nro 1, Baradero" }
            ],
            experience: [
                { title: "Quickfood S.A. - Baradero </br> 2003", description: "Pasantía desarrollando tareas de control y codificación de stock de respuestos, y proyectos de instalaciones eléctricas." }
            ]
        },
        constructor: {
            photo: "Fotos/constructor2.jpg",
            title: "Constructor",
            training: [
                { title: "Curso Empírico de Construcción", description: "Aprendizaje en tiempo real, donde la observación y el conocimiento adquirido se utilizan para construir nuevas habilidades. Esta experiencia ha sido una constante fuente de inspiración, reforzando lo aprendido y permitiéndome reformular mis enfoques a partir de las lecciones de las malas experiencias. Además, me ha ayudado a aprender de las experiencias ajenas y las ideas de otros; amigos y allegados aportaron valiosas perspectivas que rompieron mis sesgos y ampliaron mis márgenes de pensamiento." }
            ],
            experience: [
                {
                    title: "Constructor de Cabañas",
                    description: "Construí una cabaña de tronco en su totalidad, convirtiendo un sueño en realidad a través de la acción y la voluntad. Utilicé mis conocimientos de técnico electromecánico para emplear herramientas y técnicas en carpintería, electricidad y plomería. A lo largo del proceso, también integré técnicas de construcción en seco, como la instalación de placas de yeso y fibrocemento, y llevé a cabo la instalación de una salamandra. Este proyecto no solo representa un logro personal significativo, sino que también es el hogar de mi familia y un testimonio de mi constancia y pasión. Cada rincón de esta cabaña refleja la materialización de mis pensamientos y la dedicación invertida en cada tarea, recordándome que los sueños se construyen con esfuerzo y determinación.",
                    images: ["Fotos/cabanaEC.jpg", "Fotos/cabana.jpeg"] // Array de imágenes para el perfil de constructor
                }
            ]
        }
    };

    const selectedProfile = profileData[profile];

    window.scrollTo({ top: 0, behavior: 'smooth' });

    profileTitle.style.animation = "erasing 1s steps(30, end) forwards";

    setTimeout(() => {
        profileTitle.textContent = selectedProfile.title;
        profileTitle.style.animation = "typing 2s steps(30, end) forwards";

        setTimeout(() => {
            profilePhoto.style.opacity = "0"; // Fade out photo
            setTimeout(() => {
                profilePhoto.src = selectedProfile.photo;
                profilePhoto.style.opacity = "1"; // Fade in new photo
            }, 500);
        }, 2000);

        trainingBox.innerHTML = "<h3>Capacitación</h3></br>";
        selectedProfile.training.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.innerHTML = `
                <strong>${item.title}</strong>
                <div class="linea"></div>
                <p>${item.description}</p></br>
            `;
            trainingBox.appendChild(itemElement);
        });

        experienceBox.innerHTML = "<h3>Experiencia</h3></br>";
        selectedProfile.experience.forEach(item => {
            const itemElement = document.createElement("div");

            // Only add images if they exist (for "constructor" profile)
            itemElement.innerHTML = `
                <strong>${item.title}</strong>
                <div class="linea"></div></br>
                <p>${item.description}</p></br>
                ${item.images ? item.images.map(image => `<img src="${image}" alt="${item.title} photo" class="experience-photo"/>`).join('') : ""}
            `;
            experienceBox.appendChild(itemElement);
        });

        detailsSection.style.opacity = "1";
    }, 1000);
}
