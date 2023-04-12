import React,{useState} from 'react'
import { apiAccount } from '../../api/account';

function Table() {

    const [username,setUserName] = useState("");
    const [host,setHost] = useState("");
    const [batCode,setBatCode] = useState("");
    const [pyEncode,setPyEncode] = useState("");
    const [pyCall,setPyCall] = useState("");

    const addScript = async()=>{
        const rest = await apiAccount.addScript(username,host,batCode,pyEncode,pyCall);
        alert("Thêm script thành công!");
    };

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-5">
                                <div className="card-header">
                                    <h3 className="card-title">Add script</h3>
                                </div>
                                <div className="card-body">
                                    <div className='container'>
                                        <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Username</label>
                                            <div class="col-sm-10">
                                            <input type="text" class="form-control"  placeholder="Username" autoComplete='username'  onProgress={()=> addScript()} onChange={(e)=>setUserName(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Host</label>
                                            <div class="col-sm-10">
                                            <input type="text" class="form-control"  placeholder="Host" autoComplete='host' onProgress={()=> addScript()} onChange={(e)=>setHost(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Bat code</label>
                                            <div class="col-sm-10">
                                            <textarea class="form-control"  rows="3" autoComplete='batcode' onProgress={()=> addScript()} onChange={(e)=>setBatCode(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Python encode</label>
                                            <div class="col-sm-10">
                                            <textarea class="form-control" rows="3" autoComplete='pyencode' onProgress={()=> addScript()} onChange={(e)=>setPyEncode(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">PyCall</label>
                                            <div class="col-sm-10">
                                            <textarea class="form-control" rows="3" autoComplete='pycall' onProgress={()=> addScript()} onChange={(e)=>setPyCall(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label"></label>
                                            <div class="col-sm-10">
                                            <button className='btn btn-primary' onClick={()=>addScript()}>Save</button>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Table