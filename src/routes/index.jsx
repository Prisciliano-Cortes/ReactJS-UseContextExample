import { createBrowserRouter } from "react-router-dom";
import { LayoutPrivate } from "../layout/LayoutPrivate";
import { LayoutRoot } from "../layout/layoutRoot";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/dashboard",
                element: <LayoutPrivate />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />
                    }
                ]
            }
        ]
    }
])