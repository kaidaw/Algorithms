function useState(currentState = null) {
  function setState(state) {
    currentState = state;
  }
  function getState() {
    return currentState;
  }
  return [getState, setState];
}

let [getName, setName] = useState("Daniel");

console.log(getName());
setName("James");
console.log(getName());
