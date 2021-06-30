class Ropa extends Producto{
    static contadorRopas = 0;
    constructor(nombre,precio,imagen,ubicacion){
        super(nombre,precio,imagen,ubicacion);
        this._id = ++ Ropa.contadorRopas;
    }
    get id(){
        return this._id;
    }
}