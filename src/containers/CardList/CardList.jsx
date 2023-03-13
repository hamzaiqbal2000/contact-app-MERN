import React, { useEffect } from "react";
import Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions/fetchUsers";

const CardList = () => {
  const dispatch = useDispatch();
  const { data, formData } = useSelector((state) => ({
    data: state.getUsers.data,
    formData: state.formReducer.formData,
  }));

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

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
      {formData.length > 0 &&
        formData.map((obj) => <Card key={obj.id} userData={obj} />)}
      {data &&
        data.map((res) => <Card key={res.id} userData={res} data={data} />)}
    </div>
  );
};

export default CardList;
