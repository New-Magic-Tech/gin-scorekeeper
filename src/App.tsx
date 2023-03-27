import Game from "./features/game/Game";
import AuthModal from "./features/auth/AuthModal";

import { Provider } from "react-redux";
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
    <div className="mb-[100px] sm:mb-0">
      <AuthModal/>
      <Game/>
    </div>
    </Provider>
  );
}

export default App;
