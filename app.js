
const lista_de_producto = [];


class LISTAS {
static Abarrotes = [ 
    new Abarrote('Fideo Spaghetti NICOLINI Bolsa 1kg','S/ 2.99','recursos/abarrotes/Fideo Spaghetti NICOLINI Bolsa 1kg',3),
    new Abarrote('Spaghetti Nro 32 Nicolini Bolsa 500 g','s/ 2.00','recursos/abarrotes/Spaghetti Nro 32 Nicolini Bolsa 500 g',3),
    new Abarrote('Fideos Codo Rayado Don Vittorio Bolsa 500 gr','S/2.60','recursos/abarrotes/Fideos Codo Rayado Don Vittorio Bolsa 500 gr',3),
    new Abarrote('Fideos Tornillo de Colores Don Vittorio Bolsa 250 gr','S/ 1.90','recursos/abarrotes/Fideos Tornillo de Colores Don Vittorio Bolsa 250 gr',3),
    new Abarrote('Sopa de Pollo con Fideos Ajinomen Sobre 80 g','S/ 1.00','recursos/abarrotes/Sopa de Pollo con Fideos Ajinomen Sobre 80 g',3),
    new Abarrote('Fideos Codo Rayado Don Vittorio Bolsa 250 gr','S/ 2.60','recursos/abarrotes/Fideos Codo Rayado Don Vittorio Bolsa 250 gr',3),
    new Abarrote('Spaghetti Nro 34 Don Vittorio Bolsa 500 g','S/ 2.90','recursos/abarrotes/Spaghetti Nro 34 Don Vittorio Bolsa 500 g',3),
    new Abarrote('Leche Evaporada Entera Gloria Pack de 6 unid Lata 400 gr','S/ 18.99','recursos/abarrotes/Leche Evaporada Entera Gloria Pack de 6 unid Lata 400 gr',1),
    new Abarrote('Leche Evaporada Entera Laive Botella 400 g Pack 6 unid','S/ 18.90','recursos/abarrotes/Leche Evaporada Entera Laive Botella 400 g Pack 6 unid',1),
    new Abarrote('LECHE EVAPORADA FAMILIA LAIVE UND - LECHE EVA.FAMI. UN','S/ 2.80','recursos/abarrotes/LECHE EVAPORADA FAMILIA LAIVE UND - LECHE EVA.FAMI. UN',1),
    new Abarrote('Leche Evaporada Semidescremada Light Gloria Pack de 6 unid Lata 400 gr','S/ 19.00','recursos/abarrotes/Leche Evaporada Semidescremada Light Gloria Pack de 6 unid Lata 400 gr',1),
    new Abarrote('Arroz Superior Metro Bolsa 5 kg','S/ 14.70','recursos/abarrotes/Arroz Superior Metro Bolsa 5 kg',2),
    new Abarrote('Arroz Faraon Extra Añejo Naranja Bolsa 5 kg','S/ 22.00','recursos/abarrotes/Arroz Faraon Extra Añejo Naranja Bolsa 5 kg',2),
    new Abarrote('Arroz Extra Paisana Bolsa 5 kg','S/ 19.79','recursos/abarrotes/Arroz Extra Paisana Bolsa 5 kg',2),
    new Abarrote('Arroz Superior Paisana Bolsa 5 kg','S/ 15.60', 'recursos/abarrotes/Arroz Superior Paisana Bolsa 5 kg',2),
    new Abarrote('Arroz Faraon Superior Añejo Rojo Bolsa 5 kg','S/ 13.00','recursos/abarrotes/Arroz Faraon Superior Añejo Rojo Bolsa 5 kg',1),
    new Abarrote('Azúcar Rubia Máxima Bolsa 5 kg','S/ 13.30','recursos/abarrotes/Azúcar Rubia Máxima Bolsa 5 kg',1),
    new Abarrote('Azúcar Rubia Metro Bolsa 5 kg','S/ 13.50','recursos/abarrotes/Azúcar Rubia Metro Bolsa 5 kg',1),];

static Carnes = [
    new Carne('Pollo Entero Fresco Metro x kg','S/ 7.00','recursos/abarrotes/Pollo Entero Fresco Metro x kg',10),
    new Carne('Pollo con Menudencia Metro Trozado en 8 piezas','S/ 7.60','recursos/abarrotes/Pollo con Menudencia Metro Trozado en 8 piezas',10),
    new Carne('Carne Molida Especial Nacional x kg','S/ 17.00','recursos/abarrotes/Carne Molida Especial Nacional x kg',10),
    new Carne('Carne para Guiso Nacional Metro Empacado x kg','S/ 26.00','recursos/abarrotes/Carne para Guiso Nacional Metro Empacado x kg',10),
    new Carne('Carne para Guiso de Ternero Wong x kg','S/ 36.00','recursos/abarrotes/Carne para Guiso de Ternero Wong x kg',10),
    new Carne('Carne para Guiso simple Wong Premium x kg','S/ 35.00','recursos/abarrotes/Carne para Guiso simple Wong Premium x kg',10),
    new Carne('Filete de Tilapia x kg','S/ 38.50','recursos/abarrotes/Filete de Tilapia x kg',10),
    new Carne('Filete de Trucha x kg','S/ 34.00','recursos/abarrotes/Filete de Trucha x kg',10),
    new Carne('Filete de Salmón Fresco x kg','S/ 60.00','recursos/abarrotes/Filete de Salmón Fresco x kg',10),
];

static Ropas = [
    new Ropa('Polo Manga Larga Mujer University Club','S/ 17.96','recursos/abarrotes/Polo Manga Larga Mujer University Club',4),
    new Ropa('Polo Rib Manga Larga Mujer Apology','S/ 56.00','recursos/abarrotes/Polo Rib Manga Larga Mujer Apology',4),
    new Ropa('Polo Rib Manga Larga Mujer Basement','S/ 30.00','recursos/abarrotes/Polo Rib Manga Larga Mujer Basement',4),
    new Ropa('Polo Manga Corta Mujer Sybilla','S/ 20.00','recursos/abarrotes/Polo Manga Corta Mujer Sybilla',4),
    new Ropa('Polo Manga Corta 100% Algodón Mujer Sybilla','S/ 18.00','recursos/abarrotes/Polo Manga Corta 100% Algodón Mujer Sybilla',4),
    new Ropa('Polo Manga Corta Mujer Doo Australia','S/ 40','recursos/abarrotes/Polo Manga Corta Mujer Doo Australia',4),
    new Ropa('Polo Manga Corta Hombre','S/ 20.00','recursos/abarrotes/Polo Manga Corta Hombre',5),
    new Ropa('Polo Algodón Orgánico Hombre','S/ 30.00','recursos/abarrotes/Polo Algodón Orgánico Hombre',5),
];

static Verduras = [
    
    new Verdura('Cebolla Roja','S/ 2.00','recursos/abarrotes/Cebolla Roja',8),
    new Verdura('Cebolla Blanca','S/ 2.50','recursos/abarrotes/Cebolla Blanca',8),
    new Verdura('cebolla China BELLS Bolsa 320g','S/ 1.50','recursos/abarrotes/cebolla China BELLS Bolsa 320g',9),
    new Verdura('Tomate Italiano BELLS Bolsa 1Kg','S/ 4.00','recursos/abarrotes/Tomate Italiano BELLS Bolsa 1Kg',9),
    new Verdura('Salsa de Tomates Italiana MOLITALIA Pomarola Doypack 160g','S/ 1.20','recursos/abarrotes/Salsa de Tomates Italiana MOLITALIA Pomarola Doypack 160g',8),
    new Verdura('Pepinillo','S/ 1.00','recursos/abarrotes/pepinillo',9),
    new Verdura('Pepino Melón','S/ 5.90','recursos/abarrotes/Pepino Melón',9),
]

static Electrodomesticos = [
    new Electrodomestico('Televisor LG LED 65 UHD 4K Smart TV 65UN7100 (2020)','S/ 2300.00','recursos/abarrotes/Televisor LG LED 65 UHD 4K Smart TV 65UN7100 (2020)',6),
    new Electrodomestico('Televisor LG LED 32 HD Smart TV 32LM630B','S/ 1000.00','recursos/abarrotes/Televisor LG LED 32 HD Smart TV 32LM630B',6),
    new Electrodomestico('Laptop HP 250 G7 1065G7 Intel Core i7 8GB RAM 1TB HDD 15.6 2GB NVIDIA MX130 FreeDOS','S/ 4000.00','recursos/abarrotes/Laptop HP 250 G7 1065G7 Intel Core i7 8GB RAM 1TB HDD 15.6 2GB NVIDIA MX130 FreeDOS',7),
    new Electrodomestico('Laptop HP 250 G7 Core i5 1TB 8GB','S/ 3700.00','recursos/abarrotes/Laptop HP 250 G7 Core i5 1TB 8GB',7),
    new Electrodomestico('Laptop Hp 245 G7 14 AMD Ryzen 5 1TB HDD 8GB Windows 10','S/ 3000.00','recursos/abarrotes/Laptop Hp 245 G7 14 AMD Ryzen 5 1TB HDD 8GB Windows 10',7),

];

};


const  cargarApp = ()=>{

    
}

const cargarProductos = (li)=>{
    let productoHTML = '';
    for (let prod of li){
        productoHTML += crearProductoHTML(prod);
    }
    document.getElementById('lista-productos').innerHTML = productoHTML;
}


const crearProductoHTML = (produ)=>{
    ubi =  'ubicacion'+ String(produ.ubicacion) +'.html'
    let productoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${produ.nombre}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">
             <a href='${ubi}' class='Id'>${produ.ubicacion}</a> 
             <p class='precio'>${produ.precio}</p>
            <img src= '${(produ.imagen + '.jpg')}' class="Imagen_producto" /> 
        </div>
        <div class="elemento_eliminar">
            <button class='elemento_eliminar--btn'>
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
        </div>
    </div>`;
    return productoHTML;
}

let enviarDato = ()=>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let busqueda = forma['busqueda'];
    if(busqueda.value !== ''){

        if(tipo.value === 'carnes')
        {
            cargarProductos( fBuscar(busqueda.value,LISTAS.Carnes));
        }
        if(tipo.value === 'verduras'){

            cargarProductos( fBuscar(busqueda.value,LISTAS.Verduras));
        }
        if(tipo.value === 'abarrotes'){
            cargarProductos( fBuscar(busqueda.value,LISTAS.Abarrotes));
        }
        if(tipo.value === 'electrodemosticos'){
            cargarProductos( fBuscar(busqueda.value,LISTAS.Electrodomesticos));
        }
        if(tipo.value === 'ropas'){
            cargarProductos( fBuscar(busqueda.value,LISTAS.Ropas));
        }

    }
}