/* - stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
il vostro array nei data non avrà delle semplici stringhe, ma sarà un array di oggetti;
gli oggetti avranno questo formato:
{ text: 'Fare la spesa', done: true }, 
{ text: 'Fare il bucato', done: false }
etc. etc..
quindi nell’elenco di output ciò che sara “done” sarà barrato, il resto invece con testo normale.
Nella richiesta base mi limito al fatto che quel “done” nei task inseriti dall’utente sarà sempre false,
gli unici true saranno alcuni nei dati di partenza. */ 


// 1. creare istanza vue associata a un id "app"-----> creare div sull html.
// 2. in data inserire il nostro array di oggetti
// 3 collegare sull html il nostro text all interno del nostro array di oggetti a un Ul li 
// 3.1 se done = true , il testo sarà sbarrato ----> aggiungo classe con text-decoration line-through;
// 4 aggiungo al mio text nell html una entity code o un pulsante con "x" dove associerò al click un evento ( togliere quell oggetto dal nostro array di oggetti)

var toDoList = new Vue ({
    el: "#app",
    data: {
        newTask:{
            text:"",
            done: "false"
        },
        tasks:[
            {
                text: "Fare il bucato",
                done: "false"
            },
            {
                text: "spolverare i mobili",
                done: "false"
            },
            {
                text: "portare via la spazzatura",
                done: "true"
            }
            ,{
                text: "Lavare i piatti",
                done: "false"
            }
            ,{
                text: "Lavare il pavimento",
                done: "true"
            },
            {
                text: "Dare da mangiare al cane",
                done: "false"
            }
    
        ]  
    },
    methods: {
        remove(iterazione){
            this.tasks.splice(iterazione,1);
        },
        addTask(){
            this.tasks.push(this.newTask);
            this.newTask = {
                text:"",
                done: "false"
            }
        },
        fatto(iterazione){
            if ( this.tasks[iterazione].done === "false" ){
                this.tasks[iterazione].done = "true";
            } else {
                this.tasks[iterazione].done = "false";
            }
            
        }
    }
    
    
})