import { Component } from '@angular/core';

@Component({
  selector: 'app-ppo-dev-functions-content',
  templateUrl: './ppo-dev-functions-content.component.html',
  styleUrls: ['./ppo-dev-functions-content.component.scss']
})
export class PpoDevFunctionsContentComponent {
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
      { ppo: 'Ensure that the application\'s functionalities meet the client\'s requirements', dev: '' },
      { ppo: 'Provide feedback from the client to the development team.', dev: '' },
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
      { ppo: 'Proporcionar feedback del cliente al equipo de desarrollo', dev: '' },
      { ppo: 'Supervisar los errores en desarrollo y priorizarlos para la corrección', dev: '' },
    ],
    catala:[]
  };

}
