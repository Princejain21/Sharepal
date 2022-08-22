import React from 'react'
import '../CSS/card.css'
import Card from './Card'
import Footer from './Footer';
import Heading from './Heading'


export default function Maincard(props) {
    const a = props.num;
    const b = props.bot
    console.log(b)
    return (
        <>
            <Heading heading="Trekking Gear on rent" />
            <div className='container'>
                <div className='row '>
                    <Card title={props.title1} msg={props.msg1} img={props.img1} />
                    <Card title={props.title2} msg={props.msg2} img={props.img2} />
                    <Card title={props.title3} msg={props.msg3} img={props.img3} />
                    {a != 3 ? <Card title={props.title4} msg={props.msg4} img={props.img4} /> : null}
                    {a === 6 ? <Card title={props.title5} msg={props.msg5} img={props.img5} /> : null}
                    {a === 6 ? <Card title={props.title6} msg={props.msg6} img={props.img6} /> : null}
                </div>
            </div>
          { b==3?<Footer bot="fixed-bottom"/>:<Footer/>}
            {/* {b===3?<Footer bot="fixed-bottom"/>:<Footer/>} */}


        </>
    )
}
