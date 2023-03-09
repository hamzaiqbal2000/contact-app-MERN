import React from "react";
import CardList from "../containers/CardList/CardList";
import ContactForm from "../containers/ContactForm/ContactForm";

const Home = ({data, setData}) => {
  return (
    <>
      <section className="container-fluid row mt-2">
        <ContactForm />
        <CardList data={data} setData={setData} />
      </section>
    </>
  );
};

export default Home;
