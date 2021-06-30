class Verdura extends Producto{
    static contadorVerduras = 0;
    constructor(nombre,precio,imagen,ubicacion){
        super(nombre,precio,imagen,ubicacion);
        this._id = ++ Verdura.contadorVerduras;
    }

    get id(){
        return this._id;
    }
}