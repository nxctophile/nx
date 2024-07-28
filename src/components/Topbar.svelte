<script>
  import { Link } from "svelte-routing";
</script>

<div class="topbar-container">
  <div class="branding-container">
    <Link class="branding" to="/">
      <div class="branding-text">nx_.</div>
    </Link>
  </div>

  <div class="navigation-container">
    <div class="links-container">
      <Link to="/about" class="link">
        <div class="link-text">About</div>
      </Link>
      <Link to="/support" class="link">
        <div class="link-text">Support</div>
      </Link>
    </div>

    <div class="button-container">
      <Link to="/login" class="link">
        <button class="link-button">Login</button>
      </Link>
      <Link to="/signup" class="link">
        <button class="create-account link-button">Create account</button>
      </Link>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../styles/components/Topbar";
</style>
