<script lang="ts">
	import { page } from "$app/stores";
</script>

<nav>
	<a href="/">
		<div class="nav-link {$page.url.pathname === '/' && 'active'}">Home</div>
	</a>
	<a href="/search">
		<div class="nav-link {$page.url.pathname.includes('/search') && 'active'}">Search</div>
	</a>
</nav>

<style>
	nav {
		padding: 2rem 0;
		display: flex;
		gap: 3rem;
		justify-content: center;
		align-items: center;
		width: 100vw;
	}

	a {
		text-decoration: none;
		color: var(--text-dark);
	}

	.nav-link {
		padding: 0 0.5rem;
		font-weight: bold;
		font-size: 1.25rem;
		transition: all 200ms;
	}

	.nav-link.active {
		color: var(--bg-base) !important;
	}
	.nav-link:hover {
		color: var(--bg-base);
	}
</style>
