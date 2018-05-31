<template>

	<transition name="comp-in">
	
		<div v-show="dashboard" class="current-project-wrap">
			
			<div v-for="current in projects" v-if="current.current" class="current-project">

				<div class="scroll-wrap">
				
					<div class="nav-space"></div>

					<div class="current-project-info">
						
						<div class="current-priority-wrap">
							
							<div class="current-priority"></div>
							<div class="current-priority"></div>
							<div class="current-priority"></div>

						</div> <!-- end .current-priority-wrap -->

						<div class="current-project-general">

							<p class="current-general current-name"> {{ current.name }} </p>
							<p class="current-general current-admin">admin: {{ current.admin }} </p>
							<p class="current-general current-client">client: {{ current.client }} </p>
							<p class="current-general current-date">deadline: {{ current.date.deadline }}</p>

						</div> <!-- end .current-project-general -->

					</div> <!-- end .current-project-info -->

					<div></div>

					<div class="current-task-nav">
						
						<div class="task-nav task-nav-main">TASK LIST</div>
						<p class="task-nav task-nav-state">task state</p>
						<div></div>
						<p class="task-nav task-nav-quick">go</p>
						<p class="task-nav task-nav-deadline">deadline</p>
						<div class="task-nav task-nav-add">add task</div>

					</div> <!-- end .current-task-nav -->

					<div class="current-task-list">
						
						<div class="task" v-for="task in current.tasks">
							
							<div class="task-main">

								<div class="task-priority-wrap"></div>
								
								<p class="task-text task-name">{{task.name}}</p>
								<p class="task-text task-state">state</p>
								<div></div>
								<p class="task-text task-go">open</p>
								<p class="task-text task-date">03 | 10 | 2018</p>

							</div> <!-- end .task-main -->

							<div class="task-mid"></div>

							<div class="task-footer"></div>

						</div> <!-- end .task -->

					</div> <!-- end .current-task-list -->

					<div class="current-footer"></div>

				</div> <!-- end .scroll-wrap -->

			</div> <!-- end .current-project -->

		</div> <!-- end .current-project-wrap -->

	</transition>

</template>

<script>
	
	export default {

		name: 'current-project',

		computed: {

			// Get Projects
			projects: { get() { return this.$store.state.projects.projects } },

			// Get components
			dashboard: { get() { return this.$store.state.components.dashboard } }
		}

	}

</script>

<style scoped>

	.comp-in-enter-active, .comp-in-leave-active {

		transition: all .5s ease .6s;
	}

	.comp-in-enter, .comp-in-leave-to {

		transform: translateX(100px);
		opacity: 0;
	}
	
	.current-project-wrap {

		display: grid;
		grid-template-columns: auto 200px;
		grid-template-rows: 100%;
	}

	.current-project {

		width: auto;
		height: auto;

		padding: 0px 20px;

		overflow: hidden;
	}

	.scroll-wrap {

		height: 100%;

		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 60px 120px 60px 60px auto 60px;

		overflow: hidden;
	}

	.current-project-info {

		display: grid;
		grid-template-columns: 4px 300px auto 200px;
		grid-template-rows: 100%;
	}

	.current-priority-wrap {

		display: grid;
		grid-template-rows: repeat(1fr);
		grid-row-gap: 4px;

		padding: 24px 0px;
	}

	.current-priority {

		background-color: var(--red);
	}

	.current-project-general {

		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: repeat(20px);
		align-content: space-around;

		padding: 20px;
	}

	.current-general {

		font-size: 12px;
		color: var(--defaultGray);
	}

	.current-name {

		font-size: 14px;
		font-weight: bold;
		color: var(--jet);
	}

	.current-task-nav {

		display: grid;
		grid-template-columns: minmax(150px, 300px) 160px auto 80px 140px 100px;
		grid-template-rows: 60px;
		align-items: center;

		border-bottom: 2px solid rgba(0,0,0,0.1);
	}

	.task-nav {

		font-size: 12px;
		font-weight: 500;
		text-align: center;

		padding: 0px 20px;
	}

	.task-nav-main, .task-nav-add {

		text-align: left;
	}

	.current-task-list {

		width: calc(100% + 17px);

		overflow: hidden;
		overflow-y: scroll;
	}

	.task {

		width: 100%;
		height: 60px;

		border-bottom: 1px solid rgba(0,0,0,0.1);
	}

	.task:hover {

		background-color: rgba(0,0,0,0.01);
	}

	.task-main {

		display: grid;
		grid-template-columns: 20px minmax(130px, 280px) 160px auto 80px 140px 100px;
		grid-template-rows: 60px;
		align-items: center;
	}

	.task-priority-wrap {

		width: 4px;
		height: 24px;

		background-color: var(--green);
	}

	.task-text {

		font-size: 12px;
		color: var(--defaultGray);
		text-align: center;
	}

	.task-name {

		text-align: left;
	}

	.current-footer {

		background-color: whitesmoke;
	}

</style>