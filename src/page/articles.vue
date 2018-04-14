<template>
    <div class="articles" id="articles">
        {{msg}}
    </div>
</template>

<script>
    export default{
        name: 'articles',
        data () {
            return {
                msg: '欢迎来到文章页'
            }
        }
    }
</script>