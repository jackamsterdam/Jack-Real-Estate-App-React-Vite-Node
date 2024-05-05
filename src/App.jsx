// import "./layout.scss"
import Jack from "./Jack"
// import NavBar from "./components/navbar/NavBar"
// import HomePage from "./routesorpages/homePage/homePage"
import { createBrowserRouter,RouterProvider} from "react-router-dom"
import ListPage from "./routesorpages/listPage/listPage"
import Layout from "./routesorpages/layout/layout"
import HomePage from "./routesorpages/homePage/homePage"
import SinglePage from "./routesorpages/singlePage/singlePage"

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/list',
        element: <ListPage/>
      },
      {
        path: '/:id',
        element: <SinglePage/>
      }
    ]
  }
 
]);

  return (


      <RouterProvider router={router}/>
  );
}

export default App

      
