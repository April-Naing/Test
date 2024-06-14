import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./features/Layout/RootLayout.jsx";
import TaskList from "./features/components/TaskList.jsx";
import CreateTasksForm from "./features/components/CreateTasksForm.jsx";
import EditTasksForm from "./features/components/EditTasksForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <TaskList /> },
      // { path: "/create", element: <CreateTasksForm /> },
      { path: "/edit/:id", element: <EditTasksForm /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
