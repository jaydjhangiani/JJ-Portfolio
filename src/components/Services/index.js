import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH2,
  ServicesH1,
  ServicesIcon,
  ServicesWrapper,
  ServicesP,
} from "./ServicesElements";
import Icon1 from "../../images/jxos.webp";
import Icon2 from "../../images/jays-arcade.jpeg";
import Icon3 from "../..//images/releaf.jpg";
import Icon4 from "../..//images/pitstop.png";
import Icon5 from "../..//images/vibebase.png";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>My Work</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>JXOS Tech</ServicesH2>
            <ServicesP>
              Digital Marketing and Web Development Start Up.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Jay's Arcade</ServicesH2>
            <ServicesP>A Retro Gaming Portal.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Releaf</ServicesH2>
            <ServicesP>A Mental Health Initiative.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>The Pit Stop</ServicesH2>
            <ServicesP>Collaborative Resource Sharing Platform.</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>VibeBase</ServicesH2>
            <ServicesP>A Spotify Based Houseparty App.</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
