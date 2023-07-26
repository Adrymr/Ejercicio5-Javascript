var autos =  [];

function registrarCliente() {
    
    const nombre = document.getElementById('nombre').value;
    const marca = document.getElementById('marca').value;
    const matricula = document.getElementById('matricula').value;
    const reparacion = document.getElementById('reparacion').value;

    const auto = {
        nombreD: nombre,
        marca: marca,
        matricula: matricula,
        reparacion: reparacion,
    }

    autos.push(auto)

    for (let i=0; i<autos.length; i++){
        console.log((auto.nombreD))
    }

    document.getElementById('nombre').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('reparacion').value = 'correctivo';
    
    actualizarTabla();
}

function actualizarTabla() {
    const tablaBody = document.getElementById('tBody');
    tablaBody.innerHTML = '';

    for(let i=0; i<autos.length; i++){
        const fila = `
            <tr>
                <td>${autos[i].nombreD}</td>
                <td>${autos[i].marca}</td>
                <td>${autos[i].matricula}</td>
                <td>${autos[i].reparacion}</td>
                <td>
                    <button onclick="editarRegistro(${i})">Editar <i class="fa-solid fa-file-pen"></i></button>
                    <button onclick="borrarRegistro(${i})">Borrar <i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `
        tablaBody.innerHTML += fila;
    }
}

function editarRegistro(index){
    const auto = autos[index];

    console.log(auto)
    const nuevoNombre = prompt("Ingrese el nombre:", auto.nombreD);
    const nuevaMarca = prompt("Ingrese el auto :", auto.marca);
    const nuevaMatricula = prompt("Ingrese la matricula :", auto.matricula);

    if (nuevoNombre !== null && nuevaMarca !== null && nuevaMatricula !== null) {
        auto.nombreD = nuevoNombre;
        auto.marca = nuevaMarca;
        auto.matricula = nuevaMatricula
        actualizarTabla();
    }
}

function borrarRegistro(index) {
    autos.splice(index, 1);
    actualizarTabla();
}

