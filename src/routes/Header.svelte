<script>
  import codeOfArms from '$lib/images/Kronshagen_Wappen.png';
</script>

<header>
  <div class="frame container">
    <p class="title" >FREIWILLIGE FEUERWEHR KRONSHAGEN</p>
    <img class="headerLogo" src={codeOfArms} alt="Wappen von Kronshagen" aria-hidden="true"/>
  </div>
</header>

<style>
  header {
    background: var(--color-background-4);
    box-shadow: 4px 4px 4px rgba(0,0,0,0.025);
  }

  .container {
    display: grid;
    grid-template-columns: 1fr auto;
    @media (max-width: 250px) {
      grid-template-columns: 1fr;
    }
    align-items: center;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    padding: 0.5rem 0.5rem 0.5rem 0;
  }

  .headerLogo {
    margin: 0 0 0 auto;
    height: 4rem;
    width: auto;
    padding: 0.5rem 0 0.5rem 0.5rem;
  }

</style>
