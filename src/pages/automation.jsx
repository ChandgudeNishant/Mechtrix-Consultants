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
import { Padding } from '@mui/icons-material';

export default function Automation() {
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
url:'https://datasemantics.co/wp-content/uploads/2021/02/Automation-in-workplace-today-1.jpg',
      caption: 'Image 1'
    },
    {
      url: "https://media.istockphoto.com/id/1442677960/photo/robotic-machine-visual-system.webp?b=1&s=170667a&w=0&k=20&c=JzwDumS20cuMomtZHhphtaWvrMZm5bk2tq0OfZxbv78=",
      caption: 'Image 2'
    },
    {
      url: "https://img.freepik.com/free-photo/cloud-computing-banner-background-smart-city_53876-108504.jpg?size=626&ext=jpg",
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
<h1>Automation</h1>
<p>Automation is a pivotal component of the mechatronics field, revolutionizing industries and transforming the way we work. By integrating mechanical, electrical, and computer systems, automation enables businesses to streamline processes, increase efficiency, and enhance productivity.

In the realm of mechatronics, automation entails the use of advanced technologies such as robotics, programmable logic controllers (PLCs), and intelligent control systems. These cutting-edge solutions eliminate manual labor, reduce human error, and accelerate production cycles, resulting in significant time and cost savings.

From industrial manufacturing to logistics and beyond, automation plays a crucial role in optimizing operations. It enables tasks to be performed with precision, consistency, and speed, allowing businesses to meet increasing demands and maintain a competitive edge in today's fast-paced market.</p>  
  <br></br>
<h1>Details </h1>
<MDBBtn size = "lg">Submit</MDBBtn>
<br></br>
<h1>Contact us </h1>
<p><span>Dr. Naveen Kumar</span><br/>
         Automation Lab Coordinator <br/>
        <span> Email:</span> naveenkumar@gmail.com<br/>
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