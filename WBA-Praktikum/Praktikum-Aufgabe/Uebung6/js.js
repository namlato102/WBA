
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
   let total = parseFloat(document.getElementById("s1_out").value)
   total += parseFloat(document.getElementById("s2_out").value)
   total += parseFloat(document.getElementById("s3_out").value)
   total += parseFloat(document.getElementById("s4_out").value)

   if (document.getElementById("versand_2").checked){
       total += 15
   }
   else{
       total += 10
   }

   return total
}

function calculateTotalAmount(){
   let total = parseInt(document.getElementById("s1").value)
   total += parseInt(document.getElementById("s2").value)
   total += parseInt(document.getElementById("s3").value)
   total += parseInt(document.getElementById("s4").value)
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

// Eingabeevents registrieren für die 4 Einagbefelder
function onLoad(){
   console.log("Element2" , document.getElementById("s1"));
   document.getElementById("s1").addEventListener("input", onEntry); 
   document.getElementById("s2").addEventListener("input", onEntry); 
   document.getElementById("s3").addEventListener("input", onEntry); 
   document.getElementById("s4").addEventListener("input", onEntry); 

   document.getElementById("versand_1").addEventListener("click", updateVersandAndTotal); 
   document.getElementById("versand_2").addEventListener("click", updateVersandAndTotal);
}


document.addEventListener("DOMContentLoaded", onLoad);