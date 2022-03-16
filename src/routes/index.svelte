<script>
    let msg = "";

    let email;
    let password;

    async function authenticate() {
        await fetch("/api/auth")
            .then((response) => response.json())
            .then((data) => {
                if (data.auth == false) {
                    msg = "Try again";
                } else {
                    window.location.href = "/dashboard/projects?userID="+data.auth;
                }
            });
    }
</script>

<div style="width: 100vw; height: 100vh; display: grid; place-items: center">
    <div style="width: 500px;">
        <img style="margin-bottom: 50px" src="logo.png" alt="cognitiv+" />

        <label for="email">Email</label>
        <input type="email" placeholder="Email" bind:value={email} required />

        <label for="email">Password</label>
        <input
            type="email"
            placeholder="Password"
            bind:value={password}
            required
        />

        <button on:click={authenticate}>Submit</button>
        <small>{msg}</small>
    </div>
</div>

<style>
</style>
