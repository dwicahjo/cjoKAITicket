// Check the available train and submit it
var available_train = $('.itButton').length;
var array_of_trains = new Array();
var desired_train_name = "SAWUNGGALIH"

//  Select Mode, first is just click the last available ticket
if(available_train>0){
	//  $('.itButton').click();
	// find_by_name();
	find_by_lowest_price();
	// find_multiple_seat(4);
	// find_multiple_seat_and_by_name(2)
	// find_multiple_seat_and_by_departure_time(2)
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
	if(array_of_trains.length == 0){
		setInterval(function(){
		$('#input').submit();
		}, 5000);
	}else{
	array_of_trains.sort(compare);
	array_of_trains[0].click();
	}
}

//  Function to find ticket by multiple person 
function find_multiple_seat(seat){
	for(i=0; i<available_train;i++){
		if($('.itButton')[0].form.ticket_seat.value >= seat){
			array_of_trains.push($('.itButton')[i]);
		}		
	}
	if(array_of_trains.length == 0){
		setInterval(function(){
		$('#input').submit();
		}, 5000);
	}else{
	array_of_trains.sort(compare);
	array_of_trains[0].click();
	}
}

//  Function to find ticket by multiple person and by name
function find_multiple_seat_and_by_name(seat){
	for(i=0; i<available_train;i++){
		if(($('.itButton')[i].form.train_name.value == desired_train_name) && ($('.itButton')[i].form.ticket_seat.value >= seat)){
			array_of_trains.push($('.itButton')[i]);
		}		
	}
	if(array_of_trains.length == 0){
		setInterval(function(){
		$('#input').submit();
		}, 5000);
	}else{
	array_of_trains.sort(compare);
	array_of_trains[0].click();
	}
}

// Function to find ticket by multiple person and by departure time
function find_multiple_seat_and_by_departure_time(seat){
	for(i=0; i<available_train;i++){
		for(j=0; j<departure_time.length; j++)
		if(($('.itButton')[i].form.train_dep_time.value == departure_time[j]) && ($('.itButton')[i].form.ticket_seat.value >= seat)){
			array_of_trains.push($('.itButton')[i]);
		}		
	}
	if(array_of_trains.length == 0){
		setInterval(function(){
		$('#input').submit();
		}, 5000);
	}else{
	array_of_trains.sort(compare);
	array_of_trains[0].click();
	}
}

// Comparison function to sort by lower price
function compare(a,b) {
  if (a.form.fare_adult.value < b.form.fare_adult.value)
    return -1;
  if (a.form.fare_adult.value > b.form.fare_adult.value)
    return 1;
  return 0;
}