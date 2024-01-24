import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, lazy } from "react";
import HotelInfo from "./pages/HotelInfo";
const queryClient = new QueryClient();
const Home = lazy(() => import("./pages/Home"));

function App() {

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel/:slug" element={<HotelInfo />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
