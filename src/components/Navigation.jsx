function Navigation() {
    return(
        <nav className="w-full bg-black">
            <div className="flex justify-between items-center max-w-[1200px] mx-auto w-full p-5 font-bold text-xl ">
                {/* Logo */}
                <div>
                    <span className="text-orange-500">Ani</span>
                    <span className="text-yellow-500">Manga</span>
                    <span className="text-xs font-normal"> Archive</span>
                </div>

                {/* <button className="w-10 aspect-video bg-neutral-400 p-1 rounded-full relative">
                    <span className="absolute top-[50%] -translate-y-[50%] left-[5%] bg-white rounded-full w-1/2 aspect-square"></span>
                </button> */}

                <button className="w-10 aspect-video bg-neutral-600 p-1 rounded-full relative">
                    <span className="absolute top-[50%] -translate-y-[50%] right-[5%] bg-black rounded-full w-1/2 aspect-square"></span>
                </button>
            </div>
            
        </nav>
    )
}

export default Navigation