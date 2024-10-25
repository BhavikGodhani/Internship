// let obj = {
//     name:"Bhavik",
// }

// function personName(name){
//     console.log(`My name is ${this.name} and old name is ${name}`);
// }

// personName.apply(obj,["kano",21])
// personName.call(obj,"kano",21)
// let a = personName.bind(obj,"kano")
// a()

// function bindfunc(){
//      this.x = 10;
//     return  function ()  {
//           return this.x
//     }
// }

// let aa = bindfunc()

// let bb = aa.bind(bindfunc);
// console.log(bb());

// let obj = {
//         x: 5,
//         y: 10,
//         showContext: function() {
//             console.log(this, this.x, this.y);
//         }
//     };
    
    
//     // obj.showContext() 
    
    
//     const newFunction = obj.showContext;
    
//     // newFunction();
    
//     newFunction.bind(obj)()
//     newFunction.call(obj)
//     newFunction.apply(obj)

    var obj = {
        name: "John",
        greet: function () {
          console.log("Hello, my name is " + this.name);
        },
      };
  
      // Bind the greet method to the obj object
      var boundGreet = obj.greet;
  
      // Call the bound greet method
      boundGreet(); // Output: "Hello, my name is John"