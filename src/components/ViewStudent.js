import React, { useEffect, useState } from "react";
import Aside from "./Aside";
import Students from "../services/firestore";
import { Typography } from "@mui/material";
const ViewStudent = ({ studentId }) => {
  const [student, setStudent] = useState("");
  const [loading, setLoading] = useState(false);
  const viewHandler = async () => {
    setLoading(true);
    const data = await Students.getStudent(studentId);
    setLoading(false);
    setStudent(data.data());
  };

  console.log(student);

  useEffect(() => {
    if (studentId !== undefined && studentId !== "") {
      viewHandler();
    }
  }, [studentId]);

  return (
    <div className="student">
      <Aside />

      {loading ? (
        <div style={{ fontSize: "40px" }}>Loading...</div>
      ) : (
        <div className="student-details">
          <div className="inside-div name">
            <span className="span">Name :</span>
            <h4 className="name">{`${student.firstName?.toUpperCase()} ${student.lastName?.toUpperCase()}`}</h4>
          </div>
          <div className="inside-div class">
            <span className="span">Class :</span>
            <h4
              style={{ marginLeft: "38px" }}
            >{`${student.selectclass}-${student.division}`}</h4>
          </div>
          <div className="inside-div rollno">
            <span className="span">Roll No :</span>
            <h4 style={{ marginLeft: "17px" }}>{student.number}</h4>
          </div>
          <div className="inside-div address">
            <span>Address:</span>
            <p
              style={{ marginTop: "2rem", marginLeft: "0.6rem" }}
            >{`${student.address1},${student.address2},${student.landmark} `}</p>
          </div>
          <div className="inside-div city">
            <span className="span">City :</span>{" "}
            <p style={{ marginLeft: "3.2rem" }}>{`${student.city}`}</p>
          </div>

          <div className="inside-div pincode">
            <span className="span">Pincode :</span>
            <p style={{ marginLeft: "0.4rem" }}>{student.pincode}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewStudent;
