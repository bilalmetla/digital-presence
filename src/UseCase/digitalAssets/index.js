import React from 'react';
import { Heading, Description, Image } from '../../Components';
import digitalAssetsImg from "../../assets/home-page/best-practices-for-maximizing-your-digital-presence.png";


function DigitalAssets(props) {
    return (
        <>
            <div style={style.digitalAssets}>
                <div>
                    <Heading  text={"We will create Digital Presence for your business."} />
                    <Description marginBottom="2px"  Description={"1- Website"} />
                    <Description marginBottom="2px" marginTop="0px" Description={"2- Facebook Page"} />
                    <Description marginBottom="2px" marginTop="0px" Description={"3- Instagram"} />
                    <Description marginBottom="2px" marginTop="0px" Description={"4- Twitter Page"} />
                    <Description marginBottom="2px" marginTop="0px" Description={"6- Google Page"} />
                </div>
                <div>
                    <Image width={"600px"} image={digitalAssetsImg} alt={"Digital Assets Image"} />
                </div>
            </div>
        </>

    )
}
const style = {
    digitalAssets: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "150px"

    },
}

export default DigitalAssets;
