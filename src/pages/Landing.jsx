import React from "react";
import styled from "styled-components";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Navbar from "../Navbar/Navbar";

export default function Landing() {
  const [showBasic, setShowBasic] = useState(false);

  // const spanStyle = {
  //   padding: '20px',
  //   background: '#efefef',
  //   color: '#000000'
  // }

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#34495E", // Change to your desired background color
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw" /* Full width of the viewport */,
    height: "91vh" /* Full height of the viewport */,
    overflow: "hidden" /* Hide overflow content */,
  };
  const slideStyle = {
    width: "100%" /* Full width */,
    height: "100%" /* Full height */,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const innerDivStyle = {
    width: "100%" /* Full width */,
    height: "100%" /* Full height */,
  };
  const slideImages = [
    {
      url: "https://media.istockphoto.com/id/1187225170/photo/man-is-programming-robotic-arm-with-control-panel-which-is-integrated-on-smart-factory.jpg?s=612x612&w=0&k=20&c=hi_ZWUb15vev0WHK_D1i58_YBtAwjjYsk0zUELZcVSw=",
      caption: "Image 1",
    },
    {
      url: "https://media.istockphoto.com/id/1165145654/photo/female-teacher-showing-a-group-of-students-how-a-machine-works-at-the-mechatronics-lab-while.jpg?s=612x612&w=0&k=20&c=HA__JgvaMeCSf0jtCSB2HNEkvvoJun14LqzNX6Jy5zw=",
      caption: "Image 2",
    },
    {
      url: "https://media.istockphoto.com/id/1330931321/photo/mechatronics-engineering-in-process-experienced-engineer-working-on-new-automated-robotic.jpg?s=612x612&w=0&k=20&c=kP-W_IWtrL0nCwqLdIRv0dCInP3YDpLkWRIKBuAVn3o=",
      caption: "Image 3",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <FormContainer>
        <br></br>
        <h2>Mechtrix Consultants</h2>
        <h1>Mechatronics Consultancy Services </h1>
        <p>
          At Mechtrix Consultants, we specialize in providing cutting-edge
          mechatronics consulting services tailored to meet your specific needs.
          Our expertise lies in the areas of Fab Lab, Industry 4.0, Automation,
          and Software solutions. With the rapid advancement of technology and
          the increasing demand for seamless integration between mechanical,
          electrical, and computer systems, our team of experienced
          professionals is dedicated to helping businesses navigate the
          complexities of the mechatronics landscape
        </p>
        <br></br>

        <br></br>
        <h1>Contact us </h1>
        <p>
          <span>Dr. Rajendra Kapgate</span>
          <br />
          HOD Mechatronics
          <br />
          <span> Email:</span> rajendrakapgate@gmail.com
          <br />
          <span>Mobile No.</span> +91-9890515588
        </p>
        <p>
          <span>Prof. Vishant Kumar</span>
          <br />
          Mechtrix Consultancy Coordinator
          <br />
          <span> Email:</span> vishantkumar@gmail.com
          <br />
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

  background-color: #222222;
  p {
    color: white;
    text-align: center;
    // justify-content: center;

    margin-left: 150px;
    margin-right: 150px;
    font-size: 20px;
  }
  h1 {
    color: #496099;
    font-size: 35px;
    font-family: Nexa-Light;
  }
  h2 {
    font-weight: bold;
    font-family: Nexa;
    color: #5680e9;
    font-size: 70px;
  }
  span {
    font-weight: bold;
    color: #496099;
  }
  button {
  }
  .slide-container {
    width: 100vw; /* Full width of the viewport */
    height: 100vh; /* Full height of the viewport */
    overflow: hidden; /* Hide overflow content */
  }

  .slide-container .slide {
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
  }

  .slide-container .slide > div {
    width: 100%; /* Full width */
    height: 100%; /* Full height */
  }

  .slide-container .slide > div > div {
    width: 100%; /* Full width */
    height: 100%; /* Full height */
  }
`;
