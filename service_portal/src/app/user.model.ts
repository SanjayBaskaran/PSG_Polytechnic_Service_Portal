export class User{
  rno:String;
  stud_name:String;
  gender:String;
  dob:Date;
  stud_address:String;
  stud_pass:String;
  photo:Blob;
  stud_mobile:Number;
  stud_email:String;
  father_name:String;
  mother_name:String;
  year_of_joining:Number;
  year_of_passing:Number;
  batch_id:String;
  dept_id:String;
  programme_name:String;
  constructor(rno:String,
    stud_name:String,
    gender:String,
    dob:Date,
    stud_address:String,
    stud_pass:String,
    photo:Blob,
    stud_mobile:Number,
    stud_email:String,
    father_name:String,
    mother_name:String,
    year_of_joining:Number,
    year_of_passing:Number,
    batch_id:String,
    dept_id:String,
    programme_name:String){
      this.rno= rno;
      this.stud_name=stud_name;
      this.gender= gender;
      this.dob= dob;
      this.stud_address=stud_address;
      this.stud_pass=stud_pass;
      this.photo=photo;
      this.stud_mobile=stud_mobile;
      this.stud_email=stud_email;
      this.father_name = father_name;
      this.mother_name=mother_name;
      this.year_of_joining=year_of_joining;
      this.year_of_passing=year_of_passing;
      this.batch_id=batch_id;
      this.dept_id=dept_id;
      this.programme_name=programme_name;
    }
}
