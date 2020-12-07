import React from "react"
import { Switch, Route } from "react-router-dom"
import './styles/style.css'
import CardDetail from "./components/CardDetail"
import EditCard from "./components/EditCard"
import Login from "./components/Login"
import NewCard from "./components/NewCard"
import Settings from "./components/Settings"
import Signup from "./components/Signup"
import UserHome from "./components/UserHome"

function App() {
  return (
    <div className="App min-h-screen bg-indigo-100">
      <Switch>
        {/* user routes */}
        <Route exact path="/" render={(props) => <UserHome {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} />} />
        <Route exact path="/signup" render={(props) => <Signup {...props} />} />
        <Route exact path="/settings" render={(props) => <Settings {...props} />} />

        {/* card routes */}
        <Route
          exact
          path="/newcard"
          render={(props) => <NewCard {...props} />}
        />
        <Route
          exact
          path="/cards/:id/edit"
          render={(props) => <EditCard {...props} />}
        />
        <Route
          exact
          path="/cards/:id"
          render={(props) => <CardDetail {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App;
