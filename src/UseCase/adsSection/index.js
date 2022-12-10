import React from 'react';
import { Heading, Description, Image } from '../../Components';
import adsSectionImg from "../../assets/adsSection.png";


function AdsSection(props) {
    return (
        <>
            <div style={style.adsSection}>
                <div>
                    <Image width={"100%"} image={adsSectionImg} alt={"Run Ads Image"} />
                </div>
                <div style={style.subscribeText} >
                    <Heading text={"3. We will run ads for you"} />
                    <Description Description={"We will create and run ads for your business to reach out to leads and potential customers"} />
                </div>
            </div>
        </>

    )
}
const style = {
    adsSection: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
        marginTop: "150px",
    },
}

export default AdsSection;
