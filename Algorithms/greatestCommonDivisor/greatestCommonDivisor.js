function greatestCommonDivisor(n1, n2) {
	let nums1 = [], nums2 = [], nums3 = [],
		initNum = 0;

	for (let i=1; i<=n1; i++) {
		if (n1 % i === 0) {
			nums1.push(i);
		}
	}

	for (let i=1; i<=n2; i++) {
		if (n2 % i === 0) {
			nums2.push(i);
		}
	}

	for (let i=0; i<nums1.length; i++) {
		for (let j=initNum; j<nums2.length; j++) {
			if (nums1[i] === nums2[j]) {
				nums3.push(nums1[i]);
				initNum = j;
				break;
			}
		}
	}

	console.log(nums1);
	console.log(nums2);
	console.log(nums3);
	console.log(nums3[nums3.length-1]);
}

greatestCommonDivisor(24, 54);