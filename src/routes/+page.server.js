export function load({
    cookies
}) {
    let todos = cookies.get('todos');

    if (!todos) {
        cookies.set('todos', '[]');
        todos = '[]';
    }

    todos = JSON.parse(todos);  

    return {
        todos
    };
}

export const actions = {
    add: async ({
        cookies,
        request
    }) => {
        let todos = cookies.get('todos');

        if (!todos) {
            cookies.set('todos', JSON.stringify([]));
            todos = [];
        }

        todos = JSON.parse(todos);  

        const data = await request.formData();
        todos = [...todos, {
            id: +new Date(),
            title: data.get('title'),
            description: data.get('description'),
            done: false,
        }];

        cookies.set('todos', JSON.stringify(todos));
    },
    toggle: async ({
        cookies,
        request
    }) => {
        let todos = cookies.get('todos');

        if (!todos) {
            cookies.set('todos', JSON.stringify([]));
            todos = [];
        } else {
            todos = JSON.parse(todos);  

            const data = await request.formData();
            const todoIndex = todos.findIndex((t) => t.id === Number(data.get('id')));

            todos[todoIndex].done = !todos[todoIndex].done;
            cookies.set('todos', JSON.stringify(todos));
        }
    },
    delete: async ({
        cookies,
        request
    }) => {
        let todos = cookies.get('todos');

        if (!todos) {
            cookies.set('todos', JSON.stringify([]));
            todos = [];
        } else {
            todos = JSON.parse(todos);  

            const data = await request.formData();

            todos = todos.filter((t) => t.id !== Number(data.get('id')));

            cookies.set('todos', JSON.stringify(todos));
        }
    },
}