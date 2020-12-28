
import Center from "@/views/center/center";
import LR from "@/views/center/LR";
import Login from "@/views/center/Login";
import Register from "@/views/center/Register";
import Logout from "@/views/center/Logout"
export default [
    {
        path: "/center", component: Center,
    },
    {
        path:"/Logout",component:Logout
    },
    {
        path: '/user',
        component: LR,
        redirect: '/user/login',
        children: [
            {
                path: "login", component: Login,
            },
            {
                path: "register", component: Register,
            },
        ]
    },
]

