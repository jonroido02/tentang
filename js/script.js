const txtElement = ['AMIK MBP', 'Medan', 'Sumut'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){
	
	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textcontent = words;

	setTimeout(ngetik, 500);

})();
