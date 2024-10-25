

// function ApiCall() {
//     const [posts,setPosts] = useState({});
//     const [id,setid] = useState(1)
//     const [idfromButton,setidfromButton] = useState(1);

// const handleClick = () => {
//     setidfromButton(id)
// }

//     useEffect(() => {
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${idfromButton}`)
//         .then((res) => {
//             // console.log(res)
//             setPosts(res.data) 
//         }).catch((err) => { 
//             console.log(err);
//         })
//     },[idfromButton])
//   return (
//     <div>
//    <input type='text' value={id} onChange={e => setid(e.target.value)} />
//      <button type="button" onClick={handleClick}>Click</button>   
//      <div>{posts.title}</div>
//     </div>
//   );
// }
export default ApiCall


















////////////////////////////////////////////////////////////
//  class ApiData extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             items:[],
//             error:"",
//         }
//     }

//     componentDidMount(){
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then((response) => {
//             this.setState({
//             items:response.data
//             })
//         })
//         .catch((error) => {
//             this.setState({
//                error:"Error retriving data",
//             })
//         })
//     }
//   render() {
//    const {items,error} = this.state;
//     return (
//       <div>
//         List of posts
//         {
//             items.length?items.map((x) => <div key={x.id}>{x.title}</div>):null
//         }{
//             error ? <div>{error}</div>:null
//         }
//         </div>
//     )
//     }
// }

// export default ApiData