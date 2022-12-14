import React from 'react';
import { Heading, Description, Image } from '../../Components';
import subscribeSection from "../../assets/home-page/Submit-business-details.jpg";


function SubscribeSection(props) {
    return (
        <>
            <div style={style.subscribeSection}>
            <div>
                    <Image width={"550px"} image={subscribeSection} alt={"Subscribe Section Image"} />
                </div>
                <div style={style.subscribeText} >
                    <Heading text={"Submit your business details and your requirements to us."} />
                    <Description Description={"Our team will contact you in 48 hours with you for the detailed discussion."} />
                </div>
            </div>
        </>

    )
}
const style = {
    subscribeSection: {
        display: "flex",
        justifyContent: "space-between",
        textAlign:"center",
        marginTop:"150px",
    },
}

export default SubscribeSection;
