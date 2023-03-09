import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetail = ({ data }) => {
  const [user, setUser] = useState([])
  const { userId } = useParams();

  useEffect(() => {
    function run(){
        console.log("userid", userId)
        setUser(data.filter((user) => user.id == userId))
        console.log("filter", data.filter((user) => user.id == userId))
    }
    run()
  }, [])

  
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
          <td>{user[0] && user[0].firstName}</td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td>{user[0] && user[0].email}</td>
        </tr>
        <tr>
          <th scope="row">Phone</th>
          <td>{user[0] && user[0].phone}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserDetail;
