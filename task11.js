class student{

     static count=0; 
     

    constructor(name,age,ph_no,marks){

        this.name=name;

        this.age=age;

        this.ph_no=ph_no;

        this.marks=marks;

        student.countStudent();

    }

    static countStudent(){

        

        return(student.count++);     

    }

    eligible(){

        if(this.marks >=40){

            console.log(`${this.name} age ${this.age} is eligible`);

        }

        else if(this.marks<40){

            console.log(`${this.name} age ${this.age} is not eligible`);

        }

    }

}

const Rakesh=new student('Rakesh',18,1234,34);

const Hiya=new student('Hiya',15,2345,35);

const Diya=new student('Diya',16,4567,60);

const Siya=new student('Siya',17,7891,70);

const Rooh=new student('Rooh',19,3456,80);

console.log(student.countStudent());

Rakesh.eligible();

Hiya.eligible();

Diya.eligible();

Siya.eligible();

Rooh.eligible();
