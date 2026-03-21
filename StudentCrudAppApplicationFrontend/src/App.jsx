import React, { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import { getStudents } from "./services/api";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  // Load all students
  const loadStudents = () => {
    getStudents()
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  };

  // Load data on page load
  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div className="container">
    <div style={{ padding: "20px" }}>
      <h2>Student Management System</h2>

      {/* Form Section */}
      <StudentForm
        selectedId={selectedId}
        refreshList={loadStudents}
        clearSelection={() => setSelectedId(null)}
      />

      <hr />

      {/* Table Section */}
      <StudentList
        students={students}
        onEdit={setSelectedId}
        refreshList={loadStudents}
      />
    </div>
    </div>
  );
}

export default App;