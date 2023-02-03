import { db } from "./firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const studentCollectionRef = collection(db, "students");

class Students {
  addStudents = (newStudents) => {
    return addDoc(studentCollectionRef, newStudents);
  };
  updateStudent = (id, newStudent) => {
    const studentDoc = doc(db, "students", id);
    return updateDoc(studentDoc, newStudent);
  };
  deleteStudent = (id) => {
    const studentDoc = doc(db, "students", id);
    return deleteDoc(studentDoc);
  };
  getAllStudents = () => {
    return getDocs(studentCollectionRef);
  };
  getStudent = (id) => {
    const studentDoc = doc(db, "students", id);
    return getDoc(studentDoc);
  };
}

export default new Students();
