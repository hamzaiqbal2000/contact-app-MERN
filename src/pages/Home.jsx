import React, { useState } from "react";
import CardList from "../containers/CardList";
import ContactForm from "../containers/ContactForm";
import Navbar from "../containers/Navbar";

const Home = () => {
    const [formData, setFormData] = useState([])
  return (
    <>
      <Navbar />
      <section class="container-fluid row mt-2">
        <ContactForm formData={formData} setFormData={setFormData} />
        <CardList formData={formData} setFormData={setFormData} />
      </section>
    </>
  );
};

export default Home;
