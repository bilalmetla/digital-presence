import {Button, Alert, Col, Row, Form} from 'react-bootstrap';
import React, {useState} from 'react';
import SendEmail from '../../emailjs';
import { useNavigate  } from "react-router-dom";


function Requirement () {
	const navigate = useNavigate()
  const [isWebsiteRequired, setIsWebsiteRequired] = useState (false);
  const [isFacebookPageRequired, setIsFacebookPageRequired] = useState (false);
  const [isLinkedinPageRequired, setIsLinkedinPageRequired] = useState (false);
  const [isGooglePageRequired, setIsGooglePageRequired] = useState (false);
  const [isTwitterPageRequired, setIsTwitterPageRequired] = useState (false);
  const [isWhatsappPageRequired, setIsWhatsappPageRequired] = useState (false);
  const [bussinessCategory, setBussinessCategory] = useState ('');
  const [formData, setFormData] = useState ({});
  const [isFormValid, setIsFormValid] = useState (true);

  const handleFormData = e => {
    let data = {...formData};
    data[e.target.name] = e.target.value;
    setFormData (data);
  };

  const handleWebsiteRequiredOnChange = () => {
    setIsWebsiteRequired (!isWebsiteRequired);
    setFormData ({...formData, isWebsiteRequired});
  };

  const handleFacebookPageOnChange = () => {
    setIsFacebookPageRequired (!isFacebookPageRequired);
    setFormData ({...formData, isFacebookPageRequired});
  };
  const handleLinkedinPageOnChange = () => {
    setIsLinkedinPageRequired (!isLinkedinPageRequired);
    setFormData ({...formData, isLinkedinPageRequired});
  };
  const handleGooglePageOnChange = () => {
    setIsGooglePageRequired (!isGooglePageRequired);
    setFormData ({...formData, isGooglePageRequired});
  };
  const handleTwitterPageOnChange = () => {
    setIsTwitterPageRequired (!isTwitterPageRequired);
    setFormData ({...formData, isTwitterPageRequired});
  };
  const handleWhatsappPageOnChange = () => {
    setIsWhatsappPageRequired (!isWhatsappPageRequired);
    setFormData ({...formData, isWhatsappPageRequired});
  };
  const handleDropDownOnChange = event => {
    setBussinessCategory (event.target.value);
    setFormData ({...formData, bussinessCategory: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault ();
    if (
      !formData.bussinessName ||
      !formData.phoneNumber ||
      !formData.bussinessCategory
    ) {
      setIsFormValid (false);
	  setTimeout(() => {
		setIsFormValid(true)
	  }, 1000 * 5);
	  return;
    }
    SendEmail (formData);
    setFormData ({});
	navigate('/thank-you');
  };

  return (
    <div style={style.requirementWrapper}>
      <Form style={style.formWrapper}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label style={style.formLabel}>Business Name</Form.Label>
            <Form.Control
              onChange={handleFormData}
              type="text"
              name="bussinessName"
              placeholder="Enter Business Name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label style={style.formLabel}>Business Category</Form.Label>
            <Form.Select
              value={bussinessCategory}
              onChange={handleDropDownOnChange}
            >
              <option>Choose Category</option>
              <option> Fashion </option>
              <option> Food </option>
              <option> Portfolio </option>
              <option> Community Organizations </option>
              <option> Bussiness </option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Label style={style.formLabel}>Your Requirement</Form.Label>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check
            type="checkbox"
            label="Website"
            checked={isWebsiteRequired}
            onChange={handleWebsiteRequiredOnChange}
          />
        </Form.Group>

        {isWebsiteRequired === true &&
          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Your Website Name</Form.Label>
            <Form.Control
              onChange={handleFormData}
              name="websiteName"
              placeholder="Example.com"
            />
          </Form.Group>}

        <Form.Label style={style.formLabel}>Social Presence</Form.Label>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <div style={style.checkboxWrapper}>
            <Form.Check
              type="checkbox"
              label="Facebook Page"
              checked={isFacebookPageRequired}
              onChange={handleFacebookPageOnChange}
            />
            <Form.Check
              type="checkbox"
              label="Linkedin Page"
              checked={isLinkedinPageRequired}
              onChange={handleLinkedinPageOnChange}
            />
            <Form.Check
              type="checkbox"
              label="Google Page"
              checked={isGooglePageRequired}
              onChange={handleGooglePageOnChange}
            />
            <Form.Check
              type="checkbox"
              label="Twitter Page"
              checked={isTwitterPageRequired}
              onChange={handleTwitterPageOnChange}
            />
            <Form.Check
              type="checkbox"
              label="Whatsapp Page"
              checked={isWhatsappPageRequired}
              onChange={handleWhatsappPageOnChange}
            />
          </div>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label style={style.formLabel}>Enter Email</Form.Label>
            <Form.Control
              onChange={handleFormData}
              name="bussinessEmail"
              type="email"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label style={style.formLabel}>Contact Number</Form.Label>
            <Form.Control
              onChange={handleFormData}
              name="phoneNumber"
              type="number"
              placeholder="Contact Number"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label style={style.formLabel}>Address</Form.Label>
          <Form.Control
            onChange={handleFormData}
            name="address"
            type="text"
            placeholder="1234 Main St"
          />
        </Form.Group>

        {isFormValid === false &&
          <Alert key={'danger'} variant={'danger'} dismissible onClose={() => setIsFormValid(true)}>
            <Alert.Heading>OPS! Fill The Form!</Alert.Heading>
            <p>
             Business Name, bussiness Category, Contact Detailsx
            </p>
          </Alert>}
        <div style={style.formButtonWrapper}>
          <Button onClick={handleSubmit} style={style.formButton} type="submit">
            {' '}Submit{' '}
          </Button>
        </div>
      </Form>
    </div>
  );
}

const style = {
  requirementWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  formWrapper: {
    marginBottom: '150px',
    width: '800px',
  },
  checkboxWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  formLabel: {
    color: '#282876',
    fontWeight: 'bold',
  },
  formButton: {
    background: '#282876',
    padding: '15px 80px',
    fontSize: '20px',
    border: 'none',
    marginTop: '15px',
  },
  formButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default Requirement;
