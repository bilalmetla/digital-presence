import React from 'react';
// import logoImage from '../../assets/logo.svg';
import { Logo } from "../../Components";
import { BsWhatsapp, BsFacebook, BsTelephone } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

function Footer() {
    return (
        <div style={style.footerWrapper}>
		
		<div>
			<p>© 2020 Copyright: Digital-Presence.com</p>
		</div>

		<div style={style.footerLinks}>
			<h4 style={style.footerLinkHeading}>Follow us</h4>
			<Button  style={style.telephoneLink}  variant="link" href="tel:+923136604801">{<BsTelephone/>}</Button>
			<Button  style={style.whatsappLink}  variant="link" href="https://wa.me/923136604801">{<BsWhatsapp/>}</Button>
			<Button  style={style.facebookLink}  variant="link" href="#">{<BsFacebook/>}</Button>
			
		</div>

		<div>
			<Logo style={{width:"300px", marginRight:"150px"}}  />	
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
	whatsappLink: {
		fontSize:"50px",
		color:"green",
	},
	facebookLink: {
		fontSize:"50px",
		color:"blue",
	},
	telephoneLink: {
		fontSize:"50px",
		color:"green",
	}
}

export default Footer;