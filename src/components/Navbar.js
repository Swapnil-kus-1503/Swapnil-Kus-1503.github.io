import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { IoSunny, IoMoon } from "react-icons/io5";

import resume from "./Swapnil_Kushwaha_Resume.pdf";

const Navbar = ({ isOpen, setIsOpen, theme, setTheme, scroll, location }) => {
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const node = useRef(null);
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsOpen(false);
  };

  useEffect(() => {
    //console.log(node.current);
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const closeMenu = () => {
    if (isOpen === true) {
      setIsOpen(false);
    }
  };
  const resumeLink = resume;
  return (
    <Parent ref={node} scroll={scroll}>
      <Nav>
        <Hamburger onClick={() => setIsOpen(!isOpen)} scroll={scroll}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink onClick={closeMenu} scroll={scroll}>
            <a href="#home">Home</a>
          </MenuLink>

          <MenuLink onClick={closeMenu} scroll={scroll}>
            <a href="#about">About</a>
          </MenuLink>

          <MenuLink onClick={closeMenu} scroll={scroll}>
            <a href="#skills">Skills</a>
          </MenuLink>

          <MenuLink onClick={closeMenu} scroll={scroll}>
            <a href="#projects">Projects</a>
          </MenuLink>

          <MenuLink onClick={closeMenu} scroll={scroll}>
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </MenuLink>

          <MenuLink onClick={closeMenu} scroll={scroll}>
            <a href="#contact">Contact</a>
          </MenuLink>

          {theme === "light" ? (
            <IoMoon
              size="1.5rem"
              className="icon"
              onClick={() => themeToggler()}
            />
          ) : (
            <IoSunny
              size="1.5rem"
              className="icon"
              onClick={() => themeToggler()}
            />
          )}
        </Menu>
      </Nav>
    </Parent>
  );
};

const Parent = styled.header`
  color: ${(props) =>
    props.location ? props.theme.footer : props.theme.footerStart};
  a {
    scroll-behavior: smooth;
  }
  transition: background-color 0.5s, box-shadow 0.5s;
  .icon {
    border-radius: 100%;
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 0.3rem;
    transition: color 0.5s;

    color: ${(props) =>
      props.scroll && props.location
        ? props.theme.sunMoon
        : props.theme.sunMoonScroll};
    &:hover {
      color: ${(props) => props.theme.sunMoonHover};
    }
    @media (max-width: 40rem) {
      right: 5rem;
    }
  }

  box-sizing: border-box;
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: ${(props) =>
    props.scroll && props.location
      ? props.theme.navbar
      : props.theme.navbarStart};
  overflow: visible;
  box-shadow: ${(props) =>
    props.scroll && props.location
      ? "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)"
      : "0"};
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-wrap: wrap;
  max-width: 35rem;
  margin: auto;
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;

  //cursor: pointer;
  margin-top: 5px;
  &:active,
  &:hover {
    span {
      background: ${(props) => props.theme.hamburgerHover};
    }
  }

  span {
    height: 3px;
    width: 28px;
    transition: background-color 0.5s;
    background: ${(props) =>
      props.scroll && props.location
        ? props.theme.hamburgerStart
        : props.theme.hamburger};
    margin-bottom: 5px;
    border-radius: 2px;
    margin-right: 1.5rem;
  }

  @media (max-width: 40rem) {
    display: flex;
  }
`;

const MenuLink = styled.div`
  padding: 1.1rem 0rem;
  width: 6rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: color 0.5s;
  color: ${(props) =>
    props.scroll && props.path
      ? props.theme.menuLink
      : props.theme.menuLinkScroll};
  &.active {
    color: ${(props) => props.theme.menuLinkActive};
  }
  font-weight: 600;
  font-size: 1rem;
  a {
    color: ${(props) =>
      props.location ? props.theme.footer : props.theme.footerStart};
    text-decoration: none;
  }
  @media (max-width: 40rem) {
    width: 100%;
  }

  @media (min-width: 40rem) {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: block;
      width: 100%;
      height: 0.3rem;
      background-color: ${(props) => props.theme.menuLinkUnderline};
      transform: scaleX(0%);
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    &::before {
      transform-origin: 50% 0;
    }

    &:hover {
      &::before {
        transform: scaleX(100%);
        transform-origin: 50% 0;
      }
    }
  }

  &:nth-last-child(2) {
    @media (max-width: 66rem) {
      margin-right: 3.5rem;
    }

    @media (max-width: 40rem) {
      margin-right: auto;
      //box-sizing: content-box;
      border-bottom: solid 0.5rem ${(props) => props.theme.menuLinkActive};
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 40rem) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${(props) => (props.isOpen ? "17rem" : "0")};
    transition: max-height 0.2s ease-out;
  }
`;

export default Navbar;
