
let data; 

function preload(){
  data = loadTable('data.csv', 'csv', 'header');
}

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  
  
}

function draw(){
  fill('pink')
  background(20); 
  
  fill('pink')
  text('apple-music-playlist ;)', 100, 100)
  
  if(data){ //necessary for large data sets
     
    //Get amount of rows in csv
    let numRows = data.getRowCount();
    
    //Get specific column
    let artist = data.getColumn(0); 
    //let streams = data.getColumn(5);
     let streams = data.getColumn('streams').map(Number); // Convert strings to numbers 
    
    console.log(streams);
    
    
    for(let i = 0; i < numRows; i++){
      //Create rectangles for each artist
      //Height of rectangle = streams
      let y = height;
      let rectWidth = width*0.02; 
      //let rectHeight = -streams[i];
      let rectHeight = map(streams[i], 0, -max(streams), 0, height);

      let x = i * (rectWidth + width*0.025);
      
      
      rect(x + width*0.02, y, rectWidth, rectHeight); //x y w h
      
    }
     
     }
  
  noLoop(); 
  
}
