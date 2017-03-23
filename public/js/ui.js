function hasJqueryObject( $elem ){
    return $elem.length > 0
}
var app = app || {}

app.init = function(){

    app.$writeForm = app.$body.find(".writeForm")
    app.$btnSubmit = app.$body.find(".btnSubmit")
    app.$prev = app.$body.find(".prev")
    app.$next = app.$body.find(".next")
    app.$countWrap = app.$body.find(".countWrap")
    app.currentPage = 0

    // app.$countWrap.find(".count > a").eq(0).addClass("on")
    // app.$countWrap.find(".count").each(function(idx){
    //     var $that = $(this)
    //     $that.find("a").attr("data-idx", idx)
    // })
    



}

app.sClickHandler = function(e){
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
app.pClickHandler = function(e){
    e.preventDefault()
    var idx = parseInt($(this).attr("data-idx"))
    var url = window.location.href.split("?");
    var data = {
        page : idx
    }
    app.$countWrap.find(".count > a").removeClass("on").filter("[data-idx="+idx+"]").addClass("on")
    app.currentPage = idx    
    $.ajax({
        url : url[0],
        type: "GET",
        data : data,
        success : function(){
            console.log(url[0])
        }
    })

}

$(function(){
    app.$body = $('body')
    app.init()
    if( hasJqueryObject(app.$body.find(".pagingWrap"))){
        // app.$countWrap.find(".count > a").on("click", app.pClickHandler)
    }
    if( hasJqueryObject(app.$body.find('.btnSubmit'))){
        app.$btnSubmit.on('click', app.sClickHandler)
    } 
})

