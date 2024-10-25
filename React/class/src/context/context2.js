import React, { Component }  from "react";
import {UseContext,ChannelContext} from "./context1"

class Context2 extends Component{
    render(){
        return (
            <div>
            <UseContext.Consumer>
            {
                (name) => {
                   return (
                   <ChannelContext.Consumer>
                    {
                        channel => {
                        return (
                            <div>
                                User Conext value {name},channel context value {channel}
                            </div>
                        )   
                    }
                }
                    
                   </ChannelContext.Consumer>

                   )
                }
            }
          </UseContext.Consumer>       
            </div>
        )
    }
}
export default Context2