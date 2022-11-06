import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return (
    <Container>
      <img src={props.img} alt={props.title} />
      <CardBody>
        <CardText>
          <h2 className="card_title">{props.title}</h2>
          <p className="card_description">{props.description}</p>
          <p className="technologies">
            <h3>Tech-Stacks:</h3>
            {props.technologies}
          </p>
          <p className="technologies2">{props.technologies2}</p>
        </CardText>
        <ButtonArea>
          {props.link_two ? (
            <a
              className="link2"
              href={props.link_two}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.link_two_text}
            </a>
          ) : null}
          {props.link_three ? (
            <a
              className="link3"
              href={props.link_three}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.link_three_text}
            </a>
          ) : null}
        </ButtonArea>
      </CardBody>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 22rem;
  margin: 0;
  padding: 0;
  box-shadow: 0 3px 6px -1px rgb(0 0 0 / 10%), 0 5px 10px -2px rgb(0 0 0 / 10%);
  text-align: left;
  border-radius: 0.5rem;
  height: 27rem;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.card};
  img {
    width: 100%;
    display: block;
    border-bottom: 1px solid #ccc;
    height: 11.5rem;
  }
  @media (max-width: 1037px) {
    width: 18rem;
    height: 26rem;
  }
  @media (max-width: 850px) {
    width: 22rem;
    height: 27rem;
  }
  @media (max-width: 475px) {
    width: 18rem;
    height: 26rem;
  }
  @media (max-width: 340px) {
    width: 17rem;
    height: 26rem;
  }
  h2 {
    font-size: 1rem;
  }

  .card_description {
    padding: 0.5rem 0;
    font-size: 0.9rem;
  }

  .technologies {
    font-size: 0.8rem;
  }
  .technologies2 {
    font-size: 0.8rem;
  }

  a {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.4rem;
    text-decoration: none;
    background-color: ${(props) => props.theme.cardButton};
    border: solid 1px ${(props) => props.theme.cardButtonBorder};
    color: ${(props) => props.theme.cardButtonText};
    border-radius: 2rem;

    &:hover {
      background-color: ${(props) => props.theme.cardButtonHover};
      color: ${(props) => props.theme.cardButtonTextHover};
      border: 1px solid ${(props) => props.theme.cardButtonBorderHover};
    }
  }
  p > h3 {
    text-align: left;
  }
`;

const CardText = styled.div`
  padding: 0.8rem 1rem 0rem 1rem;
`;

const CardBody = styled.div`
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonArea = styled.div`
  display: flex;

  width: 60%;
  margin: auto;
  a {
    width: 6rem;
    height: 1rem;
  }

  padding: 0.5rem 1rem 1rem 1rem;
  //padding-top: 0.7rem;

  grid-gap: 0.5rem;

  .link2 {
    grid-area: website;
  }
  .link3 {
    grid-area: tutorial;
  }
`;
export default Card;
