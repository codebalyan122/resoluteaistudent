import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import Students from "../services/firestore";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentsDataTable = ({ getStudentId }) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const data = await Students.getAllStudents();

    setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandle = async (id) => {
    await Students.deleteStudent(id);
    getStudents();
  };

  return (
    <>
      {/* {<pre>{JSON.stringify(students, undefined, 2)}</pre>} */}
      <TableContainer sx={{ maxHeight: "300px" }} component={Paper}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "20px" }} align="center">
                S.NO
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="center">
                Name
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="center">
                Class
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="center">
                Roll Number
              </TableCell>
              <TableCell style={{ fontSize: "20px" }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow
                key={student.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ fontSize: "15px" }} align="center">
                  {index + 1}
                </TableCell>

                <TableCell
                  style={{ fontSize: "15px" }}
                  align="center"
                >{`${student.firstName} ${student.lastName}`}</TableCell>
                <TableCell
                  style={{ fontSize: "15px" }}
                  align="center"
                >{`${student.selectclass}-${student.division}`}</TableCell>
                <TableCell style={{ fontSize: "15px" }} align="center">
                  {student.number}
                </TableCell>
                <TableCell style={{ fontSize: "15px" }} align="center">
                  <Link to="/student">
                    <VisibilityIcon
                      style={{
                        marginRight: "10px",
                        color: "blue",
                        cursor: "pointer",
                      }}
                      onClick={() => getStudentId(student.id)}
                    />
                  </Link>
                  <Link to="/">
                    <EditIcon
                      style={{
                        marginRight: "10px",
                        color: "green",
                        cursor: "pointer",
                      }}
                      onClick={() => getStudentId(student.id)}
                    />
                  </Link>
                  <DeleteIcon
                    style={{
                      marginRight: "10px",
                      color: "red",
                      cursor: "pointer",
                    }}
                    onClick={() => deleteHandle(student.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StudentsDataTable;
