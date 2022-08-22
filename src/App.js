import './App.css';
import Header from './Component/Header';
import Maincard from './Component/Maincard';
import Secondpart from './Component/Secondpart';
import { Routes, BrowserRouter,Route    } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Secondpart />
      <Routes>
        <Route path="/" element={ <Maincard
        title1="Trekking Shoes"
        title2="Trekking Jacket"
        title3="Backpacks"
        title4="Trek Accessories"
        img1="trek1"
        img2="trek2"
        img3="trek3"
        img4="trek4"
        msg1="3+ Products"
        msg2="10+ Products"
        msg3="4+ Products"
        msg4="11+ Products"
        
        />}/>
        <Route path="/riding" element={ <Maincard 
        title1="Riding Jackets"
        title2="Riding Boots"
        title3="Riding Essentials"
        title4="Riding Luggage"
        img1="ride1"
        img2="ride2"
        img3="ride3"
        img4="ride4"
        msg1="2+ Products"
        msg2="3+ Products"
        msg3="5+ Products"
        msg4="6+ Products" 
        
        />}/>
        <Route path="/GoPro" element={ <Maincard num="6"
            title1="GoPro Cameras"
            title2="DJL Cameras"
            title3="360 Cameras"
            title4="GoPro and Mobile Gimbal"
            title5="Action Camera Mounts"
            title6="Action Camera Add on"
            img1="go1"
            img2="go2"
            img3="go3"
            img4="go4"
            img5="go5"
            img6="go6"
            msg1="3+ Products"
            msg2="3+ Products"
            msg3="4+ Products"
            msg4="2+ Products" 
            msg5="18+ Products" 
            msg6="7+ Products" 
        
        />}/>
        <Route path="/dslr" element={ <Maincard 
        title1="DSLR Cameras"
        title2="DSLR Lens"
        title3="DSLR Gimbal"
        title4="Tripod and camera accessories"
        img1="dslr1"
        img2="dslr2"
        img3="dslr3"
        img4="dslr4"
        msg1="4+ Products"
        msg2="2+ Products"
        msg3="2+ Products"
        msg4="6+ Products"
        
        />}/>
        <Route path="/xbox" element={ <Maincard 
          num="3"
          title1="PS4 Console"
          title2="Xbox Console"
          title3="Gaming Controllers"
          img1="box1"
          img2="box2"
          img3="box3"
          msg1="4+ Products"
          msg2="2+ Products"
          msg3="2+ Products"
          bot="3"
        
        />}/>
        <Route path="/games" element={ <Maincard num="6"
        title1="Sports PS4 Games"
        title2="RPG PS4 Games"
        title3="Shotting PS4 Games"
        title4="Action Adventure PS4 Games"
        title5="Racing PS4 Games"
        title6="Fighting PS4 Games"
        img1="game1"
        img2="game2"
        img3="game3"
        img4="game4"
        img5="game5"
        img6="game6"
        msg1="10+ Products"
        msg2="22+ Products"
        msg3="11+ Products"
        msg4="29+ Products" 
        msg5="9+ Products" 
        msg6="8+ Products" 
        
        
        />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
