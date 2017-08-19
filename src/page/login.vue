<template>
	<div class="login" id="login">
		{{msg}}
	</div>
</template>

<script>
	export default{
		name: 'login',
		data () {
			return {
				msg: '欢迎来到登录页'
			}
		}
	}
</script>