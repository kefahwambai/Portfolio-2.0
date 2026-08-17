import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiPhp,
  DiLaravel,
  DiReact,
  DiNodejs,
  DiPython,
  DiAngularSimple,
  DiGithub,
  DiRuby,
  DiBootstrap,
  DiPostgresql,
  DiSqllite,
  DiHtml5,
  DiCss3,
  DiDocker,
  DiJenkins,
  
  
} from "react-icons/di";
// import {
//   SiPytorch,
//   SiFirebase,
//   SiNextdotjs,
// } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
     
      <Col xs={4} md={2} className="tech-icons" >
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <DiHtml5 />      
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <DiRuby />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <DiSqllite/>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <DiPostgresql />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
      </Col>
           
     
    </Row>
  );
}

export default Techstack;
