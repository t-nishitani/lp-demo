$(function(){
    $('.toggle').on('click', function(){
        targetId = $(this).attr('id').slice('7'); //toggle-を取り除いて、対象要素のIDを取得
        $('#'+targetId).toggle();
    })
});
