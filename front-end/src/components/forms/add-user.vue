
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

      <div class="input-select-wrap adminType" :class="{ 'rollIn': this.postBody.is_admin }" >

          <ul class="input-select-list" name="admin_type">

              <p class="input-select-desc">{{ this.postBody.admin_type }} <span>▼</span></p>

              <li class="input-select-item" @click="getAdminType($event)" >admin</li>
              <li class="input-select-item" @click="getAdminType($event)" >uber admin</li>

          </ul>

  		</div> <!-- end.input-select-wrap -->

  		<!-- Position -->

      <div class="input-select-wrap">

          <ul class="input-select-list" name="position">

              <p class="input-select-desc">{{ this.postBody.position }} <span>▼</span></p>

              <li class="input-select-item" @click="getPosition($event)" >Account</li>
              <li class="input-select-item" @click="getPosition($event)" >Sys Admin</li>
              <li class="input-select-item" @click="getPosition($event)" >3D</li>
              <li class="input-select-item" @click="getPosition($event)" >MGFX</li>
              <li class="input-select-item" @click="getPosition($event)" >Design</li>

          </ul>

      </div> <!-- end.input-select-wrap -->

      <!-- Gender -->

      <div class="input-select-wrap">

          <ul class="input-select-list" name="gender">

              <p class="input-select-desc">{{ this.postBody.gender }} <span>▼</span></p>

              <li class="input-select-item" @click="getGender($event)" >Male</li>
              <li class="input-select-item" @click="getGender($event)" >Female</li>

          </ul>

      </div> <!-- end.input-select-wrap -->

      <!-- education -->

      <div class="input-select-wrap">

          <ul class="input-select-list" name="education">

              <p class="input-select-desc">{{ this.postBody.education }} <span>▼</span></p>

              <li class="input-select-item" @click="getEducation($event)" >low</li>
              <li class="input-select-item" @click="getEducation($event)" >mid</li>
              <li class="input-select-item" @click="getEducation($event)" >high</li>

          </ul>

      </div> <!-- end.input-select-wrap -->

		</div>

    <!-- name -->

    <div class="column column-02">

    	<div class="input-wrap double">

    		<p class="input-desc">Full name</p>
    		<input class="input" type="text" name="name" placeholder="Name" v-model="postBody.name" />
				<input class="input" type="text" name="surname" placeholder="Surname" v-model="postBody.surname" />

    	</div>

    </div>

    <!-- Birth info -->

    <div class="column column-03">

    	<div class="input-wrap quadro">

    		<p class="input-desc">Birth info</p>

    		<input class="input small" type="text" name="day" maxlength="2" placeholder="day" v-model="postBody.day" />
    		<input class="input small" type="text" name="month" maxlength="2" placeholder="month" v-model="postBody.month" />
    		<input class="input small" type="text" name="year" maxlength="4" placeholder="year" v-model="postBody.year" />
    		<input class="input" type="text" name="umcn" maxlength="13" placeholder="UMCN" v-model="postBody.umcn" />

    	</div>

    </div>

    <!-- address -->

    <div class="column column-04">

    	<div class="input-wrap double">

    		<p class="input-desc">Address</p>
    		<input class="input" type="text" name="city" placeholder="city" v-model="postBody.city" />
    		<input class="input" type="text" name="address" placeholder="address" v-model="postBody.address" />

    	</div>

    </div>

    <!-- contact -->

    <div class="column column-04">

    	<div class="input-wrap double">

    		<p class="input-desc">Contact</p>
    		<input class="input" type="phone" name="phone" placeholder="phone" v-model="postBody.phone_number" />
    		<input class="input" type="email" name="email" placeholder="email" v-model="postBody.email" />

    	</div>

    </div>

    <!-- submit -->

    <div class="column column-05">

			<p class="submit-desc" :class="{ 'open-submit-desc': showMessage }" >{{ this.message }}</p>

    	<div class="submit-wrap" title="add user" @click="addUserValidate" >

    		<img class="submit-icon" src="/static/images/icons/add.png" alt="add user" />

    	</div>

    </div>

	</form>

</template>

<script>

	import Vue from 'vue'

	export default {

		name: 'add-user',

		data() {
			return {
				adminTypeSelected: false,
				positonSelected: false,
				genderSelected: false,
				educationSelected: false,
				postBody: {
					name: "",
					surname: "",
					email: "",
					position: "position",
					is_admin: false,
					admin_type: "Admin type",
				  gender: "Gender",
				  education: "Education",
				  address: "",
				  city: "",
				  phone_number: "00389",
				  day: "",
					month: "",
					year: "",
				  umcn: ""
				},
				showMessage: false,
				message: ""
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
			},
			addUserValidate() {

				// Regular Expresions
				let lettersOnly = /^[a-zA-Z]*$/
				let numbersOnly = /^[\s/0-9]+$/
				let alphanumeric = /^[\s/a-z0-9]+$/
				let mailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

				let validateName = false
				let validateSurname = false
				let validateDay = false
				let validateMonth = false
				let validateYear = false
				let validateUmcn = false
				let validateCity = false
				let validateAddress = false
				let validatePhone = false
				let validateMail = false
				let validateAdmin = false
				let validatePosition = false
				let validateGender = false
				let validateEducation = false

				// Validate name
				if ( this.postBody.name === "" || !lettersOnly.test(this.postBody.name) )
					{
						validateName = false
						$(".input[name='name']").addClass('not-valid-input')
					}
				else
					{
						validateName = true
						$(".input[name='name']").removeClass('not-valid-input')
					}

				// Validate surname
				if ( this.postBody.surname === "" || !lettersOnly.test(this.postBody.surname) )
					{
						validateSurname = false
						$(".input[name='surname']").addClass('not-valid-input')
					}
				else
					{
						validateSurname = true
						$(".input[name='surname']").removeClass('not-valid-input')
					}

				// Validate day
				if ( this.postBody.day === "" || !numbersOnly.test(this.postBody.day) )
					{
						validateDay = false
						$('.input[name="day"]').addClass('not-valid-input')
					}
				else
					{
						validateDay = true
						$('.input[name="day"]').removeClass('not-valid-input')
					}

				// Validate month
				if ( this.postBody.month === "" || !numbersOnly.test(this.postBody.month) )
					{
						validateMonth = false
						$('.input[name="month"]').addClass('not-valid-input')
					}
				else
					{
						validateMonth = true
						$('.input[name="month"]').removeClass('not-valid-input')
					}

				// Validate year
				if ( this.postBody.year === "" || !numbersOnly.test(this.postBody.year) )
					{
						validateYear = false
						$('.input[name="year"]').addClass('not-valid-input')
					}
				else
					{
						validateYear = true
						$('.input[name="year"]').removeClass('not-valid-input')
					}

				// Validate UMCN
				if ( this.postBody.umcn === "" || !numbersOnly.test(this.postBody.umcn) )
					{
						validateUmcn = false
						$('.input[name="umcn"]').addClass('not-valid-input')
					}
				else
					{
						validateUmcn = true
						$('.input[name="umcn"]').removeClass('not-valid-input')
					}

				// Validate city
				if ( this.postBody.city === "" || !lettersOnly.test(this.postBody.city) )
					{
						validateCity = false
						$(".input[name='city']").addClass('not-valid-input')
					}
				else
					{
						validateCity = true
						$(".input[name='city']").removeClass('not-valid-input')
					}

				// Validate Address
				if ( this.postBody.address == "" || !alphanumeric.test(this.postBody.address) )
					{
						validateAddress = false
						$(".input[name='address']").addClass('not-valid-input')
					}
				else
					{
						validateAddress = true
						$(".input[name='address']").removeClass('not-valid-input')
					}

				// Validate phone
				if ( this.postBody.phone_number === "" || !numbersOnly.test(this.postBody.phone_number) )
					{
						validatePhone = false
						$('.input[name="phone"]').addClass('not-valid-input')
					}
				else
					{
						validatePhone = true
						$('.input[name="phone"]').removeClass('not-valid-input')
					}

				// Validate email
				if ( this.postBody.email === "" || !mailRegex.test(this.postBody.email) )
					{
						validateMail = false
						$('.input[name="email"]').addClass('not-valid-input')
					}
				else
					{
						validateMail = true
						$('.input[name="email"]').removeClass('not-valid-input')
					}

				// Validate admin
				if ( this.postBody.admin_type === "Admin type" )
					{
						validateAdmin = false
						$('.input-select-list[name="admin_type"]').addClass('not-valid-input-select-list')
					}
				else
					{
						validateAdmin = true
						$('.input-select-list[name="admin_type"]').removeClass('not-valid-input-select-list')
					}

				// Validate position
				if ( this.postBody.position === "position" )
					{
						validatePosition = false
						$('.input-select-list[name="position"]').addClass('not-valid-input-select-list')
					}
				else
					{
						validatePosition = true
						$('.input-select-list[name="position"]').removeClass('not-valid-input-select-list')
					}

				// Validate gender
				if ( this.postBody.gender === "Gender" )
					{
						validateGender = false
						$('.input-select-list[name="gender"]').addClass('not-valid-input-select-list')
					}
				else
					{
						validateGender = true
						$('.input-select-list[name="gender"]').removeClass('not-valid-input-select-list')
					}

				// Validate education
				if ( this.postBody.education === "Education" )
					{
						validateEducation = false
						$('.input-select-list[name="education"]').addClass('not-valid-input-select-list')
					}
				else
					{
						validateEducation = true
						$('.input-select-list[name="education"]').removeClass('not-valid-input-select-list')
					}

				// If form is valid make API request
				if ( validateName && validateSurname && validateDay && validateMonth && validateYear && validateUmcn && validateCity && validateAddress && validatePhone && validateMail && validatePosition && validateGender && validateEducation === true )
					{
						addUser()
					}

			},
			addUser() {

				let data = {
					name: this.postBody.name,
					surname: this.postBody.surname,
					email: this.postBody.email,
					position: this.postBody.position,
					gender: this.postBody.gender,
					education: this.postBody.education,
					address: this.postBody.address,
					city: this.postBody.city,
					phone_number: this.postBody.phone_number,
					day: this.postBody.day,
					month: this.postBody.month,
					year: this.postBody.year,
					umcn: this.postBody.umcn,
					is_admin: this.postBody.is_admin,
					admin_type: this.postBody.admin_type
				}

				// API call
				this.$http.post( this.$store.state.api + 'user', this.postBody )
					.then( response => {

						if( response.status === 200 )
							{
								this.showMessage = true
								this.message = response.body.message

								setTimeout(() => {

									this.showMessage = false

								},5000)
							}

					}).catch( error => {

						this.showMessage = true
						this.message = "Ups, something went wrong :("

						setTimeout(() => {

							this.showMessage = false

						},5000)

					})
			}
		} // end methods

	} // end export

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

		grid-template-columns: min-content auto auto auto auto;

		padding-bottom: 20px;

		border-bottom: 1px solid whitesmoke;
	}

	.column-05 {

		position: relative;

		padding-top: 20px;

		display: block;
	}

	.adminType {

		transform: rotateX(-90deg);
		opacity: 0;

		transition: all .2s ease;
	}

	.rollIn {

		transform: rotateX(0deg);
		opacity: 1;
		z-index: 1;
	}

</style>
