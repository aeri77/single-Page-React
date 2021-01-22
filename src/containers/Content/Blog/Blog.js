import React, { Component } from 'react'
import classes from './Blog.css'
import BlogContent from './BlogContent/BlogContent'

class Blog extends Component {

    importAll = (r) => {
        let images = {}
        r.keys().map((item, index) => { images[item.replace('./','')] = r(item)})
        return images
    }


    render(){

        const images = this.importAll(require.context('../../../assets/images/', false, /\.(png|jpe?g|svg)$/));
        const imagesArray = [
            images['buku.jpg'],
            images['buku.jpg'],
            images['buku.jpg'],
            images['buku.jpg'],
            images['buku.jpg'],
            images['buku.jpg'],
        ]
        const blog = imagesArray.map((img) => 
             <BlogContent images={img} />)
        
        return(
            <div className={classes.gridContainer}>
                {blog}
            </div>

        )
    }
}

export default Blog