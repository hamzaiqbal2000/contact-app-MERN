import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

async function fetchUserDetails(userId) {
  const response = await axios.get(`https://dummyjson.com/users/${userId}`);
  return response.data;
}

const UserDetail = () => {
  const { userId } = useParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["userDetail", userId],
    queryFn: async () => await fetchUserDetails(userId),
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

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
          <td>{data?.firstName}</td>
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td>{data?.email}</td>
        </tr>
        <tr>
          <th scope="row">Phone</th>
          <td>{data?.phone}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserDetail;
