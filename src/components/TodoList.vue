<template>
  <div>
    <h6>
      Completed Tasks: {{ todos.filter(todo => todo.done === true).length }}
    </h6>
    <h6>
      Pending Tasks: {{ todos.filter(todo => todo.done === false).length }}
    </h6>
    <Todo
      v-on:delete-todo="deleteTodo"
      v-on:complete-todo="completeTodo"
      v-for="todo in todos"
      :key="todo.id"
      :todo.sync="todo"
    />
  </div>
</template>

<script>
import Todo from "./Todo";
import swal from "sweetalert";
export default {
  name: "TodoList",
  components: {
    Todo
  },
  data() {
    return {
      todos: localStorage.hasOwnProperty("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : []
      //array has done prop which get true when todo is completed
    };
  },
  methods: {
    completeTodo(todo) {
      //get the index of todo clicked
      //set the done prop to true and save to local storage
      let index = this.todos.indexOf(todo);
      this.todos[index]["done"] = true;
      localStorage.setItem("todos", JSON.stringify(this.todos));
      swal("Good Job!", "Todo Completed!", "success");
    },
    deleteTodo(todo) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this file!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(res => {
        if (res) {
          //get the index
          //splice it off
          let index = this.todos.indexOf(todo);
          this.todos.splice(index, 1);
          localStorage.setItem("todos", JSON.stringify(this.todos));
          swal("Success", "Todo deleted successfully", "success");
        }
      });
    }
  }
};
</script>

<style scoped>
h6 {
  font-size: 18px;
}
</style>
