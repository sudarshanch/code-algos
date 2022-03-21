class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;   
    }
    findMax(node) {
        if (node == null) {
            return Number.MIN_VALUE;
        }
        let res = node.data;
        // let lres = this.findMax(node.left);
        let rres = this.findMax(node.right);
        // if (lres > res) {
        //     res = lres;
        // }
        if (rres > res) {
            res = rres;
        }
        return res;
    }
    findMin(node) {
        if (node == null) {
            return Number.MIN_VALUE;
        }
        let res = node.data;
        let lres = this.findMin(node.left);
        // let rres = this.findMax(node.right);
        // if (lres > res) {
        //     res = lres;
        // }
        if (lres < res) {
            
            res = lres;
        }
        return res;
    }
    isValidBST(node, min=null, max=null) {
        if(!node) return true;
        if(max !==null && node.data >= max) {
            return false;
        } 

        if(min !==null && node.data <=min) {
            return false; 
        }

        console.log({left: node.left, right: node.right, min: min, max: max});
        const leftSide = this.isValidBST(node.left, min, node.data);
        const rightSide = this.isValidBST(node.right, node.data, max);
        console.log({leftSide,rightSide})
        return leftSide && rightSide;
    }
}

const t = new Node(10);
t.left = new Node(0);
t.left.left = new Node(7)
t.left.right = new Node(4)

t.right = new Node(12);

const t1 = new Tree();
t1.root = t;

console.log(t1.findMin(t));

console.log(t1.findMax(t));
console.log(t1.isValidBST(t))
