import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import WithoutTokenNavbar from './components/WithoutTokenNavbar'
import ResetPassword from './components/ResetPassword'
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WithoutTokenNavbar/>
          <Login/>
        </Route>
        <Route path="/register">
          <WithoutTokenNavbar/>
          <Register/>
        </Route>
        <Route path="/dashboard">
          <Navbar/>
          <Dashboard/>
        </Route>
        <Route path="/reset-password">
          <Navbar/>
          <ResetPassword/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
