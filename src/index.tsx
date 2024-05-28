import ReactDOM from "react-dom/client";
import Application from "app/application";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store";
import moment from "moment";

import "moment/dist/locale/ru";
import "app/main.scss";

import { Defaults } from "shared/lib";
import theme from "shared/theme";

moment.locale("ru");
moment.defaultFormat = Defaults.DateFormat;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider theme={theme}>
    <ReduxProvider store={store}>
      <PersistGate {...{ persistor }}>
        <Router>
          <Application />
        </Router>
      </PersistGate>
    </ReduxProvider>
  </ChakraProvider>
);
