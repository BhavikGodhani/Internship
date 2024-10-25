import React,{Component} from "react";

function ArrayList(){
    let arr = ["a","b","c"]
    
            clickUpdate = () => {
                for(let i = 0;i<arr.length;i++){
                        <li>arr[i]</li>
                    }
                }

     return(
        <div>
     <h1>Bhavik Godhani</h1>
    <button type="button" onClick={clickUpdate()}>Click</button>
        </div>
            )

}  

export default ArrayList