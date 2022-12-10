import Card from 'react-bootstrap/Card';
import { BsWhatsapp, BsFacebook, BsTelephone } from "react-icons/bs";


function BussinessCard(props) {
  return (
    <Card style={style.card}>
	  
      <Card.Body>
        <Card.Img style={style.cardImg} {...props} src={props.cardImage} alt={props.alt} />
        <Card.Title style={style.cardTitle} >{props.cardTitle}</Card.Title>
        <Card.Text style={style.cardText} > {props.cardText} </Card.Text>
		{ props.whatsApp && <Card.Link style={style.whatsappLink} href={`https://wa.me/${props.whatsApp}`}>{<BsWhatsapp/>}</Card.Link>	 }
		{ props.facebook && <Card.Link style={style.facebookLink} href="#">{<BsFacebook/>}</Card.Link>	 }
		{ props.call && <Card.Link style={style.telephoneLink} href="tel:+923136604801">{<BsTelephone/>}</Card.Link>	 }

      </Card.Body>

    </Card>
  );
}

const style = {
    card: {
       	width:"350px",
		borderRadius: "8px",
		border: "none",
		backgroundColor: "#fff",
		boxShadow: "0 15px 30px 0 rgb(220 221 243 / 25%)",
    },
	cardImg: {
		width: "50px",
		marginBottom: "30px",
		marginTop: "50px"
	},
	cardTitle: {
    	fontSize: "25px",
		fontWeight: "bold",
    	color: "#31317C",
		marginBottom: "30px"
   },
	cardText: {
		color:"#8484AE",
		fontSize: "18px",
		marginBottom: "30px"
   },
	whatsappLink: {
		fontSize:"50px",
		color:"green",
	},
	facebookLink: {
		fontSize:"50px",
		color:"blue",
	},
	telephoneLink: {
		fontSize:"50px",
		color:"green",
	}
	
}


export default BussinessCard;