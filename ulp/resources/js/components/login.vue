<template>
	<div>
		    <div class="row justify-content-center">

		      <div class="col-xl-10 col-lg-12 col-md-9">

		        <div class="card o-hidden border-0 shadow-lg my-5">
		          <div class="card-body p-0">
		            <!-- Nested Row within Card Body -->
		            <div class="row">
		              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
		              <div class="col-lg-6">
		                <div class="p-5">
		                  <div class="text-center">
		                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
		                  </div>
		                  <form class="user" @submit.prevent="login">
		                    <div class="form-group">
		                      <input type="email" class="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." v-model="form.email">
		                    </div>
		                    <div class="form-group">
		                      <input type="password" class="form-control form-control-user" id="exampleInputPassword" placeholder="Password" v-model="form.password">
		                    </div>
		                    <div class="form-group">
		                      <div class="custom-control custom-checkbox small">
		                        <input type="checkbox" class="custom-control-input" id="customCheck">
		                        <label class="custom-control-label" for="customCheck">Remember Me</label>
		                      </div>
		                    </div>
		                    <div class="form-group">
		                    	<button type="submit" class="btn btn-success btn-block">Login</button>
		                    </div>
		                  </form>
		                  <hr>
		                  <div class="text-center">
		                    <a class="small" href="forgot-password.html">Forgot Password?</a>
		                  </div>
		                  <div class="text-center">
		                  	<router-link to="/register">Create an Account!</router-link>
		                  </div>
		                </div>
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
		created(){
			if(User.loggedIn()){
				this.$router.push({name: 'home'})
			}
		},
		data(){
			return {
				form:{
					email:null,
					password:null
				}
			}
		},
		methods: {
			login(){
				axios.post('/api/auth/login',this.form)
				.then(res=>{
					User.responseAfterLogin(res)
					this.$router.push({name: 'home'})
				})
				.catch()
			}
		}
	}
	
</script>

<style>
	
</style>