export const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";



export const MENU_API_URL = (resId) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.64363&lng=77.2235803&restaurantId=${resId}`;