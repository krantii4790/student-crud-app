import React, { useState, useEffect } from "react";
import { createStudent, updateStudent, getStudentById } from "../services/api";

const StudentForm = ({ selectedId, refreshList, clearSelection }) => {
  const [student, setStudent] = useState({
    name: "",
    gender: "",
    year: "",
    jee: false,
    cet: false,
    subject1: "",
    subject2: "",
    subject3: "",
    subject4: "",
    subject5: ""
  });

  // Load data for update
  useEffect(() => {
    if (selectedId) {
      getStudentById(selectedId)
        .then((res) => setStudent(res.data))
        .catch((err) => console.error(err));
    }
  }, [selectedId]);

  // Handle change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent({
      ...student,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedId) {
      updateStudent(selectedId, student).then(() => {
        refreshList();
        clearSelection();
      });
    } else {
      createStudent(student).then(() => refreshList());
    }

    // Reset
    setStudent({
      name: "",
      gender: "",
      year: "",
      jee: false,
      cet: false,
      subject1: "",
      subject2: "",
      subject3: "",
      subject4: "",
      subject5: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selectedId ? "Update Student" : "Add Student"}</h3>

      {/* Name */}
      <div className="form-row">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
      </div>

      {/* Gender */}
      <div className="form-row">
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={student.gender === "Male"}
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={student.gender === "Female"}
          onChange={handleChange}
        /> Female
      </div>

      {/* Exams */}
      <div className="form-row">
        <label>Exams:</label>
        <input
          type="checkbox"
          name="jee"
          checked={student.jee}
          onChange={handleChange}
        /> JEE

        <input
          type="checkbox"
          name="cet"
          checked={student.cet}
          onChange={handleChange}
        /> CET
      </div>

      {/* Year */}
      <div className="form-row">
        <label>Year:</label>
        <select name="year" value={student.year} onChange={handleChange}>
          <option value="">Select Year</option>
          <option value="First Year">First Year</option>
          <option value="Second Year">Second Year</option>
          <option value="Third Year">Third Year</option>
          <option value="Fourth Year">Fourth Year</option>
        </select>
      </div>

      {/* Subjects */}
      <div className="subjects">
        {[1, 2, 3, 4, 5].map((i) => (
          <input
            key={i}
            type="number"
            name={`subject${i}`}
            value={student[`subject${i}`]}
            onChange={handleChange}
            placeholder={`Subject ${i} Marks`}
          />
        ))}
      </div>

      {/* Button */}
      <div className="form-row">
        <button type="submit">
          {selectedId ? "Update" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default StudentForm;