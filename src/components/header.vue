<template>
    <div class="header" id="header">
        <router-link to="/home" style='background-color:#004f88;'>
            <img src="../assets/logo.png">
        </router-link>
        <router-link to="/login">
            <span>
                <i class="iconfont">&#xe6b5;</i><br/>
                登录
            </span>
        </router-link>
        <router-link to="/article">
            <span>
                <i class="iconfont">&#xe608;</i><br/>
                文章
            </span>
        </router-link>
        <router-link to="/project">
            <span>
                <i class="iconfont">&#xe600;</i><br/>
                项目
            </span>
        </router-link>
        <router-link to="/activity">
            <span>
                <i class="iconfont">&#xe642;</i><br/>
                活动
            </span>
        </router-link>
        <router-link to="/mall">
            <span>
                <i class="iconfont">&#xe602;</i><br/>
                商城
            </span>
        </router-link>
        <router-link to="/circle">
            <span>
                <i class="iconfont">&#xe639;</i><br/>
                圈子
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
            $('.header span').on('click',function(){
                $('.header span').removeClass('selectedSpan');
                $(this).addClass('selectedSpan');
            })
        }
    }
</script>

<style scoped>
    .header{
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
    .header span{
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
    .header span i{
        font-size: 32px;
    }
    .header .selectedSpan{
        color: #fc3e32;
        background: rgb(217, 217, 217);
    }
</style>