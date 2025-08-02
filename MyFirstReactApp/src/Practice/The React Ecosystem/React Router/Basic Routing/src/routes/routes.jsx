import App from "../App";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile/:name",
        element: <Profile />,
      },
    ],
  },
];
export default routes;
