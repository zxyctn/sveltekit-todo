<script>
    import { scale } from 'svelte/transition';  
    import { Col, Container, Row } from 'sveltestrap';

    import Todo from '$lib/components/Todo.svelte';
    import AddTodo from '$lib/components/AddTodo.svelte';

    export let data;
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</svelte:head>

<Container>
    <Row>
        <Col xs="auto"><div class="dashed my-4"><a href="/" class="nostyle"><h1 class="px-4 py-2"><strong>todos</strong></h1></a></div></Col>
    </Row>
    <Row cols={{ xl:4, lg: 3, md: 2, xs: 1 }}>
        {#each data.todos as todo (todo.id)}
            <Col>
                <div in:scale out:scale>
                    <Todo 
                        {todo}
                    />
                </div>
            </Col>
        {/each}
        <Col>
            <AddTodo/>
        </Col>
    </Row>
</Container>

<style>
    .nostyle {
        text-decoration: inherit;
        color: inherit;
    }
</style>