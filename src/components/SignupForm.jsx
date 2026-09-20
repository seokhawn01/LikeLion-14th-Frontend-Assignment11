import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function SignupForm({ onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { signup } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();

    const success = signup(username, password);
    if (!success) {
      setMessage("이미 존재하는 아이디입니다.");
      return;
    }

    setMessage("가입이 완료되었습니다! 로그인 화면으로 이동합니다.");
    setTimeout(() => onSwitchToLogin(), 1000);
  }

  return (
    <div>
      <h1 className="font-semibold mb-3">회원가입</h1>
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
          가입하기
        </button>
        {message && <p className="text-sm text-red-600 mt-2">{message}</p>}
      </form>
      <p className="text-sm mt-3">
        이미 계정이 있으신가요?{" "}
        <span className="text-blue-500" onClick={onSwitchToLogin}>
          로그인
        </span>
      </p>
    </div>
  );
}

export default SignupForm;
