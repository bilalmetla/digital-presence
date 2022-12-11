import Carousel from 'react-bootstrap/Carousel';
import firstSlide from "../../assets/firstSlide.svg";
// import secondSlide from "../../assets/secondSlide.png";
// import thirdSlide from "../../assets/thirdSlide.png";

function StateSlider(props) {
    return (
        <Carousel style={style.wrapper} variant="dark">

        { props.items.map(item=>{
            return <Carousel.Item>
                <div style={style.text}>
                    <h1 style={style.heading}>{item.heading}</h1>
                    <p style={style.description}>
                        {item.description}
                    </p>
                    <div style={style.viewer}>
                        <img style={style.image} src={firstSlide} alt={"firstSlide"} />
                        {item.viewer && <h6 style={style.viewerHeading} > {item.viewer}</h6> }
                    </div>

					{item.reviewes && <div style={style.reviewes}>
						<div>
						 	<h1 style={style.revieweHeading}> 10,000 PKR+ </h1>
							<p style={style.revieweDescription}>orders created</p>
						</div>
						<div>
						 	<h1 style={style.revieweHeading}> 10+ </h1>
							<p style={style.revieweDescription}>Social Media Creative</p>
						</div>
                    </div>}

                </div>
            </Carousel.Item>
        })
    }
            

           
        </Carousel>
    );
}


const style = {
    wrapper: {
        marginBottom: "100px",
        marginTop: "100px",

    },
    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "50px",
    },
    heading: {
        marginBottom: "40px",
        maxWidth: "650px",
		color:"#282876",
		fontSize:"42px",
		fontWeight:"bold"
		
    },
    description: {
        marginBottom: "40px",
        maxWidth: "500px",
		color:"#8181AC",
    },
	viewer:{
		display: "flex",
		alignItems:"flex-start",
	},
	image:{
		width: "30px",
		height: "30px"
	},
	viewerHeading:{
		color:"#282876",
		fontSize:"20px",
		marginLeft:"10px",
	},
	
	reviewes:{
		marginTop:"50px",
		display: "flex",
		width:"100%",
		justifyContent:"space-around",
	},
	revieweHeading:{
		color:"#282876",
		fontSize:"30px",
		fontWeight:"bold"
	},
	revieweDescription: {
	    color: "#282876",
		fontSize: "20px"
	},
	
}

export default StateSlider;