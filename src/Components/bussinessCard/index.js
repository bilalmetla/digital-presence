import Card from 'react-bootstrap/Card';

function BussinessCard(props) {
  return (
    <Card style={style.card}>
	  
      <Card.Body>
        <Card.Img style={style.cardImg} {...props} src={props.cardImage} alt={"cardImg"} />
        <Card.Title style={style.cardTitle} >{props.cardTitle}</Card.Title>
        <Card.Text style={style.cardText} > {props.cardText} </Card.Text>
      </Card.Body>

    </Card>
  );
}

const style = {
    card: {
       	width:"320px",
		
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
	
}


export default BussinessCard;