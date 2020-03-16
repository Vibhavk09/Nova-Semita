var todoList = {
  todo: [],
  addTodo: function (todoText) {
    this.todo.push({ todoText: todoText, completed: false });
  },
  changeTodo: function (position, todoText) {
    this.todo[position].todoText = todoText;
  },
  deleteTodo: function (position) {
    this.todo.splice(position, 1);
  },
  toggleTodo: function (position) {
    var todo = this.todo[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function () // Version 6 Completed
  {
    var totalTodos = this.todo.length;    // Total number of elements
    var completeTodo = 0;                 // Total number of completed todos
    for (var i = 0; i < this.todo.length; i++) {
      if (this.todo[i].completed === true) {
        completeTodo++;
      }
    }
    if (completeTodo === totalTodos)       //Case 1:If everythings true, make everything false.
    {
      for (var i = 0; i < this.todo.length; i++) {
        this.todo[i].completed = false;
      }
    }
    else {                               //Case 2: Otherwise , make eveything true.
      for (var i = 0; i < this.todo.length; i++) {
        this.todo[i].completed = true;
      }
    }
  }
};


var handlers = {
  addTodos: function () {
    var addTodoTextInput = document.getElementById("addTodoTextInput")
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodos: function () {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoTextInput.value = '';
    changeTodoPositionInput.value = '';
    view.displayTodos();
  },
  deleteTodos: function () {
    var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleTodos: function () {
    var toggleTodoPositionInput = document.getElementById("toggleTodoPositionInput");
    todoList.toggleTodo(toggleTodoPositionInput.valueAsNumber);
    toggleTodoPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view={
  displayTodos:function()
  {
    var todosUL=document.querySelector('ul');
    todosUL.innerHTML='';
    for(var i=0;i<todoList.todo.length;i++)
    {
      var todosLI=document.createElement('li');
      var todo=todoList.todo[i];
      var todoTextWithCompletion='';

      if(todo.completed==true)
      {
        todoTextWithCompletion='(x) '+ todo.todoText;
      }
      else{
        todoTextWithCompletion='( ) '+ todo.todoText;
      }

      todosLI.textContent=todoTextWithCompletion
      todosUL.appendChild(todosLI);
    }
  }
};