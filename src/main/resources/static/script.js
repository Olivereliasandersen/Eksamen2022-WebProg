//Oppgave 3

function valideringNavn(navn){
    let regex = /^[A-ZÆØÅa-zæøå. -]{2,50}$/;

    if (regex.test(navn)){
        $("#feilNavn").html("");
        return true;
    } else {
        $("#feilNavn").html("Bruk kun store og små bokstaver, og ., - og mellomrom");
        return false;
    }
}

function valideringMobil(mobil){
    let regex = /^[0-9]{8}$/;

    if (regex.test(mobil)){
        $("#feilMobil").html("");
        return true;
    } else {
        $("#feilMobil").html("Må være åtte sifre");
        return false;
    }
}

function valideringEpost(epost){
    let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+\.[A-Za-z]{2,}$/;

    if (regex.test(epost)){
        $("#feilEpost").html("");
        return true;
    } else {
        $("#feilEpost").html("Skriv inn en gydlig e-post adresse");
        return false;
    }
}

function valideringBord(bord){
    if (bord){
        $("#feilBord").html("");
        return true;
    } else {
        $("#feilBord").html("Fyll inn feltet");
        return false;
    }
}

function valideringVarer(varer){
    if (varer){
        $("#feilVarer").html("");
        return true;
    } else {
        $("#feilVarer").html("Fyll inn feltet");
        return false;
    }
}

function validerBestilling(bestilling){
    navnOK = valideringNavn(bestilling.navn);
    mobilOK = valideringMobil(bestilling.mobil);
    epostOK = valideringEpost(bestilling.epost);
    bordOK = valideringBord(bestilling.bord);
    varerOK = valideringVarer(bestilling.varer);

    if (navnOK && mobilOK && epostOK && bordOK && varerOK){
        return true;
    } else {
        return false;
    }
}

function sendBestilling(){
    bestilling = {
        "navn" : $("#navn").val(),
        "mobil" : $("#mobil").val(),
        "epost" : $("#epost").val(),
        "bord" : $("#bord").val(),
        "varer" : $("#varer").val()
    };

    if (validerBestilling(bestilling)){
        $.post("bestilling", bestilling, function(){
            $("#melding").html("Bestilling ble sendt inn");

            $("#navn").val("");
            $("#mobil").val("");
            $("#epost").val("");
            $("#bord").val("");
            $("#varer").val("");
        });
    } else {
        $("#melding").html("Fyll ut alle felter og rett alle feil i bestillingen");
    }
}