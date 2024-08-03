var inputval = document. querySelector ('#cityinput')
var btn = document. querySelector ('#add');
var city = document. querySelector ('#cityoutput' )
var descrip = document. querySelector ('#description')
var temp = document. querySelector ('#temp' )
var wind = document. querySelector ('#wind' )
apik = "7ba2556e87722fb5d4f41ab533222686"

function convertion (val){
}
btn.addEventListener ('click',()=>{
    
        fetch( 'https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
        •then (res => res. json())
        • then (data＝>{
        var nameval = data [ 'name'];
        var descrip = datal ['weather']['0'] ['description'];
        var tempature = datal ['main'] ['temp'];
        var wndspd = datal ['wind'] ['speed '];
        }
        
})