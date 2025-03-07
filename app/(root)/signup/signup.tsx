"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signing up with", email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-red-600">Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-red-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-red-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-red-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit" className={`${buttonVariants({ variant: "centriaRed", size: "lg" })} w-full`}>
              Sign Up
            </button>
          </form>
        </CardContent>
        <CardFooter className="text-center text-gray-600">
          Already have an account? <Link href="/login" className="text-red-600 hover:underline">Login</Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
