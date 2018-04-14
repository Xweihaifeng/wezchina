<template>
    <div class="home" id="home">
        <div class="section">
            <dl class="example">
            
                <dt v-if = 'no1' @click="changeTab1">
                    <h2> 新闻 </h2>
                    <div class="nav">
                        <a   href=""> 银商服务 </a>
                        <a   href=""> 科商服务 </a>
                        <a   href=""> 校商服务 </a>
                        <a   href=""> 法商服务 </a>
                    </div>
                </dt>                
                <dd v-if = 'ok1'>
                    <content1></content1>
                </dd>
            
                <dt v-if = 'ok2' @click="changeTab2">
                    <h2> 组织 </h2>
                    <div class="nav">
                        <a   href=""> 银商服务 </a>
                        <a   href=""> 科商服务 </a>
                        <a   href=""> 校商服务 </a>
                        <a   href=""> 法商服务 </a>
                    </div>
                </dt>
                <dd v-if = 'no2'>
                    <content2></content2>
                </dd>
            
                <dt v-if = 'ok3' @click="changeTab3">
                    <h2> 互动 </h2>
                    <div class="nav">
                        <a   href=""> 工商联 </a>
                        <a   href=""> 商会 </a>
                        <a   href=""> 其他组织 </a>
                    </div>
                </dt>
                <dd v-if = 'no3'>
                    <content3></content3>
                </dd>
            
                <dt v-if = 'ok4' @click="changeTab4">
                    <h2> 共享 </h2>
                    <div class="nav">
                        <a   href=""> 优秀民企 </a>
                        <a   href=""> 企业家 </a>
                    </div>
                </dt>
                <dd v-if = 'no4'>
                    <content4></content4>
                </dd>
                
            </dl>
        </div>
    </div>
</template>

<script>
    import content1 from '../page/content1.vue'
    import content2 from '../page/content2.vue'
    import content3 from '../page/content3.vue'
    import content4 from '../page/content4.vue'

    export default {
        name: 'home',
        data() {
            return {
                no1 : false, ok1 : true,
                no2 : false, ok2 : true,
                no3 : false, ok3 : true,
                no4 : false, ok4 : true,
            }
        },
        methods: {
            changeTab1() {
                this.no1 = false; this.ok1 = true;
                this.no2 = false; this.ok2 = true;
                this.no3 = false; this.ok3 = true;
                this.no4 = false; this.ok4 = true;
            },

            changeTab2() {
                this.no1 = true;  this.ok1 = false;
                this.no2 = true;  this.ok2 = false;
                this.no3 = false; this.ok3 = true;
                this.no4 = false; this.ok4 = true;
            },

            changeTab3() {
                this.no1 = true;  this.ok1 = false;
                this.no2 = false; this.ok2 = true;
                this.no3 = true;  this.ok3 = false;
                this.no4 = false; this.ok4 = true;
            },

            changeTab4() {
                this.no1 = true;  this.ok1 = false;
                this.no2 = false; this.ok2 = true;
                this.no3 = false; this.ok3 = true;
                this.no4 = true;  this.ok4 = false;
            }
        },

        components: {
            content1, content2, content3, content4
        }
    }
</script>