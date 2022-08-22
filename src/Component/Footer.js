import React from 'react'
import '../App.css'

export default function Footer(props) {
    return (
        <footer  className={`pt-3 mt-auto ${props.bot}`} style={{ backgroundColor: "#091747" }}>
            <div className='row justify-content-center py-2 ' >
                <div className='col col-md-3'>
                    <h4 className='text-white text-center text-weight-bold'>Traveling via Delhi,
                        Dehradun or Chandigarh?
                    </h4>
                </div>
                <div className='col col-md-3'>
                    <h4 className='text-white text-center text-weight-bold'>Rent while you transit
                        & save even more!
                    </h4>
                </div>
                <div className='col col-md-3 d-flex flex-column align-items-center  '>
                    <h5 className='text-white text-center m-0 text-weight-bold' style={{position:"relative",top:"-6px"}}>Save upto
                      <span className='text-weight-bold' style={{fontSize:"2rem"}}>  20%</span>
                    </h5><br/>
                    <button className='btn w-50 btn-warning text-center ' style={{backgroundColor:"#d7df23"}}>Know more</button>
                </div>
            </div>
        </footer>
    )
}
