import { DataContact } from "./data-contact";
import { Education } from "./education";
import { Skills } from "./skills";
import { WorkExperience } from "./work-experience";

export interface CvPdf {  
    profileImg:string,
    firsName:string,
    lastName:string,
    dataContact:DataContact,
    aboutMeTitle : string; 
    aboutMeContent: string,
    workExperienceTitle: string,
    workExperience: WorkExperience[];
    educationTitle:string,
    education: Education[],
    skillsTitle:string,
    skillsSoft:Skills[];
    skillsHard:Skills[];
}
