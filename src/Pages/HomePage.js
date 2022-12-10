import React from 'react';
import {Container} from "../Components";
import {Header, MainSection, InclusiveApproach, SubscribeSection, DigitalAssets, AdsSection, CustomersGrow, StateSlider, BusinessDecisions, Footer } from "../UseCase";



function HomePage() {
  return (
    <Container>
      <Header/>
	  <StateSlider/>
      <MainSection/>
      <InclusiveApproach/>
      <SubscribeSection/>
      <DigitalAssets/>
      <AdsSection/>
      <CustomersGrow/>
      <StateSlider/>
	  <BusinessDecisions/>
	  <Footer/>
    </Container>
  );
}
export default HomePage;