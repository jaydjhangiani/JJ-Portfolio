import React from 'react'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinkTitle, FooterLinkWrapper, FooterWrap, SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap, WebsiteRights } from './FooterElements'
import {FaInstagram,FaGithub,FaLinkedin, FaReact} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">How it works?</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Investors</FooterLink>
                                <FooterLink to="/signin">Terms of Services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/signin">Conatact</FooterLink>
                                <FooterLink to="/signin">Support</FooterLink>
                                <FooterLink to="/signin">Destination</FooterLink>
                                <FooterLink to="/signin">Sponsorships</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to="/signin">Submit Video</FooterLink>
                                <FooterLink to="/signin">Ambassadors</FooterLink>
                                <FooterLink to="/signin">Agency</FooterLink>
                                <FooterLink to="/signin">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Facebook</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                                <FooterLink to="/signin">Youtube</FooterLink>
            
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to = "/" onClick={toggleHome}>
                            Jay Jhangiani
                        </SocialLogo>
                        <WebsiteRights>Jay Jhangiani © {new Date().getFullYear() } All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaGithub/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                        <br/>
                        <SocialIconLink><FaReact/></SocialIconLink>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
