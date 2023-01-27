import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

import Writing from "./pages/Writing/Writing"
import Dashboard from "./pages/Dashboard/Dashboard"
import Conversation from "./pages/Conversation/Conversation"
import AddVocabulary from "./pages/AddVocabulary/AddVocabulary"

export function AppRoutes() {
  return (
    <Router >
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/writing" element={<Writing />}/>
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/add-vocabulary" element={<AddVocabulary />} />
      </Routes>

    </Router>
  )
}