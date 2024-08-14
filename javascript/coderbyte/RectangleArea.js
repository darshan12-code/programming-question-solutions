
// Have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the width * height.


function RectangleArea(strArr){
    const coordinates=strArr.map((item)=>{
        const [x,y]=item.slice(1,-1).split(' ').map(Number);
        return {x,y}
    })
    const unqiueX=[...new Set(coordinates.map((ele)=>ele.x))];
    const unqiueY=[...new Set(coordinates.map((ele)=>ele.y))];
    if(unqiueX.length>2 && unqiueY.length>2){
        return -1;
    }
    const width=Math.abs(unqiueX[1]-unqiueX[0]);
    const height=Math.abs(unqiueY[1]-unqiueY[0]);

 return width*height;
}
console.log(RectangleArea(["(0 1)", "(2 0)", "(2 4)", "(4 2)"]));