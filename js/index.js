const database = firebase.database();
const task = document.getElementById("task");
const taskBtn = document.getElementById("taskBtn");
const taskContainer = document.getElementById("taskContainer");
const taskContainer2 = document.getElementById("taskContainer2");
const taskContainer3 = document.getElementById("taskContainer3");


asignar = () =>{

    if(task.value===''){
        alert('ingrese por favor una tarea');
        return;
    }

    let referencia = database.ref('prioridades/toDo').push();
    let phase1 = {
        id: referencia.key,
        tarea: task.value,
        estado: 'toDo',
    }

    referencia.set(phase1);

    task.value = '';

}

taskBtn.addEventListener('click', asignar);

database.ref('prioridades/toDo').on('value', function(data){
    taskContainer.innerHTML = '';
    data.forEach(
        phase1 => {
            let valor = phase1.val(); 
            console.log(valor.toDo);
            let hacer = new parte1(valor);
            taskContainer.appendChild(hacer.render());
            
            
    });
})

database.ref('prioridades/doing').on('value', function(data){
    taskContainer2.innerHTML = '';
    data.forEach(
        phase1 => {
            let valor = phase1.val(); 
            let hacer = new parte1(valor);
            taskContainer2.appendChild(hacer.render());
            
            
    });
})

database.ref('prioridades/done').on('value', function(data){
    taskContainer3.innerHTML = '';
    data.forEach(
        phase1 => {
            let valor = phase1.val(); 
            let hacer = new parte1(valor);
            taskContainer3.appendChild(hacer.render()); 
    });
})


