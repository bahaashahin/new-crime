import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // البيانات الثابتة
  const correctUsername = "admin";
  const correctPassword = "12345";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      // دخول صح
      navigate("/"); // خليها الصفحة الرئيسية للموقع
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl mb-6 text-center">تسجيل الدخول</h2>
        <input
          type="text"
          placeholder="اسم المستخدم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700"
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-700"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
        >
          دخول
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
