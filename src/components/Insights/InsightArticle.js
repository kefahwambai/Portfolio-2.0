import React from "react";
import { Container } from "react-bootstrap";
import { Link, Navigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowUp } from "react-icons/ai";
import SEO from "../SEO";
import articles from "./articles";

function InsightArticle() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const path = `/insights/${article.slug}`;

  const publishedDate = new Date(
    `${article.date}T00:00:00`
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main id="top" className="page-shell article-page">
      <SEO
        title={`${article.title} | Kefah Wambai`}
        description={article.description}
        path={path}
        type="article"
        article={article}
      />

      <article>
        <header className="article-hero">
          <Container>
            <div className="article-header-inner">
              <Link to="/insights" className="article-back">
                <AiOutlineArrowLeft />
                All insights
              </Link>

              <div className="article-category">{article.category}</div>

              <h1>{article.title}</h1>

              <p className="article-deck">{article.description}</p>

              <div className="article-byline">
                <span>KEFAH WAMBAI</span>
                <span>{publishedDate}</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </Container>
        </header>

        <Container>
          <div className="article-content">
            <p className="article-intro">{article.intro}</p>

            {article.sections.map((section, sectionIndex) => (
              <section key={`${section.heading}-${sectionIndex}`}>
                <h2>{section.heading}</h2>

                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${sectionIndex}-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </section>
            ))}

            {article.authorities?.length > 0 && (
              <section className="article-authorities">
                <div className="article-section-label">REFERENCES</div>

                <h2>Authorities referred to</h2>

                <ol>
                  {article.authorities.map((authority) => (
                    <li key={authority.name}>
                      <a
                        href={authority.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {authority.name}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <div className="article-disclaimer">
              <strong>Legal disclaimer</strong>

              <p>
                {article.disclaimer ||
                  "This publication is intended for general information and commentary only and does not constitute legal advice."}
              </p>
            </div>

            <div className="article-end">
              <Link to="/insights">
                <AiOutlineArrowLeft />
                More insights
              </Link>

              <a href="#top">
                Back to top
                <AiOutlineArrowUp />
              </a>
            </div>
          </div>
        </Container>
      </article>
    </main>
  );
}

export default InsightArticle;
