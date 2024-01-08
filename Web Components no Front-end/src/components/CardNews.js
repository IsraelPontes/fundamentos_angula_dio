class cardnews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_hight");
        const newImage = document.createElement("img");
        newImage.src = this.getAttribute("photo") || "assets/img/photo-default.png";
        newImage.alt = "Darth Vader"
        cardRight.appendChild(newImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    styles() {
        const style = document.createElement("style");
        style.textContent = `
            
   
    .card {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    
        box-shadow: 9px 9px 27px 0px rgba(0,0,0, 0.75);
        -webkit-box-shadow:9px 9px 27px 0px rgba(0,0,0, 0.75);
        -moz-box-shadow:9px 9px 27px 0px rgba(0,0,0, 0.75);
    }
    
    .card_left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 15px;
    }
    
    .card_left>span {
        font-weight: 400;
    }

    .card_left>a{
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
    }
    
    .card_left>h1 {
        margin-top: 15px;
        font-size: 25px;
    }
    
    .card_left>p {
        color: rgb(70, 70, 70);
    }
    .card_hight {
        padding: 15px;
    }
        `
        return style;
    }
}

customElements.define("card-news", cardnews);