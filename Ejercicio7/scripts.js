((d)=>{
    const $cardShare = d.getElementById("card__share"),
    $cardProfile = d.getElementById("card__profile")

    $cardProfile.addEventListener('click',(e)=>{
        console.log(e.target.tagName);
        if(e.target.classList.contains("card__icon") || ( e.target.tagName == "path")){
            $cardShare.classList.remove("card__share-desactive")
            $cardShare.classList.add("card__share-active")
            $cardShare.classList.toggle("card__share-visible")
            $cardShare.classList.toggle("card__share-invisible")
        }
    })
    $cardShare.addEventListener('click',(e)=>{
        console.log(e.target.tag);
        if(e.target.classList.contains("card__icon") || ( e.target.tagName == "path")){
            $cardShare.classList.remove("card__share-active")
            $cardShare.classList.add("card__share-desactive")
            $cardShare.classList.remove("card__share-visible")
            $cardShare.classList.add("card__share-invisible")
        }
    })
})(document);