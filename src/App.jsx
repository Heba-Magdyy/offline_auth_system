import { HashRouter, Routes, Route } from "react-router-dom";
import SignUp from '../src/pages/SignUp'
import Login from "./pages/Login";
import PublicLayout from "./PublicLayout";
import Profile from './pages/Profile'
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<PublicLayout />}>

        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />

        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
