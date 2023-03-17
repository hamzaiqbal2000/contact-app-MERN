import React from "react";
import avatar from "../assets/index.jpg";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DELETE_USER } from "../actions/fetchUsers";

const Card = ({ userData, data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: (userData) => {
      return axios.delete(`https://dummyjson.com/users/${userData.id}`);
    },
    onSuccess: (successData) => {
      if (successData.data.isDeleted) {
        dispatch({ type: DELETE_USER, payload: userData.id });
      }
    },
  });

  function deleteCard() {
    mutation.mutate(userData);
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

          <div className="card mb-3">
            <div className="d-flex justify-content-between p-3">
              <div className="d-flex flex-column ml-auto mt-3">
                <h5>{userData.firstName ?? userData.name}</h5>
                <div className="d-flex mt-2">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/feather-5/24/phone-512.png"
                    alt=""
                    width="18px"
                    height="15px"
                    className="m-1"
                  />
                  <p className="card-text">{userData.email}</p>
                </div>
                <div className="d-flex mt-1">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/feather-5/24/phone-512.png"
                    alt=""
                    width="18px"
                    height="15px"
                    className="m-1"
                  />
                  <p className="card-text">{userData.phone}</p>
                </div>
                <div className="mt-4">
                  <button className="btn btn-dark">Edit</button>
                  <button className="btn btn-danger m-2" onClick={deleteCard}>
                    Delete
                  </button>
                  <button className="btn btn-warning" onClick={handleDetails}>
                    Details
                  </button>
                </div>
              </div>
              <div className="d-flex flex-column mr-auto">
                <button className="btn btn-primary">Personal</button>
                <img
                  className="mt-1"
                  src={avatar}
                  alt=""
                  width="150px"
                  height="150px"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
