export function loadGifs(src,output = document.body){
    if(typeof src != "object") src = [src];
    output.className = "featureList";
    for(let gif of src){
        let div = document.createElement("DIV");
        div.className = "gifFeature";
        div.innerHTML = `
            <img src="${gif.src}" class="gifImage">
            <p>${gif.title}</p>
        `;
        div.onclick = () => {
            let dialog = document.createElement("DIALOG");
            dialog.innerHTML = `
                <img src="${gif.src}" class="smallGifImage">
                <p>${gif.title}</p>
                <p>${gif.blurb}</p>
                <br>
                <button onclick="this.parentElement.remove()">Close</button>

            `;
            dialog.style.overflow = "auto";
            document.body.appendChild(dialog);
            dialog.show();
            dialog.scroll(0,0);
        }
        output.appendChild(div);
    }
}