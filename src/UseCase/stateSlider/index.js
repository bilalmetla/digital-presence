import Carousel from 'react-bootstrap/Carousel';
import firstSlide from "../../assets/firstSlide.svg";
import secondSlide from "../../assets/secondSlide.png";
import thirdSlide from "../../assets/thirdSlide.png";

function StateSlider() {
    return (
        <Carousel style={style.wrapper} variant="dark">

            <Carousel.Item>
                <div style={style.text}>
                    <h1 style={style.heading}>"Super easy and affordable plans for Pakistanis."</h1>
                    <p style={style.description}>
                        "Pk.page handled our social media platforms and ran ads for us.
                        The onboarding process was super easy and affordable for us.
                        Highly recommend to other businesses in Pakistan.”
                    </p>
                    <div style={style.viewer}>
                        <img style={style.image} src={firstSlide} alt={"firstSlide"} />
                        <h6 style={style.viewerHeading} > Ramsha Khan, Local Business in Rawalpindi </h6>
                    </div>

					<div style={style.reviewes}>
						<div>
						 	<h1 style={style.revieweHeading}> 10,000 PKR+ </h1>
							<p style={style.revieweDescription}>orders created</p>
						</div>
						<div>
						 	<h1 style={style.revieweHeading}> 10+ </h1>
							<p style={style.revieweDescription}>Social Media Creative</p>
						</div>
                    </div>

                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div style={style.text}>
                    <h1 style={style.heading}>"Helps me stay on top of all marketing."</h1>
                    <p style={style.description}>
                        "With PK.page, I can have a clear view of all metrics and analytics to
                        make necessary changes in my marketing strategies. I am able to
                        manage all our social media channels without too much effort."
                    </p>

                    <div style={style.viewer}>
                        <img style={style.image} src={secondSlide} alt={"secondSlide"} />
                        <h6 style={style.viewerHeading} >Elle Rabe, co-founder, Falcon</h6>
                    </div>

					<div style={style.reviewes}>
						<div>
						 	<h1 style={style.revieweHeading}> 14% </h1> 
							<p style={style.revieweDescription}>more followers within a month</p>
						</div>
						<div>
						 	<h1 style={style.revieweHeading}> 8X </h1>
							<p style={style.revieweDescription}>Return on Investment</p>
						</div>
                    </div>

                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div style={style.text}>
                    <h1 style={style.heading}>Jami Clothing achieved 14x Sales in first month !</h1>
                    <p style={style.description}>
                        Explain how the customer was in a similar situation as your
                        user, struggling with similar problems. Talk about their
                        transition to your product and the outcome.
                    </p>

                    <div style={style.viewer}>
                        <img style={style.image} src={thirdSlide} alt={"thirdSlide"} />
                        <h6 style={style.viewerHeading}> Lisa Hayden </h6>
                    </div>

 					<div style={style.reviewes}>
						<div>
						 	<h1 style={style.revieweHeading}> 23% </h1>
							<p style={style.revieweDescription}>Primary Result Stat</p>
						</div>
						<div>
						 	<h1 style={style.revieweHeading}> 23% </h1>
							<p style={style.revieweDescription}>Primary Result Stat</p>
						</div>
                    </div>

                </div>
            </Carousel.Item>
        </Carousel>
    );
}


const style = {
    wrapper: {
        marginBottom: "200px",

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