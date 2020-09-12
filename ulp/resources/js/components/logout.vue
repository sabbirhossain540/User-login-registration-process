<template>
	
	
</template>

<script>
	export default {
		created(){
			localStorage.removeItem('token');
      localStorage.removeItem('user');

      this.$router.push({name: '/'})
		}
	}

	
</script>

<style>
	
</style>