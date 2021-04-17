import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { PortfolioSection, PortfolioTitle,Span, List, ListItem, ImageWrapper, Image,Overlay,OverlaySpan } from './style.js' 

const Portfolio = () => {
 
const [images, setImage]= useState([])
useEffect(() => {
      axios.get('js/data.json').then(res => { setImage( res.data.portfolio )
      })
}, [])
const PortfolioImage = images.map((imageItem)=>{
      return(
                 <ImageWrapper key={imageItem.id}>
                    <Image src={imageItem.image}/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
                </ImageWrapper> 
      )
})
    
      return (
           
            <PortfolioSection>
                  <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
                  <List  >
                        <ListItem  active >All</ListItem>
                        <ListItem  >HTML</ListItem>
                        <ListItem  >Photoshop</ListItem>
                        <ListItem  >Wordpress</ListItem>
                        <ListItem  >Mobile</ListItem>
                  </List>
            
            <div className="box">
                
           { PortfolioImage}
                
            </div> 
            
        </PortfolioSection>
           
      )
      
}
export default Portfolio;