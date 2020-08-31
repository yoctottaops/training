let nextTodoId = 0;
export const addTodo = (content) => ({
  type: "ADD_TODO",
  payload: {
    id: ++nextTodoId,
    name: content,
    done: false,
  },
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: { id },
});
