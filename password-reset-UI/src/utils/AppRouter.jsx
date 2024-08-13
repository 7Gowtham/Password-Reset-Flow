import Login from "../components/Login.jsx"
import ForgotPassword from "../components/ForgotPassword.jsx"
import ResetPassword from "../components/ResetPassword.jsx"
import { Navigate } from "react-router-dom"

const AppRouter = [
    {
        path:'/user/login',
        element: <><Login /></>
    },
    {
        path:'/user/forgot-password',
        element:<><ForgotPassword /></>
    },
    {
        path:'/user/reset-password/:token',
        element:<><ResetPassword /></>
    },
    {
        path:'*',
        element:<Navigate to = '/user/login'/>
    }
]

export default AppRouter