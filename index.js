let name = {
    firstname : "Monu",
    lastname : "Carpenter",
    printFullName: function()
    {
        console.log(this.firstname+" "+this.lastname);
    }
}
name.printFullName();
let name2 = {
    firstname : "Aman",
    lastname : "Gupta",

}
//function borrowing;
name.printFullName.call(name2);
//.........................................
let name3 = {
    firstname : "Monu",
    lastname : "Carpenter"
  
} 
let  printFullName2   =  function(hometown,state)
    {
        console.log(this.firstname+" "+this.lastname+" "+hometown+" "+state);
    }

let name4 = {
    firstname : "Aman",
    lastname : "Gupta",

}
//function borrowing;
printFullName2.call(name3,"Shajapur","Madhaypradesh");
printFullName2.call(name4,"Agar","Madhaypradesh");
//...............The Apply method is made for passsing the values using arrays and the array list ;;
printFullName2.apply(name3,["Agar","Madhyapradesh"]);
let arr = ["Goa","Delhi"];
printFullName2.apply(name3,arr);
//...................................bind method;;
let printMyName  = printFullName2.bind(name3,"Shajapur","Madhaypradesh");
//it bind and keep a copy of the method and makes a method in simple language so that we can make it to use later 
printMyName();
