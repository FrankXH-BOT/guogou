
import Center from "@/views/center/center";
import LR from "@/views/center/LR";
import Login from "@/views/center/Login";
import Register from "@/views/center/Register";
import Balance from "@/views/center/Balance";
import Question from "@/views/center/Question";
import Discount from "@/views/center/Discount";
import Address from "@/views/center/Address";
import Logout from "@/views/center/Logout"
export default [
    {path: "/center", component: Center},
    { path: '/discount', component: Discount },
    { path: '/address', component: Address },
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
     {
        path: "/balance", component: Balance,
    },
    {
        path: "/question", component: Question,
    },
]

