class BinaryTree {
    constructor(value) {
            this.root = null;
    }

    createTreeNode = function (data) {
        return {
            data: data,
            left: null,
            right: null,
        }
    }

    insert = function (data, position) {
        let node = this.createTreeNode(data);
        let tmpNode;
        if (position === undefined) {
            tmpNode = this.root;
        }
        else {
            tmpNode = position;
        }
        if ( this.root == null) {
            this.root = node;
        }else {
            if (data < tmpNode.data && tmpNode.left != null) {
                this.insert(data, tmpNode.left);
            }
            else if (data >= tmpNode.data && tmpNode.right != null) {
                this.insert(data, tmpNode.right);
            }
            else if (data < tmpNode.data)   {
                    tmpNode.left = node;
            }
            else if (data >= tmpNode.data)   {
                tmpNode.right = node;
            }
        }
    }

 search = function (data,position) {
     let tmpNode;
     if (position === undefined) {
         tmpNode = this.root;
     } else {
         tmpNode = position;

     }
     if (tmpNode.data == data ) {
          return tmpNode;
     }
     if (data < tmpNode.data && tmpNode.left != null) {
         return this.search(data, tmpNode.left);
     } else if (data > tmpNode.data && tmpNode.right != null) {
         return this.search(data, tmpNode.right)
     }
 }
}

const tree1 = new BinaryTree();






