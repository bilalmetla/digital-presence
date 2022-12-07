import React from 'react';
import { Heading, Description, Image } from '../../Components';
import customersGrowImg from "../../assets/customersGrow.png";


function CustomersGrow(props) {
    return (
        <>
            <div style={style.customersGrow}>
                <div>
                    <Heading text={"4. Grow your customers and multiply your sales"} />
                    <Description Description={"Get maximum return on your investment with increased number of customer and sales revenue."} />
                </div>
                <div>
                    <Image width={"550px"} image={customersGrowImg} />
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
