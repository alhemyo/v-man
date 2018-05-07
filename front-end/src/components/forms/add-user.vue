
<template>

	<form class="add-user" name="add-user">

		<!-- options -->

		<div class="column column-01">

			<!-- admin -->

      <div class="input-checkbox-wrap">

              <div class="input-checkbox" @click="toggleAdmin">

                  <div class="input-box" :class="{ 'input-box-checked': this.postBody.is_admin }"></div>

              </div>

              <p class="input-checkbox-desc">Admin</p>

      </div> <!-- end.input-checkbox-wrap -->

      <!-- admin type -->

      <div class="input-select-wrap" id="adminType" v-show="this.postBody.is_admin" >

          <ul class="input-select-list">

              <p class="input-select-desc">{{ this.postBody.admin_type }} <span>▼</span></p>

              <li class="input-select-item" @click="getAdminType($event)" >admin</li>
              <li class="input-select-item" @click="getAdminType($event)" >uber admin</li>

          </ul>

  		</div> <!-- end.input-select-wrap -->

  		<!-- Position -->

      <div class="input-select-wrap" id="position">

          <ul class="input-select-list">

              <p class="input-select-desc">{{ this.postBody.position }} <span>▼</span></p>

              <li class="input-select-item" @click="getPosition($event)" >Account</li>
              <li class="input-select-item" @click="getPosition($event)" >Sys Admin</li>
              <li class="input-select-item" @click="getPosition($event)" >3D</li>
              <li class="input-select-item" @click="getPosition($event)" >MGFX</li>
              <li class="input-select-item" @click="getPosition($event)" >Design</li>

          </ul>

      </div> <!-- end.input-select-wrap -->

      <!-- Gender -->

      <div class="input-select-wrap" id="gender">

          <ul class="input-select-list">

              <p class="input-select-desc">{{ this.postBody.gender }} <span>▼</span></p>

              <li class="input-select-item" @click="getGender($event)" >Male</li>
              <li class="input-select-item" @click="getGender($event)" >Female</li>

          </ul>

      </div> <!-- end.input-select-wrap -->

      <!-- education -->

      <div class="input-select-wrap" id="education">

          <ul class="input-select-list">

              <p class="input-select-desc">{{ this.postBody.education }} <span>▼</span></p>

              <li class="input-select-item" @click="getEducation($event)" >low</li>
              <li class="input-select-item" @click="getEducation($event)" >mid</li>
              <li class="input-select-item" @click="getEducation($event)" >high</li>

          </ul>

      </div> <!-- end.input-select-wrap -->

		</div>

	    <!-- name -->

	    <div class="column column-02">

	    	<div class="input-wrap">

	    		<p class="input-desc">Full name</p>
	    		<input class="input" type="text" name="name" placeholder="Name Surname" v-model="fullname" />

	    	</div>

	    </div>

	    <!-- Birth info -->

	    <div class="column column-03">

	    	<div class="input-wrap quadro">

	    		<p class="input-desc">Birth info</p>

	    		<input class="input small" type="text" name="day" maxlength="2" placeholder="day" />
	    		<input class="input small" type="text" name="month" maxlength="2" placeholder="month" />
	    		<input class="input small" type="text" name="year" maxlength="4" placeholder="year" />
	    		<input class="input" type="text" name="umcn" maxlength="13" placeholder="UMCN">

	    	</div>

	    </div>

	    <!-- address -->

	    <div class="column column-04">

	    	<div class="input-wrap double">

	    		<p class="input-desc">Address</p>
	    		<input class="input" type="text" name="city" placeholder="city">
	    		<input class="input" type="text" name="address" placeholder="address">

	    	</div>

	    </div>

	    <!-- contact -->

	    <div class="column column-04">

	    	<div class="input-wrap double">

	    		<p class="input-desc">Contact</p>
	    		<input class="input" type="phone" name="phone" placeholder="phone">
	    		<input class="input" type="email" name="address" placeholder="email">

	    	</div>

	    </div>

	    <!-- submit -->

	    <div class="column column-05">

	    	<div class="submit-wrap" title="add user">

	    		<img class="submit-icon" src="/static/images/icons/add.png" alt="add user" />

	    	</div>

	    </div>

	</form>

</template>

<script>

	export default {
		name: 'add-user',

		data() {
			return {
				adminTypeSelected: false,
				positonSelected: false,
				genderSelected: false,
				educationSelected: false,
				fullname: "",
				postBody: {
					name: "",
					surname: "",
					email: "",
					position: "Position",
					is_admin: false,
					admin_type: "Admin type",
					status: "",
					avatar: "",
				  gender: "Gender",
				  education: "Education",
				  address: "",
				  city: "",
				  phone_number: "",
				  birthday: "",
				  umcn: ""
				}
			}
		}, // end data

		methods: {
			toggleAdmin() { this.postBody.is_admin = !this.postBody.is_admin },
			getAdminType($event) {
				this.postBody.admin_type = $($event.currentTarget).html()
				this.adminTypeSelected = true
			},
			getPosition($event) {
				this.postBody.position = $($event.currentTarget).html()
				this.positonSelected = true
			},
			getGender($event) {
				this.postBody.gender = $($event.currentTarget).html()
				this.genderSelected = true
			},
			getEducation($event) {
				this.postBody.education = $($event.currentTarget).html()
				this.educationSelected = true
			}
		}
		
	}

</script>

<style scoped>

	.add-user {

		width: 100%;
		height: auto;

		padding: 20px 0px;

		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 60px 40px ;
		grid-row-gap: 20px;
	}

	.column {

		width: 100%;

		display: grid;
		grid-template-columns: auto;
		grid-column-gap: 20px;
	}

	.column-01 {

		grid-template-columns: auto auto auto auto auto;

		padding-bottom: 20px;

		border-bottom: 1px solid whitesmoke;
	}

	.column-05 {

		position: relative;

		padding-top: 20px;

		display: block;
	}

</style>
