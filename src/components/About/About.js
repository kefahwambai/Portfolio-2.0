import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Kefah_CV.pdf";
import myImg from "../../Assets/poto.jpeg";

function About() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <Container>
          <div className="section-kicker">ABOUT</div>
          <h1>Built for complex<br />problems.</h1>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <Row className="g-5 align-items-start">
            <Col lg={5}>
              <img src={myImg} alt="Kefah Wambai" className="about-photo" />
            </Col>
            <Col lg={7}>
              <p className="large-copy">
                I am a legal professional with a parallel background in software engineering. Both disciplines have shaped the way I work: carefully, analytically and with a bias toward solutions that are useful beyond the page.
              </p>
              <p className="body-copy">
                In legal work, I am interested in the point where research, procedure, drafting and strategy meet. In technology, I enjoy turning messy problems into intuitive digital products. Together, those perspectives make me especially curious about the way law is changing alongside technology, data and new forms of business.
              </p>
              <div className="about-actions">
                <a className="button button-primary" href={pdf} target="_blank" rel="noopener noreferrer"><AiOutlineDownload /> Download CV</a>
                <Link className="text-link" to="/insights">Read my insights <AiOutlineArrowRight /></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="focus-section section-pad">
        <Container>
          <Row className="g-5">
            <Col lg={4}><div className="section-kicker">FOCUS</div><h2 className="section-title">What I bring to the table.</h2></Col>
            <Col lg={8}>
              <div className="focus-list">
                <div><span>01</span><h3>Legal analysis</h3><p>Clear research and structured thinking around facts, procedure and applicable law.</p></div>
                <div><span>02</span><h3>Drafting &amp; advocacy support</h3><p>Turning complex instructions into coherent, persuasive and practical legal documents.</p></div>
                <div><span>03</span><h3>Software &amp; product thinking</h3><p>Experience building web applications and understanding the systems behind digital products.</p></div>
                <div><span>04</span><h3>Emerging-issues commentary</h3><p>Explaining new legal and technology developments in a way that practitioners and clients can actually use.</p></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default About;
