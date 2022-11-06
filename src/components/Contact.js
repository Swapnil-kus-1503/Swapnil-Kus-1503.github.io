import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contactDiv">
      <div className="textDiv">
        <h1 className="title">Contact</h1>{" "}
      </div>

      <Social>
        <div className="iconcontainer">
          <a
            className="same"
            href="https://github.com/Swapnil-kus-1503"
            target="_blank"
            rel="noopener noreferrer"
            title="Look through my Github profile"
          >
            <FaGithub size="3rem" className="icon" />
          </a>
        </div>
        <div className="iconcontainer">
          <a
            className="same"
            href="https://www.linkedin.com/in/swapnil-kushwaha-24b3a1185/"
            target="_blank"
            rel="noopener noreferrer"
            title="Look through my Linkedin profile"
          >
            <FaLinkedin size="3rem" className="icon" />
          </a>
        </div>
        <div className="iconcontainer">
          <a
            className="same"
            href="mailto:swapnil.live.15@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Look through my Gmail"
          >
            <FaEnvelope size="3rem" className="icon" />
          </a>
        </div>

        <div className="iconcontainer">
          <a
            className="same"
            href=" https://wa.me/+917901775224"
            target="_blank"
            rel="noopener noreferrer"
            title="Look through my Whatsapp "
          >
            <SiWhatsapp size="3rem" className="icon" />
          </a>
        </div>
        <div className="iconcontainer">
          <a
            className="same"
            href=" tel:+917901775224"
            target="_blank"
            rel="noopener noreferrer"
            title="Contact me here "
          >
            <AiFillPhone size="3rem" className="icon" />
          </a>
        </div>
      </Social>
      <h3>
        I'm actively looking for any new opportunities, in full-stack web
        development.
      </h3>
    </div>
  );
};

const Social = styled.div`
  margin-top: 7rem;
  margin-bottom: 3rem;
  justify-content: center;
  a {
    transition: color 0.5s;
    color: ${(props) => props.theme.socialStart};
    &:hover {
      color: ${(props) => props.theme.socialStartHover};
    }
    &:focus {
      color: ${(props) => props.theme.socialStartHover};
    }
  }

  display: flex;

  @media (max-width: 740px) {
    grid-template-columns: 47% 47%;
    grid-gap: 1%;
    .iconcontainer {
      margin-top: 5rem;
    }
  }

  @media (max-width: 450px) {
    grid-template-columns: 100%;
    .iconcontainer {
      margin-top: 3rem;
    }
  }

  gap: 1.5rem;
`;

export default Contact;
