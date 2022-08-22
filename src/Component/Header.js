import React from 'react'
import '../CSS/Header.css'
import image from '../Asset/logo.svg'
import bike from '../Asset/header_link_icon/bike.png'
import man from '../Asset/header_link_icon/man.png'
import card from '../Asset/header_link_icon/card.png'
import disk from '../Asset/header_link_icon/disk.png'
import joystick from '../Asset/header_link_icon/joystick.png'
import camera from '../Asset/header_link_icon/camera.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-1">
      <Link className="navbar-brand" to="#">
        <img src={image} width={150} height={50} alt='...' className='d-inline-block align-top'/>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
        <li className="nav-item  dropdown">
            <Link className="nav-link dropdown-toggle showColor" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Bangalore
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="#">Action</Link>
              <Link className="dropdown-item" to="#">Another action</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="#">Something else here</Link>
            </div>
          </li>
          <li className="nav-item color ">
            <Link className="nav-link" to="treking"><span><img src={man} alt=''/></span> Trekking <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item color">
            <Link className="nav-link" to="riding"><span><img src={bike} alt='...'/></span>Riding</Link>
          </li>
          <li className="nav-item color">
            <Link className="nav-link disabled" to="GoPro"><span><img src={card} alt='...'/></span>GoPro</Link>
          </li>
          <li className="nav-item color">
            <Link className="nav-link disabled" to="dslr"><span><img src={camera} alt='...'/></span>DSLR</Link>
          </li>
          <li className="nav-item color">
            <Link className="nav-link disabled" to="xbox"><span><img src={joystick} alt='...'/></span>PS4/Xbox</Link>
          </li>
          <li className="nav-item color">
            <Link className="nav-link disabled" to="games"><span><img src={disk} alt='...'/></span>Games</Link>
          </li>
          <li className="nav-item ml-4">
          <i className="fa fa-shopping-cart" style={{fontSize:"40px",color:"blue"}}></i>
          </li>
         
        </ul>
        <div className='nav-item ml-auto'>
          <button className='btn btn-block btn-outline-primary'>Login/Signup</button>
        </div>
     
      </div>
    </nav>
  )
}
