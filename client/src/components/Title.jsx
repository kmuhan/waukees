import React from "react";
import {ReactComponent as Logo} from "../img/Logo.svg";
import {ReactComponent as OrganicLogo} from '../img/OrganicLogo.svg'

const Title = () => {
    return <div style={{position: "relative"}}>
        <style>@import url('https://fonts.googleapis.com/css2?family=Chivo:ital,wght@1,700&display=swap');</style>
        <div style={{position: 'relative', width: 'fit-content', height: '128px', margin: "24px auto"}}>
            <Logo />
            <div style={{display: "flex", justifyContent: "center", alignItems:"center", position: 'absolute', top: '70px', left: '40px'}}>
                <OrganicLogo style={{marginRight: '10px'}}/>
                <p style={{fontFamily: 'Chivo', fontStyle: 'italic', fontWeight: '600', fontSize: '20px'}}>
                    Cookies & Groceries
                </p>
            </div>
        </div>
    </div>
}

export default Title