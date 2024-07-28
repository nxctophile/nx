<script lang="ts">
  import Iconify from "@iconify/svelte";
  import RhythmieLogo from "../../assets/rhythmie-icon.png";
  import { Link } from "svelte-routing";
  import { login } from "../../lib/api";
  import { setAuth } from "../../stores/auth";
  import { onMount } from "svelte";

  let passwordBox: HTMLInputElement;
  let visibilityIcon: string = "mdi:eye";
  let showPassword: boolean = false;

  let email = "";
  let password = "";

  const handleSubmit = async () => {
    try {
      const { token } = await login(email, password);
      setAuth({ email }, token);
      localStorage.setItem("token", token);
    } catch (err) {
      console.error(err);
    }
  };

  function passwordHandler(event: Event) {
    event.preventDefault();
    if (showPassword) {
      visibilityIcon = "mdi:eye";
      passwordBox.type = "password";
      showPassword = false;
    } else {
      visibilityIcon = "mdi:eye-off-outline";
      passwordBox.type = "text";
      showPassword = true;
    }
  }

  onMount(() => {
    const token = localStorage.getItem("token");
    if (token) setAuth({ email }, token);
  });
</script>

<svelte:head>
  <title>Login to your nx account</title>
</svelte:head>

<section class="main-container">
  <div class="container">
    <div class="top-section">
      <div class="branding">
        <div class="branding-icon-container">
          <img class="branding-icon" src={RhythmieLogo} alt="logo" />
        </div>
        <div class="branding-text">Rhythmie</div>
      </div>
      <div class="greeting">
        <div class="heading">Welcome back!</div>
        <div class="sub-heading">Log in to get started</div>
      </div>
    </div>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-element">
        <label for="email" class="label">E-mail</label>
        <input
          bind:value={email}
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div class="form-element">
        <label for="password" class="label">
          <div class="label-text">Password</div>
          <button on:click={passwordHandler}>
            <Iconify font-size="1.4em" icon={visibilityIcon} />
          </button>
        </label>
        <input
          bind:this={passwordBox}
          bind:value={password}
          type="password"
          id="password"
          name="password"
          required
        />
      </div>
      <div class="login-button-container">
        <button class="login-button"> Login </button>
      </div>
    </form>
    <div class="or">OR</div>
    <div class="social-container">
      <div class="social-option">
        <Iconify
          class="social-icon"
          font-size="1.8em"
          icon="simple-icons:apple"
        />
      </div>
      <div class="social-option">
        <Iconify
          class="social-icon"
          font-size="1.8em"
          icon="simple-icons:google"
        />
      </div>
      <div class="social-option">
        <Iconify
          class="social-icon"
          font-size="1.8em"
          icon="simple-icons:facebook"
        />
      </div>
    </div>
    <div class="links-container">
      <div class="link">
        Forgot password - <Link class="link-component" to="/forgot-password"
          >reset it here.</Link
        >
      </div>
      <div class="link">
        New here? <Link class="link-component" to="/signup"
          >create a new account.</Link
        >
      </div>
    </div>
  </div>
  <div class="main-or">OR</div>
  <a href="/anonymous">
    <button class="skip-button">
      <div class="skip-button-text">Use without an account</div>
      <Iconify class="skip-button-icon" font-size="0.8em" icon="maki:arrow" />
    </button>
  </a>
</section>

<style lang="scss">
  @import "../../styles/Login";
</style>
