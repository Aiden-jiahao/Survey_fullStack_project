// write function to retrieve a blob of json
// make ajax request; use the fetch func
//https://rallycoding.herokuapp.com/api/music_albums 

// now write fetch function: 

/*
    function fetchAlbums(){
    fetch('https://rallycoding.herokuapp.com/api/music_albums').then(res=>res.json()).then(json=>console.log(json));
    /* whenever we make request with fetch, fetch RETRUNS A PROMISE. that promise resolves with an object that representes this request. to get kinda notification on promise, we use .then()  */
    // now we can this function and make it work: 
   // fetchAlbums();




   // now we make it async/await function, specifically handle the async code inside any type of function:
 /* }
await function fetchAlbums(){
    const res=await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json=await res.json();

    console.log(json);
}

fetchAlbums(); 



// we can also make fetchAlbums an arrow function: 
const fetchAlbums= async()=>{
    const res=await fetch('')
    const json=await res.json();
    console.log('json');
}


fetchAlbums(); 

*/