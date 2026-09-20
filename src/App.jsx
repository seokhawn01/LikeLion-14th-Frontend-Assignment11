import { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import MyPage from "./components/MyPage";

function AppContent() {
  const { currentUser } = useAuth();
  const [mode, setMode] = useState("login"); 

  if (currentUser) {
    return <MyPage />;
  }

  return (
    <div className="max-w-xs mx-auto mt-20 p-6">
      {mode === "login" ? (
        <LoginForm onSwitchToSignup={() => setMode("signup")} />
      ) : (
        <SignupForm onSwitchToLogin={() => setMode("login")} />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
 