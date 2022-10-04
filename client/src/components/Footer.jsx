import React from "react";
import {ReactComponent as LogoWhite} from '../img/LogoWhite.svg'

const Footer = () => {
    return <div>
        <style>@import url('https://fonts.googleapis.com/css2?family=Chivo:ital,wght@1,700&display=swap');</style>
        <div style={{display:'flex', justifyContent: 'right'}}>
            <LogoWhite style={{margin: '7px 6px 0 0'}}/>
            <p style={{fontFamily: 'Chivo', fontStyle: 'italic', fontWeight:"600"}}>all rights reserved.</p>
        </div>
    </div>

}

export default Footer