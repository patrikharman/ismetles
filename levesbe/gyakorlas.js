//                                  ÓRA JEGYZET

//nev="Morzsa" - NEM LEHET MERT A CONST ÉRTÉK AZ KONSTANTS, AZAZ NEM VÁLTOZTATHATÓ
// var meg a lett is lehet lokális meg globális
// var az lehet globális vagy függvény színtű
// var globális, függvény színtű
// const - globális, blokk színtű.

import { kutyaLISTA } from "../adat.js"
import Kartya from "../Kartya.js"

let cim = "Minden,amit a kutyákról tudni kell!"
cim="Minden, mai kutya!"

const nev="Dézi"

// írjuk ki a cím alá a változó tartalmát
// megfogjuk a HTML Elemet!
const cimELEM = $("header")
cimELEM.append(`<p>${cim}</p>`) // html - felülírja a tartalmat mig az appand hozzáfűzi. fontos az ALT GR+7 HASZNÁLATA!!!!!!

// kutya adatai szeretném tárolni, név, kor, nem
const kutya1={
    nev:"Dézi",
    kor:12,
    nem:"nöstény"
}

kutya1.nev="Morzsa"

const taroloElem = $(".tartalom")


