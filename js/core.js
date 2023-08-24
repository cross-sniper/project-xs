//js/core.js

class Component {
    constructor(name, type) {
        this.element = document.createElement(type);
        this.element.id = name;
        this.name = name;
    }

    addTo(parent) {
        parent.appendChild(this.element);
    }

    removeFrom(parent) {
        parent.removeChild(this.element);
    }
}

class CanvasComponent extends Component {
    constructor(name) {
        super(name, 'canvas');
        this.context = this.element.getContext('2d');
        this.isLooping = false;
        this.drawFunctions = [];
        this.basicMovement = false;
        this.keyState = {};
    }

    clear() {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
    }
    addControlState(controlName) {
        this.keyState[controlName] = false;

        // Handle control key presses
        addEventListener('keydown', (event) => {
            if (event.key === controlName) {
                this.keyState[controlName] = true;
            }
        });

        // Handle control key releases
        addEventListener('keyup', (event) => {
            if (event.key === controlName) {
                this.keyState[controlName] = false;
            }
        });
    }
    addBasicControll(player, movementSpeed) {
        this.basicMovement = true;

        const keyState = {};

        addEventListener('keydown', (event) => {
            keyState[event.key] = true;
        });

        addEventListener('keyup', (event) => {
            keyState[event.key] = false;
        });

        const updatePlayerPosition = () => {
            if (keyState['ArrowUp']) {
                player.y -= movementSpeed;
            }
            if (keyState['ArrowDown']) {
                player.y += movementSpeed;
            }
            if (keyState['ArrowLeft']) {
                player.x -= movementSpeed;
            }
            if (keyState['ArrowRight']) {
                player.x += movementSpeed;
            }

            requestAnimationFrame(updatePlayerPosition);
        };

        updatePlayerPosition();
    }

    GetControllState(controlName) {
        return !!this.keyState[controlName];
    }

    background(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.element.width, this.element.height);
    }

    drawRect(x, y, width, height, color, background = 'white') {
        this.background(background);
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height);
    }

    startLoop() {
        if (!this.isLooping) {
            this.isLooping = true;
            this.loop();
        }
    }

    stopLoop() {
        this.isLooping = false;
    }

    loop() {
        if (!this.isLooping) return;

        this.clear();
        this.background('black');

        for (const drawFunction of this.drawFunctions) {
            drawFunction(this.context);
        }

        requestAnimationFrame(() => this.loop());
    }

    addDrawFunction(drawFunction) {
        this.drawFunctions.push(drawFunction);
    }
}


function addComponentToBody(component) {
    document.body.appendChild(component.element);
}

function removeComponentFromBody(component) {
    if (component.element.parentNode) {
        component.removeFrom(document.body);
    }
}
