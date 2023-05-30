import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineMail,
} from "react-icons/ai";

const Links = () => {
  const links = [
    {
      url: "https://github.com/iqrasy",
      icon: <AiOutlineGithub />,
    },
    {
      url: "https://www.linkedin.com/in/iqraimransyed/",
      icon: <AiOutlineLinkedin />,
    },
    {
      url: "https://twitter.com/Iqrasyy",
      icon: <AiOutlineTwitter />,
    },
    {
      url: "mailto:syiqra@hotmail.com",
      icon: <AiOutlineMail />,
    },
  ];
  return (
    <div>
      <Container>
        <Row>
          <Row>
            <ul style={{ listStyleType: "none" }}>
              {links.map((link, index) => (
                <li key={index}>
                  <div style={{ width: "2rem" }}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default Links;
