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

//look for a better way to do this, there's got to be a func to create a tree


let arrDepth = [];
let arrBreadth = [];

function sortDepth(node) {
    if (node == null) 
    return;

    arrDepth.push(node.value);
    
    sortDepth(node.left);
    sortDepth(node.right);
}

function sortBreadth(node) {
    let nodes = [node];

    while (nodes.length > 0) {
        let leaf = nodes.shift();

        arrBreadth.push(leaf.value);

        if (leaf.left) nodes.push(leaf.left);
        if (leaf.right) nodes.push(leaf.right);
    }
}

sortDepth(head);
sortBreadth(head);

document.addEventListener("DOMContentLoaded", () => {
    document.body.innerText += "Values sorted by Depth:  " + arrDepth.join(", ");
    document.body.innerHTML += "<br>";
    document.body.innerText += "Values sorted by Breadth: " + arrBreadth.join(", ");
});