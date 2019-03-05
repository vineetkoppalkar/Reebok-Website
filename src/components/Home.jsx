import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './Home.css';
 
class Home extends Component {
  render() {
    return (
      <div className="bg-black-gradient">
        <Image src="assets/Clients-Reebok-Logo.png" className="reebok-img" />
        <div className="bg-white-curve">
          <div className="main-shoe-txt">
            <h3 className="main-shoe-type-txt">BUILT FOR RUNNING &amp; TRAINING</h3>
            <h1 className="main-shoe-header">
              <span className="fast-txt">FAST </span>
              <span className="flexweave-txt">FLEXWEAVE</span>
            </h1>
            <h2 className="main-shoe-subtitle">
              Marry flexibility and durability with the Flexweave Run. You're free to move naturally, whether you're out on a run or killing it in the gym.
            </h2>
            <Button variant="contained" color="dark">
              SHOP NOW
            </Button>
          </div>
          <h1 className="lg-reebok-txt">REEBOK</h1>
        </div>
        <div clasName="main-shoe-container">
          <Image className="bg-green-gradient" roundedCircle />
          <Image src="assets/Reebok-Fast-M-red.png" className="main-shoe-img" />
        </div>
      </div>
    );
  }
}

export default Home;