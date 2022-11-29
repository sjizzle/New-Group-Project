(function() {
    function Start()
    {
        console.log('App Has started');
        let deleteButton = document.querySelectorAll('.btn-danger');
    for(button of deleteButton)
    {
        button.addEventListener('click',(event)=>{
            if(!confirm('Are you SURE?'))
            {
                event.preventDefault();
                window.location.assign('/study-list');
            }
        });
    }
    }
    window.addEventListener('load',Start);
})();
