import React from "react";
import { Container } from "react-bootstrap";
import pdf from "../../Assets/KEFAH_WAMBAI_CV_2026_UPDATED.pdf";
import { AiOutlineDownload, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function ResumeNew() {
  return (
    <main className="page-shell resume-page">
      <section className="page-hero">
        <Container>
          <div className="section-kicker">CURRICULUM VITAE</div>
          <h1>Experience,<br />on one page.</h1>
          <p>Download the current CV for a fuller overview of my professional and technical experience.</p>
          <div className="resume-actions">
            <a className="button button-primary" href={pdf} target="_blank" rel="noopener noreferrer"><AiOutlineDownload /> Open CV</a>
            <Link className="text-link" to="/about"><AiOutlineArrowLeft /> Back to profile</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default ResumeNew;
