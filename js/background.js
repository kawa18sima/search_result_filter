window.onload = function(){
  chrome.storage.local.get(["filter"], function(data){
    let getData = document.getElementsByClassName("g");
    let array = [];
    for(let i=0; i<getData.length; i++){
      let url = document.getElementsByClassName("r")[i].firstElementChild.getAttribute('href');
      let flag = false;
      console.log(url);
      data.filter.forEach((ur)=>{
        if(url.indexOf(ur) !== -1){
          flag = true;
        }
      });
      if(flag){
        array.push(i);
      }
    }
    let max = array.length-1;
    for(let i=0; i<array.length; i++){
      getData[max - i].parentNode.removeChild(getData[max - i]);
    }
  });
}
