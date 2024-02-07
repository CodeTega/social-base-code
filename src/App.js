import { UserAuth } from "./AuthContext";
import NonUserRoutes from "./routes/NonUserRoutes";
import UserRoutes from "./routes/UserRoutes";

function App() {
  const { isLoggedOut } = UserAuth();
  return <>{!isLoggedOut ? <NonUserRoutes /> : <UserRoutes />}</>;
}

export default App;
