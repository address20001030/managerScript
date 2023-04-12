import React,{useEffect,useState} from 'react'
import { apiAccount } from '../../api/account';
import './Table.css'
import { baseUrl } from '../../api/baseUrl';

function Table() {
    const [data,setData] = useState(null);
    const [username,setUserName] = useState("");
    const [host,setHost] = useState("");
    const [batCode,setBatCode] = useState("");
    const [pyEncode,setPyEncode] = useState("");
    const [pyCall,setPyCall] = useState("");

    const getAllData = async()=>{
        const res = await apiAccount.getAll();
        setData(res);
    };

    const deleteScript = async(data)=>{
        const res = await apiAccount.deleteScr(data);
        getAllData();
        alert('Xóa thành công!');
    }

    const setDataUpdate = (username,host,batCode,pythonEncode,pythonCall)=>{
        setUserName(username);
        setHost(host);
        setBatCode(batCode);
        setPyEncode(pythonEncode);
        setPyCall(pythonCall);
    }

    const addScript = async()=>{
        const rest = await apiAccount.updateScript(username,host,batCode,pyEncode,pyCall);
        getAllData();
        alert("Update script thành công!");
    };
    

    useEffect(()=>{
        getAllData();
    },[]);

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-5">
                                <div className="card-header">
                                    <h3 className="card-title">Script list  </h3>
                                </div>
                                <div className="card-body">
                                    <table id="example2" className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Username</th>
                                                <th>Host</th>
                                                <th>Bat Code</th>
                                                <th>Python Encode</th>
                                                <th>Python Call</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.map(item=>(
                                                <tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.username}</td>
                                                    <td><div style={{ overflow:'hidden', width:'100px', height:'30px'}}>{item.host}</div><a href={baseUrl + '/script-u/get/host/'+ item.username}><i className="ml-2 fa fa-eye"></i></a></td>
                                                    <td><div style={{ overflow:'hidden', width:'100px',height:'30px'}}>{item.batCode}</div><a href={baseUrl + '/script-u/get/bat/'+ item.username}><i className="ml-2 fa fa-eye"></i></a></td>
                                                    <td><div style={{ overflow:'hidden', width:'100px',height:'30px'}}>{item.pythonEncode}</div><a href={baseUrl + '/script-u/get/py/'+ item.username}><i className="ml-2 fa fa-eye"></i></a></td>
                                                    <td><div style={{ overflow:'hidden', width:'100px',height:'30px'}}>{item.pythonCall}</div><a href={baseUrl + '/script-u/get/py-ca/'+ item.username}><i className="ml-2 fa fa-eye"></i></a></td>
                                                    <td>
                                                        <button className='btn btn-primary mr-2' data-toggle="modal" data-target="#exampleModalCenter" onClick={(e)=>setDataUpdate(item.username,item.host,item.batCode,item.pythonEncode,item.pythonCall)}>Update</button>
                                                        <button className='btn btn-danger' onClick={(e)=>deleteScript(item.username)}>Delete</button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Update script by </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Username</label>
                                            <div class="col-sm-10">
                                            <input type="text" class="form-control"  placeholder="Username" autoComplete='username' value={username} onProgress={()=> addScript()} onChange={(e)=>setUserName(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Host</label>
                                            <div class="col-sm-10">
                                            <input type="text" class="form-control"  placeholder="Host" autoComplete='host' value={host} onProgress={()=> addScript()} onChange={(e)=>setHost(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Bat code</label>
                                            <div class="col-sm-10">
                                            <textarea class="form-control"  rows="3" autoComplete='batcode' value={batCode} onProgress={()=> addScript()} onChange={(e)=>setBatCode(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">Python encode</label>
                                            <div class="col-sm-10">
                                            <textarea class="form-control" rows="3" autoComplete='pyencode' value={pyEncode} onProgress={()=> addScript()} onChange={(e)=>setPyEncode(e.target.value)}></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="inputPassword" class="col-sm-2 col-form-label">PyCall</label>
                                            <div class="col-sm-10">
                                            <textarea class="form-control" rows="3" autoComplete='pycall' value={pyCall} onProgress={()=> addScript()} onChange={(e)=>setPyCall(e.target.value)}></textarea>
                                            </div>
                                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e)=>addScript()}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table