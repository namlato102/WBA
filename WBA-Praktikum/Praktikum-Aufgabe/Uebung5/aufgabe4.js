/** Klasse zur Berechnung eines Kegelstumpfs */
class Kegelstumpf {
    /**
     * Erzeugen eines Kegelstumpfs
     * @constructor
     * @param {float} R - Radius der Grundfläche
     * @param {float} r - Radius der Deckfläche
     * @param {float} h - Höhe
     */
    constructor(R, r, h) {
        //Argumente ünernehmen
        this.R = R
        this.r = r
        this.h = h
    }

    /**
     * Volumen des Kegelstumpfs berechnen
     * @return {float} Das Volumen des Kegelstumpfs
     */
    volumen(){
        let x = (Math.PI*this.h)/3
        return x*(this.R**2 + this.R*this.r + this.r**2)
    }

    /**
     * Mantelfläche des Kegelstumpfs berechnen
     * @return {float} Die Mantelfläche des Kegelstumpfs
     */
    mantelflaeche(){
        let m = Math.sqrt((this.R-this.r)**2 + this.h**2)
        return Math.PI * m * (this.R + this.r)
    }

    /**
     * Oberfläche des Kegelstumpfs berechnen
     * @return {float} Die Oberfläche des Kegelstumpfs
     */
    oberflaeche(){
        let gR = Math.PI*this.R**2
        let gr = Math.PI*this.r**2
        //Aufruf auf Mantelfläche
        return gR + gr + this.mantelflaeche()
    }

}
/**
 * Ein paar Tests um die Funktionen zu testen
 */
function runTests(){
    let k = new Kegelstumpf(6, 4, 4)

    //Mit Annäherung testen
    console.log("Kegelstumpf R: 6, r: 4, h: 4")    
    console.log("Test 1: volumen() ~= 318.348" , (k.volumen() - 318.348 < 0.01))
    console.log("Test 2: mantelflaeche() ~= 140.496" , (k.mantelflaeche() - 140.496 < 0.01), k.mantelflaeche())
    console.log("Test 3: oberflaeche() ~= 303.859" , (k.oberflaeche() - 303.859 < 0.01), k.oberflaeche())
}

runTests()