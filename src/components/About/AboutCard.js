import React from "react";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Kefah_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            As a developer, I am dedicated to continually enhancing my skills and refining my craft. My profound enthusiasm for web development is reflected in the development of highly intuitive websites. Possessing a keen eye for detail and a proficiency in problem-solving, I thrive in both independent and collaborative environments. My commitment revolves around fostering innovation and attaining excellence in each project I embark upon.
          </p>
          <div style={{ float: 'left', textAlign: "justify", marginTop: '2rem', marginLeft: '-2rem' }}>
            <ul style={{ listStyle: 'none' }}>
              <li style={{ marginBottom: '10px' }}>Email   :  kefahngwei@gmail.com</li>
              <li style={{ marginBottom: '10px' }}>From   :  Nairobi, Kenya</li>
              <li style={{ marginBottom: '10px' }}>Language   :  English, Kiswahili, Spanish</li>
              <li style={{ marginBottom: '10px' }}>Status   :  Freelance | <span className="freelance">Available for Hire/Contract</span></li>
            </ul>
          </div>
        </blockquote>
        <Row style={{ justifyContent: "center", position: "relative", marginTop: '16.5rem' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px", marginTop: '2rem' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
