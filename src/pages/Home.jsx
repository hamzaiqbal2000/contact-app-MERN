import React, { useState } from "react";
import CardList from "../containers/CardList/CardList";
import ContactForm from "../containers/ContactForm/ContactForm";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <section className="container-fluid row mt-2">
        <ContactForm toggle={toggle} setToggle={setToggle} />
        <CardList toggle={toggle} />
      </section>
    </>
  );
};

export default Home;
