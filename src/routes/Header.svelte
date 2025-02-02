<script>
  import codeOfArms from '$lib/images/Kronshagen_Wappen.png';
</script>

<header class="">
  <div class="columns frame">
    <div class="title">
      <img class="headerLogo" src={codeOfArms} alt="Wappen von Kronshagen" aria-hidden="true"/>
      <p>FEUERWEHR KRONSHAGEN</p>
    </div>
  </div>
</header>

<style>
  header {
    background-color: #f0f0f0;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.05);
  }

  .title {
    grid-column: span var(--columns);
  }

  .headerLogo {
    height: 4rem;
    width: auto;
    padding: 0 0.5rem 0 0;
  }

</style>
