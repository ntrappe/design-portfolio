class PaintSample extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow ({mode: 'open'});
        const styles = document.createElement ('link');
        styles.setAttribute('href', './source/paint-sample.css');
        shadow.append (styles);

        const wrapper = document.createElement ('span');
        const card = document.createElement ('div');
        const cardText = document.createElement ('div');
        const titleCard = document.createElement ('h1');
        const subCard = document.createElement ('h2');
        
        wrapper.setAttribute ('class', 'wrapper');
        card.setAttribute ('id', 'card');
        cardText.setAttribute ('id', 'card-text');
       
        card.textContent = "color is";
        titleCard.textContent = "PANTONE";
        subCard.textContent = "PQ-415C";
        
        shadow.appendChild (wrapper);
        wrapper.appendChild (card);
        card.appendChild (cardText);
        cardText.appendChild (titleCard);
        cardText.appendChild (subCard);
    }
}

customElements.define ('paint-sample', PaintSample);

export default PaintSample;