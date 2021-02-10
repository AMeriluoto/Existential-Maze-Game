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
  for(i = 0; i<mapSizex;i++){
    mazeArray[i]=[];
    for(x = 0; x<mapSizey;x++){
      mazeArray[i][x] = "x";
    }

  }



  console.log(mazeArray);
  chooseStartAndEnd();

}

/**Randomly select a start and End node  */

function chooseStartAndEnd(){
  var startingSide = Math.random()*3;
  var start_x;//the x coordinate of the starting node
  var start_y;//the y coordinate of the starting node
  var exitSide;
  var exit;//the location of the exit node
  do{
    exitSide = Math.random()*3;
  }while(exitSide==startingSide);


  if(startingSide ==0){
    start = Math.random()*mazeArray[0].length;
  }
  else if(startingSide == 1){

  }

  


}
