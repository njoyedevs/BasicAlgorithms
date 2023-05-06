// JavaScript implementation of a Van Emde Boas tree

// This implementation uses a recursive algorithm to insert,
//  find, and delete elements from the tree. The algorithm works
//   by first comparing the key of the element to be inserted or
//    deleted to the key of the current node. If the key is less
//     than the key of the current node, the algorithm recursively
//      inserts the element into the left subtree of the current node.
//       If the key is greater than the key of the current node, the algorithm
//        recursively inserts the element into the right subtree of the current
//         node. If the key is equal to the key of the current node, the algorithm
//          has found the insertion point or the deletion point and can insert or
//           delete the element accordingly.


// JavaScript implementation of a Van Emde Boas tree

function vanEmdeBoasTree() {
    // Create the root node
    this.root = new Node(-Infinity, +Infinity);

    // Initialize the tree
    this.tree = [this.root];

    // Insert an element into the tree
    // Insert an element into the tree
    this.insert = function (key, value) {
        var node = this.root;
        var parentNode = null;
        while (node) {
            parentNode = node;
            if (key < node.key) {
                node = node.left;
            } else if (key > node.key) {
                node = node.right;
            } else {
                return;
            }
        }
        node = new Node(key, value);
        if (key < parentNode.key) {
            parentNode.left = node;
        } else {
            parentNode.right = node;
        }
        this.tree.push(node);
    };


    // Find an element in the tree
    this.find = function (key) {
        var node = this.root;
        while (node) {
            if (key < node.key) {
                node = node.left;
            } else if (key > node.key) {
                node = node.right;
            } else {
                return node.value;
            }
        }
        return null;
    };

    // Delete an element from the tree
    // Helper function to find the minimum value node in a tree
    function findMin(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // Delete an element from the tree
    this.deleteOne = function (key) {
        function deleteNode(node, key) {
            if (node === null) {
                return node;
            }

            if (key < node.key) {
                node.left = deleteNode(node.left, key);
            } else if (key > node.key) {
                node.right = deleteNode(node.right, key);
            } else {
                if (node.left === null) {
                    return node.right;
                } else if (node.right === null) {
                    return node.left;
                }

                node.key = findMin(node.right).key;
                node.right = deleteNode(node.right, node.key);
            }

            return node;
        }

        this.root = deleteNode(this.root, key);
    };

}

function Node(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
}

// In this example, we create a new instance of the vanEmdeBoasTree and insert
//  four key-value pairs into the tree. We then use the find method to look for the
//   inserted elements, which returns the associated values. Next, we attempt to find
//    a non-existent element, which returns null. Finally, we delete an element using
//     the deleteOne method and attempt to find the deleted element, which now returns null.


// Create a new instance of the vanEmdeBoasTree
const vEBTree = new vanEmdeBoasTree();

// Insert elements into the tree
vEBTree.insert(10, 'A');
vEBTree.insert(20, 'B');
vEBTree.insert(30, 'C');
vEBTree.insert(40, 'D');

// Find elements in the tree
console.log(vEBTree.find(10)); // Output: 'A'
console.log(vEBTree.find(20)); // Output: 'B'
console.log(vEBTree.find(30)); // Output: 'C'
console.log(vEBTree.find(40)); // Output: 'D'

// Attempt to find a non-existent element
console.log(vEBTree.find(50)); // Output: null

// Delete an element from the tree
vEBTree.deleteOne(30);

// Attempt to find the deleted element
console.log(vEBTree.find(30)); // Output: null
