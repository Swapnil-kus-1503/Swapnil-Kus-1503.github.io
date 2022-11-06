import React from "react";
import "./skills.css";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiExpress, SiMicrosoftteams, SiRedux } from "react-icons/si";
import { FaAdjust, FaBusinessTime, FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";

export const Skills = () => {
  return (
    <div className="Skillmain">
      <div className="title">
        <h1>Skills</h1>
        <br />
        <h2>Technical</h2>
      </div>
      <div className="SkillClass">
        <div>
          <ImHtmlFive size="7rem" />
          <h3>HTML</h3>
        </div>
        <div>
          <SiCss3 size="7rem" />
          <h3>CSS</h3>
        </div>
        <div>
          <FaReact size="7rem" />
          <h3>ReactJs</h3>
        </div>
        <div>
          <DiJavascript1 size="7rem" />
          <h3>Javascript</h3>
        </div>
        <div>
          <SiRedux size="7rem" />
          <h3>Redux</h3>
        </div>
        <div>
          <FaNodeJs size="7rem" />
          <h3>NodeJs</h3>
        </div>
        <div>
          <SiExpress size="7rem" />
          <h3>Express</h3>
        </div>
        <div>
          <DiMongodb size="7rem" />
          <h3>MongoDb</h3>
        </div>
      </div>
      <div className="title">
        <h2>SoftSkills</h2>
      </div>
      <div className="SkillClass">
        <div>
          <FaBusinessTime size="7rem" />
          <h3>Time Management</h3>
        </div>
        <div>
          <SiMicrosoftteams size ="7rem"/>
          <h3>Team Work</h3>
        </div>
        <div>
          <FaAdjust size ="7rem"/>
          <h3>Adaptability</h3>
        </div>
      </div>
    </div>
  );
};
