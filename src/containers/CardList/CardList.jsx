import React from "react";
import Card from "../Card/Card";

import useUserData from "../../custom hooks/useUserData";
import Search from "../../components/Search";

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
      <Search />
      {data &&
        data
          .slice(0)
          .reverse()
          .map((obj) => <Card userData={obj} data={data} key={obj.id} />)}
    </div>
  );
};

export default CardList;
