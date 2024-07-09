let text = "";
let textEncript = "";
let textDesencript = "";

function encriptText(text) {
    const replacementMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let encryptedText = '';

    // Recorremos cada caracter del input iniciañ
    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        // Ver si el caracter está en el mapa de cambio
        // Realizar el cambio
        if (replacementMap.hasOwnProperty(char)) {
            encryptedText += replacementMap[char];
        } else {
            encryptedText += char;
        }
    }

    return encryptedText;
}

function getActionButton() {
    let btnEncript = document.getElementById("btn_encriptar");
    let btnDesencript = document.getElementById("btn_desencriptar");


    btnEncript.addEventListener("click", () => {
        text = document.getElementById("texto").value;
        if (text.length > 0) {
            textEncript = encriptText(text);
            chanceImgForTextEncript(textEncript);

            btnDesencript.addEventListener("click", () => {
                textDesencript = decryptText(textEncript);
                chanceImgForTextEncript(textDesencript);
            })

        }
    });


}

function chanceImgForTextEncript(textEncript) {
    let content = document.getElementById("dinamic_off");
    content.style.display = "none";
    document.querySelector("#view_text").innerHTML = textEncript

}

function decryptText(textEncript) {
    const reverseMap = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let decryptedText = textEncript;

    Object.keys(reverseMap).forEach(key => {
        let regex = new RegExp(key, 'g');
        decryptedText = decryptedText.replace(regex, reverseMap[key]);
    });
    return decryptedText;
}

getActionButton();