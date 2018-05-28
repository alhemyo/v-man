<template>
	
	<div class="dashboard">
		
		<div class="nav-space"></div>

		<div class="user-card">
			
			<div class="user-avatar">
				
				<img class="avatar" src="/static/images/janeDoe.png" />

			</div> <!-- end .user-avatar -->

			<div class="user-info">
				
				<p class="user-name">Jane Doe</p>
				<p class="user-position">design</p>
				<p class="user-status">online</p>
				<p class="user-time">06:32:12</p>

			</div> <!-- end .user-info -->

		</div> <!-- end .user-card -->

		<div class="item">MY PROJECTS</div>

		<div class="item current">
			
			<p class="current-project-name">Current Project</p>

			<img class="current-project-menu" src="/static/images/icons/dashboard/down-arrow.png" />

		</div>

		<div class="user-projects"></div>

		<div class="dash-footer"></div>

	</div> <!-- end .dashboard -->

</template>

<script>
	
	export default {

		name: 'dashboard'

	}

</script>

<style scoped>
	
	.dashboard {

		background-color: var(--dashGray);

		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 60px 120px 60px 60px auto 60px;
	}

	.dashboard > div {

		border-left: 4px solid var(--jet);
	}

	.user-card {

		display: grid;
		grid-template-columns: 120px auto;
		grid-template-rows: auto;
	}

	.user-avatar {

		padding: 20px;

		border-radius: 100%;

		overflow: hidden;
	}

	.user-info {

		font-size: 12px;

		display: grid;
		grid-template-columns: auto;
		grid-template-rows: repeat(14px);
		align-content: space-around;

		padding: 20px 0px;
		padding-right: 20px;
	}

	.user-name {

		font-size: 14px;
		font-weight: 600;
	}

	.dashboard > .item {

		font-size: 12px;
		font-weight: 500;
	}

	.dashboard > .current {

		background-color: white;
		border-left: 4px solid var(--red);

		display: grid;
		grid-template-columns: auto 50px;

		align-items: center;
	}

	.current-project-name {

		font-size: 14px;
		font-weight: 600;

		padding: 23px 20px;
	}

	.current-project-menu {

		padding: 23px 20px;
		box-sizing: content-box;

		cursor: pointer;
	}

</style>