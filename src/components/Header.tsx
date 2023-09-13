import { ToggleLang } from "./ToggleLang";



const Header = () => {
    return (
        <header className="flex justify-between bg-indigo-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-10 py-5">
            <h1 className="text-2xl font-mono font-bold text-black-600 tablet:text-3xl desktop:text-4xl">Todo List</h1>
            <ToggleLang />
        </header>
    );
};

export default Header;