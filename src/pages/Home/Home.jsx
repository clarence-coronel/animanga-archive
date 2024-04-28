import useFetch from "../../hooks/useFetch"
import Card from "../../components/Card"
import { useEffect, useState } from "react"
function Home() {
    const baseUrl = import.meta.env.VITE_API_URL

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(25)

    let { data: list, setData, isPending, setIsPending, error } = useFetch(baseUrl + `/anime?page=${page}&limit=${limit}`)
    
    const emptyArr = new Array(25).fill(null);

    useEffect(() => {
        scrollToTop();
    }, [page]);

    // const pagination;

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      }

    const updatePageNumber = (val) => {
        if(val > 0) setPage(page+1)
        else if(val < 0) setPage(page - 1)
        setData(null)
        setIsPending(true)
    }
   
    return(
        <>
            <div className="w-full dark:bg-black duration-200 bg-white">
                <div className="grid p-3 place-content-center place-items-center animeContainer max-w-[1200px] mx-auto h-fit w-full gap-x-5 gap-y-10">
                    { !isPending && list && list.data.map(item => {
                        return (<Card title={item.title} img={item.images.jpg.image_url} key={item.mal_id} />)
                    })}

                    { isPending && !list && emptyArr.map((item, index) => {
                        return (
                            <div key={index} className="max-sm:max-w-32 aspect-[5/6] group w-full relative max-w-52 dark:bg-neutral-700 bg-neutral-200 animate-pulse rounded-md flex flex-col overflow-hidden">
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className=" flex gap-5 dark:bg-black justify-center p-5">
                <button disabled={page == 1} onClick={() => updatePageNumber(-1)} className="disabled:text-neutral-500 disabled:hover:text-neutral-500 disabled:hover:cursor-not-allowed hover:text-neutral-400 duration-200 dark:text-white text-black">Previous</button>
                <button onClick={() => updatePageNumber(1)} className="hover:text-neutral-400 duration-200 dark:text-white text-black">Next</button>
            </div>
        </>
    )
}

export default Home