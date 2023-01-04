<script>
	import { enhance } from '$app/forms';
    import { Icon, Input, Button } from 'sveltestrap';

    let showForm = false;
</script>

{#if !showForm}
<div on:click={() => showForm = true} on:keydown={() => showForm = true} class="dashed p-4 mb-4 d-flex justify-content-center align-items-center">
    <h3><Icon name="plus-lg" /> add todo</h3>
</div>
{:else}
<div class="dashed p-4 mb-4">
    <form 
        method="POST" 
        action="?/add" 
        use:enhance={() => {
            return async ({ update }) => {
                await update();
                showForm = false;
            };
        }}
    >
        <Input type="text" label="title" placeholder="title" class="mb-2" name="title" required />
        <Input type="textarea" label="description" placeholder="description" class="mb-2" name="description" required />
        <Button id="add" outline color="primary">add</Button>
        <button class="btn btn-danger" on:click={() => showForm = false}>Cancel</button>
    </form>
</div>
{/if}
