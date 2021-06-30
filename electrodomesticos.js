class Electrodomestico extends Producto{
    static contadorElectrodomesticos = 0;
    constructor(nombre,precio,imagen,ubicacion){
        super(nombre,precio,imagen,ubicacion);
        this._id = ++ Electrodomestico.contadorElectrodomesticos;
    }
    get id(){
        return this._id;
    }
}