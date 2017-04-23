// Check the available train and submit it
var available_train = $('.itButton').length;
var array_of_trains = new Array();
var desired_train_name = "FAJAR UTAMA YK"

//  Select Mode, first is just click the last available ticket
if(available_train>0){
	//  $('.itButton').click();
	//  find_by_name();
	find_by_lowest_price();
}

//  Refresher
setInterval(function(){
	$('#input').submit();
}, 5000);

//  Function to find ticket by lowest price 
function find_by_lowest_price(){
	for(i=0; i<available_train;i++){
		array_of_trains.push($('.itButton')[i]);		
	}
	array_of_trains.sort(compare);
	array_of_trains[0].click();
}

//  Function to find ticket by desired train name and lowest price
function find_by_name(){
	for(i=0; i<available_train;i++){
		if($('.itButton')[i].form.train_name.value == desired_train_name){
			array_of_trains.push($('.itButton')[i]);
		}		
	}
	array_of_trains.sort(compare);
	array_of_trains[0].click();
}

// Comparison function to sort by lower price
function compare(a,b) {
  if (a.form.fare_adult.value < b.form.fare_adult.value)
    return -1;
  if (a.form.fare_adult.value > b.form.fare_adult.value)
    return 1;
  return 0;
}