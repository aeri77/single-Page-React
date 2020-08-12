import React, { Component } from 'react'
import classes from './Demo.css'
import firstImage from './first-image.jpg'
class Demo extends Component{
  render(){
    return(
      <div className={classes.Body}>
      <section className={classes.Background}> 
        <div className={classes.Demo}>
        
          <p> <span>Tombol Jancok</span> </p>
        </div>
      </section>
      <section className={classes.Main}>
        <div className={classes.firstContent}>
          <div className={classes.firstImage}>
          <img src={firstImage} alt="firstImage"/>
          <div className={classes.overlay}>
            <div className={classes.overlayText}> Go Nyebur &gt;
              </div>
          </div>
          </div>
          <div className={classes.firstImageContainer}> <p>Keluarkan Raga Dewa. Dengan jurus anti maut. Membuat anda menjadi perkasa, tanpa obat. Majur, membuat anda jago main badminton. Bisa dipakai untuk berkendara. Hati - Hati jauhkan dari anak anak, Bahaya jika sampai tertelan. </p> </div>
          
        </div>
      </section>
      </div>
      )
  }
}

export default Demo