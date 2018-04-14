<template>
    <div id="app">
        <headnav></headnav>
        <router-view></router-view>
    </div>
</template>

<script>
    import headnav from '@/components/header.vue'

    export default {
        name: 'app',
        data () {
            return {
                
            }
        },
        components: {
            headnav
        }
    }
    
</script>