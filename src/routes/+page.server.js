let todos = [{
    id: 0,
    title: 'title',
    description: 'description',
    done: false,
}, {
    id: 1,
    title: 'title 2',
    description: 'description 2',
    done: true,
}];

export function load() {
    return {
        todos
    };
}

export const actions = {
    add: async ({
        request
    }) => {
        const data = await request.formData();
        todos = [...todos, {
            id: +new Date(),
            title: data.get('title'),
            description: data.get('description'),
            done: false,
        }];
        console.log(todos);
    },
    toggle: async ({
        request
    }) => {
        const data = await request.formData();
        const todoIndex = todos.findIndex((t) => t.id === Number(data.get('id')));
        todos[todoIndex].done = !todos[todoIndex].done;
    },
    delete: async ({
        request
    }) => {
        const data = await request.formData();
        todos = todos.filter((t) => t.id !== Number(data.get('id')));
    },
}