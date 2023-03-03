import * as components from "./components/export.js";
import data from "./components/data.js";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});

    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((p) => {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./src/profile.css" type="text/html">
            <profile-card name="${p.name}" age="${p.age}" sign="${p.sign}" ></profile-card>
            `
        }

        )
    }
}

customElements.define('app-container', AppContainer);