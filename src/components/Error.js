import { useRouteError } from "react-router-dom"

export const Error = ()=>{
    const err = useRouteError();
    return(
        <div>
            <h1>Opss!!!!!!!!</h1>
            <h2>Something went wrong MANISH KI WAJAH SE GALTI HUI HAI </h2>
            <h2>{err.status}</h2>
        </div>
    )

}