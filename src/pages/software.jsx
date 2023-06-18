import React from 'react';
import logo from './Sanjivani.png';
import styled from "styled-components";
import { useState } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

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
  MDBInput,MDBBtn
} from 'mdb-react-ui-kit';
import ARVR from './images/AR-VR-Dev.jpg';
import BlockChain from './images/blockchain-development.webp';
import webDev from './images/WebDevlopment.jpg';
import dataSci from './images/data-science.jpg';
import embeddedC from './images/Embedded-c-programming.jpg';
import Programming from './images/programming-language.png';
import Assembly from './images/Assembly.avif';
import AppointmentFormSoftware from '../components/FabLab/AppointmentFormSoftware';
export default function Software() {
  const [showBasic, setShowBasic] = useState(false);
 
  // const spanStyle = {
  //   padding: '20px',
  //   background: '#efefef',
  //   color: '#000000'
  // }
  

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
      url: dataSci,
      //caption: 'Image 1'
    },
    {
      url: webDev,
      // caption: 'Image 2'
    },
    {
      url: Programming,
      // caption: 'Image 3'
    }, 
    {
      url: BlockChain,
      // caption: 'Image 3'
    },
     {
      url: embeddedC,
      // caption: 'Image 3'
    }, 
    {
      url: ARVR,
      // caption: 'Image 3'
    }, 
    {
      url: Assembly,
      // caption: 'Image 3'
    },
  ];
  return (
   <>
             <MDBNavbar style={{backgroundColor: 'white'}} className='nav' expand='lg' light bgColor='#5AB9EA'>
             <MDBContainer fluid>
             <img src={logo} style={{height:'50px', width:'65px',padding:'5px'}}/>

      <MDBNavbarBrand  style={{ paddingLeft:'10px', fontFamily: 'Nexa', fontSize: '30px' }} href='/'>Mechtrix Consultants</MDBNavbarBrand>

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
            <MDBNavbarItem style={{ fontFamily: 'Nexa-Light', fontSize: '20px', padding:'18px', fontWeight:'bold'}}>
              <MDBNavbarLink active aria-current='page' href='/fab-lab'>
              Fab Lab
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem style={{ fontFamily: 'Nexa-Light', fontSize: '20px', padding:'18px', fontWeight:'bold'}}>
              <MDBNavbarLink active aria-current='page' href='/industry-4-0'>
              Industry 4.0
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem style={{ fontFamily: 'Nexa-Light', fontSize: '20px', padding:'18px', fontWeight:'bold'}}>
              <MDBNavbarLink active aria-current='page' href='/automation'>
              Automation
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem style={{ fontFamily: 'Nexa-Light', fontSize: '20px', padding:'18px', fontWeight:'bold'}}>
              <MDBNavbarLink active aria-current='page' href='/software'>
              Software
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem style={{ fontFamily: 'Nexa-Light', fontSize: '20px', padding:'18px', fontWeight:'bold'}}>
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
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))} 
        </Slide>
      </div> <FormContainer>
      <br></br>
<h1>Software Solutions</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  
  <br></br>
<h1>Request for Appointment </h1>
<AppointmentFormSoftware/>
<br></br>
<h1>Contact us </h1>
<p><span>Prof. Vishant Kumar</span><br/>
         Assistant Professor Industry 4.0<br/>
        <span> Email:</span> vishantkumar@gmail.com<br/>
         <span>Mobile No.</span> +91-9311896871
          
</p> 
    </FormContainer>
    </>
  );
}
const FormContainer = styled.div`
height: 150vh;
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
    font-size:70px;
  }
  span{
    font-weight:bold;
    color: #496099;
  }
  button{

  }
`;