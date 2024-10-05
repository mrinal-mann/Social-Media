"use client";

import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

interface GoogleLoginComponentProps {
  onSuccess: (cred: any) => void;
}

export default function GoogleLoginComponent({
  onSuccess,
}: GoogleLoginComponentProps) {
  return (
    <GoogleOAuthProvider clientId="901218282775-drknfjege903u5jpi0ea95hqgtdtl9k2.apps.googleusercontent.com">
      <GoogleLogin onSuccess={onSuccess} />
    </GoogleOAuthProvider>
  );
}
