import { BrowserRouter as Router } from "react-router-dom"
import { PublicRoutes } from "./routes/public"

function Application() {
  return (
    <Router>
      <PublicRoutes />
      <h1>Hi</h1>
    </Router>
  )
}

export default Application
