import { Component } from '@angular/core';

@Component({
  selector: 'app-other-work-experience-content',
  templateUrl: './other-work-experience-content.component.html',
  styleUrls: ['./other-work-experience-content.component.scss']
})
export class OtherWorkExperienceContentComponent {

  
  contentByLanguageTravelWorkExp:{[key:string]:any}={
    english: {
      enterprise: 'Viajes el Corte Inglés',
      date:'2017-2022',
      description:'As a travel agent in the leisure division and supporting the MICE (meetings, incentives, conferences and exhibitions) division. The functions I have been performing in each role are as follows:',
    },
      castellano:{
        enterprise: 'Viajes el Corte Inglés',
        date:'2017-2022',
       description:'Como agente de Viajes en la división de vacacional y como apoyo a la división MICE (meetings, incentives, conferences and exhibitions). Las funciones que he estado realizando en cada rol son las siguientes:'
      },

      catala:{}
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

    catala:[]
  };
}
