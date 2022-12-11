import React from 'react';
import { Heading, Description, Image } from '../../Components';
import customersGrowImg from "../../assets/customersGrow.png";


function CustomersGrow(props) {
    return (
        <>
            <div style={style.customersGrow}>
                <div>
                    <Heading text={"Extra you will get from our team"} />
                    <Description marginBottom="2px" Description={"1- security of your website."} />
                    <Description marginBottom="2px" marginTop="0px" Description={"2- security of your social pages and your other digital assets"} />
                    <Description marginBottom="2px" marginTop="0px" Description={"3- 24 hours support"} />
                    <Description marginBottom="2px" marginTop="0px" Description={"4- Free logo design"} />
                    <Description marginBottom="2px" marginTop="0px" Description={"5- Ads management"} />
                </div>
                <div>
                    <Image width={"550px"} image={customersGrowImg} alt={"Grow Customer Image"} />
                </div>
            </div>
        </>

    )
}
const style = {
    customersGrow: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "150px",
        marginBottom: "150px"

    },
}

export default CustomersGrow;
