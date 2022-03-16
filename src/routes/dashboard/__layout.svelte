<div class="top">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="/logo2.png" width="55px" />
    <span
        on:click={() => (window.location.href = "/dashboard/projects")}
        class="material-icons icon">folder</span
    >
    <span
        on:click={() => (window.location.href = "/dashboard/models")}
        class="material-icons icon">model_training</span
    >
</div>
<div class="bottom">
    <span class="material-icons icon">settings</span>
    <span class="material-icons icon">account_circle</span>
</div>

<slot />

<style>
    .top {
        width: 85px;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 20px;
        gap: 20px;
    }
    .bottom {
        width: 85px;
        position: absolute;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        bottom: 20px;
        gap: 20px;
    }
    .icon {
        font-size: 40px;
        user-select: none;
    }
    .icon:hover {
        color: white;
        cursor: pointer;
    }
</style>
