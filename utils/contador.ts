export class Contador{
    constructor(public contador: number, type: "incremental" | "decremental"){
        if(type === "incremental"){
            console.log("se inicia el contador")
            setInterval(() => {
                this.contador += 1
            }, 1000);
        }else{
            console.log("se inicia el contador")
            setInterval(() => {
                this.contador -= 1
            }, 1000);
        }
    }
    getContador(){
        console.log(this.contador)
        return this.contador
    }
}