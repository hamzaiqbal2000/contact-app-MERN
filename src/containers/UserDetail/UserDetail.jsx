import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const [user, setUser] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    async function run() {
      const response = await axios.get(`https://dummyjson.com/users/${userId}`);
      console.log(response);
      setUser(response.data);
    }
    run();
  }, [userId]);

  return (
    <table className="table table-sm w-50 mt-5 align-items-center">
      <thead>
        <tr>
          <th scope="col">User details</th>
          <th scope="col">Placeholders</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>{user && user.firstName}</td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td>{user && user.email}</td>
        </tr>
        <tr>
          <th scope="row">Phone</th>
          <td>{user && user.phone}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserDetail;
