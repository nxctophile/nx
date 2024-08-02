<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import logo from "../../assets/rhythmie-icon.png";
  import Iconify from "@iconify/svelte";
  import { register } from "../../lib/api";

  let passwordBox: HTMLInputElement;
  let confirmPasswordBox: HTMLInputElement;
  let visibilityIcon: string = "mdi:eye";
  let dialogBox: HTMLElement;
  let showPassword: boolean = false;

  let email = '';
  let password = '';
  let name = '';

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

  const handleDialog = () => {
    dialogBox.style.display = "flex";
  };

  const handleSubmit = async () => {
    try {
      const res = await register(email, password, name);
      handleDialog();
      console.log(res.message);
    } catch (err) {
      console.error(err);
      console.log('Registration failed');
    }
  };

  const redirectTo = () => {
    navigate("/login");
  }
</script>

<svelte:head>
  <title>Create an nx account</title>
</svelte:head>

<section class="main-container">
  <div class="container">
    <div class="primary-section">
      <div class="top-section">
        <div class="branding">
          <div class="branding-icon-container">
            <img class="branding-icon" src={logo} alt="Rhythmie logo" />
          </div>
          <div class="branding-text">Rhythmie</div>
        </div>
        <div class="greeting">
          <div class="heading">Let's get started</div>
          <div class="sub-heading">Continue with</div>
        </div>
      </div>

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

      <div class="or">OR</div>

      <a class="skip-button-container" href="/">
        <button class="skip-button">
            <div class="skip-button-text">Use without an account</div>
          <Iconify class="skip-button-icon" font-size="0.8em" icon="maki:arrow" />
        </button>
      </a>
      <div class="link">
        Already in? <Link to="/login">login here.</Link>
      </div>
    </div>

    <form on:submit|preventDefault={handleSubmit}>
      <div class="sub-heading">Enter your credentials</div>
      <div class="form-element">
        <label for="name" class="label">Name</label>
        <input
          bind:value={name}
          required
          minlength="2"
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
        />
      </div>
      <div class="form-element">
        <label for="email" class="label">E-mail</label>
        <input
          bind:value={email}
          required
          minlength="5"
          type="email"
          id="email"
          name="email"
          placeholder="youremail@example.com"
        />
      </div>
      <div class="form-element">
        <label for="password" class="label">
          Password
          <button on:click={passwordHandler}>
            <Iconify font-size="1.4em" icon={visibilityIcon} />
          </button>
        </label>
        <input
          bind:this={passwordBox}
          bind:value={password}
          required
          minlength="8"
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
        />
      </div>
      <div class="form-element">
        <label for="password" class="label"> Confirm password </label>
        <input
          bind:value={confirmPasswordBox}
          required
          minlength="8"
          type="password"
          id="confirm_password"
          name="confirm_password"
          placeholder="••••••••"
        />
      </div>
      <div class="login-button-container">
        <button class="login-button">
          Create account
        </button>
      </div>
    </form>
    <div bind:this={dialogBox} class="dialog-container">
      <div class="dialog-box">
        <div class="dialog-title">Check your inbox</div>
        <div class="dialog-content">Verify your email before logging in.</div>
        <div class="dialog-animation">
          <img
            src="https://cdn.dribbble.com/userupload/11000554/file/original-ec4e1c3d9d5c3a5d9f7261ce0bba400d.gif"
            alt="E-mail received animation"
          />
        </div>
        <div class="dialog-actions">
          <button on:click={redirectTo} class="dialog-button">OK</button>
        </div>
      </div>
    </div>
  </div>
  <div class="link">
    By creating an account, you agree to our
    <Link to="/support/terms-and-conditions">terms and conditions.</Link>
  </div>
</section>

<style lang="scss">
  @import "../../styles/Signup";
</style>
