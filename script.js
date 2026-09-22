function calcular(){
    const precio = document.getElementById('precio').value;

    const cantidad = document.getElementById('cantidad').value;

    const envio = document.getElementById('envio').value;


    const subtotal = Number(precio)*Number(cantidad);

    const total = (Number(precio)*Number(cantidad)) + Number(envio);
    
    alert("Subtotal: "+subtotal +"\nCosto de envio: "+envio+"Total a pagar: "+total);
}