import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";

// import { Dashboard } from "../components/Dashboard";
// import { useAuth } from "../hooks/useAuth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";


const Router = () => {

//   const { authenticated } = useAuth();

//   const PrivateOutlet = () => {
//     return authenticated ? <Outlet /> : <Navigate to="/" />;
//   };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home/>} />


        {/* <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
        {/* <Route element={<PrivateOutlet />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
    />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;