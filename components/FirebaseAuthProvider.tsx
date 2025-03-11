"use client";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "@/firebase";

const FirebaseAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  const syncFirebaseAuth = async (session: Session) => {
    if (session && session.firebaseToken) {
      try {
        await signInWithCustomToken(auth, session.firebaseToken);
      } catch (error) {
        console.error("Error signing in with custom token: ", error);
      }
    } else {
      auth.signOut();
    }
  };

  useEffect(() => {
    if (!session) return;

    syncFirebaseAuth(session);
  }, [session]);
  return <>{children}</>;
};

export default FirebaseAuthProvider;
