import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  isAboutMeVisible = false;
  isAboutMeTransformed = false;

  isWorkExpVisible = false;
  isWorkExpTransformed = false;

  @Input() selectedLanguage: string = 'english';


  //ABOUT ME
  toggleAboutMeChange() {
    this.isAboutMeVisible = !this.isAboutMeVisible;
    this.isAboutMeTransformed = !this.isAboutMeTransformed;
  }

  contentByLanguageAboutMeTitle:{ [key: string]: string } ={
    english: 'ABOUT ME',
    castellano: 'SOBRE MI'
  }
  ;

  contentByLanguageAboutMe: { [key: string]: string } = {
    english: 'Three years ago, I changed my career path and I decided to study a Senior Level Vocational Training in web development. I did it because I want to grow and learn constantly. Because of my perseverance, I got my first job in IT before I finished my studies. I am comfortable in dynamic and highly demanding environments because they help me to expand my creativity, efficiency and empathy. I am ready and motivated to take on new challenges and face them with enthusiasm and professionalism and to take every opportunity to develop my skills and be part of the success of the team and the company',
    castellano: 'Hace tres años le di un giro a mi carrera profesional y decidí estudiar el CFGS de desarrollo de aplicaciones web. Quise cambiar de sector porque que mi máxima es crecer y el aprendizaje constante. Dada mi perseverancia, conseguí el primer empleo en el sector antes de terminar los estudios. Me siento cómoda en entornos dinámicos y altamente demandantes ya que me ayudan a expandir la creatividad, la eficiencia y la empatía. Estoy preparada y motivada para asumir nuevos desafíos y enfrentarlos con entusiasmo y profesionalidad aprovechando cada oportunidad para desarrollar mis habilidades y contribuir al éxito del equipo y la empresa.',

  };

  

  //WORK EXPERIENCE
  toggleWorkExpChange() {
    this.isWorkExpVisible = !this.isWorkExpVisible;
    this.isWorkExpTransformed = !this.isWorkExpTransformed;
  }
  contentByLanguageWorkExpTitle:{ [key: string]: string } ={
    english: 'WORK EXPERIENCE',
    castellano: 'EXPERIENCIA PROFESIONAL'
  };

  contentByLanguageDevWorkExp:{[key:string]:string}={
    english: '2022-Present Capgemini: \n Training period in bootcamp and first project in a public railway company: Given the difficulty of the project and as a junior, I focused on learning about the needs of the client, the business and the application becoming one of the people who had the most functional knowledge of it. For this reason, the PM offered me to collaborate 50% with the PPO and the other 50% in maintenance as a full stack. The functions I have been performing in each role are as follows:',
    castellano: '2022-Actualidad Capgemini: \n Periodo formación en bootcamp y primer proyecto en entidad pública ferroviaria: Dada la dificultad del proyecto y como junior me enfoqué en aprender acerca de las necesidades del cliente, el negocio y la aplicación posicionándome como una de las personas que mas conocimiento funcional tenía. Por esto, el PM me ofreció estar al 50% de soporte con el PPO y el 50% en mantenimiento como full stack. Las funciones que he estado realizando en cada rol son las siguientes:'
  }

  contentByLanguagePpoDevFunctions:{[key:string]:any[]}={
    english: [
      { ppo: 'Collect and translation of customer requirements.', dev: 'Creation of tables by flyway' },
      { ppo: 'High-level estimation providing information to the PM', dev: 'Re-engineering with ExtJS and Sencha' },
      { ppo: 'Epics, feature requests, user stories, roadmaps, user manuals, etc.', dev: 'Evolutives with EXtJS and Sencha' },
      { ppo: 'Provide the acceptance criteria', dev: 'JPA queries' },
      { ppo: 'Participation in the Scrum ceremonies', dev: 'Back (java/Spring boot) and front /TS and angular) connection with http protocol' },
      { ppo: 'Analysis and detection of doubts and errors in order to improve the product.', dev: 'Creation of services with Java and Spring Boot' },
      { ppo: 'Work in collaboration with UX/UI specialists to generate mock-ups.', dev: 'Creating general and specific components with Angular and Angular material' },
      { ppo: 'Clarify customer queries.', dev: 'Sonar bug fixes.' },
      { ppo: 'Supporting the development team', dev: 'Version control and uploads to development, pre-production and production with GIT.' },
      { ppo: 'Carrying out user acceptance testing (UAT)', dev: 'CI/CD with Jenkins' },
      { ppo: 'Ensure that the application\'s functionalities meet the client\'s requirements and provide feedback to the development team.', dev: '' },
      { ppo: 'Monitor bugs in development and prioritise them for correction', dev: '' },
    ],

    castellano: [
      { ppo: 'Recopilación y traducción de requisitos del cliente.', dev: 'Creación de tablas a través de flyway' },
      { ppo: 'Estimación a alto nivel proporcionando información al PM', dev: 'Reingenierias con ExtJS y Sencha' },
      { ppo: 'Documentar épicas, solicitudes de funciones, historias de usuarios, Roadmaps, manuales de usuario, etc..', dev: 'Evolutives with EXtJS and Sencha' },
      { ppo: 'Proporcionar los criterios de aceptación', dev: 'Queries en JPA' },
      { ppo: 'Participar en todas las ceremonias Scrum', dev: 'Conexión Back (java/Spring boot) y front (TS / angular) con protocolo http' },
      { ppo: 'Análisis y detección de dudas y errores para la mejora del producto', dev: 'Creación de servicios en Back con Java y Spring Boot' },
      { ppo: 'Trabajar con el equipo UX/UI para la generación de maquetas', dev: 'Creación de componentes generales y específicos con Angular y Angular material' },
      { ppo: 'Aclarar las consultas de los clientes.', dev: 'Corrección de errores de Sonar.' },
      { ppo: 'Brindar apoyo al equipo de desarrollo', dev: 'Control de versiones y subidas a desarrollo, preproducción y producción con GIT.' },
      { ppo: 'Realización de UAT (Pruebas aceptación usuario)', dev: 'CI/CD con Jenkins' },
      { ppo: 'Asegurar que las funciones cumplen con los requisitos del cliente y proporcionar comentarios al equipo de desarrollo', dev: '' },
      { ppo: 'Supervisar los errores en desarrollo y priorizarlos para la corrección', dev: '' },
    ],
  }

  contentByLanguageTravelWorkExp:{[key:string]:string}={
    english: '2017-2022 Viajes el Corte Inglés As a travel agent in the leisure division and supporting the MICE (meetings, incentives, conferences and exhibitions) division. The functions I have been performing in each role are as follows:',
    castellano: '2017-2022 Viajes el Corte Inglés Como agente de Viajes en la división de vacacional y como apoyo a la división MICE (meetings, incentives, conferences and exhibitions). Las funciones que he estado realizando en cada rol son las siguientes:'
  }

  contentByLanguageTravelTitle:{ [key: string]: string } ={
    english: 'Travel Agent',
    castellano:'Agente de Viajes'
    
  };
  contentByLanguageTravelAgentFunctions:{[key:string]:any[]}={
    english: [
      { travelAgent: 'Customer care', mice: 'Management of national and international transport for speakers and attendees.' },
      { travelAgent: 'Complaints resolution', mice: 'Welcoming of speakers and attendees at the Technical Secretary' },
      { travelAgent: 'Organisation of large-scale and tailor-made trips', mice: 'Online and on-site registration management.' },
      { travelAgent: 'Marketing of wholesale packages', mice: 'Accompanying guide for the activities organised in the leisure programmes.' },
      { travelAgent: 'Booking of single services', mice: 'Call for papers' },
      { travelAgent: 'Negotiating with suppliers', mice: 'Organisation and assembly of facilites' },
      { travelAgent: 'Customer loyalty through trust, sincerity and care for mutual interests.', mice: '' }
    ],

    castellano: [
      { travelAgent: 'Atención al cliente', mice: 'Gestión de transporte nacional e internacional de ponentes y asistentes.' },
      { travelAgent: 'Resolución de reclamaciones', mice: 'Acogida de ponentes y asistentes en la Secretaría Técnica' },
      { travelAgent: 'Organización de grandes viajes y viajes a medida', mice: 'Gestión de inscripciones online e “in situ”.' },
      { travelAgent: 'Comercialización de paquetes de mayoristas', mice: 'Guía acompañante para las actividades organizadas en los programas de ocio.' },
      { travelAgent: 'Reserva de servicios sueltos', mice: 'Call for papers' },
      { travelAgent: 'Negociación con proveedores', mice: 'Organización y revisión de las instalaciones' },
      { travelAgent: 'Fidelización de clientes a través de la confianza, la sinceridad y el cuidado de los intereses mutuos.', mice: '' }
   
    ],
  }


}
