<template>

	<transition name="dash-fade">
	
		<div v-show="dashboard" class="dashboard">
			
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

			<div class="dash-footer">
				
				<img src="/static/images/icons/dashboard/add.png" />

				<p>new project</p>

			</div> <!-- end .dash-footer -->

		</div> <!-- end .dashboard -->

	</transition>

</template>

<script>
	
	export default {

		name: 'dashboard',

		computed: {
			projects: { get() { return this.$store.state.projects.projects } },
			dashboard: { get() { return this.$store.state.components.dashboard } },
			validation: { get() { return this.$store.state.user.validation } }
		},

		watch: {
			validation: {
				handler() { this.$store.dispatch('GET_PROJECTS') },
				immediate: true
			}
		}

	}

</script>

<style scoped>

	.dash-fade-enter-active, .dash-fade-leave-active {

		transition: all 0.3s ease 0.3s;
	}

	.dash-fade-enter, .dash-fade-leave-to {

		opacity: 0;
	}
	
	.dashboard {

		background-color: var(--jet);

		display: grid;
		grid-template-columns: 264px;
		grid-template-rows: 60px 120px 60px 60px auto 60px;

		overflow: hidden;
	}

	.dashboard > div {

		border-left: 4px solid black;
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

		color: white;

		font-size: 14px;
		font-weight: 500;
	}

	.user-position, .user-time {

		color: var(--defaultGray);
	}

	.user-status {

		color: var(--green);
	}

	.projects-title {

		font-size: 12px;
		font-weight: 500;
		color: var(--defaultGray);

		padding: 23px 20px;
	}

	.dashboard > .current {

		background-color: var(--dashGray);
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

		width: calc(100% + 17px);

		position: relative;

		border-left: none !important;

		overflow: hidden;
		overflow-y: scroll;
	}

	.user-projects:before {

		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: 0;

		border-left: 4px solid black;
	}

	.user-projects-list {

		position: relative;
		z-index: 1;
	}

	.user-projects-list-item {

		width: 100%;
		height: 60px;

		border-left: 4px solid var(--defaultGray);

		cursor: pointer;
	}

	.user-projects-list-item:hover {

		background-color: rgba(0,0,0,0.05);
	}

	.user-projects-list-item > div {
		width: calc(100% - 40px);
		height: 60px;

		margin-left: 20px;

		border-bottom: 1px solid rgba(0,0,0,0.15);
	}

	.user-projects-list-item > div > p {

		font-size: 12px;
		color: var(--defaultGray);

		padding: 23px 0px;
	}

	.dash-footer img {

		position: relative;
		float: right;

		padding: 23px 20px;

		filter: grayscale(1);
		opacity: 1;

		cursor: pointer;
	}

	.dash-footer img:hover {

		filter: grayscale(0);
		opacity: 1;
	}

	.dash-footer p {

		font-size: 12px;
		color: var(--defaultGray);

		position: relative;
		float: right;

		padding: 23px 0px;

		opacity: 0;

		transition: all 0.2s ease;
	}

	.dash-footer:hover > p {

		opacity: 1;
	}

</style>