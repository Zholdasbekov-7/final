import { Navigate, useRoutes } from "react-router-dom";
import './assets/scss/styles.scss';
import Home from "./views/Home";
import { City } from "./views/City";

const App = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
    { path: '/home', element: <Home /> },
    { path: '/country', element: <City /> },
  ]);

  return (<main>
    <div className="wrapper p-2" >
      {routing}
    </div>
  </main>);
};

export default App;
