import React from 'react';
// import logoImage from '../../assets/logo.svg';
import { Logo, Heading } from "../../Components";
import { BsWhatsapp, BsFacebook, BsTelephone } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

function Footer() {
    return (
        <div style={style.footerWrapper}>
		
			<div>
				<p style={style.copyRight}>© 2022 Copyright by<span style={{fontWeight:"300"}}>  digital-Presence.com </span> </p>
				
			</div>

			<div style={style.footerLinks}>
				<Heading marginTop="0px" text="Follow US"></Heading>
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
	// footerLinkHeading: {
	// 	fontWeight:"bold"
	// },
	copyRight: {
		color:"#282876",
		fontSize:"10px",
		fontWeight:"bold"
	},
	whatsappLink: {
		fontSize:"30px",
		color:"#282876",
	},
	facebookLink: {
		fontSize:"30px",
		color:"#282876",
	},
	telephoneLink: {
		fontSize:"30px",
		color:"#282876",
	}
}

export default Footer;