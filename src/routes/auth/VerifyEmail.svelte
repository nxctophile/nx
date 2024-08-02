<script lang="ts">
  import { onMount } from "svelte";
  import { verifyEmail } from "../../lib/api";

  const emailVerification = async () => {
    const token = window.location.search.split("?token=")[1];
    return await verifyEmail(token);
  };

  onMount(() => {
    console.log(emailVerification());
  });
</script>
