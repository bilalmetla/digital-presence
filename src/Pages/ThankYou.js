import React from 'react';
import Alert from 'react-bootstrap/Alert';
import {Container} from '../Components';
import {Header, Footer} from '../UseCase';

function ThankYou () {
  return (
    <Container>
      <Header />
      <Alert variant="success" style={{marginBottom: "50px"}}>
        <Alert.Heading>Hey, Thank you!</Alert.Heading>
        <p>
          You have success fully submitted your business details. Our team will contact you with in 24 hours.
          {' '}
        </p>
        <hr />
        <p className="mb-0">
          You can contact us at 
          <Alert.Link href="https://wa.me/923015339780"> Whatsapp </Alert.Link> Give it a click.
        </p>
      </Alert>
      <Footer />
    </Container>
  );
}
export default ThankYou;
