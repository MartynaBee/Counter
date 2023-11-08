
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';

function App() {

  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The count is: {count} </h1>
      <button onClick={() =>dispatch(decrement())}>decrement</button>
      <button onClick={() =>dispatch(increment())}>increment</button>
    <button onClick={()=> dispatch(incrementByAmount(33))}>Increment by 33</button>
    </div>
  );
}

export default App;
