import React from "react";
import ComplaintCard from "./ComplaintCard";

function ComplaintList({ complaints, updateStatus, deleteComplaint }) {
  return (
    <div className="list">
      <h2>All Complaints</h2>
      {complaints.length === 0 && <p>No complaints yet.</p>}
      {complaints.map((comp) => (
        <ComplaintCard
          key={comp.id}
          complaint={comp}
          updateStatus={updateStatus}
          deleteComplaint={deleteComplaint}
        />
      ))}
    </div>
  );
}

export default ComplaintList;