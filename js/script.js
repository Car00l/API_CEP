$(document).ready(function(){

    $('.btn').click(function(e){
        e.preventDefault()

        let cep = $('#CEP').val()

        let url = `viacep.com.br/ws/${cep}/json/`

        $.ajax({
            type: 'GET',
            dataType: 'json',
        })

        console.log(url)
    })

})