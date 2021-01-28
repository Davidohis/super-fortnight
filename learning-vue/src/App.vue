<template>
  <div id="app">
    <Todos v-bind:todos="todos"  v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todos  from './components/Todos';

export default {
  name: 'App',
  components: {
      Todos
  },
  data() {
      return {
          todos: [
              {
                  id: 1,
                  title: "Todo One",
                  completed: false
              },
              {
                  id: 2,
                  title: "Todo Two",
                  completed: true
              },
              {
                  id: 3,
                  title: "Todo Three",
                  completed: false
              }
          ]
      }
  },
  methods: {
      deleteTodo(id) {
          this.todos = this.todos.filter(todo => todo.id !== id);
      }
  }
}
</script>

<style>
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      line-height: 1.4;
  }
</style>
