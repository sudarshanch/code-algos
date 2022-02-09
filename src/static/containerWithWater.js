// https://leetcode.com/problems/container-with-most-water/submissions/
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    //console.log(height)
    let maxArea =0 ;
    for (var p1=0; p1<height.length;p1++) {
        for (var p2=p1+1; p2<height.length;p2++) {
            const width = p2-p1;
            const aHeight = Math.min(height[p1], height[p2]);
            const area = width * aHeight;
            maxArea = Math.max(maxArea, area);

        }
    }
    console.log(maxArea)
    return maxArea;
    
};

var height= [1,8,6,2,5,4,8,3,7];
maxArea(height);

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea1 = function(height) {
    //console.log(height)
    let maxArea =0, p1=0, p2=height.length - 1;
    while (p1 < p2) {
        const aHeight = Math.min(height[p1], height[p2]);
        const width = p2 - p1;
        const area = width * aHeight;
        maxArea = Math.max(maxArea, area);
        console.log(p1, p2, area, width, aHeight, maxArea);
        if (height[p1] <= height[p2]) {
            p1++;
        } else {
            p2--;
        }

    }
    return maxArea;
};

maxArea1(height);

//console.log("a is", a)  
a = 10;
function myFunction() {
    console.log(this);
}

myfunc = () => {
    console.log(this);
}

myfunc();
  