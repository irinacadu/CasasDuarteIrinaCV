import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { PdfGeneratorService } from '../services/pdf-generator.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1, display: 'block' })),
      state('hidden', style({ opacity: 0, display: 'none' })),
      transition('visible <=> hidden', animate('0.3s ease')),
    ]),
  ]
})
export class PrincipalComponent {
  isAboutMeVisible = false;
  isAboutMeTransformed = false;

  isWorkExpVisible = false;
  isWorkExpTransformed = false;

  isEducationVisible = false;
  isEducationTransformed = false;

  isSkillsVisible = false;
  isSkillsTransformed = false;

  @Input() selectedLanguage: string = 'english';
  constructor() {}



//   onGeneratePDF() {
//    const contentSections: Record<string, string[]> = {
//   'Work Experience': this.getWorkExperienceContent(),
//   // Add other sections here
// };

// this.pdfGeneratorService.generatePDF(contentSections);
//   }


  getWorkExperienceContent(){
    const doc = new jsPDF();
    let yOffset = 10;


    const devWorkExp = this.contentByLanguageDevWorkExp[this.selectedLanguage];
    const travelWorkExp = this.contentByLanguageTravelWorkExp[this.selectedLanguage];

    // for (const section in contentSections) {
    //   const content = this.formatContent(contentSections[section]);
      doc.setFontSize(14);
      doc.text(devWorkExp.date, 10, yOffset);
      doc.setFontSize(12);
      yOffset += 10;
    //   doc.text(content, 10, yOffset);
    //   yOffset += doc.splitTextToSize(content, 180).length * 10 + 10; // Adjust yOffset for multi-line content
    // }
  
   // doc.text(devWorkExp.date, 10, 10);
    doc.save('CV_'+this.selectedLanguage+'_IrinaCasasDuarte.pdf');
  
  }

  
  private formatContent(content: any): string {
    if (typeof content === 'string') {
      return content;
    } else if (Array.isArray(content)) {
      return content.map(item => this.formatContent(item)).join('\n');
    } else if (typeof content === 'object') {
      // Handle complex objects or structures here if needed
      // Return formatted content as a string
    }
    return '';
  }
  
  //ABOUT ME
  toggleAboutMeChange() {
    this.isAboutMeVisible = !this.isAboutMeVisible;
    this.isAboutMeTransformed = !this.isAboutMeTransformed;
  }
  getSegments(text: string): string[] {
    return text.split('**');
  }
  contentByLanguageAboutMeTitle:{ [key: string]: string } ={
    english: 'ABOUT ME',
    castellano: 'SOBRE MI'
  }
  ;

  contentByLanguageAboutMe: { [key: string]: string } = {
    english: 'Three years ago, I changed my career path and I decided to study a Senior Level Vocational Training in web development. I did it because **I want to grow and learn constantly**. Because of my perseverance, I got my first job in IT before I finished my studies. **I am comfortable in dynamic and highly demanding environments** because they help me to expand my creativity, efficiency and empathy. **I am ready and motivated to take on new challenges **and face them with enthusiasm and professionalism and to take every opportunity to develop my skills and **be part of the success of the team and the company.**',
    castellano: 'Hace tres años le di un giro a mi carrera profesional y decidí estudiar el CFGS de desarrollo de aplicaciones web. Quise cambiar de sector porque que ** mi máxima es crecer y el aprendizaje constante **. Dada mi perseverancia, conseguí el primer empleo en el sector antes de terminar los estudios. **Me siento cómoda en entornos dinámicos y altamente demandantes** ya que me ayudan a expandir la creatividad, la eficiencia y la empatía. **Estoy preparada y motivada para asumir nuevos desafíos** y enfrentarlos con entusiasmo y profesionalidad aprovechando cada oportunidad para desarrollar mis habilidades y **contribuir al éxito del equipo y la empresa.**',

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

  contentByLanguageDevWorkExp:{[key:string]:any}={
    english: {
      date:'2022-Present Capgemini:',
      description:'Training period in bootcamp and first project in a public railway company: Given the difficulty of the project and as a junior, I focused on learning about the needs of the client, the business and the application becoming one of the people who had the most functional knowledge of it. For this reason, the PM offered me to collaborate 50% with the PPO and the other 50% in maintenance as a full stack. The functions I have been performing in each role are as follows:',
    },
      castellano: {
        date: '2022-Actualidad Capgemini:',
        description:'Periodo formación en bootcamp y primer proyecto en entidad pública ferroviaria: Dada la dificultad del proyecto y como junior me enfoqué en aprender acerca de las necesidades del cliente, el negocio y la aplicación posicionándome como una de las personas que mas conocimiento funcional tenía. Por esto, el PM me ofreció estar al 50% de soporte con el PPO y el 50% en mantenimiento como full stack. Las funciones que he estado realizando en cada rol son las siguientes:'
      }
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
  };

  contentByLanguageTravelWorkExp:{[key:string]:any}={
    english: {
      date:'2017-2022 Viajes el Corte Inglés',
      description:'As a travel agent in the leisure division and supporting the MICE (meetings, incentives, conferences and exhibitions) division. The functions I have been performing in each role are as follows:',
    },
      castellano:{
        date:'2017-2022 Viajes el Corte Inglés',
       description:'Como agente de Viajes en la división de vacacional y como apoyo a la división MICE (meetings, incentives, conferences and exhibitions). Las funciones que he estado realizando en cada rol son las siguientes:'
      }
      };

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
  };

  //EDUCATION
  toggleEducationChange() {
    this.isEducationVisible = !this.isEducationVisible;
    this.isEducationTransformed = !this.isEducationTransformed;
  };

  contentByLanguageEducationTitle:{ [key: string]: string } ={
    english: 'EDUCATION',
    castellano:'FORMACIÓN'    
  };
  contentByLanguageDevEducation:{[key:string]:any}={
    english: {
      dateEd:'2020-2023:',
      descriptionEd: 'Senior Level Vocational Training in web development (MEC level 6)'
    },
    castellano:{
      dateEd:'2020-2023:',
      descriptionEd: 'CFGS de aplicaciones web (CEIFP CARLOS III, Cartagena)'
    }  
  };
  contentByLanguageTravelEducation:{[key:string]:any}={
    english:{
      dateEd:'2014-2016:',
      descriptionEd:'Senior Level Vocational Training in travel agencies and MICE (MEC level 6)'
    } ,
    castellano:{
      dateEd:'2014-2016:',
      descriptionEd:'CFGS de agencias de viajes y organización de eventos. (IES La Flota, Murcia)'
    } 
  };

  //SKILLS
  toggleSkillsChange() {
    this.isSkillsVisible = !this.isSkillsVisible;
    this.isSkillsTransformed = !this.isSkillsTransformed;
  };
  contentByLanguageSkillsTitle:{ [key: string]: string } ={
    english: 'SKILLS',
    castellano:'HABILIDADES'    
  };
  contentByLanguageSkillsType:{[key:string]:any}={
    english: {
      soft:'SOFT',
      hard:'HARD'
      },
    castellano:{
      soft:'PERSONALES',
      hard:'TECNICAS'
      },   
  }
  contentByLanguageSkillsSoft:{[key:string]:any}={
    english: [
      {soft:'Change management', icon:'multiple_stop'},
      {soft:'Growth mindset', icon:'rocket_launch'},
      {soft:'Analytical mindset', icon:'psychology'},
      {soft:'Planning',icon:'edit_calendar'},
      {soft:'Organized',icon:'lists'},
      {soft:'Responsible',icon:'alarm_smart_wake'},
      {soft:'Leadership',icon:'groups'},
      {soft:'Time management', icon:'manage_history'},
      {soft:'Professional ethics',icon:'diversity_1'},
      {soft:'Teamwork', icon: 'diversity_3'},
      {soft:'Creativity',icon:'palette'},
      {soft:'Involvement',icon: 'approval_delegation'},
      
      
    ],
      
    castellano:[

      {soft:'Gestión del cambio',icon:'multiple_stop'},
      {soft:'Mentalidad de crecimiento', icon:'rocket_launch'},
      {soft:'Mentalidad analítica', icon:'psychology'},
      {soft:'Planificación',icon:'edit_calendar'},
      {soft:'Organización', icon:'lists'},
      {soft:'Responsable',icon:'alarm_smart_wake'},
      {soft:'Liderazgo',icon:'groups'},
      {soft:'Gestión de tiempo',icon:'manage_history'},
      {soft:'Ética profesional', icon:'diversity_1'},
      {soft:'Trabajo en equipo', icon: 'diversity_3'},    
      {soft:'Creatividad',icon:'palette'},
      {soft:'Implicación',icon:'approval_delegation'},
      
    ]  
  }

  contentByLanguageSkillsHard:{[key:string]:any}={
    english: [
      {hard:'Spring Boot',img:'spring-boot-logo.png'},
      {hard:'Angular 16',img:'angular.png'},
      {hard:'Sencha', img:'sencha.png'},
      {hard:'Java11/+',img:'java.png'},
      {hard:'TypeScript',img:'typescript.png'},     
      {hard:'Postgres',img:'postgresql.png'},
      {hard:'SQL',img:'SQL.png'},
      {hard:'Jira',img:'Jira.png'},
      {hard:'OfficeSuite36',img:'office.png'},
      {hard:'Figma',img:'figma.png'},
      {hard:'Jenkins',img:'jenkins.png'}
      
    ],
      
    castellano:[
      {hard:'Spring Boot',img:'spring-boot-logo.png'},
      {hard:'Angular 16',img:'angular.png'},
      {hard:'Sencha', img:'sencha.png'},
      {hard:'Java11/+',img:'java.png'},
      {hard:'TypeScript',img:'typescript.png'},     
      {hard:'Postgres',img:'postgresql.png'},
      {hard:'SQL',img:'SQL.png'},
      {hard:'Jira',img:'Jira.png'},
      {hard:'OfficeSuite36',img:'office.png'},
      {hard:'Figma',img:'figma.png'},
      {hard:'Jenkins',img:'jenkins.png'}
      
    ]  
  }


  
}
