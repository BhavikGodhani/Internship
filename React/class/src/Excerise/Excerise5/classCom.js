////////////////////////////////////////////////////////////////////

// class LoginPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             Email: "",
//             Password: "",
//             redirectToSignup: false,
//             redirectToAccount: false,
//         };
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }

//     login = () => {
//         const { Email, Password } = this.state

//         let data = JSON.parse(localStorage.getItem("Data"));

//         if(Email == "" && Password == ""){
//            alert("Plz valid Add Email and Password")
//            this.setState({
//             Email: "",
//             Password: "",
//         });
//            return;
//          }
//         else if (!Email) {
//             alert("plz valid Email")
//             return;
//         }
//         else if (!Password) {
//             alert("plz valid Password")
//             return;
//         }
//         else if (data.Email == Email && data.Password == Password) {
//             alert("Login Successfully")
//             this.setState({ redirectToAccount: true });
//         }
//         else {
//             alert("plz valid password and Email");
//             this.setState({
//                 Email: "",
//                 Password: "",
//             });
//             return;
//         }
//     }

//     handleRedirectToSignup = (e) => {
//         e.preventDefault();
//         this.setState({
//             redirectToSignup: true,
//         });
//     }


//     render() {
//         const { Email, Password, redirectToSignup, redirectToAccount } = this.state
//         if (redirectToSignup) {
//             return <Sign />;
//         }
//         if (redirectToAccount) {
//             return <Myaccount />
//         }
//         return (
//             <div className='container'>
//                 <h2>Login</h2>

//                 <h4>Email</h4>
//                 <input type="text" id="Email" placeholder="Email Address" value={Email} onChange={this.handleChange} />
//                 <h4>Password</h4>
//                 <input type="password" id="Password" placeholder="Password" value={Password} onChange={this.handleChange} />
//                 <br />
//                 <input id="login" type="button" value="Sign in" onClick={this.login} />
//                 <p>Don't have an account? <a href="#" onClick={this.handleRedirectToSignup}>Sign Up</a></p>
//             </div>
//         );
//     }
// }


////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////

// constructor(props) {
//     super(props);
//     this.state = {
//         userName: "",
//         Email: "",
//         Password: "",
//         item: [],
//         redirectToLogin: false
//     };
// }
// handleChange = (e) => {
//     this.setState({
//         [e.target.id]: e.target.value
//     })
// }
// redirectToLoginPage = () => {
//     this.setState({ redirectToLogin: true });
// }

// validateEmail = (email) => {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
// }

// validatePassword = (password) => {
//     const lowercaseLetters = /[a-z]/g;
//     const uppercaseLetters = /[A-Z]/g;
//     const numbers = /[0-9]/g;

//     return password.length >= 8 &&
//            lowercaseLetters.test(password) &&
//            uppercaseLetters.test(password) &&
//            numbers.test(password);
// }

// signUp = () => {
//     const { userName, Email, Password,item } = this.state;

//     if (!userName || !Email || !Password) {
//         alert('Please fill all fields');
//         return;
//     }

//     if (!this.validateEmail(Email)) {
//         alert("Please enter a valid email address");
//         return;
//     }

//     if (!this.validatePassword(Password)) {
//         alert('Password must be at least 8 characters long, including at least one lowercase letter, one uppercase letter, and one number.');
//         return;
//     }



//     let userdata = { userName , Email, Password};

//     this.setState({
//         item: [userdata]
//     })
//     alert("Sign up Successfully")

//     localStorage.setItem("Data", JSON.stringify(item));

//     this.setState({
//         userName: "",
//         Email: "",
//         Password: "",
//     });
// }
//     if (redirectToLogin) {
//         return <LoginPage />;
//     }