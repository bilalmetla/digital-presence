import React from 'react';
import { Heading, Description, Image } from '../../Components';
import subscribeSection from "../../assets/subscribeSection.png";


function SubscribeSection(props) {
    return (
        <>
            <div style={style.subscribeSection}>
            <div>
                    <Image width={"100%"} image={subscribeSection} alt={"Subscribe Section Image"} />
                </div>
                <div style={style.subscribeText} >
                    <Heading text={"1.Subscribe to our Sales Booster Plan"} />
                    <Description Description={"Invest in your business by choosing to our plan.Get exclusive access to our app and enjoy real time data for your business."} />
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
