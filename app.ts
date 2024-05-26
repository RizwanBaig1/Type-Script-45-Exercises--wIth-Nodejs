// Quistion-2
/*let personName:string = "Rizwan Baig";
console.log("Hellow",personName,"would you like to learn some phython today?");*/

//Qustion-3 name cases
/*let personName:string = "rizwan Baig";
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.replace(/\b\w/g,(char) =>char.toUpperCase()));*/

//Question-4 famous quote
//console.log('Quaid-e-Azam said,"work,work and hard work"');

//Question-5
/*let famousPerson :string = "Quaid-e-Azam";
let message :string = 'said,"work,work and hard work."';
console.log(famousPerson, message);*/

//Question-6
/*let whiteSpaceName:string = "\n\t Rizwan Baig\t\n";
console.log( whiteSpaceName);

let withoutWhitespaceName:string =  whiteSpaceName.trim();
console.log(withoutWhitespaceName);*/


//Question-7 & 8
//console.log(4+4);
//console.log(16-8);
//console.log(2*4);
//console.log(16/2);

//Question-9
/*let myFavNum:number = 6;
let message:string = "my Favorite Number is"
console.log(message, myFavNum);*/


//Question-10
/*console.log(4+4); //Addition
console.log(16-8); //Subtraction
console.log(2*4);  //Multiplication
console.log(16/2);*/  //Division


//Question-11
//let friendsName = ["Rizwan","Irfan","Shan"];
//friendsName.forEach(friend=>console.log(friend));


//Question-12
//let friendsName = ["Rizwan","Irfan","Shan"];
//friendsName.forEach(friend =>console.log(`Hello ${friend},are u fine?`));


//Question-13
//let favTransport = ["Bike","Car","Bus","Aero plane"];
//favTransport.forEach(transport =>console.log(`would i like to own a ${transport}`));


//Question-14
//let guest = ["rizwan","Irfan","Shan"];
//guest.forEach(invite =>console.log(`Please to day take dinner with me ${invite}`));


//Question-15
/*let guestList = ["Rizwan","Irfan","Shan"];
let dontCome = guestList[0]
console.log(dontCome, "nahe aa rahy.");
guestList.splice(0,1,"Hassan");
guestList.forEach(guest=>console.log(`please to day take dinner with me ${guest}`));*/



//Question-16
/*let guestList = ["Rizwan","Irfan","Shan","Ali"];
let dontCome = guestList[0]
console.log(dontCome, "nahe aa rahy.");
guestList.splice(0,1,"Hassan");
console.log("We have found bigger table for dinner");
guestList.unshift("Anas");
guestList.push("Saad")
// get a middle index of aary
let middleIndex: number = Math.floor(guestList.length/2);
//adding a middle index value in our aary
guestList.splice(middleIndex,0,"faiz");
console.log("update list of our arry");
guestList.forEach(newList=> console.log(`please to day take dinner with me ${newList} thanks`));*/




//Question-17
/*let guestList = ["Rizwan","Irfan","Shan","Ali"];
let dontCome = guestList[0]
console.log(dontCome, "nahe aa rahy.");
guestList.splice(0,1,"Hassan");
console.log("We have found bigger table for dinner");
guestList.unshift("Anas");
guestList.push("Saad")
// get a middle index of aary
let middleIndex: number = Math.floor(guestList.length/2);
//adding a middle index value in our aary
guestList.splice(middleIndex,0,"faiz");
console.log("update list of our arry");
guestList.forEach(newList=> console.log(`please to day take dinner with me ${newList} thanks`));
//inform that only two guest can be invited for dinner
console.log("saadly,the new table wont arrive on time, so I can only invite two guest to dinner with me");
//using while-loop to remove guests from the arry untill only two names remain
while(guestList.length > 2) { 
    let removeGuest = guestList.pop();
    console.log(`soory, ${removeGuest} I can not invite you to dinner`)};
  //Sending a invitation last two guest on the list
  console.log("invitation to the last 2 guest");
  guestList.forEach(lastTwo=> console.log(`Lucky ${lastTwo} you are still inivited to dinner`));
  //Removing last two guest from arry
  guestList.pop();
  guestList.pop();
  console.log("Empty List",guestList);*/


  
/*//Question-18
//making a arry of arry and print orignal form
let countriesToVisited:String[] = ["India","Afghanistan","China","Brazil"];
console.log(countriesToVisited);
//print the aary in alphabatical order with out modifying the actual list
console.log("Alphabetical order:",[...countriesToVisited].sort());
//show that the arry still in original order
console.log("still in original Order:",countriesToVisited);
//print the arry in reversed order with out modifying the orignal arry
console.log("Reverse order:", [...countriesToVisited].reverse());
//we have change the original arry list
console.log("orinal arry reversed:",countriesToVisited.reverse());
// Print the arry that it is back to its original order
console.log("Back to original form:", countriesToVisited.reverse());
//print the arry to show that its order has been changedin alphabetical order now
console.log("sorted in Alphabetical order:",countriesToVisited.sort());
//we have changed again the original arry order now in reverse order again
console.log("original arry reversed again:", countriesToVisited.reverse());*/



 //Question-19
/*let guest = ["rizwan","Irfan","Shan"];
//guest.forEach(invite =>console.log(`Please to day take dinner with me ${invite}`));
let lengthGuest: number = guest.length;
console.log(`We are inviting total ${lengthGuest} guest.`);*/



//Question-20
/*let subjLIst:string[] =["Math","English","computerScience","History"];
//print the messageof list
console.log("subjLIst");
//print the value of Arry in the form of list
subjLIst.forEach(subj =>console.log(subj));*/



//Question-21
/*interface itCourse {
  courseName:string,
  location:string,
  onSiteStudent: number;
}
let itCourse = {
     courseName: "Typescript and java script",
     location : "Governor House Sindh",
     onSiteStudent: 50000};
     console.log(itCourse);*/



     //Question-22
     //creating a arry 
    /* let errorArry =["1","2","3","4"];
     
     //produceing Error ! by Accessing invalid index of arry
     //console.log(errorArry[8]);
     //error removed
     console.log(errorArry[2]);*/



     //Question-23
     // Making a Veriables
     /*let five =5;
     let ten =10;
      //test 1
      console.log("Test 1: fIve is equal to 5");
       console.log(five == 5);

       //test 2
       console.log("test2:ten is equal to 10");
       console.log(ten == 10);
        //test 3
       console.log("\n test 3:Five is not equal to ten");
       console.log(five != 10);
        // test 4
        console.log("test 4:10 is greatear than 5");
        console.log(10>5);

        //test 5
        console.log("test 5:5 is less than 10");
        console.log(5<10);
        
        //test 6
        console.log("test 6:10 is less than 5");
        console.log(10<5);

        //test 7
        console.log("test 7: 5 is greather than 10");
        console.log(5>10);
        
        //test 8
        console.log("test 8: Five is not equal to 5");
        console.log(5 !=5);

        //test 9
        console.log("tes 9: 10 is not equal to 10");
        console.log(10 !=10);
        
        //test 10
       console.log("test 10: five is equal to  10");
        console.log(five == 10);*/


//Question-24
//Define variable
/*let apple = "apple";
let upperCaseApple = "APPLE";
let ten =10;
let Twenty =20; 
let fruits = ["apple","banana","orange"];

//Test for equality and in equality With strings
console.log("is apple is equql to apple?");
console.log(apple =="apple");

console.log("is apple is not equal to apple");
console.log(apple != "applle");

// Test using Lowercase function
console.log("Is AAPPLE is equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() =="apple");

console.log("Is AAPPLE is not equal to apple after converting to lowercase");
console.log(upperCaseApple.toLowerCase() !="apple");

//Numerical testto
//equal 
console.log("\n Is ten is equal to twenty?");
console.log(ten == Twenty);
//not equal to
console.log("Is ten is not equals to twenty?");
console.log(ten != Twenty);
//greather than
console.log("\n Is ten is greater than one?");
console.log(ten>1);
//less than
console.log("\n twenty is less than 10");
console.log(Twenty<10);
//greather than or equal to
console.log("\n Is ten is greather than or equal to 5?");
console.log(ten>=5);
// Less than or equal to
console.log("\n twenty is less than or equal to 10?");
console.log(Twenty<= 10);
// testes useing"&" and "or" Opreators
//using && (and opreator)
console.log("\ntwenty is not equal to 10 and twenty is greather than 10");
console.log(Twenty != 10 && Twenty > 10);

console.log("\ntwenty is not equal to 10 and twenty is greather than 40");
console.log(Twenty != 10 && Twenty > 40);
//using || (or operator)
console.log("\n Twenty is greater than 50 and twenty is equal to 20");
console.log(Twenty > 50 || Twenty == 20);

console.log("\n Twenty is greater than 50 and twenty is not equal to 20");
console.log(Twenty > 50 || Twenty != 20);

//test whether an item is include in arry 
console.log("Is orange include in my Fruits arry?");
console.log(fruits.includes("orange"));
// not includec
console.log("\n Is orange is not include in my Fruits arry");
console.log(!fruits.includes("orange"));*/


//Question-25
//Define variable
/*let alienColor = "Green";
if (alienColor === "Green"){
  console.log("Players just earnd 5 points");
  }
  if(alienColor === "Black"){
    console.log("Alien color is Black");
    }*/


  //Question-26
 /*let alienColor = "Green";
 // first version 
if (alienColor === "Green"){
  console.log("Players just earnd 5 points for shooting alien");
  }
  else{
    console.log("Players just earnd 10 point");
    }
    //Secand version
  if (alienColor === "Black"){
  console.log("Players just earnd 5 points");
  }
  else{
    console.log("I am come from else statment");
    }*/


  //Question-27
  //define variable
 /* let alienColor = "green";
  // using if and if-else statments
  if(alienColor === "green"){
  console.log("you shot down green alien ,you have earned 5 points");
}
  else if(alienColor === "yellow"){
    console.log("you shot down yellow, alien you have earned 10 points ");
  }
  else if(alienColor === "red"){
   console.log("you shot down red alien you have earned 15 points ");
  }

  //version 2
  let alienColor2 = "yellow";
  if(alienColor2 === "green"){
    console.log("you shot down green alien ,you have earned 5 points");
  }
    else if(alienColor2 === "yellow"){
      console.log("you shot down yellow alien, you have earned 10 points ");
    }
    else if(alienColor2 === "red"){
     console.log("you shot down red alien you have earned 15 points ");
    }
    //version 3
    let alienColor3 = "red";
    if(alienColor3 === "green"){
      console.log("you shot down green alien ,you have earned 5 points");
    }
      else if(alienColor3 === "yellow"){
        console.log("you shot down yellow, alien you have earned 10 points ");
      }
      else if(alienColor3 === "red"){
       console.log("you shot down red alien you have earned 15 points ");
      }*/


    //Question-28
    //creating a variable;
   /* let age = 22;
    if (age < 2){
      console.log("you are a Baby.");
      }
      else if(age >= 2 && age < 4){
        console.log("you are a Toddler.");
        }
      else if (age >= 4 && age < 13){
        console.log("you are a kid");
        }  
      else if(age >= 13 && age < 20){
        console.log("you are a teenager.");
     }  
     else if(age >=20 && age < 65){
      console.log("you are an adult.");
    }
    else if(age >= 65){
      console.log("you are a elder.");
    }*/


    
  //Question-29
 /* let favoriteFruits = ["Mango","Apple","Banana"]
 //using five independent arry
if(favoriteFruits.includes("Mango")){
 console.log("I really like mangos.");
}
if(favoriteFruits.includes("Banana")){
  console.log("I really like bananas.");
}
if(favoriteFruits.includes("Apple")){
  console.log("I really like apples.");
}
if(favoriteFruits.includes("Orange")){
  console.log("I really like orange");
}

if(favoriteFruits.includes("Strawberrys")){
  console.log("I really like strawberrys");
}*/



  //Question-30
  /*let userNames = ["A","B","C","Admine","D"];
  //using For Each loop on arry
  userNames.forEach(oneUser =>{
    if(oneUser === "Admine"){
      console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
      console.log(`Hello ${oneUser}, thank you for logging in again.`);
      }
    })*/


      //Question-31
     /* let userNames = ["A","B","C","Admine","D"];
        //re assign arry empty for print empty arry
          userNames = [];
       if(userNames.length === 0){
        console.log("your arry in empty We need to find some users!");
        }else{
              //using For Each loop on arry
              userNames.forEach(oneUser =>{
              if(oneUser === "Admine"){
              console.log(`Hello ${oneUser}, would you like to see a status report?`)
              }else{
             console.log(`Hello ${oneUser}, thank you for logging in again.`);
            }
          })
        }*/

 //Question-32
 //arry of current User
 /*let currentUser = ["A","B","C","D","E"];
// arry of new users
 let newUser = ["F","G","A","H","B"];
 //loop through new user
 newUser.forEach(newOneUser=> {
  //making a candition for username already exist and save in ourcandition variable
  let ourCandition = currentUser.some(currentOneUser =>currentOneUser.toLowerCase()=== newOneUser.toLowerCase())
  
  //print diffrent messages using if-Else statements
  if(ourCandition){
    console.log(`sorry ${newOneUser} is already taken!`);
}else{
  console.log(`This Username ${newOneUser} is available.`);
  } 
})*/



 //Question-33
//creating a Arry
/*let numbers = [1,2,3,4,5,6,7,8,9];
//using for loop
for(let oneNumber of numbers){
  let ordinalEnding:string;
  if(oneNumber === 1){
    ordinalEnding = "st"
  }else if
  (oneNumber === 2){
    ordinalEnding = "nd"
  }else if (oneNumber === 3){
    ordinalEnding = "rd"
  }
  else{
    ordinalEnding = "th"
  }
  console.log(`${oneNumber}${ordinalEnding}`);
  }*/


   //Question-34
   //creating a arry 
   /*let pizza = ["Chicken Tika","Mali Cheese","Fajita"];
     //using for loop
     for (let onePizza of pizza){
      console.log(`I like ${onePizza} Pizza`);
      }

      //print a message out side of for loop 
      console.log("pizza is love");
      console.log("I like pizza");*/


      /* //Question-35
       //creating a arry
       let petAnimals = ["cat","dog","rabbit"];
       //using for loop
      for(let onePet of petAnimals){
        console.log(`A ${onePet} would make a great pet.`);
        }
        //message out side of for loop
      console.log("Any of these animal would be a great pet!");*/


      //Question-36
      /*function makeShirts (size:string,printMessage:string){
        console.log(`You Selected ${size} size shirt with ${printMessage}`);
      }
      makeShirts("medium" ,"Love Pakistan on shirt");*/


  //Question-37
  //Making a Function with by default value
  /*
  
  function makeShirts (size:string = "large",printMessage:string = "I love TypeScript"){
    console.log(`Creating a ${size} size shirt with ${printMessage} print on shirt`);
  }
 // Calling a function with by default values
  makeShirts();
// Calling a function with medium size and default message 
makeShirts("Medium");
//Calling a function with small size and also diffrent print Message
makeShirts("small","I love Java script");*/




  //Question-38
 //Creating a fuction 
 /*function describCity (city:string,country:string = "pakistan"){
  console.log(`${city} is in ${country}`);
  } 
  // calling the function
  describCity("Karachi");

  describCity("lahore");

  describCity("Dubai","U.A.E");*/


 /*  //Question-39
   //creating a function with parameters wich return a values in string
function cityCountry (city:String, country:string) :string{
  return `${city},${country}`;
}

//calling afunction and print the return value  
cityCountry("karachi","pakistan");
console.log(cityCountry("karachi","pakistan"));
  

console.log(cityCountry("Dubai","U.A.E"));
console.log("TOKYO","Japan");*/



  /* //Question-40
   //define the makeAlbum functin
   function makeAlbum (artistName:string,albumTitle:string,tracks?:number){
    let album:{artist:string,title:string ,
      tracks?:number} = {
      artist:artistName,
      title:albumTitle,
    };
    if (tracks !== undefined){
      album.tracks = tracks; 
    }
    return album;
   }
   // calling three functions  and creating 3 variable with diffrent values
   let album1 = makeAlbum("Rizwan","Album title 1");
   let album2 = makeAlbum("irfan","Album title 2") ;

   // creating a makeAlbum function with thrid parameter
   let album3 = makeAlbum("Ali","Album title 3",10);

   // printing the variables
   console.log(album1);
   console.log(album2);
   console.log(album3);*/


 /* //Question-41
  //define afunction to print each magician name from an array
function showMagicians(magicians:string[]){
  magicians.forEach(name => console.log(name)
  ); 
}
//define an array contaning magicians name
let magicianNames = ["Irfan","Rizwa","Shan"] 
// call the function to print each magician name 
showMagicians(magicianNames);*/


/*//Question-42
// define the function to show magician names
function showMagicians(magician:string[]){
  magician.forEach(name => console.log(name)
  )
}
//function to make magician great through.map() it will modify arry
function makeGreat(magician:string[]){
return magician.map(name =>`The Great ${name}`);
}
//define a arry of magician names
let magicianNames = ["Irfan","Rizwan","shan"];
//call makeGreat function to modify magician names and save it in a variable greatmgician
let greatMagician = makeGreat(magicianNames);
//call showMagicians that show modified list of magician
showMagicians(greatMagician);*/



/*//Question-43
//define the function to show magician names
function showMagicians(magician:string[]){
  magician.forEach(name => console.log(name)
  )
}
//function to make magician great through.map() it will modify arry
function makeGreat(magician:string[]){
return magician.map(name =>`The Great ${name}`);
}
//define a arry of magician names
let magicianNames = ["Irfan","Rizwan","shan"];
// Making acopy of original arry through.slice() function

let copyMagicianName = magicianNames.slice()
//modify the copied arry to include"The Great"with their names.
let copyGreatMagicion = makeGreat(copyMagicianName)
//show both arrys original and copied
//original arry
console.log("original arry\n");
showMagicians(magicianNames);
//copy arry 
console.log("\ncopied arry \n");
showMagicians(copyGreatMagicion);*/



 /*//Question-44
 //define a function with a rest parameter that accept Items argluments representing our sandwich  
function makeSandwich(...items:string[]){
  console.log("\nMaking a sandwich with the following items:\n");
  items.forEach(singleItem =>console.log(singleItem))
  console.log("\nNow Enjoy Sandwich");
  }
  // call the function 3 times with three diffrent number of arrguments 
  makeSandwich("Egg","chicken","Cheese","Mayo");

  makeSandwich("Egg","Butter","Cheese","Chicken","Ketchup","Cream","Bread");

  makeSandwich("Egg","Bread");*/



  //Question-45
  //define a function to create a car object with optional options 
   function createCar (manufacture:string, modle:string,...options:string[]) {
    //Initialize a car object with manufacturer and model
    let car:any ={ 
      manufacture: manufacture,
      modle: modle,
    };
    // add additional option to the car object
    options.forEach(option => {
      let [key,value] = option.split(":");
      car [key.trim()] = value.trim();
    });
    return car;
   }
   // call the function to create a car object
   let myCar = createCar("Toyota","Corrolla","color:Black","sunroof:True");

   //Print the variable to ensure all the information is stored correctly in the car object
   console.log(myCar);
   
  

    
   
 




  

  

 





 














 










        
        
        
       
              
       
       




     
     
     

     






  
  

