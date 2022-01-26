export class Student {
  constructor(
    public rno: string,
    public stud_name: string,
    public gender: string,
    public dob: string,
    public stud_address: string,
    public stud_pass: string,
    public photo:Blob,
    public stud_mobile:number,
    public stud_email:string,
    public father_name:string,
    public mother_name:string,
    public year_of_joining:number,
    public year_of_passing:number,
    public batch_id:string,
    public dept_id:string,
    public programme_name:string
  ){
  }
}
