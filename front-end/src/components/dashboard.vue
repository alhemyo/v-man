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

		<div class="item projects-title">MY PROJECTS</div>

		<div class="item current">
			
			<p 
			class="current-project-name" 
			v-for="project in this.projects" 
			v-if="project.current">
				{{ project.name }}
			</p>

			<img class="current-project-menu" src="/static/images/icons/dashboard/down-arrow.png" />

		</div> <!-- end .item .current -->

		<div class="user-projects">
			
			<ul class="user-projects-list">
				
				<li 
				class="user-projects-list-item"
				v-for="project in this.projects"
				v-if="!project.current">
					<div>
						<p>{{project.name}}</p>
					</div>
				</li>

			</ul>

		</div>

		<div class="dash-footer"></div>

	</div> <!-- end .dashboard -->

</template>

<script>
	
	export default {

		name: 'dashboard',

		computed: {
			projects: { get() { return this.$store.state.projects.projects } }
		},

		created() {
			this.$store.dispatch('GET_PROJECTS')
		}

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

	.user-status {

		color: var(--green);
	}

	.projects-title {

		font-size: 12px;
		font-weight: 500;

		padding: 23px 20px;
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

	.user-projects {

		position: relative;

		border-left: none !important;
	}

	.user-projects:before {

		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: 0;

		border-left: 4px solid var(--jet);
	}

	.user-projects-list {

		position: relative;
		z-index: 1;
	}

	.user-projects-list-item {

		width: 100%;
		height: 60px;

		border-left: 4px solid var(--defaultGray);
	}

	.user-projects-list-item > div {
		width: calc(100% - 40px);
		height: 60px;

		margin-left: 20px;

		border-bottom: 1px solid rgba(0,0,0,0.05);
	}

	.user-projects-list-item > div > p {

		font-size: 12px;
		color: var(--defaultGray);

		padding: 23px 0px;
	}

</style>