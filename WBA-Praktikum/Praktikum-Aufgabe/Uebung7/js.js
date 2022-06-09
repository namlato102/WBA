
function onEntry(e){
    //Mit Regex matchen dass nur Zahlen eingeben werden können
    var re = /\d+/;
    let amount = 0;
    if (b = re.exec(e.target.value)){
        e.target.value = b.join("");
        amount = parseInt(e.target.value)
    }
    else{
        e.target.value = "";
    }

    console.log(amount)

    //Preis und Ausgabefeld extrahieren
    let price = parseFloat(document.getElementById(e.target.id + "_price").innerText);
    console.log(price)
    document.getElementById(e.target.id + "_out").value = (price * amount).toFixed(2);

    updateVersandAndTotal()
}

function calculateTotalPrice(){
    let total = 0;
    for (let i = 0; i < globalWeine ; i++){
        total += parseInt(document.getElementById(`s${i}_out`).value)
    }

    if (document.getElementById("versand_2").checked){
        total += 15
    }
    else{
        total += 10
    }

    return total
}

function calculateTotalAmount(){
    let total = 0;
    for (let i = 0; i < globalWeine ; i++){
        total += parseInt(document.getElementById(`s${i}`).value)
    }
    return total
}

function updateVersandAndTotal(){
    let dhl_elem = document.getElementById("versand_1");
    let spedition_elem = document.getElementById("versand_2");

    let amount = calculateTotalAmount();
    if (amount > 12){
        //Muss Spedition sein
        spedition_elem.checked = true;
        dhl_elem.disabled = true;
    }
    else{
        dhl_elem.disabled = false;
    }

    if (spedition_elem.checked){
        document.getElementById("price_spedition").value = "15.00";
        document.getElementById("price_dhl").value = "0.00";
    }
    else{
        document.getElementById("price_spedition").value = "0.00";
        document.getElementById("price_dhl").value = "10.00";
    }

    let zwischensumme = calculateTotalPrice();

    document.getElementById("zwischensumme").value = zwischensumme.toFixed(2);
    document.getElementById("mwst").value = (zwischensumme * 0.19).toFixed(2);
    document.getElementById("summe").value = (zwischensumme + zwischensumme * 0.19).toFixed(2);

}

//Hilsfunktion um HTML nach Elementen einzufügen
function insert(node, newelemhtml) {
    node.insertAdjacentHTML('afterend', newelemhtml);
}

//Gloable Variable zum zählen der Elemente
globalWeine = 0

// Eingabeevents registrieren für die 4 Einagbefelder
function onLoad(){
    document.getElementById("versand_1").addEventListener("click", updateVersandAndTotal); 
    document.getElementById("versand_2").addEventListener("click", updateVersandAndTotal);

    //Hier holt sich das Programm die Weine
    let wein = [
        ["Marienthaler Stiftsberg Rotweincuvée", 3.60],
        ["Riesling Classic", 3.70],
        ["Silvaner Selection Rheinhessen", 6.90],
        ["Domäne Avelsbach Riesling Sekt", 6.15],
        ["Sehr sehr sehr teurer, aber dynamischer Wein", 1665.15]
    ];

    function compareString(a, b) {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    }
    //Sorierten mit Sortierfunktion
    wein.sort(compareString);
    for (i in wein){
        let flasche = wein[i]
        let html = `<tr>
                        <td><input id="s${i}" style="width: 30px;" name="Flaschen" value="0"></td>
                        <td>${flasche[0]}</td>
                        <td id="s${i}_price" style="text-align:right;">${flasche[1]}</td>
                        <td><input id="s${i}_out" class="price" name="Preis" value="0.00" readonly></td>
                    </tr>`
        insert(document.getElementById("tableheader") , html)
        document.getElementById(`s${i}`).addEventListener("input", onEntry); 
    }
    globalWeine = wein.length - 1;
}


document.addEventListener("DOMContentLoaded", onLoad);