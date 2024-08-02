<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Support from "./routes/Support.svelte";
  import Login from "./routes/auth/Login.svelte";
  import Signup from "./routes/auth/Signup.svelte";
  import ForgotPassword from "./routes/auth/ForgotPassword.svelte";
  import AnonymousLogin from "./routes/auth/AnonymousLogin.svelte";
  import Topbar from "./components/Topbar.svelte";
  import VerifyEmail from "./routes/auth/VerifyEmail.svelte";
</script>

<Router>
  <Topbar />
  <main>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/support" component={Support} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/verify-email" component={VerifyEmail} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/anonymous-login" component={AnonymousLogin} />
  </main>
</Router>
