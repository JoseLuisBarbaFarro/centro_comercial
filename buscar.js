

const comparar = (a,b)=>{
    return a.presicion - b.presicion;
}

function fBuscar(palabra,lista)
{
    let respuesta = [];
    let cad = palabra;
    let mlist = lista;
    let answer = [];
    for(let i = 0; i < mlist.length; i++){
        mlist[i].presicion = presicion(cad,mlist[i].nombre);
        if( mlist[i].presicion > 0.30){
            respuesta.push(mlist[i]);
        }
        
    }
    answer = respuesta.sort((a,b) => {return -(a.presicion - b.presicion);});
    return answer;
}




//verduras = ['pepinillo verde','botella de pepinillos rojos','tomate verde','uvas moradas','pepian vertimil','azucar bubia'];
//li=fBuscar('pepinillo verde',verduras);
//console.log(li);






//Aquí solo retornabamos donde empezaba la cadena 

/*
function coincidir(cadena1,cadena2)
{
    let cad1 = cadena1;
    let cad2 = cadena2;
    let j = 0;
    let respuesta = -1;
    let tam = cad2.length;
    for(let i = 0; i < tam; i++){
        j = 0;
        while( ( j < cad1.length ) && (cad1[j] == cad2[i+j]) ){
            j += 1;
            if( j == cad1.length ){
                respuesta = i;
                return respuesta;
            }
        }
    }
    return respuesta;
}
*/

//retornamos el porcentaje de coincidencia

function coincidir(cadena1,cadena2)
{
    let cad1 = cadena1;
    let cad2 = cadena2;
    let j = 0;
    let respuesta = 0;
    let tam = cad2.length;
    for(let i = 0; i < tam; i++){
        j = 0;
        while( ( j < cad1.length ) && (cad1[j] == cad2[i+j]) ){
            j += 1;
            if( j == cad1.length ){
                respuesta = 1;
                return respuesta;
            }
        }
        if((j!= 0 )){
            respuesta = j/cad1.length;
            return respuesta;
        }
    }
    return respuesta;
}

/* Esta funcion regresa el la palabra con mayor presición*/
function mayor_presicion(palabra,texto){

    let cad1 = texto.toLowerCase();
    let cad2 = palabra.toLowerCase();
    console.log(cad2);
    console.log(cad1);
    let array_de_cad1 = cad1.split(' ');
    console.log(array_de_cad1);
    let presiciones = [];
    let presi = 0;
    for(let i = 0; i < array_de_cad1.length; i++){
        
        presi = coincidir(cad2,array_de_cad1[i]);
        console.log(presi);
        presiciones.push(presi);
    }
    presi = Math.max.apply(null,presiciones)
    console.log(presi);
    return presi;
}




/*
     presicion = sumatoria de pesos / numero de palabras 
*/

function presicion(cadena1,cadena2){

    let cad1 = cadena1.toLowerCase();
    let cad2 = cadena2.toLowerCase();
    console.log(cad2);
    console.log(cad1);
    let array_de_cad1 = cad1.split(' ');
    console.log(array_de_cad1);
    let n = 0;
    let pesos = 0;
    let peso  = 0;
    let presi = 0;

    for(let i = 0; i < array_de_cad1.length; i++){
        n += 1;
        peso = mayor_presicion(array_de_cad1[i],cad2);
        pesos += peso;
        console.log(peso);
        
    }
    if (n!=0)
        presi = pesos / n;
    
    return presi;
}












