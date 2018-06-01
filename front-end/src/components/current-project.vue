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
						<p class="task-nav task-nav-quick">open</p>
						<p class="task-nav task-nav-deadline">deadline</p>
						<div class="task-nav task-nav-add">add task</div>

					</div> <!-- end .current-task-nav -->

					<div class="current-task-list">
						
						<div class="task" v-for="task in current.tasks">
							
							<div class="task-main">

								<div class="task-priority-wrap"></div>
								
								<p @click="openTask" class="task-text task-name">{{task.name}}</p>
								<p class="task-text task-state">state</p>
								<div></div>
								<p class="task-text task-go">open</p>
								<p class="task-text task-date"><span>03 | 10 | 2018</span></p>
								<div class="task-menu">
									
									<img src="/static/images/icons/task/add.png"  title="assign user" />
									<img src="/static/images/icons/task/edit.png" title="edit task" />
									<img src="/static/images/icons/task/delete.png" title="delete task" />

								</div> <!-- end .task-menu -->

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
		},

		methods: {
			openTask($event) {

				let currentTask = $($event.currentTarget).parent().parent()

				$('.task').not(currentTask).removeClass('task-extend')
				$(currentTask).toggleClass('task-extend')
			}
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

		background-color: var(--dashGray);
		border-bottom: 1px solid rgba(0,0,0,0.1);

		transition: height .3s ease;

		overflow: hidden;
	}

	.task-extend {

		height: 300px;

		border-bottom: 2px solid rgba(0,0,0,0.1);
	}

	.task-main {

		display: grid;
		grid-template-columns: 20px minmax(130px, 280px) 160px auto 80px 140px 100px;
		grid-template-rows: 60px;
		align-items: center;

		position: relative;

		border-bottom: 1px solid rgba(0,0,0,0.05);
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

		position: relative;

		padding: 23px 0px;

		cursor: pointer;
	}

	.task-text:hover {

		color: var(--jet);
	}

	.task-name {

		text-align: left;
	}

	.task-name::after {

		content: "▼";
		position: absolute;
		right: 20px;
	}

	.task-main > .task-text:hover {

		background-color: rgba(0,0,0,0.01);
	}

	.task-date span {

		color: var(--defaultGray);
	}

	.task-date span:before {

		content: "⯇ ";
		color: var(--red);
	}

	.task-menu {

		display: grid;
		grid-template-columns: 34px 34px 34px;
		grid-template-rows: 60px;

		justify-content: space-around;
	}

	.task-menu img {

		padding: 20px 10px;

		opacity: 0.3;

		cursor: pointer;
	}

	.task-menu img:hover {

		opacity: 0.8;
	}

	.task-mid {

		height: 180px;
	}

	.task-footer {

		height: 60px;

		border-top: 1px solid rgba(0,0,0,0.05);
	}

	.current-footer {

		background-color: whitesmoke;
	}

</style>