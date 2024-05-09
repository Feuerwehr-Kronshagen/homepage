<script>
	import SocialMedia from "./SocialMedia.svelte";
</script>

<svelte:head>
	<title>FEUERWEHR KRONSHAGEN</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="align-items-start">
	<h1>Wir suchen Dich!</h1>
	<p> Du lebst oder arbeitest in Kronshagen? Dann sind wir rund um die Uhr ehrenamtlich für Dich in Bereitschaft,
		um dir im Notfall zu helfen.</p>
	<p> Du hast Lust auf Kameradschaft und Arbeit mit neustem technischen Gerät? Dann komm gern zu einem unserer
		Übungsdienste. Sie finden jeden ersten und dritten Montag im Monat statt. Es sind keine Vorkenntnisse
		notwendig.</p>
	<h2>Du bist zwischen 10 und 17 Jahre alt?</h2>
	<p> Dann komm in die <a href="/jugendfeuerwehr">Jugendfeuerwehr</a>!</p>
</section>

<section>
	<SocialMedia />
</section>

<style lang="css">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h1 {
		width: 100%;
	}
</style>
