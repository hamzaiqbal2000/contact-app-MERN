import React, { useState } from "react";
import CardList from "../containers/CardList/CardList";
import ContactForm from "../containers/ContactForm/ContactForm";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import queryClient from "../query-client-provider";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  const { id, name, email, phone } = useSelector((state) => ({
    id: state.formReducer.id,
    name: state.formReducer.name,
    email: state.formReducer.email,
    phone: state.formReducer.phone,
  }));

  const mutation = useMutation({
    mutationFn: () => {
      return axios.post(`http://localhost:4000/addUsers`, {
        id: id,
        name: name,
        email: email,
        phone: phone,
      });
    },
    onSuccess: (successData) => {
      console.log("successData", successData);
      queryClient.invalidateQueries("formDataDetail");
    },
  });

  return (
    <>
      <section className="container-fluid row mt-2">
        <ContactForm mutation={mutation} />
        <CardList />
      </section>
    </>
  );
};

export default Home;
