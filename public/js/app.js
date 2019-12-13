console.log('Client side javascript is loaded')

/*fetch('http://puzzle.mead.io/puzzzle').then((response)=>
    {
        response.json().then((data)=>{
            if(data.error){
               console.log(data.error)
            }
            else
            console.log(data);
        })

    })*/
    
    

   

    const formresult=document.querySelector('form')
    formresult.addEventListener('submit',(e)=>{
        e.preventDefault()


        const x=document.getElementById('input_id').value
        fetch('/weather?address='+ x ).then((response)=>
    {
        response.json().then((data)=>{
            if(data.error){
               console.log(data.error)
            }
            else
            {
            console.log(data.location);
            console.log(data.forecast);
            }
        })

	})
   

    })