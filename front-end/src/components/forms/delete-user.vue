
<template>
		
		<form class="delete-user" name="delete-user">
			
			<div class="input-wrap">
				
				<p class="input-desc">Search user</p>
				<input class="input" type="text" name="user" placeholder="ex: Jane Doe" />

			</div>

		</form>

</template>

<script>
	
	export default {
		name: 'delete-user'
	}

</script>

<style scoped>

	.delete-user {

		width: 100%;
		height: auto;

		padding: 20px 0px;

		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 60px 40px;
		grid-row-gap: 20px;
	}

</style>