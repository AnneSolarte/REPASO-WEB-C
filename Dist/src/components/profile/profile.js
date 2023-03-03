class MyProfile extends HTMLElement {
    static get observedAttributes(){
        return ['name', 'age', 'sign'];
    }

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML= `
        <link rel="stylesheet" href="./src/components/profile/profile.css">
        <div class= "card">
        <h1 class="name">Name: ${this.name}</h1>
        <h2 class="age">Age: ${this.age}</h2>
        <h2 class="sign">Sign: ${this.sign}</h2>
        </div>
        `;
    }
}

customElements.define('profile-card', MyProfile);
export default MyProfile;