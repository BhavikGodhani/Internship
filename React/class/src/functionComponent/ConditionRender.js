import React from 'react'

function ConditionRender({name,impontance}) {
    return (
    <div>
      {name} {impontance > 0 && " "} {impontance > 0 && <i>(impontance :-{impontance})</i>}
    </div>
  )
}


function Condition(){
   return(
    <section>
        <h1>Bhavik</h1>
        <ul>
            <ConditionRender name="Jay" impontance={9} />
            <ConditionRender name="Aman" impontance={0} />
            <ConditionRender name="Bhavik" impontance={6} />
        </ul>
    </section>
   )
}

export default Condition;


///////////////////////////////////////////////////////////////////////////
// import React from 'react'

// function ConditionRender({name,isPacked}) {
//     return (
//     <div>
//       {name} {isPacked && "*"}
//     </div>
//   )
// }


// function Condition(){
//    return(
//     <section>
//         <h1>Bhavik</h1>
//         <ul>
//             <ConditionRender name="Jay" isPacked={true} />
//             <ConditionRender name="Aman" isPacked={true} />
//             <ConditionRender name="Bhavik" isPacked={false} />
//         </ul>
//     </section>
//    )
// }

// export default Condition;