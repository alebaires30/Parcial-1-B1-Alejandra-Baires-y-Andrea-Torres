class CakeQuoter extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  }
  connectedCallback(){
    this.render();
    this.shadowRoot.querySelector("form")
        .addEventListener("submit", (e) => this.calcular(e));
  }

  render(){
    this.shadowRoot.innerHTML = `
      <form>

        <select id="sabor">
          <option value="">Seleccione un sabor</option>
          <option value="2.00">Vainilla</option>
          <option value="2.50">Chocolate</option>
          <option value="4.00">Triple chocolate</option>
          <option value="4.00">Tres leches</option>
          <option value="5.00">Birthday Cake</option>
          <option value="3.00">Beso de Ángel</option>
>
        </select>
        <select id="relleno">
          <option value="">Seleccione un relleno</option>
          <option value="0.50">Fresa</option>
          <option value="0.75">Dulce de leche</option>
          <option value="1.00">Nutella</option>
          <option value="1.00">Avellana</option>
          <option value="1.00">Confeti</option>
          <option value="1.00">Mermelada de fresa</option>
        </select>

        <input type="number" id="porciones" placeholder="Número de porciones">
        <button type="submit">Calcular Presupuesto</button>
        <div class="error" id="error"></div>
        <div class="resultado" id="resultado"></div>
      </form>
    `;
  }

  calcular(e){
    e.preventDefault();
    const sabor = this.shadowRoot.querySelector("#sabor").value;
    const relleno = this.shadowRoot.querySelector("#relleno").value;
    const porciones = this.shadowRoot.querySelector("#porciones").value;
    const error = this.shadowRoot.querySelector("#error");
    const resultado = this.shadowRoot.querySelector("#resultado");
    error.textContent = "";
    resultado.textContent = "";

 
    if(porciones === ""){
      error.textContent = "Ingrese el número de porciones";
      return;
    }

    if(porciones <= 0 || porciones > 100){
      error.textContent = "Ingrese una cantidad válida (1 - 100)";
      return;
    }

    if(sabor === ""){
      error.textContent = "Seleccione un sabor";
      return;
    }

    if(relleno === ""){
      error.textContent = "Seleccione un relleno";
      return;
    }

    // Para calcular
    let total = porciones * (parseFloat(sabor) + parseFloat(relleno));

    resultado.textContent =
      `El presupuesto estimado es: $${total.toFixed(2)}`;
  }

}

customElements.define("cake-quoter", CakeQuoter);