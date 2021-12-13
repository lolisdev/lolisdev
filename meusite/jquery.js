$(function(){
    $('#formacao').hide();
    $('#projetos').hide();
    $('#contato').hide();

    $('#btnquemsoueu').click(function(){
        $('#quemsoueu').fadeIn(2000);
        $('#formacao').hide();
        $('#projetos').hide();
        $('#contato').hide();
    })

    $('#btnformacao').click(function(){
        $('#quemsoueu').hide();
        $('#formacao').fadeIn(2000);
        $('#projetos').hide();
        $('#contato').hide();
    })

    $('#btnprojetos').click(function(){
        $('#quemsoueu').hide();
        $('#formacao').hide();
        $('#projetos').fadeIn(2000);
        $('#contato').hide();
    })

    $('#btncontato').click(function(){
        $('#quemsoueu').hide();
        $('#formacao').hide();
        $('#projetos').hide();
        $('#contato').fadeIn(2000);
    })
});