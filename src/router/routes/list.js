import List from "@/views/list/list"
import TwoList from "@/views/list/twolist"

 export default{
     path:"/list",
     component: List,
     children:[
         {path:"twolist",component:TwoList }
     ]
 }