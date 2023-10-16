// JavaScript for the first example
function showAlert() {
    alert('Hello! This is a simple alert.');
}

// JavaScript for the second example
function changeText() {
    document.getElementById('demo').innerText = 'The text has been changed using JavaScript!';
}

// Example 3
function toggleVisibility() {
    let content = document.getElementById('toggleContent');
    if(content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

// Example 4
function changeImage() {
    let image = document.getElementById('sampleImage');
    image.src = "image2.jpg";
}

// Example 5
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Example 6
function calculateSum() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum = num1 + num2;
    document.getElementById('sumResult').innerText = "Sum: " + sum;
}

// Example 7
function changeOnHover() {
    document.getElementById('hoverText').innerText = "You hovered over me!";
}

function revertOnMouseOut() {
    document.getElementById('hoverText').innerText = "Hover over this text.";
}

// Example 8: Create Elements Dynamically
let elementCounter = 0;

function addElement() {
    const parentDiv = document.getElementById('dynamicElements');
    const newElement = document.createElement('div');
    
    elementCounter++;
    newElement.innerText = `Dynamic Element ${elementCounter}`;
    
    parentDiv.appendChild(newElement);
}


// Example 9: Get and Display Current Date
function displayDate() {
    const currentDate = new Date();
    document.getElementById('currentDate').innerText = currentDate.toDateString();
}

// Example 10: String to Uppercase
function convertToUppercase() {
    const sampleString = document.getElementById('sampleString').value;
    const upperCaseString = sampleString.toUpperCase();
    document.getElementById('uppercaseResult').innerText = upperCaseString;
}

// Example 11: Array Manipulation
let itemsArray = [];

function addToItems() {
    const newItem = document.getElementById('arrayItem').value;
    itemsArray.push(newItem);
    const itemsList = document.getElementById('itemsList');
    
    // Clear existing items
    itemsList.innerHTML = '';
    
    // Add new list of items
    itemsArray.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = item;
        itemsList.appendChild(listItem);
    });
}


// Example 12: Window Resize Event
window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('windowSize').innerText = `Width: ${width}, Height: ${height}`;
});

// Mock function to simulate API fetch
function fetchData() {
    const mockData = {
        username: 'john_doe',
        email: 'john@example.com'
    };
    document.getElementById('apiResult').innerText = JSON.stringify(mockData);
}

let count = 0;
let timer;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        count++;
        document.getElementById('timer').innerText = count;
    }, 1000);
}

//Form validation

function validateForm() {
    const username = document.getElementById('username').value;
    if (username.length < 5) {
        document.getElementById('validationResult').innerText = 'Username must be at least 5 characters.';
    } else {
        document.getElementById('validationResult').innerText = 'Username is valid.';
    }
}

//Local Storage

function saveToLocalStorage() {
    const item = document.getElementById('localStorageItem').value;
    localStorage.setItem('item', item);
    document.getElementById('localStorageResult').innerText = 'Item saved to local storage.';
}

// Change Style

function changeStyles() {
    const div = document.getElementById('styledDiv');
    div.style.backgroundColor = 'lightblue';
    div.style.padding = '20px';
}

//Event bubbling
document.getElementById('childDiv').addEventListener('click', function(event) {
    event.stopPropagation();
});

//Toggle Classes
function toggleClass() {
    const div = document.getElementById('toggleClassDiv');
    div.classList.toggle('active');
}

//Clipboard Copy
function copyToClipboard() {
    const text = document.getElementById('clipboardText');
    text.select();
    document.execCommand('copy');
}

//Keyboard Events
function showKey(event) {
    document.getElementById('keyResult').innerText = `Key Pressed: ${event.key}`;
}
