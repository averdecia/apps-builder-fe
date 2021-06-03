import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home/Home'

const AppRouter = () => (
    <Router>
      <Route component={Home}       path="/" exact/>
      {/* <Route component={Login}      path="/login"/> */}
      {/* <Route component={Register}      path="/register"/> */}
    </Router>
)

export default AppRouter;