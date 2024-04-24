import useFetch from "../../hooks/useFetch"
import Card from "../../components/Card"
import { useEffect, useState } from "react"
function Home() {
    const baseUrl = import.meta.env.VITE_API_URL

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(25)

    const { data: list, isPending, error } = useFetch(baseUrl + `/anime?page=${page}&limit=${limit}`)
    
    useEffect(() => {
        scrollToTop();
    }, [page]);

    // const pagination;

    if(!isPending){
        console.log(list.data)
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      }

    const updatePageNumber = (val) => {
        if(val > 0) setPage(page+1)
        else if(val < 0) setPage(page - 1)

        // scrollToTop()
    }
   
    return(
        <>
            <div className="w-full bg-black ">
                <div className="grid p-3 place-content-center place-items-center animeContainer max-w-[1200px] mx-auto h-fit w-full gap-5">
                    { !isPending && list.data.map(item => {
                        return (<Card title={item.title} img={item.images.jpg.image_url} key={item.mal_id} />)
                    })}
                </div>
            </div>
            <div className=" flex gap-5 bg-black justify-center p-5">
                <button disabled={page == 1} onClick={() => updatePageNumber(-1)} className="disabled:text-neutral-500 disabled:hover:text-neutral-500 disabled:hover:cursor-not-allowed hover:text-neutral-400 duration-200">Previous</button>
                <button onClick={() => updatePageNumber(1)} className="hover:text-neutral-400 duration-200">Next</button>
            </div>
        </>
    )
}

export default Home