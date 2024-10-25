    import React,{Component} from 'react'
    import $ from 'jquery';
    import 'jquery-ui/ui/widgets/datepicker';
    import { gsap } from 'gsap';
    
    class Test1 extends Component {
        state = {
            data: null,
            loading: true,
            error: null
          };
        componentDidUpdate(prevProps) {
            // Fetch new data if a prop has changed
            if (this.props.someProp !== prevProps.someProp) {
              this.setState({ loading: true });
              fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => response.json())
                .then(data => this.setState({ data, loading: false }))
                .catch(error => this.setState({ error, loading: false }));
            }
          }
        
          render() {
            const { data, loading, error } = this.state;
        
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error: {error.message}</div>;
        
            return <div>Data: {JSON.stringify(data)}</div>;
          }
        }
        
        export default Test1
        
        ///////////////////////////////////////////////////////////////////
    //     state = {
    //       data: null,
    //       loading: false,
    //       error: null
    //     };
      
    //     fetchData = () => {
    //       this.setState({ loading: true });
    //       fetch("https://jsonplaceholder.typicode.com/posts/1")
    //         .then(response => response.json())
    //         .then(data => this.setState({ data, loading: false }))
    //         .catch(error => this.setState({ error, loading: false }));
    //     };
      
    //     render() {
    //       const { data, loading, error } = this.state;
      
    //       return (
    //         <div>
    //           <button onClick={this.fetchData}>Fetch Data</button>
    //           {loading && <div>Loading...</div>}
    //           {error && <div>Error: {error.message}</div>}
    //           {data && <div>Data: {JSON.stringify(data)}</div>}
    //         </div>
    //       );
    //     }
    //   }
        //   componentDidMount() {
        //     gsap.fromTo(this.box, 
        //       { opacity: 0, x: -100 },
        //       { opacity: 1, x: 0, duration: 1 }
        //     );
        //   }
        
        //   render() {
        //     return <div ref={div => (this.box = div)} style={{ width: 100, height: 100, backgroundColor: 'blue' }}></div>;
        //   }
        // }
           


     //////////////////////////////////////////////////////////////    third party library


    //     componentDidMount() {
    //       $(this.datepicker).datepicker();
    //     }
      
    //     render() {
    //       return <input ref={input => (this.datepicker = input)} />;
    //     }
    //   }

    /////////////////////////////////////////////////setting up submission
    // componentDidMount() {
    //     this.socket = new WebSocket('wss://example.com/socket');
    
    //     this.socket.onmessage = (event) => {
    //       console.log('Message from server:', event.data);
    //     };
    
    //     this.socket.onopen = () => {
    //       console.log('WebSocket connection opened');
    //     };
    
    //     this.socket.onclose = () => {
    //       console.log('WebSocket connection closed');
    //     };
    //   }
    
    //   componentWillUnmount() {
    //     // Clean up the WebSocket connection when the component unmounts
    //     if (this.socket) {
    //       this.socket.close();
    //     }
    //   }
    
    //   render() {
    //     return <div>WebSocket Component</div>;
    //   }
    // }
   