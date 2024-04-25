// FraudReportForm.js
import React, { useState } from 'react';

const FraudReportForm = () => {
  const [report, setReport] = useState('');

  const handleChange = (event) => {
    setReport(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Invia il report di frode al backend
    console.log('Report di frode inviato:', report);
    // Resetta il form
    setReport('');
  }

  return (
    <div className="mt-4">
      <h2>Segnala Frode</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="report">Descrivi l'attività sospetta:</label>
          <textarea 
            id="report" 
            className="form-control" 
            rows="3" 
            value={report} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Invia segnalazione</button>
      </form>
    </div>
  );
}

export default FraudReportForm;
