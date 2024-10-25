// import React from "react";

// class PropsUse extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {
//         // "DataSource" is some global data source
//         comments: DataSource.getComments()
//       };
//     }
  
//     componentDidMount() {
//       // Subscribe to changes
//       DataSource.addChangeListener(this.handleChange);
//     }
  
//     componentWillUnmount() {
//       // Clean up listener
//       DataSource.removeChangeListener(this.handleChange);
//     }
  
//     handleChange() {
//       // Update component state whenever the data source changes
//       this.setState({
//         comments: DataSource.getComments()
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           {this.state.comments.map((comment) => (
//             <Comment comment={comment} key={comment.id} />
//           ))}
//         </div>
//       );
//     }
//   }
///////////////////////////////////////////////////////////////////////////////////////////
import React,{useState} from "react";


function  PropsUse() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
      <>
        <h2>Almaty, Kazakhstan</h2>
        <Panel
          title="About"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel
          title="Etymology"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
        </Panel>
      </>
    );
  }
  
  function Panel({
    title,
    children,
    isActive,
    onShow
  }) {
    return (
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button onClick={onShow}>
            Show
          </button>
        )}
      </section>
    );
  }

export default PropsUse


// return React.createElement("div",{className:"mainClass"},React.createElement("h1",{id:"name"},"Bhavik Godhani"))

 // useEffect(() => {
    //     const interval = setInterval(() => {
    //       let date = new Date();
    //       console.log(date);
    //     }, 1000);
    
    //     // Cleanup function to clear interval on unmount
    //     return () => clearInterval(interval);
    //   }, []);