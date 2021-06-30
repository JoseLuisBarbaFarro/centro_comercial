class Carne extends Producto{
    static contadorCarnes = 0;
    constructor(nombre,precio,imagen,ubicacion){
        super(nombre,precio,imagen,ubicacion);
        this._id = ++ Carne .contadorCarnes;
    }
    get id(){
        return this._id;
    }
}