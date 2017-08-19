<template>
	<div class="circle" id="circle">
		{{msg}}
	</div>
</template>

<script>
	export default{
		name: 'circle',
		data () {
			return {
				msg: '欢迎来到我的圈子'
			}
		}
	}
</script>