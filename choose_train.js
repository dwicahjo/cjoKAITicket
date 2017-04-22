// Check the available train and submit it
var available_train = $('.itButton').length;
if(available_train>0){
	$('.itButton').click();
}
setInterval(function(){
	$('#input').submit();
}, 5000);

//loop semua object itbutton cari harga paling murah $('.itButton')[0].form.fare_adult.value 
//algo mencari prioritas
//pindah halaman
