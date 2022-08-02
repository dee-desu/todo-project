function welcoming(name){

    console.log("Hello " +name)



}



var username= prompt("Please insert your name");

welcoming(username)



var Gender = prompt("Please Select Your Gender ");

if(Gender=== "male" || Gender=== "female"){

console.log( Gender)

}

else {

    console.log("Thats not a gender")

}





var age = prompt("Please insert your age?");

if(age > 0){

console.log( "You're "+age+" years old");

}

else {

    console.log("Invalid age ");

}



var useranswer= confirm("Do you want to see the welcoming message?");

console.log(useranswer);

if(useranswer  ==  true){

    if(Gender === "Male"){

alert("Welcome Mr "+username);  }



else if ( Gender === "Female"){

    alert("Welcome  Mrs " + username);

}



} 

let userArr = [];

var r=prompt("Did you do your tasks? (yes/no)")
if(r!=="yes" && r!=="no"){
    console.log("invalid")
}
userArr.push (r)



var x=prompt("Was your day good? (yes/no)")
if(x!=="yes" && x!=="no"){
    console.log("invalid")
}
userArr.push (x)


var y=prompt("Are you pleased with yourself? (yes/no)")
if(y!== "yes" && y!== "no"){
    console.log("invalid")
}
userArr.push (y)
for(let i=0; i < userArr.length; i++)
{
    console.log(userArr [i])
}
