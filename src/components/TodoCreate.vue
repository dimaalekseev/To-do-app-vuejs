<template>
  <div class="mb-3">
    <button class="btn btn-primary mb-3" type="button" v-on:click="openForm">
      Add new Todo
    </button>
    <form class="detail-box" v-show="isOpen">
      <div class="form-group">
        <label>Title</label>
        <input class="form-control" type="text" v-model="title" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <input class="form-control" type="text" v-model="description" />
      </div>
      <div>
        <button
          class="btn btn-primary mt-3"
          type="button"
          v-on:click="sendForm"
        >
          Create
        </button>
        <button
          class="btn btn-danger mt-3"
          type="button"
          v-on:click="closeForm"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TodoCreate",
  data() {
    return {
      title: "",
      description: "",
      isOpen: false
    };
  },
  methods: {
    openForm() {
      this.isOpen = true;
    },
    closeForm() {
      this.isOpen = false;
    },
    sendForm() {
    //checking if our fields aren't empty
      if (this.title !== "" && this.description !== "") {
        const title = this.title;
        const description = this.description;
        //now we will emit an event
        this.$emit("create-todo", {
          title: title,
          description: description,
          done: false
        });
        this.title = "";
        this.description = "";
        this.isOpen = false;
      }
    }
  }
};
</script>

<style scoped>
input [type="text"] {
  margin: 0 auto;
  width: 80%;
}
.detail-box {
  padding: 15px;
  border: 1px solid lightgrey;
  width: 300px;
  height: 270px;
  margin: 0 auto;
}
</style>
