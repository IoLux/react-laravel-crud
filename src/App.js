import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/App.css";
import "aos/dist/aos.css";

//components
import Header from "./components/Header";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Jumbotron from "./components/Jumbotron";

//components.articles
import Articles from "./components/articles/Articles";
import ArticleDetail from "./components/articles/ArticleDetail";
import CreateArticle from "./components/articles/CreateArticle";
import DeleteArticle from "./components/articles/DeleteArticle";
import UpdateArticle from "./components/articles/UpdateArticle";

function App() {
  return (
    <div className="App">
      <Alert />
      <Header />

      <Switch>
        <Route exact path={"/article/new/create"} component={CreateArticle} />
        <Route exact path={"/article/update/:slug"} component={UpdateArticle} />
        <Route exact path={"/article/:slug"} component={ArticleDetail} />
        <Route exact path={"/article/delete/:slug"} component={DeleteArticle} />
        <Route exact path={"/article"} component={Articles} />
        <Route path={"/"}>
          <Jumbotron />
          <HomePage />
          <About />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
