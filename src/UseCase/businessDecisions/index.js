import React from 'react';
import { BussinessCard, Heading } from '../../Components';
import workingHours from '../../assets/workingHours.svg';
import contactUs from '../../assets/contactus.svg';
import customerSupport from '../../assets/customerSupport.svg';
 



function BusinessDecisions(props) {
    return (
        <>
            <div style={style.businessDecisions}>
                <div style={style.textWrapper}>
                    <Heading text={"Contact us for your business grow."}></Heading>
                </div>
					
			<div style={style.bussinessCards}>
					<BussinessCard cardImage={workingHours} cardTitle={"Working Hours"} cardText={"24 Hours"} />
					<BussinessCard cardImage={contactUs}  cardTitle={"Contact Us"}  call="+923015339780" whatsApp="923015339780" >
						</BussinessCard>
					<BussinessCard cardImage={customerSupport}  cardTitle={"Customer Support"} cardText={""} whatsApp="923015339780" facebook="true" >
						</BussinessCard>
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