import React from 'react'
import '../CSS/card.css'

export default function Card(props) {
    return (
        <div className='col col-lg-4 col-md-4 col-sm-6 mt-2 mb-4 ' style={{width:"20rem  !important" ,height:"20rem  !important"}} >
            <div className={`card shadow-lg rounded ${props.img} p-4`} sityle={{}}>
                <div className="card-body" style={{ width: "20rem  !important" ,height:"20rem  !important"}}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text w-50 mt-5 msg border border-rounded d-block">{props.msg}</p>
                </div>
            </div>
        </div>
    )
}
