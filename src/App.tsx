import { AppRoutes } from "./routes";
// import { SocketContext, socket } from './context/socket';

import "./styles/App.css"

export function App() {
  return (
    // <SocketContext.Provider value={socket}>
      <AppRoutes />
    // </SocketContext.Provider>
  )
}