import { Suspense } from "react"
import Loading from "../loading"
import { BASE_URL } from "../utils/API"

async function fetchMovies(){
    const resp = await fetch(`${BASE_URL}movie/popular?api_key=${process.env.customKey}&page=1`, {
        cache: "no-store"
    })
    return resp.json()
}
export default async function Movies(){
    const popularMovies = await fetchMovies()
    return(
        <>
            <h1>Movies</h1>
            <Suspense fallback={<Loading />}>
                {
                    popularMovies.results.map(movie => (
                        <h1>{movie.title}</h1>
                    ))
                }
            </Suspense>
        </>
    )
}