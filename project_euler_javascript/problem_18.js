/*
By starting at the top of the triangle below and moving to adjacent numbers on the row below, 
the maximum total from top to bottom is 23.

3
7 4
2 4 6
8 5 9 3

That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom of the triangle below:

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
*/


var Tree = function(value){
  this.value = value;
  this.edges = [];
};

Tree.prototype.addEdge = function(tree){
  if (this.edges.indexOf(tree) === -1){
    this.edges.push(tree);
  }
  return this;
};

Tree.prototype.removeEdge = function(tree){
  var index = this.edges.indexOf(tree);
  if ( index !== -1){
    this.edges.splice(index, 1);
  }
  return this;
};

Tree.prototype.setValue = function(value){
  this.value = value;
  return this;
};

Tree.prototype.getValue = function(){
  return this.value;
};


Tree.prototype.maxSumPath = function(){
  return this.value + reduce(map(this.edges, function(tree){return tree.maxSumPath();}), 
    function(a, b){
    if(a > b){
      return a;
    }
    return b;
  }, 0);
};


var reduce = function(arr, callback, accumulator){
  for (var i = 0; i < arr.length; i++ ){
    accumulator = callback(arr[i], accumulator);
  }
  return accumulator;
};

var map = function(arr, callback){
  var result = [];
  for ( var i = 0; i < arr.length; i++){
    result.push(callback(arr[i]));
  }
  return result;
};


var arraysToTree = function(arr){
  for (var i = 0; i < arr.length; i++){
    arr[i] = map(arr[i], function(item){
      return new Tree(item);
    });
  }

  for ( i = 0; i < arr.length-1; i++ ){
    for (var j = 0; j < arr[i].length; j++ ){
      arr[i][j].addEdge(arr[i+1][j]);
      arr[i][j].addEdge(arr[i+1][j+1]);
    }
  }
  return arr[0][0];
};

var arr =   [[3],
            [7, 4],
            [2, 4, 6],
            [8, 5, 9, 3]];

var largeTree = [[75],
                [95, 64],
                [17, 47, 82],
                [18, 35, 87, 10],
                [20, 04, 82, 47, 65],
                [19, 01, 23, 75, 03, 34],
                [88, 02, 77, 73, 07, 63, 67],
                [99, 65, 04, 28, 06, 16, 70, 92],
                [41, 41, 26, 56, 83, 40, 80, 70, 33],
                [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
                [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
                [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
                [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
                [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
                [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]];

var root = arraysToTree(largeTree);
console.log(root.maxSumPath());
