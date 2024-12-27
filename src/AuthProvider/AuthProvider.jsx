import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const CreateUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created:", userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Error creating user:", error);
      return null;
    }
  };

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogoutUser = () => {
    return signOut(auth);
  };

  // google login
  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post("https://nest-shop-server-six.vercel.app/authentication", {
            email: currentUser.email,
          })
          
          .then((data) => {
            if (data.data) {
              localStorage.setItem("access-token", data?.data?.token);
              setLoading(false);
            }
          });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    loading,
    CreateUser,
    LoginUser,
    LogoutUser,
    GoogleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
