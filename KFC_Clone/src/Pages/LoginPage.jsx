import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const {toggleLogin,userNameData} = useContext(AuthContext);
    const nav = useNavigate()
    function signup() {
        console.log("manas");
        nav('/signin')
    }
    async function login() {
        if (email === " " || password === "") {
            setError("All Field Requierd !")
        } else {
            setError("")
            let res = await fetch("http://localhost:3000/user");
            let data = await res.json();
            let user = data.some((users) => users.email === email && users.password === password)
            if (user) {
                alert("login succesful")
                toggleLogin();
                data.map((e)=>{
                    if(e.email===email)
                    {
                        userNameData(e.fname);
                    }
                })
                nav('/')
            } else {
                setError("invalid crediential !")
            }
        }
    }
    return (
        <>
            <div className="loginform">
                <div className="header" style={{fontFamily: "Impact, fantasy",
                fontSize: "2rem"}}>Log In
                </div>
                <div className="logo">
                    <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg" alt="logo" />
                </div>
                <div className="error">{error}</div>
                <div className="form">
                    <input type="email" placeholder="Email-id" required onChange={(ev) => setEmail(ev.target.value)} />
                    <input type="password" placeholder="Password" required onChange={(ev) => setPassword(ev.target.value)} />
                </div>
                <div className="btn">
                    <button onClick={login}>Login</button>
                </div>
                <div className="signup-btn">
                    <p style={{fontFamily:"Arial",fontSize:"1.5rem"}}>Click here for <button onClick={signup}>Signup</button> ?</p>
                </div>
            </div>
        </>
    )
}
export default LoginPage;