import React from "react";
import Card from "../../components/Card";
import fetchData from '../../utils/api'
import { useSelector } from "react-redux";

const CardList = ({data, setData}) => {
    const {formData} = useSelector((state) => ({
        formData: state.formReducer.formData,
    }))

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
            { formData.length > 0 && formData.map((obj) => <Card key={obj.id} userData={obj} /> ) }
            {data && data.map((res) => <Card key={res.id} userData={res} setData={setData} data={data} />)}
            
        </div>
    );  
};

export default CardList;
