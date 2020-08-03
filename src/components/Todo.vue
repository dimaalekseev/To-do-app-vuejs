<template>
  <div class="detail-box mb-3"> 
    <form class="mb-3" style="padding: 15px" v-show="!isEditing">
      <div class="d-flex" style="justify-content:space-between">
        <div class="text" style="overflow-x:hidden;">
          <h4 style="font-weight:bold" >{{ todo.title }}</h4>
          <h5>{{ todo.description }}</h5>
        </div>
        <div class="pt-12 pr-2">
          <i
            v-b-tooltip.hover
            title="Edit"
            v-on:click="editTodo"
            class="fas fa-edit"
          ></i>
          <i
            v-b-tooltip.hover
            title="Delete"
            v-on:click="deleteTodo(todo)"
            class="fas fa-trash-alt"
          ></i>
        </div>
      </div>
      <div class="buttons">
        <button
          type="button"
          class="btn btn-primary mt-3"
          v-on:click="completeTodo(todo)"
          v-show="!todo.done"
        >
          Pending
        </button>
        <button type="button" class="btn btn-success mt-3" v-show="todo.done">
          Completed
        </button>
      </div>
    </form>
    <div class="mt-2 mb-4" v-show="isEditing">
      <form class="detail-box-editing">
        <div class="form-group">
          <label>Title</label>
          <input class="form-control" type="text" v-model="todo.title"/>
        </div>
        <div class="form-group">
          <label>Description</label>
          <input class="form-control" type="text" v-model="todo.description"/>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary mt-1"
            v-on:click="closeForm"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  app: "Todo",
  props: ["todo"],
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    completeTodo(todo) {
      this.$emit("complete-todo", todo);
    },
    deleteTodo(todo) {
      this.$emit("delete-todo", todo);
    },
    editTodo() {
      this.isEditing = true;
    },
    closeForm() {
      this.isEditing = false;
    }
  }
};
</script>

<style scoped>
input [type="text"]{
  margin: 0 auto;
  width: 80%;
}
.detail-box {
  /* padding: 15px; */
  /* overflow-x:hidden;  */
  background-color:#D8CEF6; 
  border-radius:20px; 
  border: 3px solid #642EFE;
  width: 350px;
  height: 250px;
  margin: 0 auto;
}

.detail-box-editing{
    height: 260px;
    padding: 10px;
}
.ht-250{
    height: 250px;
}

.buttons{
    margin-top: 60px;
}
.text{
    text-align: left;
    padding: 5px;
}

.pt-12{
    padding-top: 12px;
}

.form-control{
    size: 10px;
}
</style>
