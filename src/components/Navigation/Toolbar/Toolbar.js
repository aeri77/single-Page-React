import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
import BackToolbar from './BackToolbar/BackToolbar'


const toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DekstopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
        <BackToolbar />
    </header>
)

export default toolbar