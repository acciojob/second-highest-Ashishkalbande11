function secondHighest(arr) {
			if (arr.length < 2) {
				return -Infinity;
			}

			let highest = -Infinity;
			let secondHighest = -Infinity;

			for (let i = 0; i < arr.length; i++) {
				let num = parseInt(arr[i]);
				if (num > highest) {
					secondHighest = highest;
					highest = num;
				} else if (num > secondHighest && num < highest) {
					secondHighest = num;
				}
			}

			if (secondHighest === -Infinity) {
				return -Infinity;
			}

			return secondHighest;
		}

		function Main() {
			var n = prompt("Enter the number of elements");
			var arr = [];
			for (var i = 0; i < n; i++) {
				arr[i] = prompt("Enter element " + (i + 1));
			}
			alert(secondHighest(arr));
		}

		Main();