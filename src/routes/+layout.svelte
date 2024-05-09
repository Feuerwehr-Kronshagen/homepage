<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import "@fontsource/roboto";
	import '@fontsource-variable/roboto-slab';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	:root {
		--column-width: 42rem;
		--column-margin-top: 4rem;
		font-family: "Roboto", sans-serif, system-ui;
		color: var(--color-text);

		@media (prefers-color-scheme: light) {
			--color-bg-0: #cad8e4;
			--color-bg-1: #cedce8;
			--color-bg-2: #edf0f8;
			--color-bg-body: #f8f8f8;
			--color-theme-1: #ff3e00;
			--color-theme-2: #4075a6;
			--color-text: #000;
			--color-footer: #fff;
			--color-bg-footer: #00021A;
		}

		@media (prefers-color-scheme: dark) {
			--color-bg-0: #282828;
			--color-bg-1: #35383b;
			--color-bg-2: #343437;
			--color-bg-body: #35383b;
			--color-theme-1: #ff3e00;
			--color-theme-2: #4075a6;
			--color-text: #ffffff;
			--color-footer: #fff;
			--color-bg-footer: #00021A;
		}
	}

	:global(body) {
		margin: 0;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin-bottom: 0;
	}
</style>
