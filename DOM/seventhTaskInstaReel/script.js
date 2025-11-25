const reelsData = [
  {
    id: 1,
    video: "./videos/1.mp4",
    profileImg: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    userName: "Aarav Tech",
    caption: "Late night coding grind 🔥",
    likeCount: 2345,
    commentCount: 123,
    shareCount: 42,
    isFollow: false,
    isLiked: false,
    isMuted : true,
  },

  {
    id: 2,
    video: "./videos/3.mp4",
    profileImg: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    userName: "Fitness Rahul",
    caption: "Never skip workout 💪",
    likeCount: 9876,
    commentCount: 876,
    shareCount: 210,
    isFollow: true,
    isLiked: true,
    isMuted : true,
  },

  {
    id: 3,
    video: "./videos/4.mp4",
    profileImg: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    userName: "Aditi Travels",
    caption: "Sunset vibes at the beach 🌅",
    likeCount: 5634,
    commentCount: 324,
    shareCount: 120,
    isFollow: false,
    isLiked: false,
    isMuted : true,
  },

  {
    id: 4,
    video: "./videos/5.mp4",
    profileImg: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    userName: "Gamer X",
    caption: "New gaming setup 🔥🎮",
    likeCount: 12000,
    commentCount: 950,
    shareCount: 340,
    isFollow: true,
    isLiked: false,
    isMuted : true,
  },

  {
    id: 5,
    video: "./videos/6.mp4",
    profileImg: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    userName: "Arjun Foodie",
    caption: "Street food hits different 😍🔥",
    likeCount: 7600,
    commentCount: 450,
    shareCount: 150,
    isFollow: true,
    isLiked: true,
    isMuted : true,
  }
];

let allReels = document.querySelector('.card-allReel');


function addData(){
let sum = '';
reelsData.forEach((elem ,idx)=>{
    // console.log(elem);
    sum += ` <div class="reel">
            <video autoplay ${elem.isMuted ? 'muted' : ''} loop src="${elem.video}"></video>
            <div class="bottom">
            <div class = "muted" id ="${idx}"> 
                 ${elem.isMuted?'<i class="ri-volume-mute-line"></i>':'<i class="ri-volume-up-line"></i>'}
            </div>
                <div class="bottom-top">
                <img src="${elem.profileImg}" alt="${elem.id}">
                <h3>${elem.userName}</h3>
                <button  id="${idx}"  class= "follow">${elem.isFollow ? "unfollow" : "follow"}</button>
                </div>
                <div class="bottom-bottom">
                <h4>${elem.caption}</h4>
                </div>
            </div>
            <div class="right">
                <span id="${idx}" class = "like">
                    ${ elem.isLiked ? ' <i class="ri-heart-fill red"></i>' :'<i  class="ri-heart-line"></i>'}
                    <p>${elem.likeCount}</p>
                </span>
                <span id="${elem.id}">
                    <i class="ri-chat-1-fill"></i>
                    <p>${elem.shareCount}</p>
                </span>
                <span id="${elem.id}">
                    <i class="ri-share-fill"></i>
                    <p>54</p>
                </span>
                <span id="${elem.id}">
                    <i class="ri-more-2-fill"></i>
                   
                </span>
            </div>
            </div>`
});
allReels.innerHTML = sum;
}
addData();

allReels.addEventListener('click',(dets)=>{
    // console.log('hello');
    // console.log(reelsData[dets.target.id].likeCount);
if(dets.target.className === "like"){
    if(!reelsData[dets.target.id].isLiked){
            reelsData[dets.target.id].likeCount++;
            reelsData[dets.target.id].isLiked =true;
        }else{
        reelsData[dets.target.id].likeCount--;
            reelsData[dets.target.id].isLiked =false; 
        }

         addData(); 
}
if(dets.target.className === 'follow'){
    if(!reelsData[dets.target.id].isFollow){
        reelsData[dets.target.id].isFollow = true;
    }else{
        reelsData[dets.target.id].isFollow = false;
    }

     addData(); 
}
    
if (dets.target.className === "muted") {
    let current = Number(dets.target.id);

    
    if (reelsData[current].isMuted === false) {

       
        reelsData[current].isMuted = true;

    } else {
        
        reelsData.forEach(elem => elem.isMuted = true);

        reelsData[current].isMuted = false;
    }

    addData();
}

   
      
    
})