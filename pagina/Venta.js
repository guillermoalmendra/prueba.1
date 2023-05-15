$(function()
{
    let numeros = '1234567890';
    let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';
    
    
    $('.txtNombre').keypress(function(e)
    {
        // obtener el caracter presionado por el usuario
        let caracter = String.fromCharCode(e.which);
        if(letras.indexOf(caracter) < 0)
            return false;
    })
    $('.txtContraseña').keypress(function(e)
    {
        let patron = letras + numeros + '@._-';
        let caracter = String.fromCharCode(e.which);
        if(patron.indexOf(caracter) < 0)
            return false;
    })

    $('.btnLimpiar').click(function()
    {
        $('.txtNombre, .txtContraseña').val('');
        $('.txtNombre').focus();
    });


    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/

    $('.btnAceptar').click(function()
    {
        if(!$.trim($('.txtNombre').val()))
        {
            alert("Debe especificar nombre");
            $('.txtNombre').focus();
        }
        else  if(!$.trim($('.txtContraseña').val()))
        {
            alert("Debe especificar contraseña");
            $('.txtContraseña').focus();
        }
       

    })



});