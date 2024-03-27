import { Provider } from "react-redux";
import store from "./store";
import Counter from "./features/counter/Counter";
import Todos from "./features/todos/Todos";
import User from "./features/user/User";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <hr />
        <Todos />
        <hr />
        <User />
      </div>
    </Provider>
  );
}

export default App;
