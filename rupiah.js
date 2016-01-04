/**
 * JavaScript Code Snippet
 * Convert Number to Rupiah & vice versa
 * https://gist.github.com/845309
 *
 * Copyright 2011-2012, Faisalman
 * Licensed under The MIT License
 * http://www.opensource.org/licenses/mit-license  
 *
 * Develop by Joko Irianto
 */


/*
	explaniton of convertToRupiah
	input -> out
	convertToRupiah(8000) -> 8.000
*/
function convertToRupiah (angka) {
	var rupiah = '';
	var angkarev = angka.toString().split('').reverse().join('');
	for (var i=0; i<angkarev.length; i++){
		if (i%3 == 0) {
			rupiah += angkarev.substr(i,3)+'.';
		}
	}
	return rupiah.split('', rupiah.length-1).reverse().join('');
}

/*
	explanation of convertToAngka
	input -> output
	convertToAngka('8.000') -> 8000
*/
function convertToAngka(rupiah) {
	return parseInt(rupiah.replace(/,.*|[^0-9]/g, ''), 10);
}

/*
	this method for scanning the input 
*/
document.addEventListener('DOMContentLoaded', function(){
	var input = document.getElementById('inputRupiah');
	var hasil = document.getElementById('hasil');

	input.value = 0;

	input.addEventListener('input', function(){
		if (input.value!='') {
			var temp = convertToAngka(input.value);
			input.value = convertToRupiah(temp);

			hasil.innerHTML = convertToRupiah(temp);
		} else {
			input.value = 0;
			hasil.innerHTML = '0';
		}
		// console.log('change');
	})
}, false);