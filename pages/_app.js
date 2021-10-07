import "tailwindcss/tailwind.css";
import store from "../app/store";
import { Provider } from "react-redux";
import AuthLayout from "../Layouts/AuthLayout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    </Provider>
  );
}

export default MyApp;
