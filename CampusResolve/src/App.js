import React, { useState } from "react";
import ComplaintForm from "./ComplaintForm";
import ComplaintList from "./ComplaintList";
import "./App.css";

function App() {
  const [complaints, setComplaints] = useState([]);

  const addComplaint = (complaint) => {
    setComplaints([...complaints, complaint]);
  };

  const updateStatus = (id, newStatus) => {
    setComplaints(
      complaints.map((comp) =>
        comp.id === id ? { ...comp, status: newStatus } : comp
      )
    );
  };

  const deleteComplaint = (id) => {
    setComplaints(complaints.filter((comp) => comp.id !== id));
  };

return (
  <div className="main-wrapper">
    
    <div className="left-section">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
        alt="complaint"
      />
      <h2>Raise Your Voice</h2>
      <p>Your complaints help us improve the system.</p>
    </div>

    <div className="right-section">
      <h1>College Complaint Portal</h1>
      <ComplaintForm addComplaint={addComplaint} />
      <ComplaintList
        complaints={complaints}
        updateStatus={updateStatus}
        deleteComplaint={deleteComplaint}
      />
    </div>

  </div>
);
}

export default App;