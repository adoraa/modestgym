import {createHashRouter} from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home/Home";

const router = createHashRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/orders",
          element: <div>Orders</div>
        },
        {
          path: "/about",
          element: <div>About</div>
        }
      ]
    },
  ]);

  export default router;