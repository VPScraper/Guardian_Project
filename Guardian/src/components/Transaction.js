// TransactionDetails.js
import React from 'react';

const TransactionDetails = () => {
  return (
    <div>
      <h2>Dettagli Transazione Sospetta</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">ID Transazione: 123456789</h5>
          <p className="card-text">Importo: $500</p>
          <p className="card-text">Data: 2024-04-25</p>
          <p className="card-text">Mittente: John Doe</p>
          <p className="card-text">Destinatario: Jane Doe</p>
          <p className="card-text">Motivo sospetto: Attività insolita</p>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;
