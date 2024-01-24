import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet/Greet';
import Counter from './Component/counter/Counter';

function App() {
  return (
    <>
      <Greet name={"navina"}/>
      <Greet/>
      <Counter/>
    </>
  );
}

export default App;
