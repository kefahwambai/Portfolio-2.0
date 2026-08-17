import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import SEO from "../SEO";
import articles from "./articles";

function Insights() {
  const publishedArticles = articles.filter(
    (article) => article.status === "Published"
  );

  return (
    <main className="page-shell">
      <SEO
        title="Insights | Kefah Wambai"
        description="Practical commentary on Kenyan legal practice, technology, digital evidence, civil procedure and emerging issues."
        path="/insights"
      />

      <section className="page-hero insights-hero">
        <Container>
          <div className="section-kicker">INSIGHTS</div>
          <h1>
            Emerging issues,
            <br />
            without the noise.
          </h1>
          <p>
            Commentary on Kenyan legal practice, technology and the issues
            developing between them.
          </p>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="editorial-note">
            <span>THE EDITORIAL IDEA</span>
            <p>
              Practical, searchable writing built around real legal questions:
              what changed, what the law requires, why it matters and what
              practitioners should carry into the next matter.
            </p>
          </div>

          <div className="insights-grid">
            {publishedArticles.map((item, index) => (
              <article className="insight-card" key={item.slug}>
                <div className="insight-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="article-meta">{item.category}</div>
                <h2>
                  <Link to={`/insights/${item.slug}`}>{item.title}</Link>
                </h2>
                <p>{item.description}</p>
                <div className="insight-card-footer">
                  <span>{item.readTime}</span>
                  <Link
                    to={`/insights/${item.slug}`}
                    className="text-link"
                  >
                    Read article <AiOutlineArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Insights;
