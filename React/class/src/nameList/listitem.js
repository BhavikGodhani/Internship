import React from "react"

let guest = 0;

function Cup() {
    console.log("before", guest);
  guest = guest + 1;
  console.log("after",guest);
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default Cup

