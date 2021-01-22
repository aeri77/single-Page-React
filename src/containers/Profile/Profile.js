import React, { Component } from 'react'
import classes from './Profile.css'
import Blog from '../Content/Blog/Blog'

class Profile extends Component {
    
    importAll = (r) => {
        let icons = {}
        r.keys().map((item, index) => { icons[item.replace('./','')] = r(item); return icons })
        return icons
    }


    render(){
        
        let loading = Math.random() < 0.5 ? <Blog /> : <p>Loading ....</p>
        
        const icons = this.importAll(require.context('../../assets/icons/', false, /\.(png|jpe?g|svg)$/));
        return (
            <div className={classes.Main}>
                <div className={classes.GridContainer}>
                    <div className={classes.Content}>
                        <div className={classes.headerContent}>
                            <div className={classes.icons} style={{'background':`url(${icons['newspaper.png']})`,'backgroundSize':'20px 20px'}}/>
                            <h1>Header</h1>
                            <div className={classes.hl1}/>
                        </div>
                        <div className={classes.bodyContent}>
                            {loading}
                            {/* <h1>Hello</h1>
                            <p>Lorem ipsum</p> */}
                        </div>
                        
                    </div>
                    <div className={classes.NavigationProfile}>
                        <div className={classes.Image} >
                            <h3>It's Reirn</h3>
                            <div className={classes.hl0}/>
                            <p> SFX | Android | Unity </p>
                        </div>
                        <div className={classes.Navigation}>
                            <h2>Home</h2>
                            <h2>Blog</h2>
                            <h2>Donate</h2>
                            <h2>About Me</h2>
                        </div>
                       <div className={classes.Contact}>
                        <div className={classes.icons} style={{'background':`url(${icons['facebook.png']})`,'backgroundSize':'20px 20px'}}/>
                        <div className={classes.icons} style={{'background':`url(${icons['linkedin.png']})`,'backgroundSize':'20px 20px'}}/>
                        <div className={classes.icons} style={{'background':`url(${icons['instagram.png']})`,'backgroundSize':'20px 20px'}}/>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile