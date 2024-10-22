import React, { useState } from "react";

function FormEvent() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [res, setRes] = useState("");

  function afficher() {
    setRes(`Nom: ${nom}, Prénom: ${prenom}`);
  }

  return (
    <div>
      <label>Nom</label>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />

      <label>Prénom</label>
      <input
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />

      <button onClick={afficher}>Afficher</button>

      {res && (
        <div>
          <h3>Résultat :</h3>
          <p>{res}</p>
        </div>
      )}
    </div>
  );
}

export default FormEvent;
