import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizApp from "./pages/Quiz";
import Layout from "./layouts/layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<QuizApp />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;
