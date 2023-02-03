import { Typography } from "@mui/material";
import React, { useState } from "react";
import Aside from "./Aside";
import StudentsDataTable from "./Table";

const ManageStudents = ({ getStudentId }) => {
  return (
    <div className="table-aside">
      <Aside />
      <StudentsDataTable getStudentId={getStudentId} />
    </div>
  );
};

export default ManageStudents;
