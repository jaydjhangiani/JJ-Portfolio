import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Jay Jhangiani
            </SocialLogo>
            <WebsiteRights>
              Jay Jhangiani © {new Date().getFullYear()} All rights reserved.{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/jaydjhangiani"
                target="_blank"
                aria-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink aria-label="MADE WITH REACT">
                <FaReact />
              </SocialIconLink>
              <SocialIconLink
                href="https://linkedin.com/in/jaydjhangiani"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
