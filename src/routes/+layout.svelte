<script>
	import NavBar from "../components/NavBar.svelte";
</script>

<NavBar />
<div class="layout-container">
	<div class="content-wrapper">
		<slot />
	</div>
</div>

<style global>
	@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
	:root {
		--bg-base: rgb(255, 149, 0);
		--bg-light: rgb(243, 167, 61);
		--text-neutral: rgb(25, 25, 25);
		--text-light: rgb(170, 170, 170);
		--text-lighter: rgb(225, 225, 225);
		--text-white: rgb(245, 245, 245);

		--border-radius-base: 0.5rem;
	}
	.layout-container {
		width: 100vw;
		display: flex;
		justify-content: center;
		padding: 1rem;
	}
	.content-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	@media only screen and (min-width: 767px) {
		.content-wrapper {
			width: 80%;
		}
	}
	@media only screen and (min-width: 1024px) {
		.content-wrapper {
			width: 60%;
		}
	}

	* {
		margin: 0;
		padding: 0;
		font-family: "Poppins", sans-serif;
		font-size: 16px;
		box-sizing: border-box;
	}
</style>
