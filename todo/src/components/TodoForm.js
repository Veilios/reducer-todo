import React from 'react';

const TodoForm = () => {
    return (
        <form>
            <input type="text" name="itemInput" placeholder="Add Task Here" />
            <button>Add Task</button>
            <button>Clear Finished</button>
        </form>
    )
};

export default TodoForm;