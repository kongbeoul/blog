function hasJqueryObject( $elem ){
    return $elem.length > 0
}
var app = app || {}

app.init = function(){

    app.$writeForm = app.$body.find(".writeForm")
    app.$btnSubmit = app.$body.find(".btnSubmit")
}

app.clickHandler = function(e){
    e.preventDefault()
    var data = {
        title : app.$writeForm.find("input[type=text]").val(),
        author : "admin",
        date : ""+ new Date().getFullYear() + "-0" + (new Date().getMonth()+1) + "-" + new Date().getDate(),
        viewCon : app.$writeForm.find("textarea").val(),
        hit: 0,
        role : $(this).attr("data-role"),
        idx : $(this).attr('data-idx') !== undefined ? $(this).attr('data-idx') : null
    }
    $.ajax({
        url: "/submit",
        type: "POST",
        data: data,
        success : function(data){
            if( !data.redirect ){
                alert("제목과 내용을 입력해주세요")
            }
            else{
                window.location = data.redirect+"?"+"role="+data.role
            }
        }
    })
}


$(function(){
    app.$body = $('body')
    if( hasJqueryObject(app.$body.find('.btnSubmit'))){
        
        app.init()
        app.$btnSubmit.on('click', app.clickHandler)
    } 
})

