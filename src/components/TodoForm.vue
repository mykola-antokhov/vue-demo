<script setup>
import { ref } from 'vue'

const emit = defineEmits(['todo-create'])
const todoText = ref('')

function handleSubmit() {
  if (todoText.value.trim()) {
    emit('todo-create', todoText.value)
    todoText.value = ''
  }
}
</script>

<template>
  <form class="todo-form" @submit.prevent="handleSubmit">
    <input class="todo-input" placeholder="Add a new todo..." type="text" v-model="todoText" />
    <button class="todo-button" type="submit">Add Todo</button>
  </form>
</template>

<style lang="scss" scoped>
.todo-form {
  display: flex;
  gap: 1rem;
  margin: 1rem auto;
  max-width: 800px;
  width: 100%;
  padding: 0 1rem;

  .todo-input {
    border: 1px solid var(--border-color);
    border-radius: 4px;
    flex: 1;
    font-size: 1rem;
    padding: 0.5rem;
  }

  .todo-button {
    background-color: var(--primary-color);
    border: none;
    border-radius: 4px;
    color: var(--bg-primary);
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--primary-hover);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;

    .todo-button {
      width: 100%;
    }
  }
}
</style>
