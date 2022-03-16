<script>
    if (typeof window !== "undefined") {
        const userID = new URLSearchParams(window.location.search).get(
            "userID"
        );
        console.log(userID);
    }

    let docTypes = ["type1", "type2", "type3", "type4", "type5"];
    let models = ["model1", "model2", "model3", "model4", "model5"];
</script>

<div
    style="display: flex-direction: column; margin-left: 90px; margin-top: 25px"
>
    <span style="font-size: 30px; font-weight: 500;">Models</span>
</div>

<div style="display: flex; width: 100%; margin-top: 30px; margin-left: 90px;">

    <div class="table">
        <div
            class="table-item"
            style="border-bottom: 1px solid #ffffff50; background: #18232C; font-weight: bold; border-radius: 10px 10px 0 0"
        >
            <span>Document Type</span>
        </div>
        {#each docTypes as type, index}
            <div class="table-item" style="border-bottom: 1px solid #ffffff50">
                <span>{type}</span>
            </div>
        {/each}
    </div>

    <div class="table">
        <div
            class="table-item"
            style="border-bottom: 1px solid #ffffff50; background: #18232C; font-weight: bold; border-radius: 10px 10px 0 0"
        >
            <span>Model</span>
        </div>
        {#each models as model, index}
            <div class="table-item" style="border-bottom: 1px solid #ffffff50">
                <label>
                    <input type="checkbox">
                    {model}
                </label>
            </div>
        {/each}
    </div>

</div>

<style>
    .table {
        display: flex;
        flex-direction: column;
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
        background-color: #141e26;
    }
</style>
