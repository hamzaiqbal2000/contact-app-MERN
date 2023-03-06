import React, {useState} from "react";

const ContactForm = ({ formData, setFormData}) => {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    
    function submitHandler(e){
        e.preventDefault()
        setId((prev) => prev + 1)
        setFormData([...formData, {id, name, email, phone}])
    }

  return (
    <div className="col m-4">
      <h2 className="text-center">Add Contact</h2>
      <form className="mt-3" action="#" method="get" id="section12">
        <div className="mb-3">
          <input
            type="text"
            value={name}
            className="form-control"
            placeholder="Name"
            id="exampleInputName1"
            aria-describedby="emailHelp"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={email}
            className="form-control"
            placeholder="Email"
            id="exampleInputEmail1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={phone}
            className="form-control"
            placeholder="phone(XXXXXXXXXX)"
            id="exampleInputphone1"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <label>Contact Type</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value="Personal"
          />
          <label className="form-check-label">
            Personal
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            value="Professional"
          />
          <label className="form-check-label">
            Professional
          </label>
        </div>
        <div className="mb-3 mt-3">
          <input className="form-control" type="file" id="formFile" />
        </div>

        <button
          type="submit"
          id="myBtn"
          className="btn btn-primary"
          onClick={(e) => submitHandler(e)}
        >
          Add Contact
        </button>
        {/* <button type="button" id="myBtn" className="btn btn-primary d-none" onclick="editCard()">Edit User</button> */}
      </form>

      
    </div>
  );
};

export default ContactForm;
