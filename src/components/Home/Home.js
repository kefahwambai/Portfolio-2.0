import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import myImg from "../../Assets/poto.jpeg";
import Projects from "../Projects/Projects";
import { AiFillGithub, AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <main>
      <section className="hero-section" id="home">
        <Container>
          <Row className="align-items-center hero-row">
            <Col lg={7} className="hero-copy">
              <div className="eyebrow">LAW · TECHNOLOGY · STRATEGY</div>
              <h1>KEFAH<br /><span>WAMBAI</span></h1>
              <p className="hero-role">Legal Professional &amp; Software Engineer</p>
              <p className="hero-lede">
                I work at the intersection of legal practice, technology and practical problem-solving — translating complex questions into clear, useful outcomes.
              </p>
              <div className="hero-actions">
                <Link to="/about" className="button button-primary">Explore my profile <AiOutlineArrowRight /></Link>
                <Link to="/insights" className="button button-secondary">Read insights</Link>
              </div>
              <div className="hero-socials" aria-label="Social links">
                <a href="https://github.com/kefahwambai" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/kefah-wambai-b224b0269/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="mailto:kefahngwei@gmail.com" aria-label="Email"><AiOutlineMail /></a>
              </div>
            </Col>
            <Col lg={5} className="hero-portrait-col">
              <div className="portrait-frame">
                <img src={myImg} alt="Kefah Wambai" className="portrait-image" />
                <div className="portrait-note">
                  <span>Based in</span>
                  <strong>Nairobi, Kenya</strong>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="intro-section section-pad">
        <Container>
          <Row className="g-5 align-items-start">
            <Col lg={5}>
              <div className="section-kicker">PROFILE</div>
              <h2 className="section-title">Two disciplines.<br />One way of thinking.</h2>
            </Col>
            <Col lg={7}>
              <p className="large-copy">
                My background in law and software gives me a practical lens on modern professional problems: understand the rules, understand the system, and build a solution that works in the real world.
              </p>
              <div className="discipline-grid">
                <div><span>01</span><h3>Legal practice</h3><p>Research, drafting, procedure and client-focused problem solving.</p></div>
                <div><span>02</span><h3>Technology</h3><p>Web products, digital systems and a builder's approach to complex workflows.</p></div>
                <div><span>03</span><h3>Commentary</h3><p>Clear writing on emerging legal, regulatory and technology issues.</p></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="insights-teaser section-pad">
        <Container>
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">EMERGING ISSUES</div>
              <h2 className="section-title">Ideas worth following.</h2>
            </div>
            <Link to="/insights" className="text-link">View all insights <AiOutlineArrowRight /></Link>
          </div>
          <div className="insight-preview-grid">
            <article><div className="article-meta">EVIDENCE</div><h3><Link to="/insights/whatsapp-messages-evidence-kenyan-courts">Can WhatsApp Messages Be Used as Evidence in Kenyan Courts?</Link></h3><p>A practical look at preservation, authenticity and the evidential questions surrounding chat records.</p></article>
            <article><div className="article-meta">LAW &amp; TECHNOLOGY</div><h3><Link to="/insights/screenshots-section-106b-evidence-act">Screenshots in Court: What Section 106B Requires</Link></h3><p>Why a screenshot is only part of the story when electronic records are presented in litigation.</p></article>
            <article><div className="article-meta">CIVIL PRACTICE</div><h3><Link to="/insights/judgment-debtor-refuses-to-pay-kenya">You Won Your Case — but the Defendant Won’t Pay</Link></h3><p>An accessible introduction to the execution stage after judgment.</p></article>
          </div>
        </Container>
      </section>

      <section className="work-preview section-pad">
        <Projects compact />
      </section>

      <section className="contact-band" id="contact">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={8}>
              <div className="section-kicker">GET IN TOUCH</div>
              <h2>Have a legal, technology or collaborative idea?</h2>
            </Col>
            <Col lg={4} className="text-lg-end">
              <a className="button button-light" href="mailto:kefahngwei@gmail.com">Start a conversation <AiOutlineArrowRight /></a>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Home;
