import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAd6Hq5dowgCld3DoSfFskgTplkc5L_rp0",
  authDomain: "quiz-app-87b26.firebaseapp.com",
  projectId: "quiz-app-87b26",
  storageBucket: "quiz-app-87b26.appspot.com",
  messagingSenderId: "472797719237",
  appId: "1:472797719237:web:b0a96e80ed948850b7deac"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

export const FireConfig = {
  auth,
  GoogleProvider,
}