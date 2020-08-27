import React, { Component } from 'react'
import classes from './Demo.css'
import ImageSlider from '../../components/UI/ImageSlider/ImageSlider'
class Demo extends Component{

 
  render(){
    return(
      <div className={classes.Background}>
        
        <div className={classes.Body}>
          <ImageSlider /> 
        </div>
      </div>
      )
  }
}

export default Demo