document.getElementById("heart").addEventListener("click",function(){
    const p=parseInt(document.getElementById("value").innerText);
    const q=p+1;
    document.getElementById("value").innerText=q
})