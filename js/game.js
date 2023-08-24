const player = {
    x: 0,
    y: 0,
    color: 'red',
    width: 10,
    height: 10,
    speed: 2,
    boost: 5,
    norm:  2,
    boosted: false
};

const canvas = new CanvasComponent('canvas');
canvas.element.width = 500
canvas.element.height = 300
addComponentToBody(canvas);

//adds key press detection into the DOM
canvas.addControlState(' ');//space bar
canvas.addControlState('ArrowUp');
canvas.addControlState('ArrowDown');
canvas.addControlState('ArrowLeft');
canvas.addControlState('ArrowRight');

canvas.startLoop();//makes the canvas start a silent loop(animationframe)

function draw(ctx) {
    /*

    this is the old drawing system, please dont use it

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.element.width, canvas.element.height);

    // Draw the player
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    */
    canvas.drawRect(player.x,player.y,player.width,player.height,player.color,'black')
    if(canvas.GetControllState(' '))//retrieves the condition for the space bar, if it is pressed, it does an action
        player.speed = player.boost
    else
        player.speed = player.norm

    // Update player position based on controls
    if (canvas.GetControllState('ArrowUp')) {
        player.y -= player.speed;
    }
    if (canvas.GetControllState('ArrowDown')) {
        player.y += player.speed;
    }
    if (canvas.GetControllState('ArrowLeft')) {
        player.x -= player.speed;
    }
    if (canvas.GetControllState('ArrowRight')) {
        player.x += player.speed;
    }


    // Keep the player within the canvas boundaries
    player.x = Math.max(0, Math.min(canvas.element.width - player.width, player.x));
    player.y = Math.max(0, Math.min(canvas.element.height - player.height, player.y));
}

canvas.addDrawFunction(draw);//this is what enables the draw loop itself
//fun fact, there is a basic control on the canvas
//canvas.addBasicControll(player)
//it does the same as definided here in the draw loop, but it only has the arrow movements