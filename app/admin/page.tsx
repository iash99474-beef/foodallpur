"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [message, setMessage] = useState("Admin Panel Loaded");

  useEffect(() => {
    console.log("Admin page mounted");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <p className="mt-4">{message}</p>
    </div>
  );
}