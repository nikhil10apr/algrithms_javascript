/*********MERGE SORT*********/
function mergeSort(arr) {
	if(arr.length === 1) {
		return arr;
	}

	let mid, i = 0, j = 0;

	if(arr.length % 2) {
		mid = parseInt(arr.length/2) + 1;
	} else {
		mid = arr.length / 2;
	}

	const leftArr = mergeSort(arr.slice(0, mid));
	const rightArr = mergeSort(arr.slice(mid));
	const outputArr = [];
	
	while(i < leftArr.length && j < rightArr.length) {
		if(leftArr[i] < rightArr[j]) {
			outputArr.push(leftArr[i]);
			i++;
		} else if(leftArr[i] > rightArr[j]) {
			outputArr.push(rightArr[j]);
			j++;
		} else {
			outputArr.push(leftArr[i]);
			outputArr.push(rightArr[j]);
			i++; j++;
		}
	}

	if(leftArr[i] === undefined) {
		outputArr.push(...rightArr.slice(j));
	}

	if(rightArr[j] === undefined) {
		outputArr.push(...leftArr.slice(i));
	}

	return outputArr
}