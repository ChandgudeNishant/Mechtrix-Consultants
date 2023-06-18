import React from 'react';
import logo from './Sanjivani.png';
import styled from "styled-components";
import { useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import img1 from './images/laser1.jpeg';
import img2 from './images/laser2.jpeg';
import img3 from './images/laser3.jpeg';
import img4 from './images/3dprinter.jpeg';
import img5 from './images/milling.jpeg';
import {
  MDBCollapse,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBInput, MDBBtn
} from 'mdb-react-ui-kit';
import Explore from '../components/FabLab/ExploreFabLab';
import AppointmentFormFabLab from '../components/FabLab/AppointmentFormFabLab';

export default function FabLab() {
  const [showBasic, setShowBasic] = useState(false);

  // const spanStyle = {
  //   padding: '20px',
  //   background: '#efefef',
  //   color: '#000000'
  // }

  const handleClick = () => {
    window.open('https://forms.gle/FMdWLi2yGPEjuHCa6', '_blank');
    // or
    // window.location.href = 'https://www.example.com';
  };
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#84CEEB', // Change to your desired background color
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '600px',
    width: '100%'
  };

  const slideImages = [
    {
      url: img1,
      caption: 'Image 1'
    },
    {
      url: img3,
      caption: 'Image 2'
    },
    {
      url: img5,
      caption: 'Image 3'
    },
    {
      url: img4,
      caption: 'Image 3'
    },
  ];
  return (
    <>
      <MDBNavbar style={{ backgroundColor: 'white' }} className='nav' expand='lg' light bgColor='#5AB9EA'>
        <MDBContainer fluid>
          <img src={logo} style={{ height: '50px', width: '65px', padding: '5px' }} />

          <MDBNavbarBrand style={{ paddingLeft: '10px', fontFamily: 'Nexa', fontSize: '30px' }} href='/'>Mechtrix Consultants</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem style={{ fontFamily: 'Nexa-Light', fontSize: '20px', padding: '18px', fontWeight: 'bold' }}>
                <MDBNavbarLink active aria-current='page' href='/fab-lab'>
                  Fab Lab
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem style={{ fontFamily: 'Nexa-Light', fontSize: '20px', padding: '18px', fontWeight: 'bold' }}>
                <MDBNavbarLink active aria-current='page' href='/industry-4-0'>
                  Industry 4.0
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem style={{ fontFamily: 'Nexa-Light', fontSize: '20px', padding: '18px', fontWeight: 'bold' }}>
                <MDBNavbarLink active aria-current='page' href='/automation'>
                  Automation
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem style={{ fontFamily: 'Nexa-Light', fontSize: '20px', padding: '18px', fontWeight: 'bold' }}>
                <MDBNavbarLink active aria-current='page' href='/software'>
                  Software
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem style={{ fontFamily: 'Nexa-Light', fontSize: '20px', padding: '18px', fontWeight: 'bold' }}>
                <MDBNavbarLink active aria-current='page' href='/'>
                  About us
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))}
        </Slide>
      </div> <FormContainer>
        <br></br>
        <h1>Fab Lab</h1>

        {/* fab Lab explore section  */}
        <div className='flex flex-col gap-8'>
          
          <Explore />

          <div className='flex flex-col items-center justify-center'>
            <h1>Request for Appointment </h1>
            <AppointmentFormFabLab />
            <br></br>
          </div>
        </div>


        <h1>Contact us </h1>
        <p><span>Dr. Kiran Wakchaure</span><br />
          Fablab incharge<br />
          <span> Email:</span> kiranwakchaure@gmail.com<br />
          <span>Mobile No.</span> +91-7588025393

        </p>
      </FormContainer>
    </>
  );
}
const FormContainer = styled.div`
height: full;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  background-color: #84CEEB;
  p{
    color : white;
    text-align: center;
    // justify-content: center;

    margin-left: 150px;
    margin-right: 150px;
    font-size:20px;
  }
  h1{
    font-weight: bold;
    color:#5680E9;
    font-family:Nexa-Light;

  }
  h2{
    font-weight: bold;
    font-family: Nexa;
    color:#5680E9;
    font-size:60px;
  }
  span{
    font-weight:bold;
    color: #496099;
  }
  button{

  }
  .main{
    width: full;
    display: flex;
    flex-direction: row;
    flex-gap: 5px;
  
  .info{
    width: 30%;
  }
}
`;