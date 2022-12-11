import React from 'react';
import { Heading, Description, Image } from '../../Components';
import adsSectionImg from "../../assets/home-page/Social-Media-Advertising.png";


function AdsSection(props) {
    return (
        <>
            <div style={style.adsSection}>
                <div>
                    <Image width={"550px"} image={adsSectionImg} alt={"Run Ads Image"} />
                </div>
                <div style={style.subscribeText} >
                    <Heading text={"We will create and run ads for your business."} />
                    <Description Description={"We will create and run ads according to your need for business and according to a best suitable strategy for your business. Which will help to grow your business."} />
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
