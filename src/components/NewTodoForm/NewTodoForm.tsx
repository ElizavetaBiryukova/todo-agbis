import { GoPaperAirplane } from "react-icons/go";
const NewTodoForm = () => {
    return (
        <div className='flex flex-col items-left gap-5 justify-between mb-4 rounded-2xl bg-zinc-100 p-5 w-full text-black border-t-2 border-t-pink-500 laptop:flex-row
        '>
            <input type='text'
                className='bg-transparent w-1/3 border-none outline-none text-l tablet:text-xl'
                placeholder='Add a title'
            />
            <input type='text'
                className='bg-transparent w-full border-none outline-none text-l tablet:text-xl'
                placeholder='Add a task'
            />
            <button className='flex gap-10'>
                <GoPaperAirplane size={35} className='text-gray-600 hover:text-pink-700 transition-colors ease-in-out duration-300 mr-1' />
            </button>
        </div>

    );
};



export default NewTodoForm;