import ReactDOM from "react-dom";
import { App } from "./App";
import { AppCss } from "./AppCss";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
);
