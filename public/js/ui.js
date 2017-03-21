function hasJqueryObject( $elem ){
    return $elem.length > 0
}
var app = app || {}

app.init = function(){
    app.$more = app.$body.find('.more')
}

app.clickHandler = function(e){
    e.preventDefault()
    var data = {
        num: $(this).parents('tr').find('td').eq(0).text()
    }
    $.ajax({
        url: '/view',
        type: 'GET',
        data : data,
        success : function( data ){
            console.log(data)
        }
    })

}


$(function(){
    app.$body = $('body')
    if( hasJqueryObject(app.$body.find('.more'))){
        app.init()
        // app.$more.on('click', app.clickHandler)
    } 
})

