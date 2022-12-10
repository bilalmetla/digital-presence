import React from 'react';
import { Heading, Description, Button, Image } from '../../Components';
import mainSection from "../../assets/mainSection.png";
// import mainSection2 from "../../assets/mainSection2.png";


function MainSection(props) {
    return (
        <>
            <div style={style.mainSection}>
                <div>
                    <Heading text={"Grow your business right now."} />
                    <Description Description={"Boost your ROI with detailed reports. Develop the best marketing strategy for your brand with data that actually matters."} />
                    <Button text={"Get Started"} />
                </div>
                <div>
                    <Image width={"550px"} image={mainSection} alt={"Grow Bussiness Image"} />

                </div>
            </div>
            {/* <div>
                <Image style={style.image} width={"900px"} image={mainSection2} />
            </div> */}
        </>

    )
}
const style = {
    mainSection: {
        display: "flex",
        justifyContent: "space-between"
    },
}

export default MainSection;
