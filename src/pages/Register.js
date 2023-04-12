import React,{ useState} from 'react';
import { useHistory} from 'react-router-dom';
import { apiAccount } from '../api/account';    

function Register() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const history = useHistory();

    const registerAction = async(e)=>{
        e.preventDefault();

        if([username.length,password.length].includes(0)){
            setError("Username or password not found");
            return false;
        }

        const res = await apiAccount.register(username,password,"truongjae");
        console.log(res);
        alert(res.message);
        history.push("/");
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
                                <input type="text" className="form-control" placeholder="Username" autoComplete='username' onProgress={()=> registerAction()} onChange={(e)=>setUserName(e.target.value)} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" autoComplete='password'  onProgress={()=>registerAction()} onChange={(e)=>setPassword(e.target.value)}  />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 text-center">
                                    <a href='/login'>Login with account</a>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-12">
                                    <button  className="btn btn-primary btn-block" onClick={(e)=>registerAction(e)}>Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Register