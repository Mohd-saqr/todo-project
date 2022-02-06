  //  let name= prompt("Enter your Name")
  //  let gender=prompt("Enter your gender","Mr or Ms")
  //  let age = prompt("Enter your age")
  //  if(age >0)
  //    alert("your age is greater than zero And your age :" + age);
  //      else
  //   alert("your age is less than zero And your age :" + age);
    
  //  let ask = prompt("do you want to continue", "continue");
  //  if (ask != null) {

  //     switch(gender){
  //       case "Mr": 
  //       alert("wellcom Mr" + name + "To my site") 
  //       break;
      
  //       case "MS" : 
  //       alert("wellcom Ms  " +"" +name+ +  "" + "To my site")
  //       break;
  //       default:alert("wellcom " +""+ name +  + "" + "To my site")
  //     }

  //  }
  // --------------------------------------------------------------------------------
  //  var q= prompt("Did you graduate from university ?")
  //  var q= prompt("Are you interested in programming? ")
  //  var q= prompt("Did you now about JAVA language ?")
  //  var q= prompt("If your answer is yes, do you want to learn?")
  var ask=["Did you graduate from university ?","Are you interested in programming?","Did you now about JAVA language ?","If your answer is yes, do you want to learn?"]
  var Ansr =[];
  for(let i=0;i<=ask.length -1;i++ ){
    let t1= prompt(ask[i]);
    console.log(t1);
     while(t1 != "yes" && t1!= "no" ||t1== "" ) {
        t1= prompt(ask[i]);
     }
     Ansr.push(t1)
    
   }
  
  for(i=0;i<=Ansr.length-1;i++){
    console.log(Ansr[i]);

  }
  alert("Welcom ")
  // || q2== "" ||q3== ""||q3== ""

   
     
   
    

   


  
   

   
  
