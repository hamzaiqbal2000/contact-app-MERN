import React, { useState } from "react";
import CardList from "../containers/CardList/CardList";
import ContactForm from "../containers/ContactForm/ContactForm";
import Navbar from "../containers/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="container-fluid row mt-2">
        <ContactForm />
        <CardList />
      </section>
    </>
  );
};

export default Home;
