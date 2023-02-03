import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import Userinfo from "./components/Userinfo";
import { Routes, Route } from "react-router-dom";
import ManageStudents from "./components/ManageStudents";
import { useState } from "react";
import ViewStudent from "./components/ViewStudent";

function App() {
  const [studentId, setStudentId] = useState("");
  const getStudentId = (id) => {
    setStudentId(id);
  };
  return (
    <div className="App">
      <Logo />
      <Userinfo />

      <Routes>
        <Route
          exact
          path="/"
          element={<Form studentId={studentId} setStudentId={setStudentId} />}
        />
        <Route
          exact
          path="/students"
          element={<ManageStudents getStudentId={getStudentId} />}
        />
        <Route
          exact
          path="/student"
          element={
            <ViewStudent studentId={studentId} setStudentId={setStudentId} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
