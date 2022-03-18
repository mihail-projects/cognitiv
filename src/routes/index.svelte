<script>
    import { onMount } from "svelte";
    import auth from "../authService";
    import { isAuthenticated, user } from "../store";

    let auth0Client;

    onMount(async () => {
        auth0Client = await auth.createClient();
        isAuthenticated.set(await auth0Client.isAuthenticated());
        user.set(await auth0Client.getUser());
    });

    $: if ($isAuthenticated && typeof window !== "undefined") {
        window.location.href = "/dashboard/projects?userID=123";
    }
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<div style="height: 100vh; display:grid; place-items:center">
    <div style="display: flex; gap: 20px; flex-direction: column; align-items: center; justify-content: center">
        <img src="logo.png" alt="cognitiv+" width="300px"/>
        <button style="width: fit-content; padding: 5px;" on:click={() => auth.loginWithPopup(auth0Client)}>
            <img style="border-radius: 5px" width="150px" alt="login" src="login.jpg" />
        </button>
    </div>
</div>
