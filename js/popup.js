let app = new Vue({
  el:"#app",
  data: {
    url:"",
    filter:[]
  },
  methods:{
    addFilter:function(){
      if(this.url === "")return;
      this.filter.push(this.url);
      chrome.storage.local.set({filter: this.filter}, ()=>{});
      this.url = "";
    },
    createTab:(url)=>{
      chrome.tabs.create({url: url, active: false});
    },
    deleteUrl:function(url){
      this.filter = this.filter.filter((ur)=> ur !== url);
      chrome.storage.local.set({filter: this.filter}, ()=>{});
    }
  },
  created:function(){
    chrome.storage.local.get(["filter"], function(data){
      this.filter = data.filter;
    }.bind(this));
  }
});
