

class Student
{
  constructor( name , age , marks )
  {
    this.name = name ;
    this.age = age ;
    this.marks = marks ;
  }
  setPlacementAge(minPlacementAge)
 {
   return (minMarks) =>
   {
    if(this.marks > minMarks  && this.age > minPlacementAge)
    {
      console.log(this.name + " is ready for placements");
    }
    else{
         console.log(this.name + " is not ready for placements");
    }
   }
  }
}

const Monu = new Student ("Monu",85,45);
const Yogesh = new Student ("Yogesh",55,45);
Monu.setPlacementAge(18)(40);
