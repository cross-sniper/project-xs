const tutorial = new Component('tutorial', 'div');
let currentPage = 1;

function updateTutorialContent() {
    tutorial.element.innerHTML = pages[currentPage - 1].replace(/\[(.*)\]/,/<code>$1<\/code>/);
}

function nextPage() {
    if (currentPage < pages.length) {
        currentPage++;
        updateTutorialContent();
    }
}
function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updateTutorialContent();
    }
}


// Define the tutorial content for each page
const pages = [
    `
    <!-- Page 1 -->
    <h1>Welcome to the comp.js Tutorial</h1>
    <p>
        In this tutorial, we'll introduce you to comp.js, a powerful component-based JavaScript framework.
    </p>

    <h2>What is comp.js?</h2>
    <p>
        comp.js is a versatile JavaScript framework that simplifies web application development.
        It's ideal for creating games, interactive web applications, and professional-grade apps, for instance, this whole page was made using it(besides some css)
    </p>

    <h2>Getting Started</h2>
    <p>
        To get started with comp.js, follow these steps:
    </p>
    <ol>
        <li>Create a new HTML file for your project.</li>
        <li>Include the comp.js script in your HTML:</li>
    </ol>

    <pre><code>&lt;script src="path/to/comp.js"&gt;&lt;/script&gt;</code></pre>

    <p>
        <em>Replace "path/to/comp.js" with the actual path to the comp.js library.</em>
    </p>

    <h2>Adding Components</h2>
    <p>
        You can create and add components to your web page using the following code:
    </p>

    <pre><code>// Create a new component
    const myComponent = new Component('myComponent', 'div');

    // Set the component's content
    myComponent.element.innerHTML = 'This is my custom component.';

    // Add the component to the body
    addComponentToBody(myComponent);
    </code></pre>

    <h2>Customization</h2>
    <p>
        Customize your components by setting their content, style, and behavior.
        You can use CSS to style your components, and JavaScript to add interactivity.
    </p>

    <p>
        in the next page, you will learn how to remove components from the DOM, dont worry, they dont get deleted, just removed
        <button onclick="nextPage()">next tutorial</button>
    </p>
    `,
    `
    <!-- Page 2 -->
    <h2>Removing Components</h2>
    <p>
        You can also remove components from the DOM when they are no longer needed. Don't worry; they won't get deleted, just removed from the visible page.
    </p>

    <p>
        To remove a component, you can use the <code>removeComponentFromBody</code> function. Here's an example:
    </p>

    <pre><code>// Assuming you have a component named 'myComponent'
    removeComponentFromBody(myComponent);
    </code></pre>

    <p>
        By removing components, you can dynamically control the content displayed on your web page.
    </p>

    <h2>Conclusion</h2>
    <p>
        Congratulations! You've completed the comp.js tutorial. You've learned how to add, customize, and remove components using comp.js, a versatile framework for web development.
    </p>

    <p>
        To explore more features and possibilities, refer to the comp.js documentation and examples.
    </p>

    <p>
    <button onclick="nextPage()">next tutorial</button>
    <button onclick="prevPage()">previous tutorial</button>
    </p>
    `,
    `
    <!-- Page 3: Slider Component -->
    <h2>Slider Component</h2>
    <p>
        The Slider component allows users to select a value from a range.
        It's commonly used for settings, volume controls, and other numeric input.
    </p>

    <pre><code>// Create a slider component
    const volumeSlider = new Slider('volumeSlider');
    volumeSlider.onChange = () => {
        const volume = volumeSlider.element.value;
        // Update volume or perform other actions
    };
    
    // Add the slider to the body
    addComponentToBody(volumeSlider);
    </code></pre>

    <p>
        Customize the slider's appearance and behavior using CSS and event handlers.
    </p>
    <button onclick="nextPage()">Next</button>
    <button onclick="prevPage()">previous tutorial</button>

    `,
    `
    <!-- Page 4: Button, Checkbox, and TextInput Components -->
    <h2>Button, Checkbox, and TextInput Components</h2>
    <p>
        These components provide interactive elements for user interaction.
        Buttons trigger actions, checkboxes allow toggling options, and text inputs capture user input.
    </p>

    <pre><code>// Create button, checkbox, and text input components
    const submitButton = new Button('submitButton', 'Submit');
    submitButton.onClick = () => {
        // Handle button click
    };
    addComponentToBody(submitButton);

    const rememberCheckbox = new Checkbox('rememberCheckbox', 'Remember me');
    rememberCheckbox.onChange = () => {
        // Handle checkbox change
    };
    addComponentToBody(rememberCheckbox);

    const usernameInput = new TextInput('usernameInput', 'Enter your username');
    usernameInput.onInput = (value) => {
        // Handle input value
    };
    addComponentToBody(usernameInput);
    </code></pre>

    <p>
        Use CSS to style these components and JavaScript to add behavior based on user interactions.
    </p>
    <button onclick="nextPage()">Next</button>
    <button onclick="prevPage()">previous tutorial</button>

    `,
    `
    <!-- Page 5: Dropdown Component -->
    <h2>Dropdown Component</h2>
    <p>
        The Dropdown component provides a selection menu with options.
        It's useful for presenting a list of choices for users to pick from.
    </p>

    <pre><code>// Create a dropdown component
    const countryDropdown = new Dropdown('countryDropdown', ['USA', 'Canada', 'UK']);
    countryDropdown.onChange = (selectedValue) => {
        // Handle selected option
    };
    addComponentToBody(countryDropdown);
    </code></pre>

    <p>
        Customize the dropdown's options and behavior using JavaScript event handlers.
    </p>
    <button onclick="nextPage()">Next</button>
    <button onclick="prevPage()">previous tutorial</button>
    `,
    `
    <!-- Page 6: CanvasComponent Introduction -->
    <h2>CanvasComponent: Introduction</h2>
    <p>
        The CanvasComponent allows you to create and manage a canvas for drawing graphics, animations, and games.
    </p>

    <p>
        This component extends the base Component class and provides methods for drawing on the canvas,
        handling keyboard input, and creating animations.
    </p>

    <p>
        The CanvasComponent is especially useful for making games and interactive visualizations.
    </p>

    <button onclick="nextPage()">Next</button>
    <button onclick="prevPage()">Previous</button>
    `,
    `
    <!-- Page 7: Drawing on Canvas -->
    <h2>Drawing on Canvas</h2>
    <p>
        You can use the CanvasComponent to draw shapes, images, and text on the canvas.
        The <code>drawRect</code> function, for example, can draw rectangles.
    </p>

    <pre><code>// Create a canvas component
    const canvas = new CanvasComponent('myCanvas');

    // Add the canvas to the body
    addComponentToBody(canvas);

    // Draw a red rectangle
    canvas.drawRect(50, 50, 100, 100, 'red');
    </code></pre>

    <p>
        Customize the canvas appearance and behavior using its methods.
    </p>
    <button onclick="nextPage()">Next</button>
    <button onclick="prevPage()">Previous</button>
    `,
    `
    <!-- Page 8: Creating Animations -->
    <h2>Creating Animations</h2>
    <p>
        The CanvasComponent's <code>startLoop</code> function enables you to create animations.
        You can add functions to the <code>drawFunctions</code> array to update the canvas each frame.
    </p>

    <pre><code>// Create a canvas component
    const canvas = new CanvasComponent('myCanvas');

    // Add the canvas to the body
    addComponentToBody(canvas);

    // Add animation function
    canvas.addDrawFunction((context) => {
        // Update animation logic here
        context.fillRect(x, y, width, height);
    });

    // Start the animation loop
    canvas.startLoop();
    </code></pre>

    <p>
        You can use the CanvasComponent's methods to handle interactivity and create dynamic animations.
    </p>
    <button onclick="nextPage()">Next</button>
    <button onclick="prevPage()">Previous</button>
    `,
    `
    <!-- Page 9: Keyboard Input -->
    <h2>Keyboard Input</h2>
    <p>
        The CanvasComponent can also handle keyboard input using the <code>addControlState</code> function.
        This is useful for creating interactive games.
    </p>

    <pre><code>// Create a canvas component
    const canvas = new CanvasComponent('myCanvas');

    // Add the canvas to the body
    addComponentToBody(canvas);

    // Add control state
    canvas.addControlState('ArrowLeft');
    canvas.addControlState('ArrowRight');

    // Handle input in animation loop
    canvas.addDrawFunction((context) => {
        if (canvas.GetControllState('ArrowLeft')) {
            // Handle left arrow key
        }
        if (canvas.GetControllState('ArrowRight')) {
            // Handle right arrow key
        }
    });

    // Start the animation loop
    canvas.startLoop();
    </code></pre>

    <p>
        The CanvasComponent's keyboard input features allow you to create dynamic controls for your canvas elements.
    </p>
    <button onclick="nextPage()">Next</button>
    <button onclick="prevPage()">Previous</button>
    `,
    `
    <!-- Page 10: Conclusion -->
    <h2>Conclusion</h2>
    <p>
        You've learned how to use the CanvasComponent to create dynamic graphics, animations, and interactive elements.
    </p>

    <p>
        The CanvasComponent provides a powerful tool for building games and interactive visualizations in JavaScript.
    </p>

    <p>
        Experiment with its methods, explore more advanced features, and create exciting projects using this component.
    </p>

    <button onclick="prevPage()">Previous</button>
    `,
];

// Add the tutorial component to the body
addComponentToBody(tutorial);


// Initialize tutorial content
updateTutorialContent();
