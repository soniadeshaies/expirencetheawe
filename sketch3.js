// let cat

// function setup() {
//     let cnv = createCanvas(windowWidth, windowHeight);
//     cnv.parent('mySketch');
// }

// function draw () {
//     let cat = createImage("img/room.png");
//     // eye.size(windowWidth, windowHeight)
//     // eye.position(windowWidth/2, windowHeight/2)
//     cat.id('cat');
//     cat.size(200, 200);
//     cat.position(200, 200);
//     cat.mousePressed(tree);
// }

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

// // function tree(){
// //     let tree = createImg("img/rainbow-forest.png")
// //     tree.size(windowWidth, windowHeight)
// //     tree.position(windowWidth/2, windowHeight/2)
// //     // removeElements(eye);
// //   }


let mode = 1;

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

  }
  
  function draw() {

    if (mode == 1){
      displayCat();
    }

    cat.mousePressed(bear);
    
    mode = 2

    if (mode == 2){
      removeElements();
      background(0);
      bear.style.display='none';
    }
   
    
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function displayCat() {
  let cat = createImg("img/room2.png");
  let eye = createImg("img/closed-eye.png");
  let text = createImg("img/text.png");

    cat.size(windowWidth, windowHeight);
    cat.position(0,0);
    cat.id('cat');

    // eye.size(400,200);
    eye.position(windowWidth/2-236, 400);
    eye.id('eye');
    eye.class('eye');
    eye.mousePressed(bear);

    text.position(windowWidth/2-500,100);
    text.size(1000,200);
}

function bear(){
  let bear = createImg("img/trippy.gif");
  let eyes = createImg("img/open-eye2.png")
  
  bear.size(windowWidth, windowHeight);
  bear.position(0,0);

  eyes.position(windowWidth/2-269.5, 250);
  eyes.id('eyes');
  eyes.class('eyes');

let a = createA('next.html', 'continue to the next expirence');
a.position(windowWidth/2-100, 700);
a.style('font-size', '15px')
a.style('color', 'white')
a.style('background-color', 'black')
a.style('padding', '5px')
a.class('a')
  
  // eyes.mousePressed(bear);
}
