var todo =[
    'clean',
    'wash',
    'rot',
    'got',
];
for (var i=0; i< todo.length; i++){
    console.log(todos[i]) + '!';
    //todos[i]=todos[i]+'!'
    //todos.pop();
    //while loop
    var counter0ne= 10;
    while(counter0ne<10){
        console.log(counter0ne);
        counter ++
    }
}
//do while
var countertwo=10
do {
    countertwo --
}while (countertwo>0);
//forEach method
todos.forEach(function(todo, i){
       console.log(todo,i);
});
