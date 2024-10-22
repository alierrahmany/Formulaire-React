import React, { useState } from 'react';

function FormFonction(props) {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [dateNaissance, setDateNaissance] = useState("")
    const[genre,setgenre]=useState();
     const[ville,setville]=useState();
    const [loisirs, setLoisirs] = useState([])
    const [resultat, setresultat] = useState(false);

    function handleLoisirs(e) {
        if(!loisirs.includes(e.target.value)) {
            setLoisirs([...loisirs, e.target.value]);
        }
        else {
            setLoisirs([...loisirs.filter((item)=>item!==e.target.value)]);
        }
    }


    function afficher(e) {
        e.preventDefault();
        
        if (nom && prenom && email && pass && dateNaissance && genre && ville && loisirs) {
            setresultat(true);
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    }

    return (
        <div>
        <h1>Formulaire Fonction Composant</h1>
            <form onSubmit={(e)=>afficher(e)}>
                <label>Nom</label>
                <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                />

                <br /><br />

                <label>Prénom</label>
                <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                />

                <br /><br />

                <label>Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />

                <label>Password</label>
                <input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />

               <br /><br />

               <label>Date de naissance</label>
               <input type="date" name="dateNaissance" value={dateNaissance}  onChange={(e)=>setDateNaissance(e.target.value)}/>

               <br /><br />

                <label htmlFor="">homme</label>
                <input type="radio" name='genre'value='homme' onChange={(e)=>setgenre(e.target.value)}/>
                <label htmlFor="">femme</label>
                <input type="radio" name='genre'value='femme' onChange={(e)=>setgenre(e.target.value)}/>
                
                <br /><br />
                
                <select name="ville" onChange={(e)=>setville(e.target.value)}>
               {props.vl.map((vl,i)=>(
                       <option key={i} value={vl}>{vl}</option>
                ))}
                </select> 

                <br /><br />

                <label>Loisirs :</label>
                <input type="checkbox" name="loisirs" value="Sport" onChange={(e)=>handleLoisirs(e)}/>Sport
                <input type="checkbox" name="loisirs" value="Lecture" onChange={(e)=>handleLoisirs(e)}/>Lecture
                <input type="checkbox" name="loisirs" value="Musique" onChange={(e)=>handleLoisirs(e)}/>Musique
                 
                 <br /> <br />

                <input type="submit" value="Submit" />
            </form>

            {resultat && (
                <div>
                    <h3>Résumé des informations :</h3>
                    <p>Nom : {nom}</p>
                    <p>Prénom : {prenom}</p>
                    <p>Email : {email}</p>
                    <p>Date de naissance:{dateNaissance}</p>
                    <p>Sexe : {genre}</p>
                    <p>ville : {ville}</p>
                    <p>Loisirs:{loisirs}</p>
                </div>
            )}
            <br /><br />
            <hr />
        </div>
       
    );
}

export default FormFonction;
