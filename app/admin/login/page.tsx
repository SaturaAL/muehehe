"use client";

import { useState } from "react";
import { loginAction } from "./actions";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await loginAction(formData);
    if (result?.error) setError(result.error);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        action={handleSubmit}
        className="w-full max-w-sm rounded-lg bg-white p-8 shadow-md"
      >
        <h1 className="mb-6 text-xl font-semibold">Satura A. L, Passwordnyaa ?</h1>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="mb-4 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
        {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
        <button
          type="submit"
          className="w-full rounded bg-black py-2 text-white hover:bg-gray-800"
        >
          Lah Ayo!
        </button>
      </form>
    </div>
  );
}