import React from "react";
import CardList from "../containers/CardList/CardList";
import ContactForm from "../containers/ContactForm/ContactForm";

const Home = () => {
  return (
    <>
      <section className="container-fluid row mt-2">
        <ContactForm />
        <CardList />
      </section>
    </>
  );
};

export default Home;
