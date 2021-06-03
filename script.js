var canvas_width = 1000;
var canvas_y = 500;
var mazeArray = [];
var mapSizex = 15;
var mapSizey = 15;





/**Generate a maze using the JDP spanning tree algorithm represented by a two dimensional array */
function generateMaze(){
  for(i = 0; i<mapSizex;i++){
    mazeArray[i]=[];
    for(x = 0; x<mapSizey;x++){
      mazeArray[i][x] = new Tile(i, x);
    }

  }



  //console.log(mazeArray);
  chooseStartAndEnd();


}

/**Randomly select a start and End node  */

function chooseStartAndEnd(){
  var startingSide = Math.trunc(Math.random()*3);
  var start_x;//the x coordinate of the starting node
  var start_y;//the y coordinate of the starting node
  var exitSide;
  var exit_x;
  var exit_y//the location of the exit node
  do{
    exitSide = Math.trunc(Math.random()*3);
  }while(exitSide==startingSide);

  
  if(startingSide ==0){
    start_y = 0;
    start_x = Math.trunc(Math.random()*(mazeArray[0].length-1));
  }
  else if(startingSide == 1){
    start_y = Math.trunc((Math.random()*mazeArray.length-1));
    start_x = 0;

  }
  else if(startingSide == 2){
    start_y = mazeArray.length-1;
    start_x = Math.trunc(Math.random()*(mazeArray[0].length-1));

  }
  else{
    start_y = Math.trunc(Math.random()*(mazeArray.length-1));
    start_x = mazeArray[0].length-1;
  }
  console.log(start_y);
  console.log(start_x);
  mazeArray[start_y][start_x].visited = true;
  mazeArray[start_y][start_x].entrance = true;
  if(exitSide ==0){
    exit_y = 0;
    exit_x = Math.trunc(Math.random()*(mazeArray[0].length-1));
  }
  else if(exitSide == 1){
    exit_y = Math.trunc((Math.random()*mazeArray.length-1));
    exit_x = 0;

  }
  else if(exitSide == 2){
    exit_y = mazeArray.length-1;
    exit_x = Math.trunc(Math.random()*(mazeArray[0].length-1));

  }
  else{
    exit_y = Math.trunc(Math.random()*(mazeArray.length-1));
    exit_x = mazeArray[0].length-1;
  }
  console.log(exit_y);
  console.log(exit_x);
  mazeArray[exit_y][exit_x].exit = true;
  //console.log(mazeArray);
  console.log("genpaths");
  generatePaths(start_y,start_x);  
}

/**Add the unvisited nodes around a visited node to the frontier set*/
function addToFrontier(frontier,y, x){


  if((y < mazeArray.length - 1) && !mazeArray[y+1][x].visited){
    frontier.push(mazeArray[y+1][x]);
    mazeArray[y+1][x].visited = true;
  }
  if(x < mazeArray[0].length - 1 && !mazeArray[y][x+1].visited){
    frontier.push(mazeArray[y][x+1]);
    mazeArray[y][x+1].visited = true;
  }
 
  if(y> 0 && !mazeArray[y-1][x].visited){
    frontier.push(mazeArray[y-1][x]);
    mazeArray[y-1][x].visited = true;
  }

  if(x > 0 && !mazeArray[y][x-1].visited){
    frontier.push(mazeArray[y][x-1]);
    mazeArray[y][x-1].visited = true;
  }
}

/**Return the neighbors of a node in mazeArray */
function getNeighbors(y, x){
  var neighbors = [];
  if(y < mazeArray.length - 1){
    neighbors.push(mazeArray[y+1][x]);
  }
  if(x < mazeArray[0].length - 1){
    neighbors.push(mazeArray[y][x+1]);
  }
  if(y > 0){
    neighbors.push(mazeArray[y-1][x]);
  }
  if(x >0){
    neighbors.push(mazeArray[y][x]);
  }
  return neighbors;
}

function setEdge(treeNode,frontierNode){
  if(treeNode.y < frontierNode.y){
    treeNode.enableSouth();
  }
  else if(treeNode.y > frontierNode.y){
    treeNode.enableNorth();
  }
  else if(treeNode.x < frontierNode.x){
    treeNode.enableEast();
  }
  else if(treeNode.x > frontierNode.x){
    treeNode.enableWest();
  }
}

/** */
function expandSpanningTree(y,x, mapped){
  var neighbors = getNeighbors(y,x);
  var spanningTree = [];
  var i;
  for(i = 0; i<neighbors.length;i++ ){
    if(mapped.has(neighbors[i])){
      console.log("visited");
      spanningTree.push(neighbors[i]);
    }
  }
  i = Math.floor(Math.random()*spanningTree.length);
  var treeNode = spanningTree[i];
  if(treeNode != null){
    setEdge(treeNode,mazeArray[y][x]);
  }

}


/**Uses the JPD spanning tree algorithm to create a spanning tree from the start node to the exit node */
function generatePaths(y,x){
  console.log("generatePaths");
  var frontier = [];//frontier set of neighboring nodes
  let mapped = new Map();//contains the spanning set of nodes so far
  mapped.set(mazeArray[y][x], true);
  addToFrontier(frontier, y, x);
  var index;
  var node;
  var i = 0;
  while(mapped.size != (mapSizex*mapSizey)){
    index = Math.floor(Math.random() * frontier.length);
    node = frontier[index];
    console.log(node);
    
    mapped.set(node,true);
    expandSpanningTree(node.y,node.x,mapped);
    frontier.splice(index, 1);//remove our chosen node from frontier set
    addToFrontier(frontier, node.y, node.x);
    i++;
  }
  console.log(i);


  var visual = [];
  for(i = 0; i<mapSizex;i++){
    visual[i]=[];
    for(x = 0; x<mapSizey;x++){
      if(mazeArray[i][x].entrance){
        visual[i][x] = "B";
    }
      else if(mazeArray[i][x].exit){
        visual[i][x] = "G";
      }
      else if(mazeArray[i][x].east){
        visual[i][x] = "E";
      }
      else if(mazeArray[i][x].west){
        visual[i][x] = "W";
      }
      else if(mazeArray[i][x].south){
        visual[i][x] = "S";
      }
      else if(mazeArray[i][x].north){
        visual[i][x] = "N";
      }
      else{
        visual[i][x] = "0";
      }
  }
  }
  console.log(visual);

}



class Coord{
  constructor(y,x){
    this.y = y;
    this.x = x;
  }
}

class Tile{
  
  constructor(y,x){
    this.y = y;
    this.x = x;
    this.visited = false;
    this.entrance = false;
    this.exit = false;
    this.north = false;
    this.south = false;
    this.east= false;
    this.west = false;
  }
  
  enableEast(){
    this.east=true;
  }
   

  enableWest(){
    this.west = true;
  }
  

  enableSouth(){
    this.south = true;
  }
   

  enableNorth(){
    this.north = true;
  }
}

