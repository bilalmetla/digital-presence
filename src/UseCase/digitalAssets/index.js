import React from 'react';
import { Heading, Description, Image } from '../../Components';
import digitalAssetsImg from "../../assets/digitalAssets.png";


function DigitalAssets(props) {
    return (
        <>
            <div style={style.digitalAssets}>
                <div>
                    <Heading text={"2. We will create the digital assets for you"} />
                    <Description Description={"Get a website, landing page, and social media page for your business and make your online presence complete"} />
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
