export default class Kartya {
    //adattagok
        #kutyaAdat={}; // objektum
        #szuloELEM; // html dom elem
    //constructor
    constructor(adat, szuloElem) {
        this.#kutyaAdat=adat
        this.#szuloELEM=szuloElem
        this.kutyaKiir()
        this.gombElem=$(".card:last-child .card-body button")
        //console.log(gombElem)
        this.gombKattint()
    }
    
    //taggfügvény
    kutyaKiir(){
  
        this.#szuloELEM.append(`
            <div class="card col-lg-4 col-md-6">
                <div class="card-body">
                <h5 class="card-title">${this.#kutyaAdat.nev}</h5>
                <p class="card-text">${this.#kutyaAdat.kor}</p>
                <p class="card-text">${this.#kutyaAdat.nem}</p>
                </div>
                <button class="kiv btn btn-success">Kiválaszt</button>
            </div>
        `)
    }
    gombKattint(){
        this.gombElem.on("click",()=>{
            console.log(this)
            const e= new CustomEvent("kivalaszt",{detail: this.#kutyaAdat});
            window.dispatchEvent(e)
        })
    }
}