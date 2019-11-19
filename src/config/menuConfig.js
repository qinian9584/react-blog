 const menuList = [
    {
        title:'首页',
        key:'/home',
        icon:'pie-chart'
    },
    {
        title:'商品',
        key:'/category',
        icon:'home',
        children:[
            {
                title:'品类管理',
                key:'/category',
                icon:'pie-chart'
            },
            {
                title:'商品管理',
                key:'/product',
                icon:'pie-chart'
            },
        ]
    },
    {
        title:'用户管理',
        key:'/user',
        icon:'pie-chart'
    },
]
export default menuList