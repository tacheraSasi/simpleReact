const SimpleReact = (function() {
    let states = [];
    let stateIndex = 0;
  
    function useState(initialValue) {
      const currentIndex = stateIndex;
      states[currentIndex] = states[currentIndex] !== undefined ? states[currentIndex] : initialValue;
  
      function setState(newValue) {
        states[currentIndex] = newValue;
        render();
      }
  
      stateIndex++;
  
      return [states[currentIndex], setState];
    }
  
    let effects = [];
    let effectIndex = 0;
  
    function useEffect(callback, dependencies) {
      const oldDependencies = effects[effectIndex];
      let hasChanged = true;
  
      if (oldDependencies) {
        hasChanged = dependencies.some((dep, i) => !Object.is(dep, oldDependencies[i]));
      }
  
      if (hasChanged) {
        callback();
      }
  
      effects[effectIndex] = dependencies;
      effectIndex++;
    }
  
    function jsx(tag, props, ...children) {
      const element = { tag, props: props || {}, children };
      return element;
    }
  
    function createElement(node) {
      if (typeof node === 'string' || typeof node === 'number') {
        return document.createTextNode(String(node));
      }
  
      const element = document.createElement(node.tag);
  
      for (let [name, value] of Object.entries(node.props)) {
        if (name.startsWith('on') && typeof value === 'function') {
          element.addEventListener(name.slice(2).toLowerCase(), value);
        } else {
          element.setAttribute(name, value);
        }
      }
  
      for (let child of node.children.flat()) {
        if (typeof child === 'string' || typeof child === 'number') {
          element.appendChild(document.createTextNode(String(child)));
        } else {
          element.appendChild(createElement(child));
        }
      }
  
      return element;
    }
  
    function render() {
      stateIndex = 0;
      effectIndex = 0;
      const root = document.getElementById('root');
      root.innerHTML = '';
      const app = App();
      root.appendChild(createElement(app));
    }
  
    return { useState, useEffect, jsx, render };
  })();
  
  // Exposing the SimpleReact to global scope
  const { useState, useEffect, jsx, render } = SimpleReact;
  