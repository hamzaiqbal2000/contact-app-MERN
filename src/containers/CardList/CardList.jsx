import React from "react";
import Card from "../../components/Card";

import useUserData from "../../custom hooks/useUserData";

const CardList = ({ toggle }) => {
  const { isLoading, isError, data, error } = useUserData(toggle);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="col m-4" id="contain">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filter Contacts..."
          id="exampleInputPassword1"
        />
      </div>
      {data &&
        data
          .slice(0)
          .reverse()
          .map((obj) => <Card userData={obj} data={data} />)}
    </div>
  );
};

export default CardList;
