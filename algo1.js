/********************** ALGORITHM 1 **********************
** Given a sorted array of numbers and a separate number.
** Find the pair of numbers from array which add up to the 
** given number.
**********************************************************/

function findPair(arr, sum) {
	let i = 0, 
		j = arr.length - 1,
		numberOfPairs = 0;

	while(i < j) {
		if((arr[i]+arr[j]) === sum) {
			i = i++;
			j = j--;
			numberOfPairs = numberOfPairs++;
		} else if(arr[i]+arr[j] > sum) {
			i = i++;
		} else {
			j = j--;
		}
	}

	return numberOfPairs;
}

/********************** ALGORITHM 1 **********************
** Given a unsorted array of numbers and a separate number.
** Find the pair of numbers from array which add up to the 
** given number.
**********************************************************/