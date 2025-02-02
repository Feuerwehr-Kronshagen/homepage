<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import "@fontsource/roboto";
  import '@fontsource-variable/roboto-slab';
</script>

<Header/>

<main>
  <slot/>
</main>

<Footer/>

<style>
  :root {

    margin: 0;
    padding: 0;

    --column-width: 42rem;
    --column-margin-top: 4rem;
    --content-width: 90vh;

    /* COLOR THEME */
    color-scheme: light dark;
    background: var(--color-background);
    color: var(--color-color);

    /* THEME COMBINATION until light-dark() is stable */
    --color-background: var(--light-color-background);
    --color-color: var(--light-color-color);
    @media (prefers-color-scheme: dark) {
      --color-background: var(--dark-color-background);
      --color-color: var(--dark-color-color);
    }

    /* LIGHT THEME */
    --light-color-background: #f8f8f8;
    --light-color-color: #000;


    --light-color-theme-1: #ff3e00;
    --light-color-theme-2: #4075a6;
    --light-color-footer: #fff;
    --light-color-bg-footer: #00021A;

    /* DARK THEME */
    --dark-color-background: #2b2b2b;
    --dark-color-color: #ffffff;


    --dark-color-bg-2: #343437;
    --dark-color-theme-1: #ff3e00;
    --dark-color-theme-2: #4075a6;
    --dark-color-footer: #fff;
    --dark-color-bg-footer: #00021A;

    /* TYPOGRAPHY */
    font-family: "Roboto", sans-serif, system-ui;

    /* COLUMNS */
    --columns: 4;
    --columns-mobile: 4;
    --columns-tablet: 8;
    --columns-desktop: 12;
  }

  :global(#app) {
    display: block;
  }

  :global(header, main, footer) {
    width: 100vw;
  }

  :global(.columns) {
    display: grid;
    --columns: var(--columns-mobile);
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: 16rpx;

    @media screen and (min-width: 600px) {
      --columns: var(--columns-tablet);
      grid-template-columns: repeat(var(--columns), 1fr);
      gap: 24px;
    }

    @media screen and (min-width: 905px) {
      --columns: var(--columns-desktop);
      grid-template-columns: repeat(var(--columns), 1fr);
      gap: 32px;
    }
  }

  :global(.frame) {
    margin: 0 16px;

    @media screen and (min-width: 600px) {
      margin: 0 16px;
    }

    @media screen and (min-width: 905px) {
      margin: 0 auto;
      width: 840px;
    }

    @media screen and (min-width: 1240px) {
      margin: 0 200px;
    }

    @media screen and (min-width: 1440px) {
      margin: 0 auto;
      width: 1040px;
    }
  }
</style>
