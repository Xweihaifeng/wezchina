<template>
    <div id="content1">
        <div class="index-top-box">
            <div class="index-top-top-content">
                <div class="index-top-top-left">
                    <div class="carousel-img" id="carousel">
                        <transition-group tag="ul" class='slide-ul' name="list">
                            <li v-for="(list, index) in slideList" :key="index" v-show="index === currentIndex" @mouseenter="stop" @mouseleave="go">
                                <a :href="list.clickUrl" rel="external nofollow">
                                    <img :src="list.image" :alt="list.desc" />
                                </a>
                            </li>
                        </transition-group>
                        <div class="carousel-items">
                            <div>
                                <p v-for="(item, index) in slideList" :class="{'active1' : index === currentIndex}"> {{ item.desc }} </p>
                            </div>
                            <div>
                                <span v-for="(item, index) in slideList.length" :class="{'active2' : index === currentIndex}" @mouseover="change(index)"></span>
                            </div>
                        </div>
                    </div>
                    <div class="recommend-content flex">
                        <ul class="recommend-title">
                            <li v-for="(item, index) in lists" :class="{active3 : index == num}" @mouseover="tab(index)"> {{ item.text }} </li>
                        </ul>
                        <div class="recommend-info">
                            <div v-for='(itemCon, index) in lists' v-show="index == num"> {{ itemCon.title }} </div>
                        </div>
                    </div>
                </div>
                <ul class="index-top-top-right">
                    <li class="index-top-top-right-title">
                        <h1 class="nowrap"><a href="#"><b>标题标题标题标题标题标题标题标题标题标题...</b></a> </h1>
                        <p class="indent">
                            今天是北大女硕士章莹颖在美失联的第10天。两天前，她的父亲、小姨和男友已经抵达伊利诺伊州大学香槟分校。对于大家最关注的案件进展，中国驻芝加哥总领事馆工作人员引述警方的话说，案件调查取得了重大进展，但没有透露出详情。与此同时，FBI（美国联邦)
                        </p>
                    </li>
                    <li>
                        <ul class='index-top-top-right-list'>
                            <li v-for="(item, index) in todos" :class="{active : index == nowIndex}" @mouseover="newsCenter(index)"> {{ item.text }} </li>
                        </ul>
                        <div v-for='(itemCon, index) in todos' v-show=" index == nowIndex"> {{ itemCon.title }} </div>
                    </li>
                </ul>
            </div>
            <div class="index-top-bottom-content">
                <ul class="index-top-bottom-left flex">
                    <li v-for='item in recommend'> {{ item }} </li>
                </ul>
                <ul class="index-top-bottom-right flex">
                    <li v-for='item in neologism'> {{ item }} </li>
                </ul>
            </div>
        </div>
        <div class="index-bottom-box">
            <div class="index-bottom-top-content"></div>
            <div class="index-bottom-middle-content flex">
                <div class="middle-left">
                    <div class="mien"> 秦商风采 </div>
                    <div class="president">
                        <div class="avatar">
                            <img src="../../static/img/1.jpg" alt="">
                        </div>
                        <div class="place"> 会长 </div>
                    </div>
                </div>
                <aside class="middle-right">
                    <ul id="scroll-pictures" class="scroll-pictures flex">
                        <li class="president" v-for='item in ScrollPictures'>
                            <div class="avatar">
                                <img :src="item.imgUrl" alt="">
                            </div>
                            <div class="place"> {{item.imgInfo}} </div>
                        </li>
                    </ul>
                    <ul id="scroll-pictures1" class="scroll-pictures flex">
                        <li class="president" v-for='item in ScrollPictures'>
                            <div class="avatar">
                                <img :src="item.imgUrl" alt="">
                            </div>
                            <div class="place"> {{item.imgInfo}} </div>
                        </li>
                    </ul>
                </aside>
            </div>
            <div class="index-bottom-bottom-content"></div>
        </div>
    </div>
</template>

<script>
    var scrollPictures = document.getElementById('#scroll-pictures');
    export default{
        name: 'content1',
        data () {
            return {
                timer        : '',
                width        : 0,
                left1        : 0,
                left2        : 0,

                currentIndex : 0,
                num          : 0,
                nowIndex     : 0,
                count        : 0,    //控制左侧值 left
                timers       : null, //定时器

                neologism: [ "1", "2", "3" ],
                recommend: [ "推荐栏目1", "推荐栏目2", "推荐栏目3", "推荐栏目4" ],
                slideList: [
                    { "clickUrl": "#", "image": "../../static/img/gkohqncurfvmxwzajpisdbylte.jpg", "desc": "看到晚霞的余晖 ..." },
                    { "clickUrl": "#", "image": "../../static/img/fkwyquivcnxgpobelzsrdahmtj.png", "desc": "带着梦想启航 ..." },
                    { "clickUrl": "#", "image": "../../static/img/mbwtovicjpqekfunysadrglxzh.png", "desc": "Good Business Partner" },
                    { "clickUrl": "#", "image": "../../static/img/rqzdkplesbgtmnyjwchufvaixo.png", "desc": "不畏艰险 坚忍不懈" }
                ],
                todos: [
                    { text: '新闻中心', title: '一、标题标题标题标题标题标题标题标题 [17-06-20]' },
                    { text: '公示公告', title: '二、标题标题标题标题标题标题标题标题 [17-06-21]' },
                    { text: '官方发布', title: '三、标题标题标题标题标题标题标题标题 [17-06-22]' }
                ],
                lists: [
                    { text: '特别推荐', title: '一、标题标题标题标题标题标题标题标题 [17-06-20]' },
                    { text: '会员推荐', title: '二、标题标题标题标题标题标题标题标题 [17-06-24]' }
                ],
                ScrollPictures: [
                    { imgUrl: '../../static/img/1.jpg', imgInfo: '大幂幂' },
                    { imgUrl: '../../static/img/2.jpg', imgInfo: '二幂幂' },
                    { imgUrl: '../../static/img/3.jpg', imgInfo: '三幂幂' },
                    { imgUrl: '../../static/img/4.jpg', imgInfo: '四幂幂' },
                    { imgUrl: '../../static/img/5.jpg', imgInfo: '五幂幂' },
                    { imgUrl: '../../static/img/6.jpg', imgInfo: '六幂幂' },
                    { imgUrl: '../../static/img/7.jpg', imgInfo: '七幂幂' },
                    { imgUrl: '../../static/img/8.jpg', imgInfo: '八幂幂' },
                    { imgUrl: '../../static/img/1.jpg', imgInfo: '九幂幂' },
                    { imgUrl: '../../static/img/2.jpg', imgInfo: '十幂幂' }
                ]
            }
        },
        mounted() {
            var box1 = document.getElementById('scroll-pictures');
            var box2 = document.getElementById('scroll-pictures1');
            this.width = box1.offsetWidth;

            setInterval(()=>{
                if(this.left1 < -this.width) {

                    this.left1 = 0;
                }

                this.left1 -= 1;
                box1.style.left = this.left1 + 'px';
                box2.style.left = (this.width + this.left1) + 'px';
            }, 20)

        },
        methods: {
            go() {
                this.timer = setInterval(() => {
                    this.autoPlay()
                },3000)
            },
            stop() {
                clearInterval(this.timer)
                this.timer = null
            },
            change(index) {
                this.currentIndex = index
            },
            autoPlay() {
                this.currentIndex++
                if (this.currentIndex > this.slideList.length - 1) {
                    this.currentIndex = 0
                }
            },
            newsCenter: function(index){
                this.nowIndex=index;
            },
            tab(index) {
                this.num = index;
            },
            created() {
                this.$nextTick(function() {
                    this.timer = setInterval(function() {
                        this.autoPlay()
                    },3000)
                });
            }
        }
    }

</script>

<style  scoped>

    /* 全局、公用部分 */
    .content {
        display: block;
    }
    .active {
        font-size: 16px;
        color: #000;
        cursor: pointer;
        font-weight: bold;
        border-bottom: 3px solid #79c8ff;
    }
    #content1 {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        background: url(../../static/img/index-bottom-background.png);
        background-position: 100% 100%;
        background-repeat: no-repeat;
    }
    .nowrap {
        white-space: nowrap;
        overflow: hidden;
    }
    .indent {
        text-indent: 2em;
    }
    .flex {
        display: flex;
    }

    /* 上边模块部分 */

    .index-top-box {
        height: 424px;
        background-image: url(../../static/img/main-top.png);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .index-top-top-content,
    .index-top-bottom-content {
        display: flex;
    }
    .index-top-top-left,
    .index-top-top-right,
    .index-top-bottom-left,
    .index-top-bottom-right {
        flex: 1;
    }

    /* 轮播部分开始 */
    /* 增加动画效果开始 */
    .list-enter-active {
     transition: all 1s ease;
     transform: translateX(0)
    }
     
    .list-leave-active {
     transition: all 1s ease;
     transform: translateX(-100%)
    }
     
    .list-enter {
     transform: translateX(100%)
    }
     
    .list-leave {
     transform: translateX(0)
    }
    /* 增加动画效果结束 */
    .index-top-top-left .carousel-img {
        position: relative;
        height: 250px;
        width: 470px;
        overflow: hidden;
        background-color: #fff;
    }
    .slide-ul {
        width: 100%;
        height: 100%;
    }
    .slide-ul li {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .slide-ul li a {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    .slide-ul li a img {
        width: 100%;
        height: 100%;
    }
     
     .carousel-items {
        position: relative;
        width: 100%;
        height: 40px;
        z-index: 10;
        margin: -40px auto 0;
        text-align: center;
        font-size: 0;
        background: rgba(0,0,0,.5);
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .carousel-items div:first-child {
        flex: 1;
        height: 100%;
    }
    .carousel-items div p {
        height: 100%;
        display: none;
    }
    .carousel-items span {
        display: inline-block;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        margin: 0 4px;
        background-color: #fff;
        cursor: pointer;
    }
    .carousel-items .active1 {
        color: #fff;
        display: block;
        font-size: 16px;
        line-height: 40px;
        text-align: left;
        text-indent: 2em;
        white-space: nowrap;
    }
    .carousel-items .active2 {
        background-color: #f00;
    } 
    /* 轮播部分结束 */

    .index-top-top-left .recommend-content {
        height: 90px;
        margin: 11px 0;
    }
    .index-top-top-left .recommend-title {
        display: flex;
        flex: 1;
        align-items: flex-start;
        justify-content: space-around;
        flex-direction: column;
        border-right: 1px solid #02a7ff;
        margin-right: 1rem;
        padding-right: 1rem;
    }
    .recommend-title li {
        position: relative;
        cursor: pointer;
        width: 70px;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        color: #666666;
    }
    .recommend-title li::before {
        position: absolute;
        width: 10px;
        height: 10px;
        content: '';
        border: 1px solid #999999;
        text-align: center;
        line-height: 10px;
        border-radius: 50%;
        right: -39px;
        top: 8px;
    }
    .recommend-title .active3 {
        background: #02a7ff;
        color: #fff;
    }
    .recommend-title .active3::before {
        position: absolute;
        width: 10px;
        height: 10px;
        content: '';
        border: 1px solid #02a7ff;
        text-align: center;
        line-height: 10px;
        border-radius: 50%;
        color: #02a7ff;
        right: -39px;
        top: 8px;
    }
    .recommend-title .active3::after {
        position: absolute;
        top: 8px;
        content: '';
        width: 0;
        float: right;
        height: 0;
        border-top: 15px solid #02a7ff;
        border-right: 15px solid transparent;
        right: -12px;
        -webkit-transform: rotate(20deg);
        transform: rotate(20deg);
    }
    .index-top-top-left .recommend-info {
        font-size: 14px;
        flex: 4;
    }
    .index-top-bottom-content {
        height: 45px;
        padding-bottom: 1rem;
    }
    .index-top-bottom-left,
    .index-top-bottom-right {
        justify-content: space-between;
        align-items: center; 
    }
    .index-top-bottom-left li,
    .index-top-bottom-right li {
        background: #fba8a8;
        height: 45px;
        line-height: 45px;
        padding: 0 1em;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
    }
    .index-top-bottom-left li:first-child {
            background: #0058dc;
    }
    .index-top-bottom-left li:nth-child(2) {
            background: #65b552;
    }
    .index-top-bottom-left li:nth-child(3) {
            background: #ffa54e;
    }
    .index-top-bottom-left li:last-child {
            background: #79c8ff;
    }
    .index-top-bottom-right li {
        width: 24%;
    }
    .index-top-bottom-left li:hover {
        box-shadow: inset 1px 1px 50px 1px rgba(80, 80, 80, 0.5);
    }
    .index-top-top-right {
        padding: 0 15px;
        height: 350px;
        overflow: hidden;
        border-top: 5px solid #007cd3;
    }
    .index-top-bottom-right {
        padding: 0 15px;
    }
    .index-top-bottom-right li {
        background-position: 100% 100%;
        background-repeat: no-repeat;
        background-size: 100% 100%;        
    }
    .index-top-bottom-right li:nth-child(1) {
        background-image: url(../../static/img/jznlurtiyhcfpvdasomkbqexgw.png);
    }
    .index-top-bottom-right li:nth-child(2) {
        background-image: url(../../static/img/mhjepnbfxwgotayrkiusclvzqd.png);
    }
    .index-top-bottom-right li:nth-child(3) {
        background-image: url(../../static/img/hjilkdcwsbfuzpymtxqngoavre.png);
    }
    .index-top-top-right-title {
        height: 100px;
        overflow: hidden;
    }
    .index-top-top-right-title h1 {
        font-size: 20px;
        text-align: left;
        color: #007cd3;
        margin: 8px 0 5px;
    }
    .index-top-top-right-title p {
        font-size: 14px;
        color: #333333;
        line-height: 22px;
        height: 66px;
    }
    .index-top-top-right-list {
        display: flex;
        height: 2rem;
        margin: 0.3rem 0.1rem;
    }
    .index-top-top-right-list li {
        align-items: center;
        display: flex;
        padding: 0.2rem 0.8rem;
        font-weight: 600;
    }

    /* 下边模块部分 */

    .index-bottom-box {
        
    }
    .index-bottom-top-content {
        height: 80px;
        margin: 0 0 0.5rem 0;
        background-image: url(../../static/img/vjthbqrexzypcisfgmuwkaoldn.png);
        background-size: 100% 100%;
    }
    .index-bottom-middle-content {
        height: 155px;
        background: #e9e9eb;
    }
    .index-bottom-middle-content .middle-left {
        width: 150px;
        height: 100%;
        display: flex;
        border-right: 1px solid #ccc;
    }
    .index-bottom-middle-content .middle-left .mien {
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        background-color: #59beff;
        color: #fff;
    }
    .index-bottom-middle-content .middle-left .president{
        flex: 1;
        margin: 6px;
        background-color: #fff;
        border: 1px solid #c7c8cc;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .index-bottom-middle-content .middle-left .president .avatar, .avatar{
        height: 75%;
        margin: 10px 12px 0 12px;
    }
    .index-bottom-middle-content .middle-left .president img, .avatar img{
        width: 100%;
        height: 100%
    }
    .index-bottom-middle-content .middle-left .president .place, .place{
        height: 25%;
        text-align: center;
    }
    .index-bottom-middle-content .middle-right {
        flex: 1;
        margin: 6px 0;
        overflow: hidden;
        position: relative;

        display: inline-flex;
    }
    .scroll-pictures {
        height: 143px;
        position: absolute;
    }
    .scroll-pictures .president{
        width: 100px;
        margin-left: 6px;
        background-color: #fff;
        border: 1px solid #c7c8cc;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .index-bottom-bottom-content {
        
    }
</style>