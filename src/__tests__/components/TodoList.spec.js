import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoList from '/src/components/TodoList.vue'

describe('TodoList', () => {
  it('renders empty state when no todos', () => {
    const wrapper = mount(TodoList, {
      props: {
        todos: [],
        onDelete: () => {},
      },
    })
    expect(wrapper.text()).toContain('No todos yet!')
  })

  it('renders todos when provided', () => {
    const todos = [{ id: 1, text: 'Test Todo', completed: false }]
    const wrapper = mount(TodoList, {
      props: {
        todos,
        onDelete: () => {},
      },
    })
    expect(wrapper.text()).toContain('Test Todo')
  })

  it('emits toggle-todo event when checkbox is clicked', async () => {
    const todos = [{ id: 2, text: 'Test Todo', completed: false }]
    const wrapper = mount(TodoList, {
      props: {
        todos,
        onDelete: () => {},
      },
    })
    await wrapper.find('input[type="checkbox"]').trigger('change')
    expect(wrapper.emitted('toggle-todo')).toBeTruthy()
    expect(wrapper.emitted('toggle-todo')[0]).toEqual([1])
  })
})
