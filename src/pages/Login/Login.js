import { useState } from "react";
import Navigation from "../../components/Navbar/Navbar";
import "./login.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function Login() {
  const [username , setUsername] = useState ('')
  const [password , setPassword] = useState ('')
  const navigate = useNavigate()

  const submitHandler = () =>{
    if(username === 'admin' && password === '1234'){
      document.cookie = "username=admin; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
      navigate ('/panel')
    }else{
      Swal.fire({
        title: 'Error!',
        text: 'username or password is wrong',
        confirmButtonText: 'Close',
        confirmButtonColor: '#86C3B2'
      })
    }
  }
  return (
      <>
      <Navigation />
      <div className="login-container">
        <form action="" className="login-form">
          <input type="text" placeholder="username" onChange={(e)=> setUsername(e.target.value)}/>
          <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
          <button type="button" onClick={submitHandler}>Login</button>
        </form>
      </div>
    </>
  );
}
export default Login;
