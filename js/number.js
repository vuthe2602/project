
$('.minus').click(function(){
    if($('.number').val() <= 1){
        $('.number').val(1);
    }else{
        $('.number').val(parseInt($('.number').val()) - 1);
    }
})

$('.plus').click(function(){
        $('.number').val(parseInt($('.number').val()) + 1);
})

