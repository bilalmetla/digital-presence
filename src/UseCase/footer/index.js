import React from 'react';
import logoImage from '../../assets/logo.png';
import { Logo, } from "../../Components";

function Footer() {
    return (
        <div style={style.footerWrapper}>
		<div>
			<p>© 2020 Copyright: MDBootstrap.com</p>
		</div>

		<div style={style.footerLinks}>
			<h4 style={style.footerLinkHeading}>Follow us</h4>
		</div>

		<div>
			<Logo style={{width:"100px"}} image={logoImage} />	
		</div>

        </div>
    )
}



const style = {
 	footerWrapper:{
		display: "flex",
		justifyContent: "space-between",
	},
	footerLinkHeading: {
		fontWeight:"bold"
	},
	iconColor:{
		color: "red"
	}
}

export default Footer;