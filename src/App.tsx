import { useRoutes } from "react-router-dom";
import routes from "./routes";
import supabase from "./config/supabaseClient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserDataProvider } from "./context/UserDataContext";

const queryClient = new QueryClient();

function App() {
  const routing = useRoutes(routes);
  return (
    <UserDataProvider>
      <QueryClientProvider client={queryClient}>{routing}</QueryClientProvider>
    </UserDataProvider>
  );
}

export default App;
