function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('Hello');
  
    useEffect(() => {
      console.log('Count has changed:', count);
    }, [count]);
  
    return jsx(
      'div',
      null,
      jsx('h1',null,"SimpleReact"),
      jsx('p', null, `Count: ${count}`),
      jsx('p', null, text),
      jsx('button', { onclick: () => setCount(count + 1) }, 'Increment'),
      jsx('button', { onclick: () => setText('Hello, SimpleReact!') }, 'Update Text')
    );
  }
  
  // Initial render
  render();
  