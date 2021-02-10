var canvas_width = 1000;
var canvas_y = 500;
var mazeArray = [];
var mapSizex = 15;
var mapSizey = 15;

/*

class Tile{
  
  var north, south, east, west;
  constructor(){
    north = false;
    south = false;
    east = false;
    west = false;
  }
  
  enableEast(){
    east=true;
  }
   

  enableWest(){
    west = true;
  }
  

  enableSouth(){
    south = true;
  }
   

  enableNorth(){
    north = true;
  }

}
*/
/**Generate a maze using the JDP spanning tree algorithm represented by a two dimensional array */
function generateMaze(){
  console.log("Hello there");
  for(i = 0; i<mapSizex;i++){
    mazeArray[i]=[];
    for(x = 0; x<mapSizey;x++){
      mazeArray[i][x] = "x";
    }

  }



  console.log(mazeArray);

}

/**Randomly select a start and End node  */

function chooseStartAndEnd(){
  var startingSide = Math.random()*3;
  var start;//the location of the starting node
  var exitSide;
  var exit;//the location of the exit node
  do{
    exitSide = Math.random()*3;
  }while(exitSide==startingSide);


  switch(startingSide){//0 is the west wall of the side, 1 is the north side, 2 is the east side, 3 is the south side
  case 0:
  console.log("Hello World!");
  break;
  case 1: console.log("Howdy");
  break;
  case 2: console.log("Buddy");
  case 3: console.log("Jesse");
  }


}
