<script setup>
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'
import { ref } from 'vue'
import { uid } from 'uid'
const todos = ref([])

function todoCreate(text) {
  todos.value.push({
    id: uid(),
    text,
    completed: false,
  })
}

function toggleTodo(id) {
  const todo = todos.value.find((t) => t.id === id)

  if (todo) {
    todo.completed = !todo.completed
  }
}

function deleteTodo(id) {
  todos.value = todos.value.filter((t) => t.id !== id)
}
</script>

<template>
  <main class="main-container">
    <h1 class="title">My Todo List</h1>
    <TodoForm @todo-create="todoCreate" />
    <TodoList :todos="todos" @toggle-todo="toggleTodo" :onDelete="deleteTodo" />
  </main>
</template>

<style lang="scss" scoped>
.main-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.title {
  color: var(--text-color);
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
}
</style>
