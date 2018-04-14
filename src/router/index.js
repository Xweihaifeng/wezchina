import Vue    from 'vue'
import Router from 'vue-router'
import App    from '../App.vue'

import home     from '@/components/home'
import login    from '@/page/login'
import articles from '@/page/articles'
import project  from '@/page/project'
import activity from '@/page/activity'
import mall     from '@/page/mall'
import coterie  from '@/page/coterie'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/home',
        // name: 'home',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/articles',
        name: 'articles',
        component: articles
    },
    {
        path: '/project',
        name: 'project',
        component: project
    },
    {
        path: '/activity',
        name: 'activity',
        component: activity
    },
    {
        path: '/mall',
        name: 'mall',
        component: mall
    },
    {
        path: '/coterie',
        name: 'coterie',
        component: coterie
    }
  ]
})
