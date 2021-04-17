import React,{Component} from 'react'
import axios from 'axios'
import {Line,Container,WorkPart, Icon,PartDesc, PartTitle, Span, WorkSection, WorkTitle, } from './style.js'

class Work extends Component{
     

      state = {
            works : []
      }
      componentDidMount () {
            axios.get('js/data.json').then(res=>{
                  this.setState({works:res.data.works})
            })
      }
      render(){
            const {works} = this.state;
            const worksList = works.map((workItem)=>{
                  return(
                        <WorkPart first={workItem.id} key={workItem.id}>
                        <Icon className={workItem.icon_name}> </Icon>
                        <PartTitle>{workItem.title}</PartTitle>
                        <Line></Line>
                        < PartDesc>{workItem.body} </ PartDesc>
                        </WorkPart>  
                  )  
               })
      return (
            <WorkSection>
            <Container >
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                 
                {worksList } 
                
                
            </Container>
        </WorkSection>
      )
      }
}
export default Work;
