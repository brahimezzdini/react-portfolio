import React from 'react'
import {Link} from 'react-router-dom'
import {NavbarSection,Container,  Logo,   LogoText,   UlList, ListItem, Anchor} from './style.js'

const Navbar=()=> {
      return (
             
            <NavbarSection>
            
            <Container>
                
                <Logo>
                    <LogoText>&lt;BE/Coding&gt;</LogoText>
                </Logo> 
                
                <UlList>
                    <ListItem ><Link to="/"><Anchor>Home</Anchor></Link></ListItem >
                    <ListItem ><Link to="/"><Anchor>Work</Anchor></Link></ListItem >
                    <ListItem ><Link to="/"><Anchor>Portfolio</Anchor></Link></ListItem >
                    <ListItem ><Link to="/"><Anchor>Resume</Anchor></Link></ListItem >
                    <ListItem ><Link to="/"><Anchor>About</Anchor></Link></ListItem >
                    <ListItem ><Link to="/contact"><Anchor>Contact</Anchor></Link> </ListItem >
                </UlList> 
                
            </Container> 
            
            </NavbarSection>  
      )
}
export default Navbar;