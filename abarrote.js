class Abarrote extends Producto{
    static contadorAbarrotes = 0;
    constructor(nombre,precio,imagen,ubicacion){
        super(nombre,precio,imagen,ubicacion);
        this._id = ++ Abarrote.contadorAbarrotes;
    }
    get id(){
        return this._id;
    }
}