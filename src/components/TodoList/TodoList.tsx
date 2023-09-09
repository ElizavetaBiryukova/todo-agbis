import CompleteTodo from "../CompleteTodo/CompleteTodo";
import NewTodoForm from "../NewTodoForm/NewTodoForm";
import TodoItem from "../TodoItem/TodoItem";


const TodoList = () => {
    return (
        <div className='text-white w-4/5 mx-auto my-20'>
            <section>
                <TodoItem />
                <CompleteTodo />
                <NewTodoForm />
            </section>
        </div>
    );
};



export default TodoList;