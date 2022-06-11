const baseUrl = "https://thatcopy.pw/catapi/rest/";
const seeCats=document.getElementById("see-cats")
const getCats=async () =>{
    try{
    const data = await fetch (baseUrl);
    const json = await data.json();
    return json.webpurl;}
    catch(e){
       document.write(e.message) 
    }  
}


const loadImg=async ()=>{
    seeCats.src=await getCats();
}

seeCats.addEventListener('click',loadImg);


loadImg();