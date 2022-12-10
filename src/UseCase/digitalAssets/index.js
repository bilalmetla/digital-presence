import React from 'react';
import { Heading, Description, Image } from '../../Components';
import digitalAssetsImg from "../../assets/digitalAssets.png";


function DigitalAssets(props) {
    return (
        <>
            <div style={style.digitalAssets}>
                <div>
                    <Heading text={"We will create Digital Presence for your business."} />
                    <Description Description={"1- Website, 2- Facebook Page, 3- Instagram, 4- Twitter Page, 5- Linked In Page, 6- Google Page"} />
                </div>
                <div>
                    <Image width={"550px"} image={digitalAssetsImg} alt={"Digital Assets Image"} />
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
