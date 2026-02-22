import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollTop from "./components/ScrollToTop";
import LogoImg from "./assets/logo.webp";
import Home from "./pages/Home";
import Mubahith1 from "./pages/MubahithOne";
import Mubahith2 from "./pages/MubahithTwo";
import Mubahith3 from "./pages/Mubahith3thr";
import Mubahith4 from "./pages/MubahithFour";
import MediaPage from "./pages/MediaPage";

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "amn" && password === "1997") {
      onLogin(true); // يبدأ الجلسة
      navigate("/");
    } else {
      setError("Incorrect password or username");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-black via-[#033b5c] to-[#05568d] text-white">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded shadow-md w-80 flex flex-col gap-4"
      >
        {LogoImg && (
          <img src={LogoImg} alt="Logo" className="w-24 mx-auto mb-4" />
        )}
        <h2 className="text-2xl text-center mb-4">تسجيل الدخول</h2>
        <input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 rounded text-black"
        />
        <input
          type="password"
          placeholder="PassWord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded text-black"
        />
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition p-2 rounded mt-2"
        >
          دخول
        </button>
      </form>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // أي Refresh = force logout
    setLoggedIn(false);
  }, []); // دي هتشتغل مرة واحدة عند كل تحميل جديد للصفحة

  // timer للجلسة 15 دقيقة
  useEffect(() => {
    if (!loggedIn) return;
    const timer = setTimeout(
      () => {
        setLoggedIn(false); // انتهاء الجلسة بعد 15 دقيقة
      },
      15 * 60 * 1000,
    );
    return () => clearTimeout(timer);
  }, [loggedIn]);

  if (!loggedIn) return <LoginPage onLogin={setLoggedIn} />;

  return (
    <div className="bg-gradient-to-b from-black via-[#033b5c] to-[#05568d] min-h-screen text-white">
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MubahithOne" element={<Mubahith1 />} />
        <Route path="/MubahithTwo" element={<Mubahith2 />} />
        <Route path="/Mubahith3thr" element={<Mubahith3 />} />
        <Route path="/MubahithFour" element={<Mubahith4 />} />
        <Route path="/MediaPage" element={<MediaPage />} />
      </Routes>
    </div>
  );
}

export default App;
