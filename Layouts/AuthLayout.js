import React, { useEffect } from "react";
import { Navbar } from "../components";
import { useAuth } from "../context/AuthContext";
import app from "../firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { removeCurrentUser, setCurrentUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { LoadingPage } from "../components";

const AuthLayout = ({ children }) => {
  const auth = getAuth(app);
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setCurrentUser({ accessToken: user.accessToken, uid: user.uid }),
        );
        dispatch(setLoading({ loading: false }));
      } else {
        dispatch(removeCurrentUser());
        dispatch(setLoading({ loading: false }));
      }
    });
  }, []);

  const handleLogout = () => {
    return signOut(auth);
  };

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      {loading && <LoadingPage />}
      <div className=" bg-main ">{!loading && children}</div>
    </>
  );
};

export default AuthLayout;
