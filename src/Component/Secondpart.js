import React from 'react'
import wallet from '../Asset/secondpart/wallet.png'
import box from '../Asset/secondpart/box.png'
import thumb from '../Asset/secondpart/thumb.png'
import '../App.css'

export default function Secondpart() {
    return (
        <div className='row background p-3 m-3 rounded'>
            <div className='col col-md-4 col-sm-6  '>
                <div className='row justify-content-center'>
                    <div className='col-2  '>
                        <img className='w-100' src={thumb} alt="..." />
                    </div>
                    <div className='col-8  '>
                        <h4 className='text-center text-dark '>
                            Excellent Quality Products</h4>
                    </div>
                </div>
            </div>
            <div className='col col-md-4 col-sm-6 border-left border-dark '>
                <div className='row d-flex'>
                    <div className='col-2 justify-content-end text-end'>
                        <img className='w-100' src={box} alt="..." />
                    </div>
                    <div className='col-8 '>
                        <h4 className='text-center text-dark'>
                        Delivery Date & Return Date is FREE!!</h4>
                    </div>
                </div>
            </div>
            <div className='col col-md-4 col-sm-6 border-left border-dark '>
                <div className='row'>
                    <div className='col-2  '>
                        <img className='w-100' src={wallet} alt="..." />
                    </div>
                    <div className='col-8 '>
                        <h4 className='text-center text-dark'>
                        Pay on Delivery</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
