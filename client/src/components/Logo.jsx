
import React from 'react';
import {ReactComponent as LogoFront} from '../../src/img/Waukees.svg'
import {ReactComponent as LogoBack} from '../../src/img/Waukees_black.svg'

const Logo = () => {
    return <div stlye={{position: "relative"}}>
    <LogoFront style={{position: "relative", zIndex: "2", right: "0px", top: "0px" }}/>
    <LogoBack style={{position: "absolute", left: "4px", top: "24px", zIndex: "1"}}/>
    </div>
}

export default Logo;