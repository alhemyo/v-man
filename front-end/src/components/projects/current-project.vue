<template>

	<div class="current-project">
		
		<div v-for="project in projects">
			
			<div class="current-wrap" v-if="project.current">
				
				<div class="nav-space"></div>

				<div class="project-info">
					
					<p class="project-info-item p-name">{{ project.name }}</p>
					<p class="project-info-item p-deadline">{{ project.date.deadline }}</p>
					<p class="project-info-item p-admin">{{ project.admin }}</p>
					<p class="project-info-item p-client">{{ project.client }}</p>

				</div>

				<div class="task-nav">
					
					<p>TASK LIST</p>

				</div>

				<div class="task-loader"></div>

				<div class="current-footer"></div>

			</div>

		</div>

	</div>
	
</template>

<script>

	export default {

		name: 'current-project',

		computed: {
			projects: { get() { return this.$store.state.projects.projects } }
		}

	}
	
</script>

<style scoped>

	.current-project {

		height: auto;

		position: relative;

		display: grid;
		grid-template-columns: auto 200px;
		grid-template-rows: auto;

		background-color: white;
	}

	.current-wrap {

		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 80px 180px 74px auto 80px;

		padding: 0px 40px;
	}

	.project-info {

		padding: 40px 0px;

		display: grid;
		grid-template-columns: auto;
		grid-template-rows: auto;
		align-content: space-around;
	}

	.project-info-item {

		font-size: 12px;
		color: var(--black);
	}

	.p-name {

		font-size: 16px;
		font-weight: bold;
	}

	.p-deadline::before {

		content: "deadline | ";
		color: var(--red);
	}

	.p-admin::before {

		content: "admin | ";
		color: var(--dashText);
	}

	.p-client::before {

		content: "client | ";
		color: var(--dashText); 
	}

	.task-nav {

		font-size: 14px;
    font-weight: bold;

    height: 74px;

    padding: 30px 0px;

    border-bottom: 1px solid rgba(0,0,0,0.1);
	}

</style>