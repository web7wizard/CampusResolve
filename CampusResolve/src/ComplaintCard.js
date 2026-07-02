import React from "react";

function ComplaintCard({ complaint, updateStatus, deleteComplaint }) {
  return (
    <div className="card">
      <h3>{complaint.name}</h3>
      <p><strong>Department:</strong> {complaint.department}</p>
      <p><strong>Type:</strong> {complaint.type}</p>
      <p><strong>Message:</strong> {complaint.message}</p>
      <p><strong>Status:</strong> {complaint.status}</p>

      <div className="buttons">
        <button onClick={() => updateStatus(complaint.id, "In Progress")}>
          In Progress
        </button>
        <button onClick={() => updateStatus(complaint.id, "Resolved")}>
          Resolved
        </button>
        <button onClick={() => deleteComplaint(complaint.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ComplaintCard;