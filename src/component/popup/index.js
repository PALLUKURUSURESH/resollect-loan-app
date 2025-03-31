import React, { useState } from "react";
import "./index.css";

const Popup = () => {
  const [documentName, setDocumentName] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [remarks, setRemarks] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ documentName, documentType, remarks, file });
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        {/* <button className="close-btn">&#10006;</button> */}
        <h2>Upload Document</h2>
        <form onSubmit={handleSubmit}>
          <label>Document Name</label>
          <select value={documentName} onChange={(e) => setDocumentName(e.target.value)}>
            <option value="">Select</option>
            <option value="doc1">Document 1</option>
            <option value="doc2">Document 2</option>
          </select>

          <label>Document Type</label>
          <select value={documentType} onChange={(e) => setDocumentType(e.target.value)}>
            <option value="">Select</option>
            <option value="pdf">PDF</option>
            <option value="word">Word</option>
          </select>

          <label>Document Remarks</label>
          <input type="text" placeholder="Type" value={remarks} onChange={(e) => setRemarks(e.target.value)} />

          <label>Select File</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
