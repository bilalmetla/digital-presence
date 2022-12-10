import React from 'react';
import { Heading, Description, Image } from '../../Components';
import customersGrowImg from "../../assets/customersGrow.png";


function CustomersGrow(props) {
    return (
        <>
            <div style={style.customersGrow}>
                <div>
                    <Heading text={"Extra you will get"} />
                    <Description Description={"1- security of your website, social pages and your other digital assets."} />
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
