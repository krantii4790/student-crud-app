import React from "react";
import { deleteStudent } from "../services/api";

const StudentList = ({ students, onEdit, refreshList }) => {

  const handleDelete = (id) => {
    deleteStudent(id)
      .then(() => refreshList())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h3>Student Records</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>JEE</th>
            <th>CET</th>
            <th>YEAR</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.gender}</td>
              <td>{s.jee ? "Yes" : "No"}</td>
              <td>{s.cet ? "Yes" : "No"}</td>
              <td>{s.year}</td>
              <td>
                <button onClick={() => onEdit(s.id)}>Update</button>
                <button onClick={() => handleDelete(s.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;