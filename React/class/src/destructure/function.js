import React  from "react";
 
function Destructure2(props){
 const {name,heroname} = props;

 return(
    <h1>
  Welcome {name} a.k.a {heroname}
   </h1>
 )


}


export default Destructure2




////////////////////////////////////////



// function destructure({name,heroname}){
  
//     return <h1>
//         Welcome {name} a.k.a {heroname}
//     </h1>
// }