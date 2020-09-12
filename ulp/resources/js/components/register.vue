<template>
	<div>
		 <div class="card o-hidden border-0 shadow-lg my-5">
		      <div class="card-body p-0">
		        <!-- Nested Row within Card Body -->
		        <div class="row">
		          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
		          <div class="col-lg-7">
		            <div class="p-5">
		              <div class="text-center">
		                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
		              </div>
		              <form class="user" @submit.prevent="signup" >
		                <div class="form-group">
		                  <input type="text" class="form-control form-control-user" id="exampleInputEmail" placeholder="Fullname" v-model="form.name">
		                </div>

		                <div class="form-group">
		                  <input type="email" class="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" v-model="form.email">
		                </div>
		                <div class="form-group row">
		                  <div class="col-sm-6 mb-3 mb-sm-0">
		                    <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" v-model="form.password">
		                  </div>
		                  <div class="col-sm-6">
		                    <input type="password" class="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" v-model="form.password_confirmation">
		                  </div>
		                </div>
		                <div class="form-group">
		                    <button type="submit" class="btn btn-primary btn-user btn-block">Register Account</button>
		                </div>
		              </form>
		              <hr>
		              <div class="text-center">
		                <a class="small" href="forgot-password.html">Forgot Password?</a>
		              </div>
		              <div class="text-center">
		              	<router-link to="/">Already have an account? Login!</router-link>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
	</div>
	
</template>

<script>
	export default {
		data(){
			return {
				form: {
					name: null,
					email: null,
					password: null,
					password_confirmation: null
				}
			}
		},

		methods: {
			signup(){
				 axios.post('/api/auth/register',this.form)
				 .then(res => {
				 	//User.responseAfterLogin(res)
				 	this.$router.push({name: 'home'})
				 })
				 .catch(//error => console.log(error.response.data)
				 	error => this.errors = error.response.data.errors
				 	)

			}
		}
	}
	
</script>

<style>
	
</style>