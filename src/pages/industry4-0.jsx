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
import AppointmentFormIndustry4_0 from '../components/FabLab/AppointmentFormIndustry4_0';
export default function Industry() {
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
      url: "https://www.plm.automation.siemens.com/media/global/en/industry-4.0-glossary_tcm27-52750.jpg",
      caption: 'Image 1'
    },
    {
      url: "https://media.istockphoto.com/id/1183043211/photo/man-is-working-to-control-a-robotic-arm.jpg?s=612x612&w=0&k=20&c=7AXnES2mRV8UVzbwQ8HPg5RmsmkvNkTvTaTwb9RKe4k=",
      caption: 'Image 2'
    },
    {
      url: "https://www.calsoft.com/wp-content/uploads/2022/07/27.-Industry-4.0-1-1024x655.png",
      caption: 'Image 3'
    },
  ];
  return (
   <>
             <MDBNavbar style={{backgroundColor: 'white'}} className='nav' expand='lg' light bgColor='#5AB9EA'>
             <MDBContainer fluid>
             <img src={logo} style={{height:'50px', width:'65px',padding:'5px'}}/>

      <MDBNavbarBrand  style={{ paddingLeft:'10px', fontFamily: 'Nexa', fontSize: '30px' }} href='/landing'>Mechtrix Consultants</MDBNavbarBrand>

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
              <MDBNavbarLink active aria-current='page' href='/landing'>
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
<h1>Industry 4.0</h1>
<p>Immerse yourself in the cutting-edge technologies and innovations of Industry 4.0. Explore the transformative potential of artificial intelligence, internet of things (IoT), big data analytics, and robotics. Discover real-world case studies, research papers, and practical implementation strategies to drive the future of manufacturing and beyond.</p>  
  <br></br>
<h1>Request for Appointment </h1>
<AppointmentFormIndustry4_0/>
<br></br>
<h1>Contact us </h1>
<p><span>Prof. Vishant Kumar</span><br/>
        Industry 4.0 Lab Coordinator<br/>
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