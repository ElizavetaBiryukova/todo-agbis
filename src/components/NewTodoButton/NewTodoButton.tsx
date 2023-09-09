import { GoPlus } from "react-icons/go";

const NewTodoButton = () => {
    return (
        <div className="mx-auto w-max">
            <GoPlus size={80} className='text-indigo-500 hover:text-pink-500 transition-colors ease-in-out duration-300' />
        </div>
    );
};

export default NewTodoButton;