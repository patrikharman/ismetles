import { kutyaLISTA } from "./model/adat.js";
import Kartyak from "./view/Kartyak.js";
const kivKutyaLista=[]

const taroloElem = $(".tartalom");
new Kartyak(kutyaLISTA, taroloElem)

$("window").on("kivalaszt",(event)=>{
        console.log(event.detail)
        kivKutyaLista.push(event.detail)
        console.log(kivKutyaLista)
        new Kartya(event.detail,kivElem)
})