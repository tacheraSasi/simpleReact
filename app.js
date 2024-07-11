function TodoItem({ todo, toggleTodo }) {
  return jsx(
    'li',
    { className: `todo-item ${todo.completed ? 'completed' : ''}`, onclick: () => toggleTodo(todo.id) },
    todo.text
  );
}

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function addTodo() {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  return jsx(
    'div',
    { className: 'todo-app' },
    jsx('h1', { className: 'header' }, 'SimpleReact Todo App'),
    jsx('input', {
      className: 'new-todo',
      type: 'text',
      value: newTodo,
      oninput: (e) => setNewTodo(e.target.value),
      placeholder: 'Add a new todo'
    }),
    jsx('button', { className: 'add-todo', onclick: addTodo }, 'Add Todo'),
    jsx(
      'ul',
      { className: 'todo-list' },
      todos.map(todo => jsx(TodoItem, { key: todo.id, todo, toggleTodo }))
    )
  );
}

function App() {
  return jsx('div', null, jsx(TodoApp, null));
}

// Initial render
render();
