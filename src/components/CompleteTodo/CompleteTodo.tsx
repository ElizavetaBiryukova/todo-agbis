import { GoTrash } from "react-icons/go";

const CompleteTodo = () => {
    return (
        <div className='flex flex-col items-left gap-5 justify-between mb-4 rounded-2xl bg-zinc-100 p-5 w-full text-black laptop:flex-row
        '>
            <p className='text-l tablet:text-xl line-through'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam velit deleniti provident mollitia sint eligendi impedit.
            </p>
            <button className='flex gap-10'>
                <GoTrash size={35} className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300' />
            </button>
        </div>

    );
};



export default CompleteTodo;