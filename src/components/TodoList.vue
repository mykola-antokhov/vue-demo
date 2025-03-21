<script setup>
defineProps({
  todos: {
    type: Array,
    required: true,
  },
  onDelete: {
    type: Function,
    required: true,
  },
})

defineEmits(['toggle-todo', 'delete-todo'])
</script>

<template>
  <div class="todos-container">
    <div v-if="todos.length === 0" class="empty-state">
      No todos yet! Add one above to get started.
    </div>

    <ul v-else class="todos-list">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <label class="todo-label">
          <input
            type="checkbox"
            :checked="todo.completed"
            @change="$emit('toggle-todo', todo.id)"
          />
          <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        </label>
        <button @click="onDelete(todo.id)" class="delete-btn">Delete</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.todos-container {
  margin-top: 2rem;
}

.empty-state {
  text-align: center;
  color: var(--text-light);
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 8px;
}

.todos-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  margin-bottom: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }
}

.todo-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;

  input[type='checkbox'] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .completed {
    text-decoration: line-through;
    color: var(--text-light);
  }
}

.delete-btn {
  background-color: var(--accent-red);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
}
</style>
