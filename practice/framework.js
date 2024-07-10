const SimpleReact = (function(){
  let states = []
  let stateIndex = 0

  function useState(initialValue){
    const currentIndex = stateIndex
    states[currentIndex] =states[currentIndex] !== undefined ? states[currentIndex] : 
    
    //const [name, setName] = useState('Tach')
    //setName('John')
    function setState(newValue){
      states[currentIndex] = newValue
      render()
    }
    stateIndex++

    return [states[currentIndex], setState]

  }

  let effects = []
  let effectIndex = 0

  function useEffect(callback,dependencies){
    const oldDependencies = effects[effectIndex]
    let hasChanged = true

    if(oldDependencies){
      hasChanged = dependencies.some((dep, i) =>Object.is(oldDependencies[i]))
    }
    if(hasChanged){
      callback()
    }
    effects[effectIndex] = dependencies
    effectIndex++
  }
  
  function jsx(tag,props,...children){

  }

  function createElement(){

  }


  function render(){

  }

})()