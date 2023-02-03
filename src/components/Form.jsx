import React, { useState, useEffect } from "react";
import Students from "../services/firestore";
import { Typography, Button } from "@mui/material";
import Aside from "./Aside";
import moment from "moment/moment";
const now = moment().format("MMMM Do YYYY");

const Form = ({ studentId, setStudentId }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [selectclass, setselectClass] = useState("");
  const [division, setDivision] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [updating, setUpdating] = useState(false);

  console.log(studentId);

  const handleSubmit = async () => {
    setMessage("");
    if (
      firstName === "" ||
      lastName === "" ||
      number === "" ||
      selectclass === "" ||
      division === ""
    ) {
      setMessage({ error: true, msg: "All fields are mandatory" });
      return;
    }
    const newStudent = {
      firstName,
      middleName,
      lastName,
      number,
      selectclass,
      division,
      address1,
      address2,
      landmark,
      city,
      pincode,
    };
    console.log(newStudent);

    try {
      if (studentId !== undefined && studentId !== "") {
        await Students.updateStudent(studentId, newStudent);
        setStudentId("");
        setMessage({ error: false, msg: "updated added sucessully" });
        setUpdating(false);
      } else {
        await Students.addStudents(newStudent);
        setMessage({ error: false, msg: "Student added sucessully" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setNumber("");
    setselectClass("");
    setDivision("");
    setAddress1("");
    setAddress2("");
    setCity("");
    setLandmark("");
    setPincode("");
  };

  const editHandler = async () => {
    setUpdating(true);
    setMessage("");
    try {
      const docSnap = await Students.getStudent(studentId);
      setFirstName(docSnap.data().firstName);
      setMiddleName(docSnap.data().middleName);
      setLastName(docSnap.data().lastName);
      setNumber(docSnap.data().number);
      setselectClass(docSnap.data().selectclass);
      setDivision(docSnap.data().division);
      setAddress1(docSnap.data().address1);
      setAddress2(docSnap.data().address2);
      setCity(docSnap.data().city);
      setLandmark(docSnap.data().landmark);
      setPincode(docSnap.data().pincode);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (studentId !== undefined && studentId !== "") {
      editHandler();
    }
  }, [studentId]);

  return (
    <div className="form-container">
      <Aside />
      <div className="form">
        <div className="top-header">
          <Typography ml={"2rem"} fontSize={25}>
            ADD Student
          </Typography>
          <p>{now}</p>
        </div>
        <div className="first-six">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Middle Name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <select
            className="select"
            value={selectclass}
            onChange={(e) => setselectClass(e.target.value)}
          >
            <option>Select Class</option>
            <option>I</option>
            <option>II</option>
            <option>III</option>
            <option>IV</option>
            <option>V</option>
            <option>VI</option>
          </select>
          <select
            className="select"
            value={division}
            onChange={(e) => setDivision(e.target.value)}
          >
            <option>Select Division</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </select>
          <input
            type="number"
            placeholder="Enter Roll Number In Digits"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="last-six">
          <div className="address">
            <input
              type="text"
              placeholder="Address Line 1"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address Line 2"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </div>
          <div className="address-additonal-info">
            <input
              type="text"
              placeholder="Landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="number"
              placeholder="Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
          {updating ? (
            <Button
              variant="contained"
              style={{ backgroundColor: "Blue" }}
              onClick={() => handleSubmit()}
            >
              Update Student
            </Button>
          ) : (
            <Button variant="contained" onClick={() => handleSubmit()}>
              Add Student
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
