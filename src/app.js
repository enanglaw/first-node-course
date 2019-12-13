
const express=require('express')
const path=require('path')
const hbs =require('hbs')
const port=process.env.PORT || 2121
const app=express()
const staticPathDir=path.join(__dirname,'../public')
const staticPathDirForStyles=path.join(__dirname,'bootstrap')
const viewPathDir=path.join(__dirname,'../templates/views')


const partialPath=path.join(__dirname,'../templates/partials')
//testing git





app.use(express.static(staticPathDir))
//app.use(express.static(staticPathDirForStyles))



app.set('view engine','hbs')
app.set('views',viewPathDir)
hbs.registerPartials(partialPath)


app.get('/product',(req, res)=>{
 
   if(!req.query.search){
   return res.render('404',{title:'404: searched item not found'});
   }
   else
   {

    res.render('product', {products:listOfProduct(),name:'Enang Lawrence'});
   }

});
products=[{name:'Iphone', rating:4.7},{name:'tecno', rating:4.3},{name:'Sunsung', rating:4.7}];

const listOfProduct=(()=>
{
 
products.forEach(product => {
  console.log( product.name, product.rating);
});
return products;
});
listOfProduct();
app.get('/weather',(req, res)=>{
  res.render('weather',{
    weather:'weather page',name:'Enang Lawrence'

  });
});
app.get('*',(request, response)=>{
  response.render('404',{
      title:'resources not found',name:'Enang Lawrence'
  })
  })
app.listen(port,()=> {
    console.log('running and Listening live on local port 2121');
});
