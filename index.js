
let url="https://youtube.googleapis.com/youtube/v3/search?key="

let api_key="AIzaSyCiCJh8u7P_pELtEUgXqpOWVgcXcbKIORE"




async function searchbtn(){

    document.querySelector("#container").innerHTML=null

    var inputdata=document.querySelector("#inputdata").value
    try{
       let res=await fetch(`${url}${api_key}&type=video&q=${inputdata}&maxResults=20&part=snippet`);
       let data=await res.json();
       
       let searchObj=data.items
       searchResult(searchObj)
       console.log(searchObj)
    }
    catch(err){
          console.log(err)
    }
}

const searchResult= (searchObj)=>{
   searchObj.map((item)=>{

// distructuring 

const {snippet: {thumbnails:{medium:{url}}} }=item

const {id:{videoId}}=item
console.log(videoId) // video ID

const {snippet: {title} }=item  //video title

 console.log(url)//thumbnail url
let thumbCard=document.createElement("div")
thumbCard.style.display="grid"

let videoPage1= ()=>{
   localStorage.setItem("clicked_videoId", videoId)
   window.location="videoPage.html"
}


thumbCard.addEventListener("click" , videoPage1)


//onclick function 

 




let image=document.createElement("img")
image.src=url

image.style.width="100%"
image.style.border="0px"

let mytitle=document.createElement("h5")
mytitle.textContent=title

thumbCard.append(image,title)
document.querySelector("#container").append(thumbCard)

   })
 
}
















async function homefun(){

   document.querySelector("#container").innerHTML=null

   var inputdata=document.querySelector("#inputdata").value
   try{
      let res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${api_key}&maxResults=20&part=snippet&regionCode=in`);
      let data=await res.json();
      
      let searchObj=data.items
      
      console.log(searchObj)
      appendHome(searchObj)
   }
   catch(err){
         console.log(err)
   }
}

const appendHome=(searchObj)=>{
   searchObj.map((item)=>{
        


        // distructuring 

const {snippet: {thumbnails:{medium:{url}}} }=item

const {snippet: {title} }=item  //video title

const {id}=item
console.log(id) // video ID


 console.log(url)//thumbnail url
let thumbCard=document.createElement("div")
thumbCard.style.display="grid"
 

let videoPage1= ()=>{
   localStorage.setItem("clicked_videoId", id)
   window.location="videoPage.html"
}


thumbCard.addEventListener("click" , videoPage1)




 




let image=document.createElement("img")
image.src=url

image.style.width="100%"
image.style.border="0px"





thumbCard.append(image,title)
document.querySelector("#container").append(thumbCard)


      
   })
}



homefun()
// https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${api_key} 


 