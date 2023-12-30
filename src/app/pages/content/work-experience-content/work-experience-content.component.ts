import { Component } from '@angular/core';
import { WorkExperience } from '../../interfaces/work-experience';

@Component({
  selector: 'app-work-experience-content',
  templateUrl: './work-experience-content.component.html',
  styleUrls: ['./work-experience-content.component.scss']
})
export class WorkExperienceContentComponent {
  contentByLanguageWorkExpTitle: { [key: string]: string } = {
    english: 'WORK EXPERIENCE',
    castellano: 'EXPERIENCIA PROFESIONAL',
    catala: 'Experiència professional'
  };

  contentByLanguageDevWorkExp: { [key: string]: WorkExperience[] } = {


    english: [
      {
        date: 'Currently',
        enterprise: 'Capgemini',
        jobTitle: 'Project at an Irish insurance company',
        functions: 'Back End | QA Automation',
        description: 'As part of the international QA Automation team and the development team, we automate tests (smoke, regression, E2E, unitaries...) as well as "spikes" to ensure the quality of the product and its performance using agile methodologies under the Scrum framework.',
        technologies: 'Java, Selenium, TestNG, Postman, Jira, Git'
      },
      {
        date: 'Oct23 – Nov23',
        enterprise: 'Capgemini',
        jobTitle: 'Internal Project',
        functions: 'Back End | QA Automation',
        description: 'During my short stay, I was able to create a batch service with Spring Batch for people management, as well as test automation with JUnit to ensure code quality.',
        technologies: 'Java, Spring Boot, Spring Batch, Mockito, Junit'
      },
      {
        date: 'Sep 22 – Oct 23',
        enterprise: 'Capgemini',
        jobTitle: 'Project at national railway company',
        functions: 'Fullstack | QA',
        description: 'Given the difficulty of the project I focused on learning about the needs of the client, the business and the application, positioning myself as one of the people who had more functional knowledge. Therefore, in addition to being able to perform evolutions and maintenance I was working hand in hand with the Proxy Product Owner. Some of the most relevant tasks performed in this project were the following: \n\
       **As Proxy Product Owner**, I validated, among other things, that the requirements met the client needs and the technical requirements of the system. I was also in charge of communicating the requirements to the development team and resolving any doubts that arose. This, together with the work of the development team, helped to significantly improve customer satisfaction. \n\
       **As a full stack**, one of the tasks I performed was to develop an evolvability for incident management. I implemented the agreed functional and technical requirements and tested the functionality to ensure it worked correctly. ',
        technologies: 'Java,  Spring Boot,  TypeScript,  ExtJS6,  IntelliJ,  STS,  Visual Studio,  Code,  Jenkins,  Openshift,  Jira,  Postman,  Office365,  Git,  Figma.'

      }
    ],
    castellano:
      [
        {

          date: 'Actualmente',
          enterprise: 'Capgemini',
          jobTitle: 'Proyecto en empresa de seguros Irlandesa',
          functions: 'QA Automation| Back End',
          description: 'Como parte del equipo internacional de QA Automation y del equipo de desarrollo, automatizamos pruebas (smoke, regresión, E2E, unitarias...) así como spikes para asegurar la calidad del producto y su rendimiento utilizando metodologías ágiles bajo el marco Scrum.',
          technologies: 'Java, Selenium, TestNG, Postman, Jira, Git'
        },
        {

          date: 'Oct23 – Nov23',
          enterprise: 'Capgemini',
          jobTitle: 'Proyecto interno',
          functions: 'QA Automation| Back End',
          description: 'Durante mi breve estancia, pude crear un servicio batch con Spring Batch para la gestión de personas, así como la automatización de pruebas con JUnit para garantizar la calidad del código.',
          technologies: 'Java, Spring Boot, Spring Batch, Mockito, Junit'
        },

        {

          date: 'Sep 22 – Oct 23',
          enterprise: 'Capgemini',
          jobTitle: 'Proyecto en empresa ferroviaria nacional',
          functions: 'QA | FullStack',
          description: 'Dada la dificultad del proyecto me enfoqué en aprender acerca de las necesidades del cliente, el negocio y la aplicación posicionándome como una de las personas que más conocimiento funcional tenía. Es por esto que, además de poder realizar evolutivos y mantenimientos estuve mano a mano trabajando con el Proxy product owner. Algunas de las tareas más relevantes realizadas en este proyecto fueron las siguientes:\n\ Como proxy product owner, validé, entre otras cosas, que los requisitos cumplían con las necesidades del cliente y los requisitos técnicos del sistema. También me encargué de comunicar los requisitos al equipo de desarrollo y resolver cualquier duda que surgiera. Esto, junto con el trabajo del equipo de desarrollo, contribuyó a mejorar la satisfacción del cliente de manera significativa. \n\ Como full stack, una de las tareas que realicé fue desarrollar un evolutivo para la gestión de incidencias. Implementé los requisitos funcionales y técnicos acordados y realicé pruebas de la funcionalidad para asegurar su correcto funcionamiento. ',
          technologies: 'Java,  Spring Boot,  TypeScript,  ExtJS6,  IntelliJ,  STS,  Visual Studio,  Code,  Jenkins,  Openshift,  Jira,  Postman,  Office365,  Git,  Figma.'
        }

      ],
    catala: [
      {
        date: 'Actualment',
        enterprise: 'Capgemini',
        jobTitle: 'Projecte en una empresa d\'assegurances irlandesa',
        functions: 'QA Automation| Back End',
        description: 'Formant part de l\'equip internacional de QA Automationy del de desenvolupament automatitzem proves (de fum, regressió, E2E, unitaries…) així com “spikes” per assegurar la qualitat del producte i el seu funcionamient duent-ho a terme amb metodologies àgils sota el marc de treball Scrum.',
        technologies: 'Java, Selenium, TestNG, Postman, Jira, Git'
      },
      {

        date: 'Oct23 – Nov23',
        enterprise: 'Capgemini',
        jobTitle: 'Projecte intern',
        functions: 'QA Automation| Back End',
        description: 'Durant la meva breu estada, vaig poder crear un servei batch amb Spring Batch per a la gestió de persones, així com l\'automatització de proves amb JUnit per garantir la qualitat del codi.',
        technologies: 'Java, Spring Boot, Spring Batch, Mockito, Junit'
      },

      {
        date: 'Sep 22 – Oct 23',
        enterprise: 'Capgemini',
        jobTitle: 'Projecte en una empresa ferroviària nacional',
        functions: 'QA | FullStack',
        description: 'Davant la dificultat del projecte, em vaig centrar a aprendre sobre les necessitats del client, el negoci i l\'aplicació, posicionant-me com una de les persones que més coneixement funcional tenia. És per això que, a més de poder realitzar evolutius i manteniments, vaig estar mà a mà treballant amb el Proxy product owner. Algunes de les tasques més rellevants realitzades en aquest projecte van ser les següents:\n\ Com a proxy product owner, vaig validar, entre altres coses, que els requisits complien amb les necessitats del client i els requisits tècnics del sistema. També em vaig encarregar de comunicar els requisits a l\'equip de desenvolupament i resoldre qualsevol dubte que sorgís. Això, juntament amb el treball de l\'equip de desenvolupament, va contribuir a millorar la satisfacció del client de manera significativa.\n\ Com a full stack, una de les tasques que vaig realitzar va ser desenvolupar un evolutiu per a la gestió d\'incidències. Vaig implementar els requisits funcionals i tècnics acordats i vaig realitzar proves de la funcionalitat per assegurar el seu correcte funcionament.',
        technologies: 'Java,  Spring Boot,  TypeScript,  ExtJS6,  IntelliJ,  STS,  Visual Studio,  Code,  Jenkins,  Openshift,  Jira,  Postman,  Office365,  Git,  Figma.'
      }
    ]

  }


}
