import React from "react";
import avatar from '../assets/index.jpg'
import axios from 'axios'

const Card = ({userData, setData, data}) => {

    function handleDelete(){
        axios.delete(`https://dummyjson.com/users/${userData.id}`)
        .then(() => {
            const result = data.filter((obj) => obj.id != userData.id)
            console.log(result)
            setData([...result])
            alert('Card item deleted')
        })
        .catch(err => console.log("err", err))

    }

    function handleEdit(){

    }

    return (
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
                        <button className="btn btn-dark" onClick={handleEdit} >
                            Edit
                        </button>
                        <button  className="btn btn-danger" onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
                <div className="d-flex flex-column mr-auto">
                    <button className="btn btn-primary">
                        Personal
                    </button>
                    <img className="mt-1" src={avatar} alt="" width="150px" height="150px" />
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Card;
