import { useState,useEffect } from "react"
import { RestaurantCard,withOpenLabel } from "./RestaurantCard.js"
import {Shimmer} from "../components/Shimmer.js";
import { Link } from "react-router-dom";
import {useOnlineStatus} from "../utils/useOnlineStatus.js"




export const Body = ()=>{

   const [restaurantList,setrestaurantList] =useState([])
   const [filteredRestaurant,setfilteredRestaurant]=useState([])
   const [searchText,setseactText] = useState("");

   const RestaurantCardOpen = withOpenLabel(RestaurantCard)

   

    useEffect(()=>{
        fetchData()
            },[])

    const fetchData = async()=>{
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.64363&lng=77.2235803&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
        const json = await data.json();
        console.log(json)
    

        setrestaurantList(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[])
        setfilteredRestaurant(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||[])
        
    }

    const onlineStatus=useOnlineStatus()

    if(onlineStatus===false) return <h1>looks like you are offline!!! Please check your internet connections</h1>

    if(restaurantList.length===0){
        return <Shimmer/>
    }
    
    return (
       <div className="body">
            <div className="filter flex ">
                <div className="search">
                    <input type="text" className="search-box bg-cyan-300 p-4 ml-4 rounded-2xl" value={searchText}
                    onChange={(e)=>setseactText(e.target.value)}
                    ></input>
                    <button className=" bg-pink-400 ml-4 rounded-2xl p-4" onClick={()=>{
                        

                    const filteredRestaurant =
                    restaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   setfilteredRestaurant(filteredRestaurant)
                    }}>search</button>
                </div>
                <button className="filter-btn bg-violet-700 ml-4 rounded-2xl p-2" onClick={()=>{
                    const filteredRes=restaurantList.filter((res)=>(
                        res.info.avgRating>4.5

                    
                    ))
                    setfilteredRestaurant(filteredRes)
                }}>
                    
                Top Rated Restaurant
                </button>
            </div>
            <div className="CardContainer flex flex-wrap">
                {filteredRestaurant.map((res)=>(
                    <Link  key = {res?.info?.id} to={"/restaurants/"+res.info.id} >
                        {res?.info?.isOpen?<RestaurantCardOpen resData={res}/>:<RestaurantCard  resData={res}/>}</Link>
                ))}
                
              

               

            </div>
       </div>
    )
}