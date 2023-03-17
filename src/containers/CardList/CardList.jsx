import React, { useEffect } from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/fetchUsers";
import useUserData from "../../custom hooks/useUserData";

const CardList = ({ toggle }) => {
  const dispatch = useDispatch();
  const { trueData } = useSelector((state) => ({
    trueData: state.getUsers.data,
  }));

  const { isLoading, isError, data, error } = useUserData(toggle);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

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

      {trueData &&
        trueData.map((res) => <Card key={res.id} userData={res} data={data} />)}
    </div>
  );
};

export default CardList;
