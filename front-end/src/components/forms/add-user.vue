
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

    <!-- ID -->

    <div class="column column-04">

    	<div class="input-wrap tripple">

    		<p class="input-desc">ID info</p>
    		<input class="input" type="text" name="id_number" placeholder="id number" v-model="postBody.id_number" />
    		<input class="input" type="text" name="id_valid_date" placeholder="valid date" v-model="postBody.id_valid_date" />
    		<input class="input file-input" type="file" name="id_scan" id="id_scan" /><label class="input file-label" for="id_scan" title="add ID scan">Choose image</label>

    	</div>

    </div>

    <!-- Bank info -->

    <div class="column column-05">

    	<div class="input-wrap double">

    		<p class="input-desc">Bank info</p>
    		<input class="input" type="text" name="acc_number" placeholder="account number" v-model="postBody.acc_number" />
    		<input class="input" type="text" name="bank_name" placeholder="Bank name" v-model="postBody.bank_name" />

    	</div>

    </div>

    <!-- address -->

    <div class="column column-06">

    	<div class="input-wrap double">

    		<p class="input-desc">Address</p>
    		<input class="input" type="text" name="city" placeholder="city" v-model="postBody.city" />
    		<input class="input" type="text" name="address" placeholder="address" v-model="postBody.address" />

    	</div>

    </div>

    <!-- contact -->

    <div class="column column-07">

    	<div class="input-wrap double">

    		<p class="input-desc">Contact</p>
    		<input class="input" type="phone" name="phone" placeholder="phone : ex:0038975 000 000" v-model="postBody.phone_number" />
    		<input class="input" type="email" name="email" placeholder="email" v-model="postBody.email" />

    	</div>

    </div>

    <!-- Employment info -->

    <div class="column column-08">

    	<div class="input-wrap quadro">

    		<p class="input-desc">Employment</p>
    		<input class="input" type="text" name="employment_day" placeholder="day" maxlength="2" v-model="postBody.employment_day" />
    		<input class="input" type="text" name="employment_month" placeholder=" month" maxlength="2" v-model="postBody.employment_month" />
    		<input class="input" type="text" name="employment_year" placeholder="year" maxlength="4" v-model="postBody.employment_year" />
    		<input class="input" type="text" name="payment" placeholder="payment amount" v-model="postBody.payment" />

    	</div>

    </div>

    <!-- submit -->

    <div class="column column-09">

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
				  phone_number: "",
				  day: "",
					month: "",
					year: "",
				  umcn: "",
				  id_number: "",
				  id_valid_date: "",
				  id_scan: "",
				  acc_number: "",
				  bank_name: "",
				  employment_day: "",
				  employment_month: "",
				  employment_year: "",
				  payment: ""
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

				let validateName = false
				let validateSurname = false
				let validateDay = false
				let validateMonth = false
				let validateYear = false
				let validateUmcn = false
				let validateIdNumber = false
				let validateIdValidDate = false
				let validateIdScan = false
				let validateAccNumber = false
				let validateBankName = false
				let validateCity = false
				let validateAddress = false
				let validatePhone = false
				let validateMail = false
				let validateEmploymentDay = false
				let validateEmploymentMonth = false
				let validateEmploymentYear = false
				let validatePayment = false
				let validateAdmin = false
				let validatePosition = false
				let validateGender = false
				let validateEducation = false

				// Validate name
				if ( this.postBody.name === "" || !this.$store.state.regex.letters.test(this.postBody.name) )
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
				if ( this.postBody.surname === "" || !this.$store.state.regex.letters.test(this.postBody.surname) )
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
				if ( this.postBody.day === "" || !this.$store.state.regex.numbers.test(this.postBody.day) )
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
				if ( this.postBody.month === "" || !this.$store.state.regex.numbers.test(this.postBody.month) )
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
				if ( this.postBody.year === "" || !this.$store.state.regex.numbers.test(this.postBody.year) )
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
				if ( this.postBody.umcn === "" || !this.$store.state.regex.numbers.test(this.postBody.umcn) )
					{
						validateUmcn = false
						$('.input[name="umcn"]').addClass('not-valid-input')
					}
				else
					{
						validateUmcn = true
						$('.input[name="umcn"]').removeClass('not-valid-input')
					}

				// Validate ID number
				if ( this.postBody.id_number === "" || !this.$store.state.regex.alphanumeric.test(this.postBody.id_number) )
					{
						validateIdNumber = false
						$('.input[name="id_number"]').addClass('not-valid-input')
					}
				else
					{
						validateIdNumber = true
						$('.input[name="id_number"]').removeClass('not-valid-input')
					}

				// Validate ID valid date
				if ( this.postBody.id_valid_date === "" || !this.$store.state.regex.numbers.test(this.postBody.id_valid_date) )
					{
						validateIdValidDate = false
						$('.input[name="id_valid_date"]').addClass('not-valid-input')
					}
				else
					{
						validateIdValidDate = true
						$('.input[name="id_valid_date"]').removeClass('not-valid-input')
					}

				// Validate ID scan

				// Validate Account number
				if ( this.postBody.acc_number === "" || !this.$store.state.regex.numbers.test(this.postBody.acc_number) )
					{
						validateAccNumber = false
						$('.input[name="acc_number"]').addClass('not-valid-input')						
					}
				else
					{
						validateAccNumber = true
						$('.input[name="acc_number"]').removeClass('not-valid-input')
					}

				// Validate Bank name
				if ( this.postBody.bank_name === "" || !this.$store.state.regex.letters.test(this.postBody.bank_name) )
					{
						validateBankName = false
						$('.input[name="bank_name"]').addClass('not-valid-input')
					}
				else
					{
						validateBankName = true
						$('.input[name="bank_name"]').removeClass('not-valid-input')
					}

				// Validate city
				if ( this.postBody.city === "" || !this.$store.state.regex.alphanumeric.test(this.postBody.city) )
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
				if ( this.postBody.address == "" || !this.$store.state.regex.alphanumeric.test(this.postBody.address) )
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
				if ( this.postBody.phone_number === "" || !this.$store.state.regex.numbers.test(this.postBody.phone_number) )
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
				if ( this.postBody.email === "" || !this.$store.state.regex.mail.test(this.postBody.email) )
					{
						validateMail = false
						$('.input[name="email"]').addClass('not-valid-input')
					}
				else
					{
						validateMail = true
						$('.input[name="email"]').removeClass('not-valid-input')
					}

				// Validate Employment day
				if ( this.postBody.employment_day === "" || !this.$store.state.regex.numbers.test(this.postBody.employment_day) )
					{
						validateEmploymentDay = false
						$('.input[name="employment_day"]').addClass('not-valid-input')					
					}
				else
					{
						validateEmploymentDay = true
						$('.input[name="employment_day"]').removeClass('not-valid-input')	
					}

				// Validate Employment month
				if ( this.postBody.employment_month === "" || !this.$store.state.regex.numbers.test(this.postBody.employment_month) )
					{
						validateEmploymentMonth = false
						$('.input[name="employment_month"]').addClass('not-valid-input')					
					}
				else
					{
						validateEmploymentMonth = true
						$('.input[name="employment_month"]').removeClass('not-valid-input')	
					}

				// Validate Employment year
				if ( this.postBody.employment_year === "" || !this.$store.state.regex.numbers.test(this.postBody.employment_year) )
					{
						validateEmploymentYear = false
						$('.input[name="employment_year"]').addClass('not-valid-input')
					}
				else
					{
						validateEmploymentYear = true
						$('.input[name="employment_year"]').removeClass('not-valid-input')
					}

				// Validate Payment
				if ( this.postBody.payment === "" || !this.$store.state.regex.numbers.test(this.postBody.payment) )
					{
						validatePayment = false
						$('.input[name="payment"]').addClass('not-valid-input')
					}
				else
					{
						validatePayment = true
						$('.input[name="payment"]').removeClass('not-valid-input')
					}

				// Validate admin
				if ( this.postBody.is_admin === true && this.postBody.admin_type === "Admin type" )
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
				if ( validateName && validateSurname && validateDay && validateMonth && validateYear && validateUmcn && validateIdNumber && validateIdValidDate && validateAccNumber && validateBankName && validateCity && validateAddress && validatePhone && validateMail && validateEmploymentDay && validateEmploymentMonth && validateEmploymentYear && validatePosition && validateGender && validateEducation === true )
					{
						this.addUser()
					}
				else
					{
						this.showMessage = true
						this.message = "Please fill all the marked fileds."

						setTimeout(() => {

							this.showMessage = false
							$('.input').removeClass('not-valid-input')
							$('.input-select-list').removeClass('not-valid-input-select-list')

						},3000)
					}

			},
			addUser() {

				// API request
				this.$http.post( this.$store.state.api + 'user', this.postBody )
					.then( response => {

						if( response.status === 200 )
							{
								this.adminTypeSelected = false,
								this.positonSelected = false,
								this.genderSelected = false,
								this.educationSelected = false,
								this.postBody.name = "",
								this.postBody.surname = "",
								this.postBody.email = "",
								this.postBody.position = "position",
								this.postBody.is_admin = false,
								this.postBody.admin_type = "Admin type",
							  this.postBody.gender = "Gender",
							  this.postBody.education = "Education",
							  this.postBody.address = "",
							  this.postBody.city = "",
							  this.postBody.phone_number = "",
							  this.postBody.day = "",
								this.postBody.month = "",
								this.postBody.year = "",
							  this.postBody.umcn = ""

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

	.column-09 {

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
