import React from 'react';
import { Heading, Description,} from '../../Components';


function InclusiveApproach(props) {
    return (
        <>
            <div style={style.inclusiveApproach}>
                <Heading text={"Our all-inclusive approach to boost your business online"} />
                <Description Description={"Enough with unsuccessful campaigns that cost you money and give back nothing. Get a simple solution that helps you grow your business."} />

            </div>
        </>

    )
}
const style = {
    inclusiveApproach: {
        textAlign: "center",
        marginTop: "150px"
    },
}

export default InclusiveApproach;
