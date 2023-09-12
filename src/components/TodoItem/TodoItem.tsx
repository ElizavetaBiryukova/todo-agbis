import { GoCheckCircle, GoPencil, GoTrash } from 'react-icons/go'

const TodoItem = () => {
    return (
        <div className='flex flex-col items-left gap-5 justify-between mb-8 rounded-2xl bg-zinc-100 p-5 w-full text-black border-t-2 border-t-indigo-500 laptop:flex-row
        '>
            <p className='text-l tablet:text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam velit deleniti provident mollitia sint eligendi impedit.
            </p>
            <div className='flex gap-10'>
                <GoCheckCircle size={30} className='text-gray-600 hover:text-pink-700 transition-colors ease-in-out duration-300' />
                <GoTrash size={30} className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300' />
                <GoPencil size={30} className='text-gray-600 hover:text-pink-700 transition-colors ease-in-out duration-300' />
            </div>
        </div>

    );
};



export default TodoItem;