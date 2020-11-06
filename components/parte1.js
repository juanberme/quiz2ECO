class parte1{

    constructor(phase1){
        this.phase1 = phase1;
    }

    render = () =>{
        let component = document.createElement('div');
        component.className = 'parte1';

        let task1 = document.createElement('div');
        //task1.className = 'tarea1';
        component.innerHTML = (
            this.phase1.tarea
        );

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerHTML = 'X';

        let nextBtn = document.createElement('button');
        nextBtn.className = 'nextBtn';
        nextBtn.innerHTML = '>';

        let backBtn = document.createElement('button');
        backBtn.className = 'backBtn';
        backBtn.innerHTML = '<';

        component.appendChild(task1);
        component.appendChild(deleteBtn);
        
        

        if(this.phase1.estado === 'toDo' || this.phase1.estado === 'doing'){
            component.appendChild(nextBtn);
        }
        
        if(this.phase1.estado === 'doing' || this.phase1.estado === 'done' ){
            component.appendChild(backBtn);
        }

        deleteBtn.addEventListener('click', () =>{
            const database = firebase.database();
            database.ref('prioridades/'+this.phase1.estado+'/'+this.phase1.id).set(null);
            //alert('eliminado');
        });

        nextBtn.addEventListener('click', () =>{
            const database = firebase.database();
            
            if(this.phase1.estado === 'toDo'){
                this.phase1.estado = 'doing';
                database.ref('prioridades/doing/'+this.phase1.id).set(this.phase1);
                database.ref('prioridades/toDo/'+this.phase1.id).set(null);
            }else
                
            
            
            if(this.phase1.estado === 'doing'){
                this.phase1.estado = 'done';
                database.ref('prioridades/done/'+this.phase1.id).set(this.phase1);
                database.ref('prioridades/doing/'+this.phase1.id).set(null);
            }
        });

        backBtn.addEventListener('click', () =>{
            if(this.phase1.estado === 'done'){
                this.phase1.estado = 'doing';
                database.ref('prioridades/doing/'+this.phase1.id).set(this.phase1);
                database.ref('prioridades/done/'+this.phase1.id).set(null);
            } else

            if(this.phase1.estado === 'doing'){
                this.phase1.estado = 'toDO';
                database.ref('prioridades/toDo/'+this.phase1.id).set(this.phase1);
                database.ref('prioridades/doing/'+this.phase1.id).set(null);
            }
        })

        return component;
    }




    

}