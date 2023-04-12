import React,{ useState} from 'react';
import { useHistory} from 'react-router-dom';
import { apiAccount } from '../api/account';    

function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");


    const history = useHistory();

    const loginAction = async(e)=>{
        e.preventDefault();

        if([username.length,password.length].includes(0)){
            alert("Username or password not found");
            return false;
        }

        const res = await apiAccount.login(username,password);
        localStorage.setItem("tokenAdmin", "Bearer "+res.jwtToken);
        history.push("/home");
    };
  return (
    <div className="hold-transition login-page">
                    <div className='login-box'>
            <div className="login-logo">
                <a href='/'><b>Admin</b></a>
            </div>

            <div className="card">
            <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username" autoComplete='username' onProgress={()=> loginAction()} onChange={(e)=>setUserName(e.target.value)} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" autoComplete='password'  onProgress={()=>loginAction()} onChange={(e)=>setPassword(e.target.value)}  />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 text-center">
                                    <a href='/register'>Register a new account</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button  className="btn btn-primary btn-block" onClick={(e)=>loginAction(e)}>Sign In</button>
                                </div>

                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Login