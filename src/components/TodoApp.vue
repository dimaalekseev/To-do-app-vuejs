<template>
  <div>
    <h2 style="text-transform:uppercase; font-weight:bold; padding:10px">
      my to-do app
    </h2>
    <hr>
    <TodoList :key="shouldUpdate" />
    <hr> 
    <!--we'll add a listener to create-todo event-->
    <TodoCreate v-on:create-todo="createTodo" />
  </div>
</template>

<script>
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
export default {
  name: "TodoApp",
  components: {
    TodoCreate,
    TodoList
  },
  data() {
    return {
      shouldUpdate: false,
    };
  },
  methods: {
    createTodo(newTodo) {
      //saving todos to local storage
      let todoArr = localStorage.hasOwnProperty("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : []; //check if our todos already exist at local storage
      todoArr.push(newTodo);
      this.shouldUpdate = !this.shouldUpdate;
      localStorage.setItem("todos", JSON.stringify(todoArr));
    }
  }
};
</script>
