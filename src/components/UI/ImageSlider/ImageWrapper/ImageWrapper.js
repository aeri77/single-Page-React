import React, { Component } from 'react'
import classes from './ImageWrapper.css'
class ImageWrapper extends Component {
    
    render(){
        let imgList = []
        for(let key in this.props.imageList){
            imgList.push({
                id: key,
                config: this.props.imageList[key]
            })
        }
        let image = (
            <div className={classes.Image} style={{'gridTemplateRows': `repeat(${imgList.length + 1},0)`}} >
                {
                    imgList.map(
                        listImage => (
                            <img key={listImage.id} className={listImage.config.class} src={listImage.config.src} style={listImage.config.style} alt="imag2"/>            
                        )
                    )
                }
            </div>
        )

        return (
            <div>  
                {image}
            </div>
        )
    }


}

export default ImageWrapper