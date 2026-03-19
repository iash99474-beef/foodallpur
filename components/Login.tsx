"use client";
import { auth, googleProvider, facebookProvider } from "@/lib/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
    alert("Logged in with Google");
  };

  const facebookLogin = async () => {
    await signInWithPopup(auth, facebookProvider);
    alert("Logged in with Facebook");
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <button onClick={googleLogin} className="bg-red-500 text-white px-6 py-2 rounded">Login with Google</button>
      <button onClick={facebookLogin} className="bg-blue-600 text-white px-6 py-2 rounded">Login with Facebook</button>
    </div>
  );
}