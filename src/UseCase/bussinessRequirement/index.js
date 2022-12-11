import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Requirement() {
  return (
	 <div style={style.requirementWrapper}>
    <Form style={style.formWrapper}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={style.formLabel} >Business Name</Form.Label>
          <Form.Control type="email" placeholder="Enter Business Name" style={style.formPlaceholder} />
        </Form.Group>

	<Form.Group as={Col} controlId="formGridState">
          <Form.Label style={style.formLabel} >Business Category</Form.Label>
          <Form.Select defaultValue="Choose Category">
            <option>Choose Category</option>
            <option> Fashion </option>
            <option> Food </option>
            <option> Portfolio </option>
            <option> Community Organizations </option>
            <option> Bussiness </option>
          </Form.Select>
        </Form.Group>
      </Row>
	
	<Form.Label style={style.formLabel} >Your Requirement</Form.Label>
		<Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Website" />
      </Form.Group>

	<Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Your Website Name</Form.Label>
        <Form.Control placeholder="Example.com" />
      </Form.Group>



	<Form.Label style={style.formLabel} >Social Presence</Form.Label>
		<Form.Group className="mb-3" id="formGridCheckbox">
			<div style={style.checkboxWrapper}>
        		<Form.Check type="checkbox" label="Facebook Page" />
				<Form.Check type="checkbox" label="Linkedin Page" />
				<Form.Check type="checkbox" label="Google Page" />
				<Form.Check type="checkbox" label="Twitter Page" />
				<Form.Check type="checkbox" label="Whatsapp Page" />
			</div>
      </Form.Group>


	<Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={style.formLabel} >Enter Email</Form.Label>
          <Form.Control type="email" placeholder="Email"  />
        </Form.Group>

	 <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={style.formLabel} >Contact Number</Form.Label>
          <Form.Control type="email" placeholder="Contact Number"/>
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Button style={style.formButton} type="submit">
        Submit
      </Button>
    </Form>
</div>
  );
}

const style = {
	requirementWrapper:{
		display: "flex",
		justifyContent: "center",
	},
	formWrapper: {
		marginBottom: "150px",
		width: "800px"
	},
	checkboxWrapper: {
		display: "flex",
		justifyContent: "space-between",
	},
	formLabel: {
		color:"#282876",
		fontWeight: "bold"
	},
	formButton: {
		background: "#282876",
		border:"none"
	}
}

export default Requirement;