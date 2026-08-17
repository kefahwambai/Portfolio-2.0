import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import dotty from "../../Assets/Projects/HOD.png";
import rhymes from "../../Assets/Projects/rhymes.png";
import laragigs from "../../Assets/Projects/laragigs.png";
import farmarket from "../../Assets/Projects/farmarket.png";
import ireporter from "../../Assets/ticketfusion.png";
import cflow from "../../Assets/cflow.png";
import debtmanager from "../../Assets/Projects/debtmanager.png";
import solkids from "../../Assets/Projects/solkids.png";
import zeraki from "../../Assets/Projects/zeraki.png";
import feastify from "../../Assets/Projects/Feastify.png"

const allProjects = [
  {
    imgPath: feastify,
    title: "thefeastify",
    category: "Fullstack",
    language: "Reactjs, Expressjs",
    description: "At Feastify, we connect 5-star private chefs with hosts, provide premium food catering services for corporate and private events and curate unique cuisine-themed experiences across Africa.",
    ghLink: "https://github.com/marklenson/feastify-web",
    demoLink: "https://thefeastify.com/",
  },
  {
    imgPath: zeraki,
    title: "Zeraki Dashboard",
    category: "Fullstack",
    language: "Reactjs",
    description: "Zeraki is committed to revolutionizing education across Africa by providing high-quality tools. This dashboard is part of an internal system aimed at streamlining operations for sales agents, enabling them to manage relationships with schools efficiently.",
    ghLink: "https://github.com/kefahwambai/zeraki",
    demoLink: "https://zeraki-steel.vercel.app/",
  },
  {
    imgPath: solkids,
    title: "Solkids",
    category: "Fullstack",
    language: "Reactjs, ExpressJS",
    description: "Sol Kids is an initiative led by Sauti Sol, offering an innovative platform that curates affordable and award-winning Pan African content.",
    demoLink: "https://solproject-gamma.vercel.app/",
  },
  {
    imgPath: ireporter,
    title: "TicketFusion",
    category: "Fullstack",
    language: "Reactjs, RubyRailsapi",
    description: "TicketFusion is a dynamic online ticketing platform designed to bring poetry enthusiasts together, celebrating creativity and fostering a sense of community. The platform offers a seamless and intuitive user experience for discovering and attending poetry events.",
    ghLink: "https://github.com/kefahwambai/jtickets",
    demoLink: "https://jtickets.vercel.app/",
  },
  {
    imgPath: dotty,
    title: "House OF Dotty Events",
    category: "Fullstack",
    language: "Reactjs",
    description: "House Of Dotty is an event planning web application designed to easen the hustle a one goes through when planning an Event.",
    ghLink: "https://github.com/kefahwambai/HOD",
    demoLink: "https://houseofdotty.vercel.app/",
  },
  {
    imgPath: farmarket,
    title: "FarMarket",
    category: "Fullstack",
    language: "AngularJs, RubyRailsapi",
    description: "FarMarket, an organic Online Vegetable Store, where you can discover a wide range of fresh and wholesome produce. We take pride in offering a diverse selection of organic vegetables, carefully cultivated to bring you the finest quality and nutrition.",
    ghLink: "https://github.com/kefahwambai/BossDomain-Angular",
    demoLink: "https://farmarket.vercel.app/",
  },
  {
    imgPath: debtmanager,
    title: "DebtManager",
    category: "Fullstack",
    language: "Reactjs, RubyRailsapi",
    description: "DebtManager app is a finance management app for those who give out short-term loans. It's a platform where Creditors can keep track of Cash loaned out and expected turnover as per the terms agreed.",
    ghLink: "https://github.com/kefahwambai/front-tala",
    demoLink: "https://talaapp.vercel.app/",
  },
  {
    imgPath: rhymes,
    title: "RythmicRyhmes",
    category: "Fullstack",
    language: "Reactjs, RubyRailsapi",
    description: "RythmicRyhmes is a creative online platform crafted to inspire and connect individuals with a shared passion for poetry. Users can immerse themselves in a diverse collection of verses, ranging from classical sonnets to contemporary free verse, fostering a vibrant and dynamic community of poets and poetry enthusiasts.",
    ghLink: "https://github.com/kefahwambai/RythmicRhymes-client",
    demoLink: "https://rythmic-rhymes-client.vercel.app/",
  },
  {
    imgPath: laragigs,
    title: "LaraGigs",
    language: "Laravel",
    category: "Fullstack - no demo",
    description: "Laragigs is a joblisting application that enables recruiters post job lisitngs and allows users to apply for the same.",
    ghLink: "https://github.com/kefahwambai/Laragigs",
  },
  {
    imgPath: cflow,
    title: "CodeOverFlow",
    category: "Fullstack",
    language: "Reactjs, RubyRails api",
    description: "CodeOverflow is an app that helps Student to solve technical problems by providing a curated collection of solutions. Students can login, raise problems, and contribute answers. Solutions can be filtered by tags, such as language and technical challenge. CodeOverflow uses React for the frontend, Redux and Ruby rails APIs to enhance its functionality.",
    ghLink: "https://github.com/RemmyKyalo/CodeOverflow",
  },
];

function Projects({ compact = false }) {
  const projects = compact ? allProjects.slice(0, 3) : allProjects;

  return (
    <Container className={compact ? "" : "page-content"}>
      <div className="section-heading-row work-heading">
        <div>
          <div className="section-kicker">SELECTED WORK</div>
          <h2 className="section-title">Digital products I have built.</h2>
        </div>
        {compact && <a className="text-link" href="/project">View all work →</a>}
      </div>
      <Row className="g-4">
        {projects.map((project, index) => (
          <Col key={index} lg={4} md={6}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
