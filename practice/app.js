function Counter({ start }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    console.log('Count has changed:', count);
  }, [count]);

  return jsx(
    'div',
    null,
    jsx('p', null, `Count: ${count}`),
    jsx('button', { onclick: () => setCount(count + 1) }, 'Increment')
  );
}

function App() {
  const [text, setText] = useState('Hello');

  return jsx(
    'div',
    null,
    jsx('h1', null, 'SimpleReact'),
    jsx(Counter, { start: 0 }),
    jsx('button', { onclick: () => setText('Hello, SimpleReact!') }, 'Update Text'),
    jsx('p', null, text),
  );
}

// Initial render
render();
