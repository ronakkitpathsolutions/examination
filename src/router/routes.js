import { lazy, useMemo } from "react"
import { retry } from "../utils/functions"

const HomePage = lazy(() => retry(() => import("../presentation/HomePage")))
const FormPreview = lazy(() => retry(() => import("../presentation/FormPreview")))

const useRoutes = () => {

    const routes = [
        {
            id: "default",
            isPublic: true,
            exact: true,
            path: "/",
            element: <HomePage/>
        },
        {
            id: "home_page",
            isPublic: true,
            exact: true,
            path: "/home-page",
            element: <HomePage/>
        },
        {
            id: "form_preview",
            isPublic: true,
            exact: true,
            path: "/preview",
            element: <FormPreview/>
        }
    ]

    // eslint-disable-next-line
    const publicRoutes = useMemo(() => routes.filter(route => route.isPublic), [])

    return { publicRoutes, routes }
}

export default useRoutes