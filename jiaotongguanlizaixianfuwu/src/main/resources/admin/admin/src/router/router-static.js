import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import jiashizheng from '@/views/modules/jiashizheng/list'
    import jidongche from '@/views/modules/jidongche/list'
    import news from '@/views/modules/news/list'
    import weifachulki from '@/views/modules/weifachulki/list'
    import yonghu from '@/views/modules/yonghu/list'
    import dictionaryJiashizheng from '@/views/modules/dictionaryJiashizheng/list'
    import dictionaryJiashizhengYesno from '@/views/modules/dictionaryJiashizhengYesno/list'
    import dictionaryJidongche from '@/views/modules/dictionaryJidongche/list'
    import dictionaryJidongcheYesno from '@/views/modules/dictionaryJidongcheYesno/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryWeifachulki from '@/views/modules/dictionaryWeifachulki/list'
    import dictionaryWeifachulkiStatus from '@/views/modules/dictionaryWeifachulkiStatus/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryJiashizheng',
        name: '驾驶证业务类型',
        component: dictionaryJiashizheng
    }
    ,{
        path: '/dictionaryJiashizhengYesno',
        name: '申请状态',
        component: dictionaryJiashizhengYesno
    }
    ,{
        path: '/dictionaryJidongche',
        name: '机动车业务类型',
        component: dictionaryJidongche
    }
    ,{
        path: '/dictionaryJidongcheYesno',
        name: '申请状态',
        component: dictionaryJidongcheYesno
    }
    ,{
        path: '/dictionaryNews',
        name: '新闻类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryWeifachulki',
        name: '违法处理业务类型',
        component: dictionaryWeifachulki
    }
    ,{
        path: '/dictionaryWeifachulkiStatus',
        name: '业务状态',
        component: dictionaryWeifachulkiStatus
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/jiashizheng',
        name: '驾驶证业务',
        component: jiashizheng
      }
    ,{
        path: '/jidongche',
        name: '机动车业务',
        component: jidongche
      }
    ,{
        path: '/news',
        name: '新闻信息',
        component: news
      }
    ,{
        path: '/weifachulki',
        name: '违法处理业务',
        component: weifachulki
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
