<template>
	<section id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left" v-if="showLinks">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<ul class="list-unstyled quick-links">
						<li><router-link to="/"><i class="fa fa-angle-double-right"></i>Home</router-link></li>
						<li><router-link to="/"><i class="fa fa-angle-double-right"></i>About</router-link></li>
						<li><router-link to="/"><i class="fa fa-angle-double-right"></i>FAQ</router-link></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<ul class="list-unstyled quick-links">
						<li><router-link to="/"><i class="fa fa-angle-double-right"></i>Youtube</router-link></li>
						<li><router-link to="/"><i class="fa fa-angle-double-right"></i>Twitch</router-link></li>
						<li><router-link to="/"><i class="fa fa-angle-double-right"></i>Discord</router-link></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<ul class="list-unstyled quick-links">
						<li><router-link to="/"><i class="fa fa-angle-double-right"></i>Terms of Service</router-link></li>
						<li><router-link to="/"><i class="fa fa-angle-double-right"></i>Privacy Policy</router-link></li>
						<li><router-link to="/"><i class="fa fa-angle-double-right"></i>Wiki</router-link></li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text">
					<p> © 2014 - 2018 Your Blog » Kişisel Blog - Her Hakkı Saklıdır.</p>
					<p class="h6">Copyright © 2018<a class="text-green ml-2">YourBlog.com</a></p>
				</div>
			</div>	
		</div>
	</section>
</template>

<script>
export default {
	props: {
		showLinks: {
			required: false,
			default: false,
			type: Boolean
		}
	},
	data(){
		return {
		}
	}
}
</script>

<style scoped>
	#footer {
		padding-top: 100px;
	}
</style>
