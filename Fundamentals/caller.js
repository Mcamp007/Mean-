function caller(param1,param2)){
      if (typeof param1 == "function" && typeof param2 == "function") {
        console.log("its a function");

         param1();
         param2();
       }

      }
caller(function(){
  console.log("hey there")
});
}


   function someFunc(){
      console.log('hey there, i am a function');
   }
