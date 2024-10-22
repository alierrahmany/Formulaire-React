import React, { Component } from 'react';

class FormeClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            pass: '',
            dateNaissance: '',
            genre: '',
            ville: '',
            loisirs: [],
            result: false
        };
    }

    handleLoisirs = (e) => {
        const { loisirs } = this.state;
        if (!loisirs.includes(e.target.value)) {
            this.setState({ loisirs: [...loisirs, e.target.value ] });
        } else {
            this.setState({ loisirs: loisirs.filter(item => item !== e.target.value ) });
        }
    };

    afficher = (e) => {
        e.preventDefault();
        const { nom, prenom, email, pass, dateNaissance, genre, ville, loisirs } = this.state;

        if (nom && prenom && email && pass && dateNaissance && genre && ville && loisirs.length) {
            this.setState({ result: true });
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    };

    render() {
        const { nom, prenom, email, pass, dateNaissance, genre, ville, loisirs, result } = this.state;

        return (
            <div>
                <h1>Formulaire Classe Composant</h1>
                <form onSubmit={this.afficher}>
                    <label>Nom</label>
                    <input
                        type="text"
                        value={nom}
                        onChange={(e) => this.setState({ nom: e.target.value })}
                    />
                    <br /><br />

                    <label>Prénom</label>
                    <input
                        type="text"
                        value={prenom}
                        onChange={(e) => this.setState({ prenom: e.target.value })}
                    />
                    <br /><br />

                    <label>Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <br /><br />

                    <label>Password</label>
                    <input
                        type="password"
                        value={pass}
                        onChange={(e) => this.setState({ pass: e.target.value })}
                    />
                    <br /><br />

                    <label>Date de naissance</label>
                    <input
                        type="date"
                        value={dateNaissance}
                        onChange={(e) => this.setState({ dateNaissance: e.target.value })}
                    />
                    <br /><br />

                    <label htmlFor="">Homme</label>
                    <input
                        type="radio"
                        name="genre"
                        value="homme"
                        onChange={(e) => this.setState({ genre: e.target.value })}
                    />
                    <label htmlFor="">Femme</label>
                    <input
                        type="radio"
                        name="genre"
                        value="femme"
                        onChange={(e) => this.setState({ genre: e.target.value })}
                    />
                    <br /><br />

                    <select name="ville" onChange={(e) => this.setState({ ville: e.target.value })}>
                        {this.props.vl.map((vl, i) => (
                            <option key={i} value={vl}>{vl}</option>
                        ))}
                    </select>
                    <br /><br />

                    <label>Loisirs :</label>
                    <input type="checkbox" name="loisirs" value="Sport" onChange={this.handleLoisirs} /> Sport
                    <input type="checkbox" name="loisirs" value="Lecture" onChange={this.handleLoisirs} /> Lecture
                    <input type="checkbox" name="loisirs" value="Musique" onChange={this.handleLoisirs} /> Musique
                    <br /><br />

                    <input type="submit" value="Submit" />
                </form>

                {result && (
                    <div>
                        <h3>Résumé des informations :</h3>
                        <p>Nom : {nom}</p>
                        <p>Prénom : {prenom}</p>
                        <p>Email : {email}</p>
                        <p>Date de naissance : {dateNaissance}</p>
                        <p>Sexe : {genre}</p>
                        <p>Ville : {ville}</p>
                        <p>Loisirs : {loisirs.join(", ")}</p>
                    </div>
                )}
                <br /><br />
                <hr />
            </div>
        );
    }
}

export default FormeClass;
