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

class Zylinder extends Kegelstumpf {
    /**
     * Erzeugen eines Zylinders
     * @constructor
     * @param {float} R - Radius der Grundfläche
     * @param {float} h - Höhe
     */
    constructor(R, h) {
        // Zylinder ist ein Kegelstumpf mit selben Radius oben und unten
        super(R, R, h);
    }
}

class Kreiskegel extends Kegelstumpf {
    /**
     * Erzeugen eines Kreiskegels
     * @constructor
     * @param {float} R - Radius der Grundfläche
     * @param {float} h - Höhe
     */
    constructor(R, h) {
        // Kreiskegel ist ein Kegelstumpf mit Radius 0 der Deckfläche
        super(R, 0, h);
    }
}

function runTests(){
    let z = new Zylinder(4,5)
    console.log("Zylinder berechnung (R:4 , h:5)")
    console.log("volumen() ~= 251.327" , z.volumen()-251.327 < 0.01)
    console.log("mantelflaeche() ~= 125.664" , z.mantelflaeche()-125.664 < 0.01)
    console.log("oberflaeche() ~= 226.195" , z.oberflaeche()-226.195 < 0.01)

    let k = new Kreiskegel(4,5)
    console.log("Kreiskegel berechnung (R:4 , h:5)")
    console.log("volumen() ~= 83.776" , k.volumen()-83.776 < 0.01)
    console.log("mantelflaeche() ~= 80.464" , k.mantelflaeche()-80.464 < 0.01)
    console.log("oberflaeche() ~= 130.73" , k.oberflaeche()-130.73 < 0.01)
}

runTests()