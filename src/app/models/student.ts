import { IDocuments } from './documents';

export class IStudents {
    constructor(
    public name: string,
    public password: string,
    public category: string,
    public document: IDocuments,    
    public dob: string,
    public motherName: string,
    public fatherName: string,
    public lastScore: number,
    public imgUrl: string,
    public courseName: string,
    public id: number){}

    // constructor(userName:string,category: string, dob:string, motherName: string, fatherName:string,lastScore: number){
    //     this.userName = userName;
    //     this.category = category;
    //     this.dob = dob;
    //     this.motherName = motherName;
    //     this.fatherName = fatherName;
    //     this.lastScore =lastScore;
    //     this.courseName = "INFORMATION TECHNOLOGY"
    //     this.imgUrl = "https://cdn.mos.cms.futurecdn.net/VTha9donMfgC5gbE2z4FKG-1200-80.jpg";
    // }
}