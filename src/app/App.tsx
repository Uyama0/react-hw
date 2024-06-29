import { Provider } from "react-redux";

import { AppRouter } from "./routers";
import { Header } from "widgets/header";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AppRouter />
    </Provider>
  );
};

export default App;
