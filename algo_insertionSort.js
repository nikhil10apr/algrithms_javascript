/*********INSERTION SORT*********/
function insertionSort(arr) {
	for(var i = 1; i < arr.length; i++) {
		const key = arr[i];
		let j = i-1;
		while(j >= 0 && key < arr[j]) {
			arr[j+1] = arr[j];
			arr[j] = key;
			j -= 1;
		}
	} 
}