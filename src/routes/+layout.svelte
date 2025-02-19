<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import "@fontsource/roboto";
  import '@fontsource-variable/roboto-slab';
</script>

<svelte:head>
  <title>FEUERWEHR KRONSHAGEN</title>
  <meta name="description" content="Svelte demo app"/>
</svelte:head>

<Header/>

<main>
  <slot/>
</main>

<Footer/>

<style>

  :global(body *) {
    all: unset;
    display: block;
  }

  :root {
    /* COLOR THEME */
    color-scheme: light dark;
    background: var(--color-background-1);
    color: var(--color-color-1);

    /* THEME COMBINATION until light-dark() is stable */
    --color-background-1: var(--light-color-background-1);
    --color-background-2: var(--light-color-background-2);
    --color-background-3: var(--light-color-background-3);
    --color-background-4: var(--light-color-background-4);

    --color-color-1: var(--light-color-color-1);
    --color-color-2: var(--light-color-color-2);
    --color-color-3: var(--light-color-color-3);
    --color-color-4: var(--light-color-color-4);

    @media (prefers-color-scheme: dark) {
      --color-background-1: var(--dark-color-background-1);
      --color-background-2: var(--dark-color-background-2);
      --color-background-3: var(--dark-color-background-3);
      --color-background-4: var(--dark-color-background-4);

      --color-color-1: var(--dark-color-color-1);
      --color-color-2: var(--dark-color-color-2);
      --color-color-3: var(--dark-color-color-3);
      --color-color-4: var(--dark-color-color-4);
    }

    /* LIGHT THEME */
    --light-color-background-1: #ffffff;
    --light-color-background-2: #fdfdfd;
    --light-color-background-3: #fafafa;
    --light-color-background-4: #f2f2f2;

    --light-color-color-1: #141414;
    --light-color-color-2: #262626;
    --light-color-color-3: #666;
    --light-color-color-4: gray;


    --light-color-theme-1: #ff3e00;
    --light-color-theme-2: #4075a6;
    --light-color-footer: #fff;
    --light-color-bg-footer: #00021A;

    /* DARK THEME */
    --dark-color-background-1: #1c1e22;
    --dark-color-background-2: #1f2228;
    --dark-color-background-3: #23272f;
    --dark-color-background-4: #2e333e;

    --dark-color-color-1: #e5e5e6;
    --dark-color-color-2: #cacbce;
    --dark-color-color-3: #a1a4aa;
    --dark-color-color-4: #878a92;


    --dark-color-bg-2: #343437;
    --dark-color-theme-1: #ff3e00;
    --dark-color-theme-2: #4075a6;
    --dark-color-footer: #fff;
    --dark-color-bg-footer: #00021A;

    /* TYPOGRAPHY */
    font-family: "Roboto", sans-serif, system-ui;

    /* SPACING */
    --space-end-of-section: 1rem;
    --space-end-of-part: 1rem;

    /* COLUMNS AND MARGIN https://m2.material.io/design/layout/responsive-layout-grid.html#breakpoints */
    --columns: 4;
    --columns-mobile: 4;
    --columns-tablet: 8;
    --columns-desktop: 12;
  }

  :global(header, main, footer) {
    width: 100vw;
  }

  /* noinspection CssUnusedSymbol */
  :global(.grid) {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: 0 1rem;

    --columns: var(--columns-mobile);

    @media screen and (min-width: 600px) {
      --columns: var(--columns-tablet);
      gap: 0 1.25rem;
    }

    @media screen and (min-width: 905px) {
      --columns: var(--columns-desktop);
      gap: 0 1.5rem;
    }
  }

  /* noinspection CssUnusedSymbol */
  :global(.frame) {
    margin: 0 0.5rem var(--space-end-of-section) 0.5rem;

    @media screen and (min-width: 200px) {
      margin: 0 0.5rem var(--space-end-of-section) 0.5rem;
    }

    @media screen and (min-width: 600px) {
      margin: 0 1rem var(--space-end-of-section) 1rem;
    }

    @media screen and (min-width: 905px) {
      margin: 0 auto var(--space-end-of-section) auto;
      width: 840px;
    }

    @media screen and (min-width: 1240px) {
      margin: 0 12.5rem var(--space-end-of-section) 12.5rem;
    }

    @media screen and (min-width: 1440px) {
      margin: 0 auto var(--space-end-of-section) auto;
      width: 1040px;
    }
  }

  /* noinspection CssUnusedSymbol */
  :global(.half) {
    grid-column: span max(var(--columns-mobile), calc(var(--columns) / 2));
  }

  :global(h1) {
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
  }

  :global(h2) {
    font-size: 1.125rem;
    font-weight: 500;
    text-decoration: none;
  }

  :global(p) {
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
  }

</style>
