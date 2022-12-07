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
                    <div>
                        <img src={firstSlide} alt={"firstSlide"} />
                        <h6> Ramsha Khan, Local Business in Rawalpindi </h6>
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

                    <div>
                        <img src={secondSlide} alt={"secondSlide"} />
                        <h6>Elle Rabe, co-founder, Falcon</h6>
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

                    <div>
                        <img src={thirdSlide} alt={"thirdSlide"} />
                        <h6> Lisa Hayden </h6>
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
        marginBottom: "50px",
        maxWidth: "650px",
    },
    description: {
        marginBottom: "50px",
        maxWidth: "500px",
    },
}

export default StateSlider;