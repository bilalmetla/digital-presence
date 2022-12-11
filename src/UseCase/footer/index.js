import React from 'react';
// import logoImage from '../../assets/logo.svg';
import { Logo } from "../../Components";
import { BsWhatsapp, BsFacebook, BsTelephone } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

function Footer() {
    return (
        <div style={style.footerWrapper}>
		
			<div>
				<p>© 2022 Copyright by digital-Presence.com</p>
			</div>

			<div style={style.footerLinks}>
				<h4 style={style.footerLinkHeading}>Follow us</h4>
				<Button  style={style.telephoneLink}  variant="link" href="tel:+923015339780">{<BsTelephone/>}</Button>
				<Button  style={style.whatsappLink}  variant="link" href="https://wa.me/923015339780">{<BsWhatsapp/>}</Button>
				<Button  style={style.facebookLink}  variant="link" href="https://www.facebook.com/profile.php?id=100088791724793">{<BsFacebook/>}</Button>
				
			</div>

			
				<Logo style={{width:"300px"}}  />	
		

        </div>
    )
}



const style = {
 	footerWrapper:{
		display: "flex",
		justifyContent: "space-between",
		marginBottom: "50px"
	},
	footerLinkHeading: {
		fontWeight:"bold"
	},
	whatsappLink: {
		fontSize:"30px",
		color:"green",
	},
	facebookLink: {
		fontSize:"30px",
		color:"blue",
	},
	telephoneLink: {
		fontSize:"30px",
		color:"green",
	}
}

export default Footer;