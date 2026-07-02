import React, { useState } from "react";

function ComplaintForm({ addComplaint }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [type, setType] = useState("Academic");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !department || !message) {
      alert("Please fill all fields");
      return;
    }

    const newComplaint = {
      id: Date.now(),
      name,
      department,
      type,
      message,
      status: "Pending",
    };

    addComplaint(newComplaint);

    setName("");
    setDepartment("");
    setType("Academic");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Academic year</option>
        <option>1st</option>
        <option>2nd</option>
        <option>3rd</option>
      </select>

      <textarea
        placeholder="Write your complaint..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button type="submit">Submit Complaint</button>
    </form>
  );
}

export default ComplaintForm;