import React from 'react'
import classes from './BlogContent.css'

class BlogContent extends React.Component{
    constructor(props){
        super(props)
        this.state = {images : props.images}
    }

    render(){
        return(
            <div className={classes.content}>
                    <div className={classes.contentImage}>
                        <img src={this.state.images} alt= 'content'/>
                    </div>
                    <div className={classes.contentInfo}>
                        <h2>Some Title</h2>
                        <p>Sebuah cerita dalam cerita kecil membunkus. cerita aneh hanya sample. dan juga ini bukalan apa apa, lain kali.</p>
                    </div>
                </div>
        )
    }
}

export default BlogContent