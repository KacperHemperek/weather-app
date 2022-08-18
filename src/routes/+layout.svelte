<script>
	import NavBar from "../components/NavBar.svelte";
</script>

<NavBar />

<slot />

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

	* {
		margin: 0;
		padding: 0;
		font-family: "Poppins", sans-serif;
		font-size: 16px;
		box-sizing: border-box;
	}
</style>
