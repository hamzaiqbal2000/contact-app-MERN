import React from "react";
import CardList from "../containers/CardList/CardList";
import ContactForm from "../containers/ContactForm/ContactForm";

const Home = ({ data }) => {
  return (
    <>
      <section className="container-fluid row mt-2">
        <ContactForm />
        <CardList data={data} />
      </section>
    </>
  );
};

export default Home;
