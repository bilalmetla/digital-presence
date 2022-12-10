import React from 'react';
import { Heading, Description,} from '../../Components';


function InclusiveApproach(props) {
    return (
        <>
            <div style={style.inclusiveApproach}>
                <Heading text={"Our work approach is very simple and our approach is to grow your business in the right way."} />
                <Description Description={"We will create and run costs affecting marketing campaigns within your budget."} />

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
