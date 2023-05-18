$(function()
    {
        let numeros = '1234567890';
        let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
        $('.txtNombredeproducto').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            let caracter = String.fromCharCode(e.which);
            if(letras.indexOf(caracter) < 0)
                return false;
        })
        $('.txtValorproducto').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            let patron = numeros + '$.';
            let caracter = String.fromCharCode(e.which);
            if(patron.indexOf(caracter) < 0)
                return false;
        })
        $('.txtIDproducto').keypress(function(e)
        {
            // obtener el caracter presionado por el usuario
            // obtener el caracter presionado por el usuario
            
            let caracter = String.fromCharCode(e.which);
            if(numeros.indexOf(caracter) < 0)
                return false;
        })
    
    
        $('.txtCantidadproductoscomprados').keypress(function(e)
        {
            let patron = numeros ;
            let caracter = String.fromCharCode(e.which);
            if(patron.indexOf(caracter) < 0)
                return false;
        })
    
        $('.btnLimpiar').click(function()
        {
            $('.txtNombredeproducto, .txtIDproducto, .txtValorproducto, .txtCantidadproductoscomprados').val('');
            $('.txtNombredeproducto').focus();
        });
    
    
        let emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.([a-zA-Z]{2,4})+$/
    
        $('.btnRegistrar').click(function()
        {
    
            if(!$.trim($('.txtNombredeproducto').val()))
            {
                alert("Debe especificar nombre de producto");
                $('.txtNombredeproducto').focus();
            }
            else  if(!$.trim($('.txtIDproducto').val()))
            {
                alert("Debe especificar el id del producto");
                $('.txtIDproducto').focus();
            }
            else  if(!$.trim($('.txtValorproducto').val()))
            {
                alert("Debe especificar el valor del producto");
                $('.txtValorproducto').focus();
            }
    
            else  if(!$.trim($('.txtCantidadproductoscomprados').val()))
            {
                alert("Debe especificar la cantidad de productos");
                $('.txtCantidadproductoscomprados').focus();
            }
            

    
        })
    
    
    
    });