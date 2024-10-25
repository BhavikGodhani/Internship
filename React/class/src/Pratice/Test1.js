import React, { Component} from 'react'

// export default class Test1 extends Component {


//     componentDidMount(){
//         console.log("Bhavik");
//         fetch("https://jsonplaceholder.typicode.com/posts/1").then((e) => e.json()).then((ans) => console.log(ans));
//     }

//   render() {
//     return (
//       <div>
//          <h1>Bhavik Godhani</h1>
//       </div>
//     )
//   }
// }

class   DataFetcher extends Component {
    state = {
      data: null,
      loading: true,
      error: null
    };
  
    componentDidUpdate(prevProps) {
        console.log(prevProps);
      if (this.props.userId !== prevProps.userId) {
        this.setState({ loading: true });
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.userId}`)
          .then(response => response.json())
          .then(data => this.setState({ data, loading: false }))
          .catch(error => this.setState({ error, loading: false }));
      }
    }
  
    render() {
      const { data, loading, error } = this.state;
  
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
  
      return <div>User Data: {JSON.stringify(data)}</div>;
    }
  }

  export default DataFetcher
///////////////////////////////////////////////////////////////////////////////////////////////

// import React,{useEffect, useState} from 'react'

// export default function Test1() {

//     const [click,SetClick] = useState(0);
//     useEffect(()=> {

//         console.log(click) 
//         console.log("bhavik");
//         fetch("https://jsonplaceholder.typicode.com/posts/1").then((e) => e.json()).then((ans) => console.log(ans));
//     },[click])
        
        
//    return (
//     <>
//     {click}
//     <button onClick={() => SetClick(click + 1)}>click</button>
//     <h1>Bhavik Godhani</h1>
//     </>
//    )
// }
