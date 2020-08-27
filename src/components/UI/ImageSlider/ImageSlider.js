import React, { Component } from 'react'

import classes from './ImageSlider.css'

import SliderButton from './RadioButton/RadioButton'
import ImageWrapper from './ImageWrapper/ImageWrapper'
    class ImageSlider extends Component {
        
    render(){
        return (
            <div className={classes.Background}>
              <span className={classes.bg} />
                <ImageWrapper />
                <div className={classes.Selector}>
                  <SliderButton  />
                  <div className={classes.text}>
                    <h3>Title Test</h3>
                    <p>This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties. This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties.This text is styled with some of the text formatting properties. The heading uses the text-align, text-transform, and color properties.</p>
                  </div>
                </div>
                 
                  
            </div>
      )
    }
      
}
export default ImageSlider