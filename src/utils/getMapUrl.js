export function getMapUrl(map){
    const queryParams = {
        width: "100%", //width
        height: "100%", //height
        hl: "en", // language = english
        q: map, // address of the user
        z: "20", // zoom level
        ie: "UTF8", // character encoding for url
        iwloc: "B", // showing the marker on the map for the specified location
        output: "embed" // embedding the map on the web page
    }
    const GOOGLE_MAPS_ROOT_URL = "https://maps.google.com/maps?";
    const searchParams = new URLSearchParams(queryParams).toString();
    const url = GOOGLE_MAPS_ROOT_URL + searchParams;
    return (url);
}