import React from "react";
import styled from "styled-components";
import GitHubCalendar from "react-github-calender";
import Card from "./Card";
import GitHubCal from "./GithubCal";
const Projects = () => {
  return (
    <ProjectsContainer>
      <h1>
        <span className="title">Projects</span>
      </h1>
      <Grid>
        <Card
          img={require("../images/Banggood.png")}
          title="Banggood Clone"
          description="It's a clone of a E-commerce website ,in which user can buy different number of products  through the list of various items from different retailers on desired dates. It was a team project ."
          technologies="Javascript - HTML - CSS"
          link_two="https://sparkly-llama-cb2cce.netlify.app"
          link_three="https://github.com/purimetlamuralikrishna/banggood.in-clone"
          link_two_text="Visit"
          link_three_text="Github"
        />
        <Card
          img={require("../images/Funcorp.PNG")}
          title="Funcorp Clone"
          description="It's a clone of E-commerce website doctor consultation app In which user can buy medical products and also consult with doctors online.This project was done by team of 6."
          technologies="HTML CSS Javascript"
          link_two="https://swapnil-kus-1503.github.io/Funcorp_clone/"
          link_three="https://github.com/Swapnil-kus-1503/Funcorp_clone.git"
          link_two_text="Visit"
          link_three_text="Github"
        />
      </Grid>
      <GitHub>
      <img width={"450px"} src="https://github-readme-streak-stats.herokuapp.com/?user=swapnil-kus-1503" />
      <img width={"450px"} src="https://github-readme-stats.vercel.app/api?username=swapnil-kus-1503&count_private=true&show_icons=true" />
      </GitHub>
      <GitHubCal />
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  .title {
    box-shadow: inset 0 -0.45em 0 ${(props) => props.theme.headerUnderline};
  }
  width: 78%;

  margin: auto;
  margin-bottom: 7rem;

  h1 {
    font-size: 3rem;
    padding: 2rem;
    padding-top: 4rem;

    @media (max-width: 40rem) {
      font-size: 2.5rem;
      padding: 1.5rem;
      padding-top: 3rem;
    }
  }
`;

const Grid = styled.div`
  color: ${(props) => props.theme.cardText};
  box-sizing: border-box;
  padding: 2rem;

  width: 90%;
  margin: auto;

  @media (max-width: 40rem) {
    padding: 1.5rem;
  }

  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 1%;

  @media (max-width: 1120px) {
    width: 100%;
    margin: auto;
  }
  @media (max-width: 850px) {
    grid-template-columns: 100%;
  }
  @media (max-width: 385px) {
    margin-left: -2rem;
  }
  @media (max-width: 340px) {
    margin-left: -3rem;
  }

  justify-content: center;
`;

const GitHub = styled.div`
  color: ${(props) => props.theme.cardText};
  box-sizing: border-box;
  padding: 2rem;
  

  width: 100%;

  @media (max-width: 40rem) {
    padding: 1.5rem;
  }

  display: grid;
  grid-template-columns: 49% 49%;
  grid-gap: 5%;

  @media (max-width: 1120px) {
    width: 100%;
    margin: auto;
  }
  @media (max-width: 850px) {
    grid-template-columns: 100%;
  }
  @media (max-width: 385px) {
    margin-left: -2rem;
  }
  @media (max-width: 340px) {
    margin-left: -3rem;
  }

  justify-content: center;
`;

export default Projects;
