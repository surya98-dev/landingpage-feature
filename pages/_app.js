import "tailwindcss/tailwind.css";
import { AuthProvider } from "../context/AuthContext";
import store from "../app/store";
import { Provider } from "react-redux";
import AuthLayout from "../Layouts/AuthLayout";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
