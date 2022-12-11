import React from 'react';
import { Heading, Description, Button, Image } from '../../Components';
import mainSection from "../../assets/mainSection.png";
// import mainSection2 from "../../assets/mainSection2.png";


function MainSection(props) {
    return (
        <>
            <div style={style.mainSection}>
                <div>
                    <Heading text={"Digit Presence will help you to grow your business."} />
                    <Description Description={"We will help in design your website, social media marketing and will actually help to grow your business in your local area."} />
                    <Button to="/bussiness-requirement" text={"Get Started"} />
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
