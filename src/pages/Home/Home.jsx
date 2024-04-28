import useFetch from "../../hooks/useFetch"
import Card from "../../components/Card"
import { debounce } from 'lodash';
import { useEffect, useState } from "react"

function Home() {
    const baseUrl = import.meta.env.VITE_API_URL

    const searchParams = new URLSearchParams(window.location.search);
    const queryPage = searchParams.get('page');
    const querySearch = searchParams.get('q');
    const queryMode = searchParams.get('mode');

    const [searchInput, setSearchInput] = useState(querySearch ? querySearch : "")
    const [mode, setMode] = useState(queryMode ? queryMode : "anime")
    const [page, setPage] = useState( queryPage && !isNaN(queryPage) ? parseInt(queryPage) : 1 )
    const [limit, setLimit] = useState(25)
    const emptyArr = new Array(25).fill(null);

    // Add proper url with query once mounted
    useEffect(() => {
        window.history.pushState({}, '', `/?mode=${mode}&q=${searchInput}&page=${page}`);
    }, []);

    let { data: list, setData, isPending, setIsPending, error } = useFetch(`${baseUrl}/${mode}?q=${searchInput}&page=${page}&limit=${limit}`)

    if(list) console.log(list)

    useEffect(() => {
        if(list) setPage(parseInt(list.pagination.current_page))
    }, [list])

    useEffect(() => {
        scrollToTop();
    }, [page]);

    const toggleMode = () => {
        const oldMode = mode
        const newMode = mode === "anime" ? "manga" : "anime"
        
        setPage(1)
        setData(null)
        setIsPending(true)

        setMode(newMode)

        window.history.pushState({}, '', `/?mode=${newMode}&q=${searchInput}&page=${1}`);
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
    }

    const updatePageNumber = (val) => {
        const newPage = val > 0 ? page+1 : page-1

        setPage(newPage)
        setData(null)
        setIsPending(true)
        window.history.pushState({}, '', `/?mode=${mode}&q=${searchInput}&page=${newPage}`);
    }

    const search = debounce((event) => {
        setPage(1)
        setLimit(25)
        setData(null)
        setIsPending(true)
        
        if(event.target.value) setSearchInput(event.target.value)
        else setSearchInput("")

        window.history.pushState({}, '', `/?mode=${mode}&q=${event.target.value}&page=${1}`);
    }, 500)
   
    return(
        <>
            <div className="w-full dark:bg-black duration-200 bg-white flex flex-col gap-5 py-10">
                <div className="px-2 gap-5 max-md:gap-2 w-full duration-200 dark:bg-black bg-white max-w-[1200px] mx-auto flex justify-center items-center">
                    <button disabled={!list} onClick={toggleMode} className={`${mode === "anime" ? "bg-orange-500 hover:bg-orange-500/90" : "bg-yellow-500 hover:bg-yellow-500/90"} disabled:bg-neutral-400 disabled:hover:bg-neutral-400 disabled:hover:cursor-not-allowed flex justify-center items-center duration-200 text-white px-3 py-2 rounded-full font-semibold`}>{mode[0].toUpperCase() + mode.substring(1)} </button>
                    <div className="border-neutral-300 dark:border-neutral-700 duration-200 w-full max-w-[400px] rounded-full border-2 py-2 px-3 flex justify-between items-center">
                        <input defaultValue={searchInput}  onInput={search} placeholder="Type to search..." className="dark:text-white text-black peer w-full bg-transparent focus:outline-none" type="text" name="" id="" />
                        <svg className="peer-focus:text-neutral-100 duration-200 text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path className="text-inherit" fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>
                    </div>
                </div>
                <div className="grid p-3 place-content-center place-items-center animeContainer max-w-[1200px] mx-auto h-fit w-full gap-x-5 gap-y-10">
                    { !isPending && list && list.data.map((item, index) => {
                        return (<Card title={item.title} img={item.images.jpg.image_url} url={item.url} key={item.mal_id + `${index}`} />)
                    })}

                    { isPending && !list && emptyArr.map((item, index) => {
                        return (
                            <div key={index} className="max-sm:max-w-32 aspect-[5/6] group w-full relative max-w-52 dark:bg-neutral-700 bg-neutral-200 animate-pulse rounded-md flex flex-col overflow-hidden">
                            </div>
                        )
                    })}
                </div>
            </div>
            {
                list && list.data.length != 0 && (<div className=" flex gap-5 dark:bg-black justify-center p-5">
                <button disabled={page == 1} onClick={() => updatePageNumber(-1)} className="disabled:text-neutral-500 disabled:hover:text-neutral-500 disabled:hover:cursor-not-allowed hover:text-neutral-400 duration-200 dark:text-white text-black">Previous</button>
                <span className="dark:text-white text-black font-bold select-none">{page}</span>
                <button disabled={!list.pagination.has_next_page} onClick={() => updatePageNumber(1)} className="disabled:text-neutral-500 disabled:hover:text-neutral-500 disabled:hover:cursor-not-allowed hover:text-neutral-400 duration-200 dark:text-white text-black">Next</button>
            </div>) 
            }
        </>
    )
}

export default Home