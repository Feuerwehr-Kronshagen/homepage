<script>
	import SocialMedia from "./SocialMedia.svelte";
</script>

<svelte:head>
	<title>FEUERWEHR KRONSHAGEN</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="align-items-start columns frame">
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

  h1 {
    grid-column: span var(--columns);
  }

  h2 {
    grid-column: span var(--columns);
  }

  p {
    grid-column: span var(--columns);
    @media screen and (min-width: 600px) {
      grid-column: span calc(var(--columns) / 2);
    }
  }

  /*
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }



.main {
  font-weight: 400;
  padding: 16px;
  @include for-size(tablet-portrait-up) {
    padding: 20px 50px;
    display: grid;
  }

  @include for-size(tablet-landscape-up) {
    display: grid;
    grid-template-columns: 1fr minmax(auto, $tablet-landscape) 1fr;
    grid-template-areas:
      '. headline .'
      '. decorator .'
      '. content .';
  }
}

.headline {
  grid-area: headline;
}

.content {
  grid-area: content;
}

 */
</style>
