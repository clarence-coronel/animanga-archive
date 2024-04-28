function Navigation({ themeSwitch, theme  }) {

    return(
        <nav className="w-full dark:bg-black shadow-md dark:shadow-none duration-200 z-50 backdrop-blur-[50px]">
            <div className="flex justify-between items-center max-w-[1200px] mx-auto w-full p-5 font-bold text-xl ">
                {/* Logo */}
                <div>
                    <span className="text-orange-500">Ani</span>
                    <span className="text-yellow-500">Manga</span>
                    <span className="text-sm font-medium italic text-black dark:text-white"> Archive</span>
                </div>

                <button onClick={themeSwitch} className="dark:bg-neutral-600 duration-200 w-10 aspect-video bg-neutral-300 p-1 rounded-full relative">
                    <span className={`${theme === "dark" ? "toDark" : "toLight"} dark:bg-black/80 absolute duration-200 top-[50%] bg-white rounded-full w-1/2 aspect-square`}></span>
                </button>

                {/* <button onClick={themeSwitch} className="w-10 aspect-video bg-neutral-600 p-1 rounded-full relative">
                    <span className="absolute top-[50%] -translate-y-[50%] left-[5%] bg-black rounded-full w-1/2 aspect-square"></span>
                </button> */}
            </div>
            
        </nav>
    )
}

export default Navigation