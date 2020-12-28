
import Center from "@/views/center/center";
import LR from "@/views/center/LR";
import Login from "@/views/center/Login";
import Register from "@/views/center/Register";
import Discount from "@/views/center/Discount";
import Address from "@/views/center/Address";
export default [
    {path: "/center", component: Center},
    { path: '/discount', component: Discount },
    { path: '/address', component: Address },
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

