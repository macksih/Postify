import Home from "./Pages/home/home";
import {Route , Routes} from "react-router-dom"
import AboutUs from "./Pages/aboutUs/aboutUs";
import ArticlePage from "./Pages/articlesPage/articlepage";
import CreateArticle from "./Pages/createArticle/create";
import NotFound from "./Pages/notFound/notFound";

function App() {
  return (
    <div>

      <Routes>

        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/create/article" element={<CreateArticle />} />

      

      </Routes>
    </div>
    
  );
}
export default App;





