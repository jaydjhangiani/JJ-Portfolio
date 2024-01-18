import React from 'react'
import { SidebarContainer,CloseIcon, SidebarRoute,Icon, SidebarLink, SideBtnWrap, SidebarWrapper, SidebarMenu } from './SidebarElements'

const Sidebar = ({isOpen , toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                        <SidebarLink to="webdev" onClick={toggle}>Web Dev</SidebarLink>
                        <SidebarLink to="services" onClick={toggle}>My Work</SidebarLink>
                        <SidebarLink to="fotf" onClick={toggle}>FOTF</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to="/contact">Contact</SidebarRoute>
                    </SideBtnWrap>
            </SidebarWrapper>

            </SidebarContainer>
            
        </>
    )
}

export default Sidebar
