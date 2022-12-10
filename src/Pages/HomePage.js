import React from 'react';
import {Container} from "../Components";
import {Header, MainSection, InclusiveApproach, SubscribeSection, DigitalAssets, AdsSection, CustomersGrow, StateSlider, BusinessDecisions } from "../UseCase";



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
      <StateSlider/>
	  <BusinessDecisions/>
    </Container>
  );
}
export default HomePage;