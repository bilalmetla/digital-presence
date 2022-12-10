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
                    <h1 style={style.text}> Digital Presence contact details for your business grow</h1>
                </div>
					
			<div style={style.bussinessCards}>
					<BussinessCard cardImage={workingHours} cardTitle={"Working Hours"} cardText={"24 Hours"} />
					<BussinessCard cardImage={contactUs}  cardTitle={"Contact Us"} cardText={"+923136604801"} />
					<BussinessCard cardImage={customerSupport}  cardTitle={"Customer Support"} cardText={"WhatsApp icon and facebook"} />	
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