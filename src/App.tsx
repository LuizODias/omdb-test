import "./App.scss";
import { Header, Section } from "./components";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Section />
      </div>
    </Provider>
  );
}

export default App;
