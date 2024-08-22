function encriptar(){
    let textoAEncriptar = document.getElementById('textoAEncriptar').value;

    if (validacionDeCaracteres(textoAEncriptar)){
        let textoEncriptado = '';
        let nuevoCaracter = '';

        for(let caracter of textoAEncriptar){
            switch (caracter) {
                case 'a':
                    nuevoCaracter = 'ai';
                    break;
                case 'e':
                    nuevoCaracter = 'enter';
                    break;
                case 'i':
                    nuevoCaracter = 'imes';
                    break;
                case 'o':
                    nuevoCaracter = 'ober';
                    break;
                case 'u':
                    nuevoCaracter = 'ufat';
                    break;
                default:
                    nuevoCaracter = caracter;
                    break;
            }
            textoEncriptado += nuevoCaracter;
        }
        document.getElementById('textoEncriptado').innerText = textoEncriptado;
        esconderElementos();
    } else {
        mostrarElementos();
        let screenWidth = window.innerWidth;
        if (screenWidth < 780){
            document.getElementById('img1').style.display = 'none';
        }
    }
}

function copiar(){
    let textoEncriptado = document.getElementById('textoEncriptado');

    let rangoASeleccionar = document.createRange();
    rangoASeleccionar.selectNodeContents(textoEncriptado);

    let seleccion = window.getSelection();
    seleccion.removeAllRanges();
    seleccion.addRange(rangoASeleccionar);

    textoEncriptado = document.getElementById('textoEncriptado').innerHTML;
    navigator.clipboard.writeText(textoEncriptado);
    
}

function desencriptar(){
    let textoADesencriptar = document.getElementById('textoAEncriptar').value;

    if (validacionDeCaracteres(textoADesencriptar)){
        let textoDesencriptado = '';
        let nuevoCaracter = '';

        for (let i = 0; i < textoADesencriptar.length; i++) {
            switch (textoADesencriptar[i]) {
                case 'a':
                    nuevoCaracter = 'a';
                    i += 1;
                    break;

                case 'e':
                    nuevoCaracter = 'e';
                    i += 4;
                    break;

                case 'i':
                    nuevoCaracter = 'i';
                    i += 3;
                    break;

                case 'o':
                    nuevoCaracter = 'o';
                    i += 3;
                    break;

                case 'u':
                    nuevoCaracter = 'u';
                    i += 3;
                    break;

                default:
                    nuevoCaracter = textoADesencriptar[i];
                    break;
            }
            textoDesencriptado += nuevoCaracter;
        }
        document.getElementById('textoEncriptado').innerText = textoDesencriptado;
        esconderElementos();
    } else {
        mostrarElementos();
    }
    
}

function validacionDeCaracteres(texto){
    let regex = /^[a-z0-9\s]+$/;

    if (!regex.test(texto)) {
        alert('La entrada es inválida. No se permiten letras mayúsculas ni caracteres especiales.');
        return false;
    }
    return true;
}

function esconderElementos(){
    document.getElementById('img1').style.display = 'none';
    document.getElementById('tituloInformacion').style.display = 'none';
    document.getElementById('descripcionInformacion').style.display = 'none';
    document.getElementById('textoEncriptado').style.display = 'block';
    document.getElementById('copiar').style.display = 'block';
    document.getElementById('secondSection').style.justifyContent = 'space-between'
}

function mostrarElementos(){
    document.getElementById('img1').style.display = 'block';
    document.getElementById('tituloInformacion').style.display = 'block';
    document.getElementById('descripcionInformacion').style.display = 'block';
    document.getElementById('textoEncriptado').style.display = 'none';
    document.getElementById('copiar').style.display = 'none';
    document.getElementById('secondSection').style.justifyContent = 'center'
}