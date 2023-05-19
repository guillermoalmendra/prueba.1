$(function()
    {
        let numeros = '1234567890';
        let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
        $('.txtApellido').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            let caracter = String.fromCharCode(e.which);
            if(letras.indexOf(caracter) < 0)
                return false;
        })
        $('.txtNombre').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            let caracter = String.fromCharCode(e.which);
            if(letras.indexOf(caracter) < 0)
                return false;
        })
        $('.txtFolio').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            // obtener el caracter presionado por el usuario
            let caracter = String.fromCharCode(e.which);
            if(numeros.indexOf(caracter) < 0)
                return false;
        })
    
        $('.txtValor').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            // obtener el caracter presionado por el usuario
            let caracter = String.fromCharCode(e.which);
            if(numeros.indexOf(caracter) < 0)
                return false;
        })
    
        $('.txtEmail').keypress(function(e)
        {
            let patron = letras + numeros + '@.-';
            let caracter = String.fromCharCode(e.which);
            if(patron.indexOf(caracter) < 0)
                return false;
        })
    
        $('.btnLimpiar').click(function()
        {
            $('.txtFolio, .txtValor').val('');
            
        });
    

    
        $('.btnRegistrar').click(function()
        {
    
            if(!$.trim($('.txtFolio').val()))
            {
                alert("debe especificar el folio");
                $('.txtFolio').focus();
            }
            else  if(!$.trim($('.txtValor').val()))
            {
                alert("Debe especificar el valor");
                $('.').focus();
            }
           
        })
    
    
    
    });