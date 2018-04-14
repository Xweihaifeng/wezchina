<template>
    <div class="header" id="header">
        <router-link to="/home" style='background-color:#004f88;'>
            <img src="../assets/logo.png">
        </router-link>
        <router-link to="/login">
            <span>
                <i class="iconfont">&#xe6b5;</i>
                <sub> 登录 </sub>
            </span>
        </router-link>
        <router-link to="/articles">
            <span>
                <i class="iconfont">&#xe608;</i>
                <sub> 文章 </sub>
            </span>
        </router-link>
        <router-link to="/project">
            <span>
                <i class="iconfont">&#xe600;</i>
                <sub> 项目 </sub>
            </span>
        </router-link>
        <router-link to="/activity">
            <span>
                <i class="iconfont">&#xe642;</i>
                <sub> 活动 </sub>
            </span>
        </router-link>
        <router-link to="/mall">
            <span>
                <i class="iconfont">&#xe602;</i>
                <sub> 商城 </sub>
            </span>
        </router-link>
        <router-link to="/coterie">
            <span>
                <i class="iconfont">&#xe639;</i>
                <sub> 圈子 </sub>
            </span>
        </router-link>
    </div>
</template>

<script>
    export default {
        data (){
            return{
                
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
    .header {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        width: 90px;
        height: 100%;
        background-color: #ececec;
        overflow: hidden;
    }
    .header a {
        display: inline-block;
        width: 100%;
        height: 90px;
    }
    .header a img {
        width: 100%;
        height: 90px;
    }
    .header span {
        display: flex;
        width: 100%;
        height: 90px;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        line-height: 1.3rem;
        font-size: 15px;
        color: #999;
    }
    .header span i {
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
    }
    .header span sub {
        margin-top: 5px;
    }
    .router-link-exact-active span {
        color: #fc3e32;
        background: rgb(217, 217, 217);
    }
</style>