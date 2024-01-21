import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me-content',
  templateUrl: './about-me-content.component.html',
  styleUrls: ['./about-me-content.component.scss']
})
export class AboutMeContentComponent {

  contentByLanguageAboutMeTitle:{ [key: string]: string } ={
    english: 'ABOUT ME',
    castellano: 'SOBRE MI',
    catala:'SOBRE MI'
  }
  ;

  contentByLanguageAboutMe: { [key: string]: string } = {
    english: 'Hi! My name is Irina C., and I\'m **software developer** with experience in **Spring Boot/Java** and **Angular/Typescript**. I love my job and my passion is creating applications that are useful and engaging for users. I also perform manual product quality assurance (manual **QA Tester**) both with test documents and by establishing a strong relationship with the client to gather their requirements and establish acceptance criteria. Currently, I\'m getting started with **QA Automation** with **Selenium** and **TestNG**. I have a strong interest in generative AI, so I\'m training in this area in my free time. In addition, I work on my own projects to continue improving both my coding skills and my learning.',
    castellano: '¡Hola! Soy Irina C., **desarrolladora de software** con  experiencia en **Spring Boot/Java** y **Angular/Typescript**. Me encanta mi trabajo y es por esto que me implico en crear aplicaciones que sean útiles y atractivas para los usuarios. También realizo controles de calidad manuales del producto (**QA Tester** manual) tanto con documentos de pruebas como estableciendo una relación sólida con el cliente para recopilar sus requisitos y establecer criterios de aceptación. Actualmente, estoy empezando con el **QA Automation** con **Selenium** y **TestNG**. Tengo un gran interés por las IA generativas por esto, estoy formándome en esta área en mi tiempo libre. Además, realizo proyectos propios para seguir mejorando tanto en la calidad del código como en mi aprendizaje ',
    catala:'Hola! Sóc Irina C., una **desenvolupadora de software** amb experiència en **Spring Boot/Java** i **Angular/Typescript**. M\'encanta el meu treball i és per això que m\'implico en crear aplicacions que siguin útils i atractives per als usuaris. També realitzo controls de qualitat manuals del producte (**QA Tester** manual) tant amb documents de proves com establint una relació sòlida amb el client per recopilar els seus requisits i establir criteris d\'acceptació. Actualment, estic comen\çant amb el **QA Automation** amb **Selenium** i **TestNG.**Tinc un gran interès per les IA generatives, per això estic formant-me en aquesta àrea en el meu temps lliure.A més, realitzo projectes propis per seguir millorant tant en la qualitat del codi com en el meu aprenentatge. '
  };
}
