   let name= prompt("Enter your Name")
   let gender=prompt("Enter your gender","Mr or Ms")
   let age = prompt("Enter your age")
   if(age >0)
     alert("your age is greater than zero And your age :" + age);
       else
    alert("your age is less than zero And your age :" + age);
    
   let ask = prompt("do you want to continue", "continue");
   if (ask != null) {
      switch(gender){
        case "Mr": 
        alert("wellcom Mr" + name + "To my site") 
        break;
      
        case "MS" : 
        alert("wellcom Ms  " +"" +name+ +  "" + "To my site")
        break;
        default:alert("wellcom " +""+ name +  + "" + "To my site")
      }

   }
   
   let q1= prompt("Did you graduate from university ?")
   let q2= prompt("Are you interested in programming? ")
   let q3= prompt("Did you now about JAVA language ?")
   let q4= prompt("If your answer is yes, do you want to learn?")
   if(q1== "" || q2== "" ||q3== ""||q3== "" ){
 var Ansr=["","","",""]
  console.log(Ansr);
   }else{
      Ansr = [q1,q2,q3,q4]
    alert(Ansr)
    console.log(Ansr);

   }


  
   

   
  
