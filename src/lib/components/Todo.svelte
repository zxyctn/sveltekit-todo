<script>
    import { enhance } from '$app/forms';
    import { Icon, Button } from 'sveltestrap';

    export let todo;
</script>

<div class="{todo.done ? 'dashed done' : 'solid'} p-4 mb-4">
    <div>
        <form method="POST" action="?/delete" class="d-flex justify-content-between" use:enhance>
            <input type="hidden" name="id" value={todo.id}>
            <h2>{todo.title}</h2>
            <button class="x-button d-flex justify-content-center">
                <Icon name='x-lg' />
            </button>
        </form>
    </div>
    <p>{todo.description}</p>
    <div class="d-flex flex-row-reverse">
        <form method="POST" action="?/toggle" use:enhance>
            <input type="hidden" name="id" value={todo.id}>
            {#if !todo.done}
                <Button outline>Mark done</Button>
            {:else}
                <Button>Done</Button>
            {/if}
        </form>
    </div>
</div>