import React from 'react'
import Loadable from 'react-loadable'
var Home=Loadable({  //异步加载组件
    loader:()=>import("@/components/home"),
    loading:()=><div>loading.....</div>
})
var Category=Loadable({  //异步加载组件
    loader:()=>import("@/components/category"),
    loading:()=><div>loading.....</div>
})
var Cart=Loadable({  //异步加载组件
    loader:()=>import("@/components/cart"),
    loading:()=><div>loading.....</div>
})
var User=Loadable({  //异步加载组件
    loader:()=>import("@/components/user"),
    loading:()=><div>loading.....</div>
})
var NotFound=Loadable({  //异步加载组件
    loader:()=>import("@/components/notfound"),
    loading:()=><div>loading.....</div>
})
var Login = Loadable({
    loader:()=>import("@/components/login"),
    loading:()=><div>loading.....</div>
})
var Goods = Loadable({
    loader:()=>import("@/components/goods"),
    loading:()=><div>loading.....</div>
})
var Search = Loadable({
    loader:()=>import("@/components/search"),
    loading:()=><div>loading.....</div>
})
//houm上的组件
var Home1=Loadable({  //异步加载组件
    loader:()=>import("@/components/home/pages/Home1"),
    loading:()=><div>loading.....</div>
})
var Home2=Loadable({  //异步加载组件
    loader:()=>import("@/components/home/pages/Home2"),
    loading:()=><div>loading.....</div>
})
var Home3=Loadable({  //异步加载组件
    loader:()=>import("@/components/home/pages/Home3"),
    loading:()=><div>loading.....</div>
})
var Home4=Loadable({  //异步加载组件
    loader:()=>import("@/components/home/pages/Home4"),
    loading:()=><div>loading.....</div>
})
var Home5=Loadable({  //异步加载组件
    loader:()=>import("@/components/home/pages/Home5"),
    loading:()=><div>loading.....</div>
})
var Home6=Loadable({  //异步加载组件
    loader:()=>import("@/components/home/pages/Home6"),
    loading:()=><div>loading.....</div>
})
var Home7=Loadable({  //异步加载组件
    loader:()=>import("@/components/home/pages/Home7"),
    loading:()=><div>loading.....</div>
})

//Category上的组件
var Category1=Loadable({  //异步加载组件
    loader:()=>import("@/components/category/pages/Category1"),
    loading:()=><div>loading.....</div>
})
var Category2=Loadable({  //异步加载组件
    loader:()=>import("@/components/category/pages/Category2"),
    loading:()=><div>loading.....</div>
})
var Category3=Loadable({  //异步加载组件
    loader:()=>import("@/components/category/pages/Category3"),
    loading:()=><div>loading.....</div>
})
var Category4=Loadable({  //异步加载组件
    loader:()=>import("@/components/category/pages/Category4"),
    loading:()=><div>loading.....</div>
})
var Category5=Loadable({  //异步加载组件
    loader:()=>import("@/components/category/pages/Category5"),
    loading:()=><div>loading.....</div>
})
var Category6=Loadable({  //异步加载组件
    loader:()=>import("@/components/category/pages/Category6"),
    loading:()=><div>loading.....</div>
})
var Category7=Loadable({  //异步加载组件
    loader:()=>import("@/components/category/pages/Category7"),
    loading:()=><div>loading.....</div>
})


export const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/user',
        component:User
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/goods',
        component:Goods
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/404',
        component:NotFound
    }
]

export const homeRoutes = [
    {
        path:'/home/1',
        component:Home1
    },
    {
        path:'/home/2',
        component:Home2
    },
    {
        path:'/home/3',
        component:Home3
    },
    {
        path:'/home/4',
        component:Home4
    },
    {
        path:'/home/5',
        component:Home5
    },
    {
        path:'/home/6',
        component:Home6
    },
    {
        path:'/home/7',
        component:Home7
    },
]

export const categoryRoutes = [
    {
        path:'/category/1',
        component:Category1
    },
    {
        path:'/category/2',
        component:Category2
    },
    {
        path:'/category/3',
        component:Category3
    },
    {
        path:'/category/4',
        component:Category4
    },
    {
        path:'/category/5',
        component:Category5
    },
    {
        path:'/category/6',
        component:Category6
    },
    {
        path:'/category/7',
        component:Category7
    },
]