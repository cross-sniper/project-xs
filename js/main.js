const tutorial = new Component('tutorial', 'div');
let currentPage = 1;

// Define a function to update the tutorial content
function updateTutorialContent() {
    tutorial.element.innerHTML = pages[currentPage - 1];
}

// Define a function to navigate to the next page
function nextPage() {
    if (currentPage < pages.length) {
        currentPage++;
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
        <a href='game.html'> here is a little example of a game made using comp.js
        </a>
    </p>
    `
];

// Add the tutorial component to the body
addComponentToBody(tutorial);


// Initialize tutorial content
updateTutorialContent();
