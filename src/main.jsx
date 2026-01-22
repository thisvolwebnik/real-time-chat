import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVwcMNWYy0lfrWCd8gzcxBbpV0t13mkdE",
  authDomain: "real-time-chat-73a51.firebaseapp.com",
  projectId: "real-time-chat-73a51",
  storageBucket: "real-time-chat-73a51.firebasestorage.app",
  messagingSenderId: "74255647636",
  appId: "1:74255647636:web:a85c933563a395a9e90581",
  measurementId: "G-0X6X928BSK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export const Context = createContext({ auth, firestore, app });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context.Provider value={{ app, auth, firestore }}>
      <App />
    </Context.Provider>
  </StrictMode>,
);
