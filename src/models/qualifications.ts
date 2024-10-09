interface QualificationsFields {
    company: string;
    jobTitle: string;
    from: string;
    to: string;
    levelEducation: string;
    institute: string;
    specialization: string;
    year: string;
    gpa: string;
    skill: string;
    yearsOfExperience: string;
    language: string;
    fluency: string;
    competency: string;
}
export class Qualifications {
    company: string;
    jobTitle: string;
    from: string;
    to: string;
    levelEducation: string;
    institute: string;
    specialization: string;
    year: string;
    gpa: string;
    skill: string;
    yearsOfExperience: string;
    language: string;
    fluency: string;
    competency: string;

    constructor(details:QualificationsFields) {
        this.company= details.company;
        this.jobTitle= details.jobTitle;
        this.from= details.from;
        this.to= details.to;
        this.levelEducation= details.levelEducation;
        this.institute= details.institute;
        this.specialization= details.specialization;
        this.year= details.year;
        this.gpa= details.gpa;
        this.skill= details.skill;
        this.yearsOfExperience = details.yearsOfExperience;
        this.language = details.language;
        this.fluency = details.fluency;
        this.competency = details.competency;
    }
}