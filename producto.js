class Producto{
    constructor(nombre,precio,imagen,ubicacion){
        this._nombre = nombre;
        this._precio = precio;
        this._imagen = imagen;
        this._ubicacion = ubicacion;
        this._precision = 0;
    }
    /*métodos de retorno*/
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    get imagen(){
        return this._imagen;
    }
    get ubicacion(){
        return this._ubicacion;
    }

    get precision(){
        return this._precision;
    }

    /*métodos de entrada*/
    set nombre(nombre){
        this._nombre = nombre;
    }
    set precio(precio){
        this._precio = precio;
    }
    set imagen(imagen){
        this._imagen = imagen;
    }
    set ubicacion(ubicacion){
        this._ubicacion = ubicacion;
    }

    set precision(presicion){
        this._precision = presicion;
    }
}

