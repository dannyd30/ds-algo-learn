/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    let parent, current, dir;
    if(!root || key === null || key === undefined) return root;
    if (root.val === key) {
        parent = null;
        current = root;
        if (!current.left && !current.right) {
            root = null;
        } else if (!current.right || !current.left) {
            root = current.left || current.right;
        } else {
            let rightMostNode = getRightMostNodeWithParent(current.left, null);
            //getting in-order predecessor
            if (!rightMostNode.parentNode) {
                // parent.left = rightMostNode.node;
                rightMostNode.node.right = current.right;
                root = rightMostNode.node;
            } else {
                // parent.right = rightMostNode.node;
                root = rightMostNode.node;
                rightMostNode.node.left = current.left;
                rightMostNode.node.right = current.right;
                rightMostNode.parentNode.right = null;

            }
        }
        return root;
    } else {
        const lookupObj = lookupWithParent(root, key);
        
        if (!lookupObj) {
             return root;
        }
        parent = lookupObj.parent;
        current = lookupObj.current;
        dir = lookupObj.dir;
    }

    //Remove leaf node
    if (!current.right && !current.left) {
        parent[dir] = null;
    } else if (!current.right || !current.left) {
        parent[dir] = current.right || current.left;
    } else {
        //parent
        //current
        /**
         *       9
         *      1   16
         *        10  20
         *       7  11
         */
        let rightMostNode = getRightMostNodeWithParent(current.left, null);
        console.log(!rightMostNode.parentNode);//getting in-order predecessor
        if (!rightMostNode.parentNode) {
            parent.left = rightMostNode.node;
            rightMostNode.node.right = current.right;
        } else {
            parent.right = rightMostNode.node;
            rightMostNode.node.left = current.left;
            rightMostNode.parentNode.right = null;

        }

    }
    function getRightMostNodeWithParent(node, parentNode) {
        return !node.right ? { parentNode, node } : getRightMostNodeWithParent(node.right, node);
    }

    function lookupWithParent(node, key) {

        if (node.val < key && node.right) {
            return node.right.val === key ? { parent: node, current: node.right, dir: 'right' } : lookupWithParent(node.right, key);
        } else if (node.val > key && node.left) {
            return node.left.val === key ? { parent: node, current: node.left, dir: 'left' } : lookupWithParent(node.left, key);
        } else {
            return false;
        }
    }
    return root;


};