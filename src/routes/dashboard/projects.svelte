<script>
    if (typeof window !== "undefined") {
        const userID = new URLSearchParams(window.location.search).get(
            "userID"
        );
        console.log(userID);
    }

    let projects = [{name: "name", status: "status", type: "type", date: "date", actions: "actions"},
                    {name: "name", status: "status", type: "type", date: "date", actions: "actions"},
                    {name: "name", status: "status", type: "type", date: "date", actions: "actions"}];

    let edit = false;
    let docTypes = ["type1", "type2", "type3", "type4", "type5"];
    let models = ["model1", "model2", "model3", "model4", "model5"];
    let relations = [[false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false], [false, false, false, false, false]];
    let selected = 0;
</script>

<div style="display: flex-direction: column; margin-left: 90px; margin-top: 25px">
    <span style="font-size: 30px; font-weight: 500;">Projects</span>
</div>

<div class="table">

    <div style="display: flex; gap: 5px">
        <button style="width: 110px; height: 35px; padding: 0; font-size: 16px">Create</button>
        <button style="width: 110px; height: 35px; padding: 0; font-size: 16px" on:click={() => (edit = !edit)}>Edit models</button>
    </div>

    <div class="table-item" style="border-bottom: 1px solid #ffffff50; background: #18232C; font-weight: bold; border-radius: 10px 10px 0 0">
        <span>Name</span>
        <span>Status</span>
        <span>Type</span>
        <span>Date</span>
        <span>Actions</span>
    </div>

    {#each projects as project, index}
        <div class="table-item" style="border-bottom: 1px solid #ffffff50">
            <span>{project.name}</span>
            <span>{project.status}</span>
            <span>{project.type}</span>
            <span>{project.date}</span>
            <span>{project.actions}</span>
        </div>
    {/each}

</div>

{#if edit}
    <dialog open>
        <article>

            <!-- svelte-ignore a11y-missing-content -->
            <a style="margin-bottom: 0" href="#close" aria-label="Close" class="close" on:click={() => (edit = !edit)}/>
            <h3>Models editor</h3>

            <div style="display: flex; width: 100%;">

                <div class="modelsTable">

                    <div class="table-item" style="justify-content: center; border-bottom: 1px solid #ffffff50; background: #18232C; font-weight: bold; border-radius: 10px 0 0 0; border-right: 1px solid #ffffff50">
                        <span>Document Type</span>
                    </div>

                    {#each docTypes as type, index}
                        <div
                            on:click={() => (selected = index)}
                            class="table-item"
                            style="justify-content: center; border-bottom: 1px solid #ffffff50; border-right: 1px solid #ffffff50; background: {selected==index?'#ffffff20':''}"
                        >
                            <span>{type}</span>
                        </div>
                    {/each}

                </div>

                <div class="modelsTable">

                    <div class="table-item" style="justify-content: center; border-bottom: 1px solid #ffffff50; background: #18232C; font-weight: bold; border-radius: 0 10px 0 0">
                        <span>Model</span>
                    </div>

                    {#each models as model, index}
                        <div class="table-item" style="justify-content: center; border-bottom: 1px solid #ffffff50;">
                            <label>
                                <input type="checkbox" bind:checked={relations[selected][index]}/>
                                {model}
                            </label>
                        </div>
                    {/each}

                </div>

            </div>

            <footer style="padding-bottom: 10px; padding-top: 20px; padding-right: 20px">
                <a href="#cancel" role="button" class="secondary" on:click={() => (edit = !edit)}>Cancel</a>
                <a href="#confirm" role="button" on:click={() => (edit = !edit)}>Confirm</a>
            </footer>

        </article>
    </dialog>
{/if}

<style>
    .table {
        margin-top: 30px;
        margin-left: 90px;
        display: flex;
        flex-direction: column;
        padding-right: 10px;
    }
    .table-item {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
        cursor: pointer;
    }
    .table-item:hover {
        background-color: #18232c;
    }
    .modelsTable {
        display: flex;
        flex-direction: column;
    }
</style>
