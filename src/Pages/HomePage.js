import React from 'react';
import {Container} from "../Components";
import {Header, MainSection, InclusiveApproach, SubscribeSection, DigitalAssets, AdsSection, CustomersGrow, StateSlider, BusinessDecisions, Footer } from "../UseCase";



function HomePage() {
  const topItems = [
    {
      heading: "Digital Presence will help to grow your business.",
      description: "We will help in design your website, social media marketing and will actually help to grow your business in your local area."
    },
    {
      heading: "Submit your business details and your requirements to us.",
      description: "Our team will contact you in 48 hours with you for the detailed discussion."
    },
    {
      heading: "We will create Digital Presence for your business.",
      description: "We will create a website, Facebook Page, Instagram, Twitter Page, Linked In Page, Google Page and other social media requirements for your business."
    },
    {
      heading: "We will create, run and manage ads for your business.",
      description: "We will create and run ads according to your need for business and according to a best suitable strategy for your business. Which will help to grow your business."
    }
  ];
  const reviewesItems = [
    {
      heading: "Digital Presence will help to grow your business.",
      description: "We will help in design your website, social media marketing and will actually help to grow your business in your local area."
    },
    {
      heading: "Submit your business details and your requirements to us.",
      description: "Our team will contact you in 48 hours with you for the detailed discussion."
    },
    {
      heading: "We will create Digital Presence for your business.",
      description: "We will create a website, Facebook Page, Instagram, Twitter Page, Linked In Page, Google Page and other social media requirements for your business."
    },
    {
      heading: "We will create, run and manage ads for your business.",
      description: "We will create and run ads according to your need for business and according to a best suitable strategy for your business. Which will help to grow your business."
    }
  ];

  return (
    <Container>
      <Header/>
	  <StateSlider
     
     items={topItems}
    />
      <MainSection/>
      <InclusiveApproach/>
      <SubscribeSection/>
      <DigitalAssets/>
      <AdsSection/>
      <CustomersGrow/>
      <StateSlider
      items={reviewesItems}
     
      />
	  <BusinessDecisions/>
	  <Footer/>
    </Container>
  );
}
export default HomePage;