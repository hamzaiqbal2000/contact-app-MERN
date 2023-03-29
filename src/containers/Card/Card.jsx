import React from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import queryClient from "../../query-client-provider";
import SimpleCard from "../../components/SimpleCard";

const Card = ({ userData }) => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (id) => {
      return axios.delete(`http://127.0.0.1:4000/deleteUser/${id}`);
    },
    onSuccess: (successData) => {
      console.log("Delete successData", successData);
      queryClient.invalidateQueries("formDataDetail", { refetchActive: true });
    },
  });

  function deleteCard() {
    mutation.mutate(userData.id);
    alert("Card item deleted");
  }

  function handleDetails() {
    navigate(`/userdetails/${userData.id}`);
  }

  return (
    <>
      {mutation.isLoading ? (
        "Deleting Card..."
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Card Deleted!</div> : null}

          <SimpleCard
            userData={userData}
            deleteCard={deleteCard}
            handleDetails={handleDetails}
          />
        </>
      )}
    </>
  );
};

export default Card;
