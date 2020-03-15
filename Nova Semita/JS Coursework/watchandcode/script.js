var todoList = {
    todo: [],
    displayTodo: function () {
      if (this.todo.length === 0) {
        console.log("Your todo list is empty!")
      }
      else {
        console.log("Todos :");
        for (var i = 0; i < this.todo.length; i++) {
          if (this.todo[i].completed === true) {
            console.log("(x)", this.todo[i].todoText);
          }
          else {
            console.log("( )", this.todo[i].todoText);
          }
        }
      }
    },
    addTodo: function (todoText) {
      this.todo.push({ todoText: todoText, completed: false });
      this.displayTodo();
    },
    changeTodo: function (position, todoText) {
      this.todo[position].todoText = todoText;
      this.displayTodo();
    },
    deleteTodo: function (position) {
      this.todo.splice(position, 1);
      this.displayTodo();
    },
    toggleTodo: function (position) {
      var todo = this.todo[position];
      todo.completed = !todo.completed;
      this.displayTodo();
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
        this.displayTodo();
      }
      else {                               //Case 2: Otherwise , make eveything true.
        for (var i = 0; i < this.todo.length; i++) {
          this.todo[i].completed = true;
        }
        this.displayTodo();
      }
    }
  };

  var displayTodosButton = document.getElementById('displayButton');
  displayTodosButton.addEventListener('click', function () {
    todoList.displayTodo();
  });

  var toggleTodoButton=document.getElementById('toggleButton');
  toggleTodoButton.addEventListener('click',function()
  {
    todoList.toggleAll();
  });