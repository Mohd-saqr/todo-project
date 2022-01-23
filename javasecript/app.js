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
        alert("wellcom Ms  " +name+ "  To my site")
        break;
        default:alert("wellcom " + name + "  To my site")
      }

   }

   
  
