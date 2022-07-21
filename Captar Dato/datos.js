function adivinar (){
    var nombrecaptura = document.getElementById("nombrecito").value;
    var aleatorio = Math.round(Math.random() * 10);
    if (nombrecaptura == aleatorio) {
    console.log("Acertaste")
   } else {
    console.log ("erraste");
   }
   console.log(aleatorio);
}





