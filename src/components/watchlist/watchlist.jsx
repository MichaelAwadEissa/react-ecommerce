import React from 'react'
import './watchlist'
export default function Watchlist() {
  return (<>
    <h1>WatchList</h1>
    <div className="container pt-3 d-flex gap-2 flex-wrap">
        {/* this div cart to display movie information [title,description,date,poster] */}
        <div className="card mb-3 shadow-lg rounded-4" style={{maxWidth:'540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="p-2 rounded-3">
                        {/* movie poster */}
                        <img src='' className="img-fluid rounded-start w-100 h-100" alt="..."/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">movie title</h2>
                        <p className="card-text"><small className="text-body-secondary">movie date</small></p>
                        <p className="card-text">movie description</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
