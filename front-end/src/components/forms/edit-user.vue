
<template>
	
	<form class="add-user" name="add-user">
		
		<!-- search user -->

		<div class="column column-00">
			
			<div class="input-wrap">
				
				<p class="input-desc">Search user</p>
				<input class="input" type="text" name="user" placeholder="ex: Jane Doe">

			</div>

		</div>

		<!-- options -->

		<div class="column column-01">

			<!-- admin -->
	            
	        <div class="input-checkbox-wrap">
	            
	                <div class="input-checkbox">
	                
	                    <div class="input-box"></div>
	                    
	                </div>
	                
	                <p class="input-checkbox-desc">Admin</p>
	            
	        </div> <!-- end.input-checkbox-wrap -->

	        <!-- admin type -->
	        
	        <div class="input-select-wrap">
	                
	            <ul class="input-select-list">
	                
	                <p class="input-select-desc">Admin type <span>▼</span></p>
	        
	                <li class="input-select-item">admin</li>
	                <li class="input-select-item">uber admin</li>
	                
	            </ul>
	            
	    	</div> <!-- end.input-select-wrap -->

	    	<!-- Position -->
	        
	        <div class="input-select-wrap">
	            
	            <ul class="input-select-list">
	            
	                <p class="input-select-desc">Position <span>▼</span></p>
	        
	                <li class="input-select-item">Account</li>
	                <li class="input-select-item">Sys Admin</li>
	                <li class="input-select-item">3D</li>
	                <li class="input-select-item">MGFX</li>
	                <li class="input-select-item">Design</li>
	            
	            </ul>
	        
	        </div> <!-- end.input-select-wrap -->

	        <!-- Gender -->

	        <div class="input-select-wrap">
	            
	            <ul class="input-select-list">
	            
	                <p class="input-select-desc">Gender <span>▼</span></p>
	        
	                <li class="input-select-item">Male</li>
	                <li class="input-select-item">Female</li>
	            
	            </ul>
	        
	        </div> <!-- end.input-select-wrap -->

	        <!-- education -->

	        <div class="input-select-wrap">
	            
	            <ul class="input-select-list">
	            
	                <p class="input-select-desc">Education <span>▼</span></p>
	        
	                <li class="input-select-item">low</li>
	                <li class="input-select-item">mid</li>
	                <li class="input-select-item">high</li>
	            
	            </ul>
	        
	        </div> <!-- end.input-select-wrap -->

	    </div>

	    <!-- name -->

	    <div class="column column-02">
	    	
	    	<div class="input-wrap">
	    		
	    		<p class="input-desc">Full name</p>
	    		<input class="input" type="text" name="name" placeholder="Name Surname" />

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
	    	
	    	<div class="submit-wrap">
	    		
	    		<img class="submit-icon" src="/static/images/icons/add.png" alt="add user" title="add user">

	    	</div>

	    </div>

	</form>

</template>

<script>
	
	export default {
		name: 'edit-user'
	}

</script>

<style>

	.add-user {

		width: 100%;
		height: auto;

		padding: 20px 0px;

		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: 60px 60px 40px;
		grid-row-gap: 20px;
	}

	.column {

		width: 100%;

		display: grid;
		grid-template-columns: auto;
		grid-column-gap: 20px;
	}

	.column-00 {

		padding: 0px;

		border-bottom: 1px solid whitesmoke;
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