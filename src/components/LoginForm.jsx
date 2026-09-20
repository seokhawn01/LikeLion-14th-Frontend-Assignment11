import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function LoginForm({ onSwitchToSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();

    const success = login(username, password);
    if (!success) {
      setMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
  }

  return (
    <div>
      <h1 className="font-semibold mb-3">로그인</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block text-sm mb-1">아이디</label>
          <input
            className="w-full border rounded p-2"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm mb-1">비밀번호</label>
          <input
            className="w-full border rounded p-2"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
          로그인
        </button>
        {message && <p className="text-sm text-red-600 mt-2">{message}</p>}
      </form>
      <p className="text-sm mt-3">
        아직 계정이 없으신가요?{" "}
        <span className="text-blue-500" onClick={onSwitchToSignup}>
          회원가입
        </span>
      </p>
    </div>
  );
}

export default LoginForm;
