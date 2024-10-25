import React, { Component } from 'react';

const UpdatedComponent = (WrappedComponent, incrementNumber) => {
    class NewCount extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            };
        }

        increment = () => {
            this.setState(prevState => ({
                count: prevState.count + incrementNumber
            }));
        }

        render() {

            return <WrappedComponent
                        count={this.state.count}
                        increment={this.increment}
                        // {... this.props}
                    />;
        }
    }
    return NewCount;
}

export default UpdatedComponent;


// //////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react';

// class UpdatedComponent  extends Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 count: 0,
//             };
//         }

//         increment = () => {
//             this.setState(prevState => {
//                return{count: prevState.count + 1}
//             });
//         }

//         render() {
//             return(
//                 <>
//             {this.props.render(this.state.count,this.increment)}
//             </>
//             )
//         }
// }

// export default UpdatedComponent;