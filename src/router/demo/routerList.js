import loadable from "react-loadable";
import Loading from "@/components/loading"
const Login = loadable({loader: () => import("../../pages/demo/Login"), loading: Loading});
const Home = loadable({loader: () => import("../../pages/demo/Home"), loading: Loading});
const About = loadable({loader: () => import("../../pages/demo/About"), loading: Loading});
const Sum = loadable({loader: () => import("../../pages/demo/Sum"), loading: Loading});
const Category = loadable({loader: () => import("../../pages/demo/about/Category"), loading: Loading});
const Author = loadable({loader: () => import("../../pages/demo/about/Author"), loading: Loading});
const Lost = loadable({loader: () => import("../../pages/404"), loading: Loading});
const routerList = [
  {path: "/login", component: Login},
  {path: "/home", component: Home},
  {path: "/about", component: About,children: [{path: "/", component: Category},{path: "/author", component: Author}]},
  {path: "/sum/:id", component: Sum, hidden: true},
  {path: "/404", component: Lost, hidden: true}
];
export default routerList;
