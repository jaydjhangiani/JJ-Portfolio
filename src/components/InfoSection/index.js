import React from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer, InfoRow, InfoWrapper ,TextWrapper,Heading, SubTitle, BtnWrap, Column1, TopLine, Column2, ImgWrap, Img} from './InfoElements'
const InfoSection = ({lightText,lightBg,id,alt,img,lightTextDesc,description,buttonLabel,headLine,topLine,imgStart,primary,dark,dark2,darkText}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    <Button to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact={true}
                                        offset={-80}
                                        primary={primary ? 1: 0}
                                        dark={dark ? 1: 0}
                                        
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
