import React from 'react';
import { BussinessCard } from '../../Components';
import workingHours from '../../assets/workingHours.svg';
import contactUs from '../../assets/contactus.svg';
import customerSupport from '../../assets/customerSupport.svg';


function BusinessDecisions(props) {
    return (
        <>
            <div style={style.businessDecisions}>
                <div style={style.textWrapper}>
                    <h1 style={style.text}>Make business decisions that help you grow.</h1>
                </div>
					
			<div style={style.bussinessCards}>
					<BussinessCard cardImage={workingHours} cardTitle={"Working Hours"} cardText={"Our Islamabad office is open 9AM to 6PM daily"} />
					<BussinessCard cardImage={contactUs}  cardTitle={"Contact Us"} cardText={"Give us a call on +92(0)3330191295"} />
					<BussinessCard cardImage={customerSupport}  cardTitle={"Customer Support"} cardText={"Get in touch via Whatsapp"} />	
				</div>
					

            </div>
        </>

    )
}
const style = {
    businessDecisions: {
        marginBottom: "150px"
    },
	textWrapper: {
		display:"flex",
		justifyContent:"center",
	},
	text: {
		color: "#282876",
		fontSize: "50px",
		width: "700px",
		textAlign:"center",
		fontWeight: "bold",
		marginBottom: "50px"
	},
	
	bussinessCards: {
		display: "flex",
		justifyContent:"space-between",
		textAlign: "center"
	},
}

export default BusinessDecisions;