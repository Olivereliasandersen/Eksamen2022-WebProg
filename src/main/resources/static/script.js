//Oppgave 3

function valideringNavn(navn){
    let regex = /^[A-ZÆØÅa-zæøå. -]{2, 50}$/;

    if (regex.test(navn)){
        $("#feilNavn").html("");
        return true;
    } else {
        $("#feilNavn").html("Bruk kun store og små bokstaver, og ., - og mellomrom")
        return false;
    }
}