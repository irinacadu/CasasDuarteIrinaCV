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
    // Add more language content here
  };

  

  //WORK EXPERIENCE
  toggleWorkExpChange() {
    this.isWorkExpVisible = !this.isWorkExpVisible;
    this.isWorkExpTransformed = !this.isWorkExpTransformed;
  }
  contentByLanguageWorkExpTitle:{ [key: string]: string } ={
    english: 'WORK EXPERIENCE',
    castellano: 'EXPERIENCIA LABORAL'
  }
  ;

}
