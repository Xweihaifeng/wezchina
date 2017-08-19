<template>
	<div class="article" id="article">
		{{msg}}
	</div>
</template>

<script>
	export default{
		name: 'article',
		data () {
			return {
				msg: '欢迎来到文章页'
			}
		}
	}
</script>