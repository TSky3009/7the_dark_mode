var Dark = document.querySelector('#Dark');
Dark.checked = false;
Dark.addEventListener('click',(e)=>{
    if(e.target.checked){
        document.body.classList.add('Dark');
        document.body.classList.remove('Corps');
    }
    else{
        document.body.classList.remove('Dark')
        document.body.classList.add('Corps');
    }

})
