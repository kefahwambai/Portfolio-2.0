import React from "react";
import { Container } from "react-bootstrap";

const themes = [
  {
    category: "Law & Technology",
    title: "When technology moves faster than legal procedure",
    excerpt: "How courts, practitioners and clients adapt when digital tools evolve faster than the rules designed around them.",
    status: "Editorial theme",
  },
  {
    category: "Civil Practice",
    title: "Procedure is strategy, not paperwork",
    excerpt: "Practical notes on procedural developments, litigation choices and the small decisions that can determine a case.",
    status: "Editorial theme",
  },
  {
    category: "Digital Economy",
    title: "Regulating business in a platform economy",
    excerpt: "Commentary on data, digital finance, online services and the legal questions created by new commercial models.",
    status: "Editorial theme",
  },
  {
    category: "Evidence",
    title: "The evidential life of screenshots, chats and digital records",
    excerpt: "A recurring look at authenticity, preservation and the practical handling of electronic material in disputes.",
    status: "Editorial theme",
  },
  {
    category: "Professional Practice",
    title: "What AI changes — and what it does not — in legal work",
    excerpt: "A grounded look at the opportunities, limits and professional questions raised by AI-assisted legal practice.",
    status: "Editorial theme",
  },
  {
    category: "Case Notes",
    title: "The judgment behind the headline",
    excerpt: "Short case notes focused on the holding, procedural significance and what practitioners should carry into the next matter.",
    status: "Editorial theme",
  },
];

function Insights() {
  return (
    <main className="page-shell">
      <section className="page-hero insights-hero">
        <Container>
          <div className="section-kicker">INSIGHTS</div>
          <h1>Emerging issues,<br />without the noise.</h1>
          <p>Commentary on Kenyan legal practice, technology and the issues developing between them.</p>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="editorial-note">
            <span>WHY THIS EXISTS</span>
            <p>This section is designed to become the publishing engine of the site: useful, searchable writing that gives readers a reason to return and a reason to share your work.</p>
          </div>
          <div className="insights-grid">
            {themes.map((item, index) => (
              <article className="insight-card" key={item.title}>
                <div className="insight-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="article-meta">{item.category}</div>
                <h2>{item.title}</h2>
                <p>{item.excerpt}</p>
                <div className="insight-status">{item.status}</div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Insights;
