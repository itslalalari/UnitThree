function pushData() {
	let view = document.getElementById("view");
	let newTd = document.createElement("li");
	var inputText = document.getElementById("inputText").value;
	var node = document.createTextNode(inputText);
	newTd.appendChild(node);
	view.appendChild(newTd);
}

class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let head = new Leaf(42);
head.left = new Leaf(70);
head.right = new Leaf(73);
head.left.left = new Leaf(97);
head.left.right = new Leaf(80);
head.right.left = new Leaf(30);
head.right.right = new Leaf(17);
head.left.left.left = new Leaf(74);
head.left.left.right = new Leaf(41);
head.left.right.left = new Leaf(53);

let arrDepth = [];

function sortDepth(node) {
    if (node == null) 
    return;

    arrDepth.push(node.value);
    
    sortDepth(node.left);
    sortDepth(node.right);
}

sortDepth(head);


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("tree").innerText += "Values from Tree:  " + arrDepth.join(", ");
});







