import { Component } from '@angular/core';
import { Skills } from '../../interfaces/skills';

@Component({
  selector: 'app-skills-content',
  templateUrl: './skills-content.component.html',
  styleUrls: ['./skills-content.component.scss']
})
export class SkillsContentComponent {
  contentByLanguageSkillsTitle: { [key: string]: string } = {
    english: 'SKILLS',
    castellano: 'HABILIDADES',
    catala: 'HABILITATS'
  };
  contentByLanguageSkillsType: { [key: string]: Skills } = {
    english: {
      soft: 'SOFT',
      hard: 'HARD'
    },
    castellano: {
      soft: 'PERSONALES',
      hard: 'TECNICAS'
    },
    catala: {

      soft: 'PERSONALS',
      hard: 'TÈCNIQUES'
    }
  }
  contentByLanguageSkillsSoft: { [key: string]: Skills[] } = {
    english: [
      { soft: 'Change management', icon: 'multiple_stop' },
      { soft: 'Growth mindset', icon: 'rocket_launch' },
      { soft: 'Analytical mindset', icon: 'psychology' },
      { soft: 'Planning', icon: 'edit_calendar' },
      { soft: 'Organized', icon: 'lists' },
      { soft: 'Responsible', icon: 'alarm_smart_wake' },
      { soft: 'Leadership', icon: 'groups' },
      { soft: 'Time management', icon: 'manage_history' },
      { soft: 'Professional ethics', icon: 'diversity_1' },
      { soft: 'Teamwork', icon: 'diversity_3' },
      { soft: 'Creativity', icon: 'palette' },
      { soft: 'Involvement', icon: 'approval_delegation' },


    ],

    castellano: [

      { soft: 'Gestión del cambio', icon: 'multiple_stop' },
      { soft: 'Mentalidad de crecimiento', icon: 'rocket_launch' },
      { soft: 'Mentalidad analítica', icon: 'psychology' },
      { soft: 'Planificación', icon: 'edit_calendar' },
      { soft: 'Organización', icon: 'lists' },
      { soft: 'Responsable', icon: 'alarm_smart_wake' },
      { soft: 'Liderazgo', icon: 'groups' },
      { soft: 'Gestión de tiempo', icon: 'manage_history' },
      { soft: 'Ética profesional', icon: 'diversity_1' },
      { soft: 'Trabajo en equipo', icon: 'diversity_3' },
      { soft: 'Creatividad', icon: 'palette' },
      { soft: 'Implicación', icon: 'approval_delegation' },

    ],
    catala: [
      { soft: 'Gestió de cambi', icon: 'multiple_stop' },
      { soft: 'Mentalitat de creixement', icon: 'rocket_launch' },
      { soft: 'Mentalitat analítica', icon: 'psychology' },
      { soft: 'Planificació', icon: 'edit_calendar' },
      { soft: 'Organització', icon: 'lists' },
      { soft: 'Responsable', icon: 'alarm_smart_wake' },
      { soft: 'Lideratge', icon: 'groups' },
      { soft: 'Gestió de tiemps', icon: 'manage_history' },
      { soft: 'Ética professional', icon: 'diversity_1' },
      { soft: 'Treball en equip', icon: 'diversity_3' },
      { soft: 'Creativitat', icon: 'palette' },
      { soft: 'Implicació', icon: 'approval_delegation' },
    ]
  }

  contentByLanguageSkillsHard: { [key: string]: Skills[] } = {
    english: [
      { hard: 'Spring Boot', img: 'spring-boot-logo.png' },
      { hard: 'Angular 16', img: 'angular.png' },
      { hard: 'Sencha', img: 'sencha.png' },
      { hard: 'Java11/+', img: 'java.png' },
      { hard: 'TypeScript', img: 'typescript.png' },
      { hard: 'Postgres', img: 'postgresql.png' },
      { hard: 'SQL', img: 'SQL.png' },
      { hard: 'Jira', img: 'Jira.png' },
      { hard: 'OfficeSuite36', img: 'office.png' },
      { hard: 'Figma', img: 'figma.png' },
      { hard: 'Jenkins', img: 'jenkins.png' }

    ],

    castellano: [
      { hard: 'Spring Boot', img: 'spring-boot-logo.png' },
      { hard: 'Angular 16', img: 'angular.png' },
      { hard: 'Sencha', img: 'sencha.png' },
      { hard: 'Java11/+', img: 'java.png' },
      { hard: 'TypeScript', img: 'typescript.png' },
      { hard: 'Postgres', img: 'postgresql.png' },
      { hard: 'SQL', img: 'SQL.png' },
      { hard: 'Jira', img: 'Jira.png' },
      { hard: 'OfficeSuite36', img: 'office.png' },
      { hard: 'Figma', img: 'figma.png' },
      { hard: 'Jenkins', img: 'jenkins.png' }

    ],

    catala: [
      { hard: 'Spring Boot', img: 'spring-boot-logo.png' },
      { hard: 'Angular 16', img: 'angular.png' },
      { hard: 'Sencha', img: 'sencha.png' },
      { hard: 'Java11/+', img: 'java.png' },
      { hard: 'TypeScript', img: 'typescript.png' },
      { hard: 'Postgres', img: 'postgresql.png' },
      { hard: 'SQL', img: 'SQL.png' },
      { hard: 'Jira', img: 'Jira.png' },
      { hard: 'OfficeSuite36', img: 'office.png' },
      { hard: 'Figma', img: 'figma.png' },
      { hard: 'Jenkins', img: 'jenkins.png' }]
  }
}
