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
  console.log(startingSide);
  console.log(exitSide);
  


  if(startingSide ==0){
    start_x = 0;
    start_y = Math.trunc(Math.random()*(mazeArray[0].length-1));
  }
  else if(startingSide == 1){
    start_x = Math.trunc((Math.random()*mazeArray.length-1));
    start_y = 0;

  }
  else if(startingSide == 2){
    start_x = mazeArray.length-1;
    start_y = Math.trunc(Math.random()*(mazeArray[0].length-1));

  }
  else{
    start_x = Math.trunc(Math.random()*(mazeArray.length-1));
    start_y = mazeArray[0].length-1;
  }
  
  mazeArray[start_y][start_x] = "S";
  

  if(exitSide ==0){
    exit_x = 0;
    exit_y = Math.trunc(Math.random()*(mazeArray[0].length-1));
  }
  else if(exitSide == 1){
    exit_x = Math.trunc((Math.random()*mazeArray.length-1));
    exit_y = 0;

  }
  else if(exitSide == 2){
    exit_x = mazeArray.length-1;
    exit_y = Math.trunc(Math.random()*(mazeArray[0].length-1));

  }
  else{
    exit_x = Math.trunc(Math.random()*(mazeArray.length-1));
    exit_y = mazeArray[0].length-1;
  }
  
  mazeArray[exit_y][exit_x] = "E";
  console.log(mazeArray);


  


}
/**Uses the JPD spanning tree algorithm to create a spanning tree from the start node to the exit node */
function generatePaths(){
  var frontier = {};



}

