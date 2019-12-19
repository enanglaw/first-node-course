const request =require('request')
const forecast=( latitude,longitude, callback)=>
{
 const url="https://api.darksky.net/forecast/816f344f0cd8857ee45bc86a1606fcf3/"+latitude+','+longitude;
 request({url:url,json:true},(error,{body})=>{
     if(error){
         callback('Unable to connect to weather ', undefined);
     }else if(body.error)
     {
        callback('Unable to find to location ', undefined);
     }
     else{
         console.log(body.dail)
        callback( undefined, body.daily.data[0].summary+ ' It is currently'+ body);
     }
 })
}