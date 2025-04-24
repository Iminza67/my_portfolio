// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import colorSharpTwo from "../assets/img/color-sharp2.png";
import spotifyApp from "../assets/img/spotifyapp.png";
import movieDBNode from "../assets/img/movienode.png";
import movieDBCSharp from "../assets/img/movienetimg.png";

import ShinyText from "./ShinyText";
import BlobCursor from "./BlobCursor";

function Projects() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Spotify-Integrated Music Player",
      description: "Full-stack music streaming app with Spotify Web Playback SDK",
      imgUrl: spotifyApp,
      link: "https://github.com/Iminza67/SpotifyClone",
      category: "web",
      technologies: ["React", "TypeScript", "Node.js", "Spotify API"],
      date: "2025",
    },
    {
      title: "Movie Database App (Node.js)",
      description: "Full-stack app with Node.js, SQL, and MVC architecture",
      imgUrl: movieDBNode,
      link: "https://github.com/Iminza67/movie-database",
      category: "web",
      technologies: ["Node.js", "EJS", "SQL", "Bootstrap"],
      date: "2025",
    },
    {
      title: "Movie Database App (C# / ASP.NET)",
      description: "ASP.NET Core app for managing movie info with EF & MVC",
      imgUrl: movieDBCSharp,
      link: "https://github.com/Iminza67/movienet",
      category: "web",
      technologies: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server"],
      date: "2025",
    },
  ];

  return (
    <>
      <section className="project" id="projects">
        <Container>
          {isDesktop && <BlobCursor />}
          <Row>
            <Col>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Projects</h2>

                    <p>
                      <ShinyText
                        text="Explore my full-stack work with streaming, movie data, and modern MVC architecture 🎬"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                      />
                    </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">All</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Web Dev</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <Row className="justify-content-center">
                            {projects.map((project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                                onMouseEnter={() => setHoveredProject(index)}
                                onMouseLeave={() => setHoveredProject(null)}
                                isHovered={hoveredProject === index}
                              />
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {projects
                              .filter((project) => project.category === "web")
                              .map((project, index) => (
                                <ProjectCard key={index} {...project} />
                              ))}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
          <img
            src={colorSharpTwo}
            className="background-image-left"
            alt="Gradient Image"
          />
        </Container>
      </section>
    </>
  );
}

export default Projects;
