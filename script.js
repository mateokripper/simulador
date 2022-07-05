
let cantidad,precio,desc,compra,total;

let subtotal=0;
const iva  =(valor)=>{
    return valor *1.21;
}
alert("----CALCULADORA DE IVA----")
cantidad=parseFloat(prompt("Ingrese la cantidad de productos"));
precio= parseFloat(prompt("Ingrese el precio del producto"));

subtotal=precio*cantidad;
total=iva(subtotal);

seguir=parseFloat(prompt("Desea calcular el iva? 1.Si 2.No"));

if(seguir==1){
    alert( " el total a pagar es: " + total);
}else if(seguir==2){
    alert( " el subtotal a pagar es: " + subtotal);
}

