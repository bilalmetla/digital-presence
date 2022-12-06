import React from 'react';
import {Container} from "../Components";
import {Header, MainSection, InclusiveApproach, SubscribeSection, DigitalAssets, AdsSection, CustomersGrow } from "../UseCase";



function HomePage() {
  return (
    <Container>
      <Header/>
      <MainSection/>
      <InclusiveApproach/>
      <SubscribeSection/>
      <DigitalAssets/>
      <AdsSection/>
      <CustomersGrow/>
    </Container>
  );
}

export default HomePage;