import React from 'react'

function Main() {
  return (
    <div className="content-wrapper">

    <section className="content">
        <div className="container-fluid">
            <h2 className="text-center display-4">Wellcome to Admin</h2>
            <div className="row">
                <div className="col-md-8 offset-md-2">

                    <img src='images/admin.png' alt='admin' style={{marginTop: '10vh', marginLeft:'18vw'}} />
                    {/* <form action="#">
                        <div className="input-group">
                            <input type="search" className="form-control form-control-lg" placeholder="Type your keywords here"/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-lg btn-default">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    </section>
  </div>
  )
}

export default Main