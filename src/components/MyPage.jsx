import { useAuth } from "../context/AuthContext";

function MyPage() {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <div className="flex items-center justify-between border-b p-4">
        <h1 className="font-semibold">과제하기좋은날이군요...</h1>
        <div className="text-sm">
          <span className="mr-3 text-gray-500">{currentUser.username}님</span>
          <button className="border rounded px-3 py-1" onClick={logout}>
            로그아웃
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-10 p-6">
        <h2 className="font-semibold mb-3">마이페이지</h2>
        <div className="border rounded p-4 text-sm">
          <p className="mb-2">아이디: {currentUser.username}</p>
          <p>로그인 시각: {new Date(currentUser.loginAt).toLocaleString("ko-KR")}</p>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
