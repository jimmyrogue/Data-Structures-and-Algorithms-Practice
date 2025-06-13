var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
    }
    SinglyLinkedList.prototype.createNode = function (data) {
        return {
            data: data,
            next: null
        };
    };
    // 插入链表头
    SinglyLinkedList.prototype.unshift = function (data) {
        var newNode = this.createNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var temp = this.head;
        newNode.next = temp;
        this.head = newNode;
    };
    // 插入链表尾
    SinglyLinkedList.prototype.append = function (data) {
        var newNode = this.createNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        // 循环找到最后一个Node
        var lastNode = this.head;
        while (lastNode.next) {
            lastNode = (lastNode === null || lastNode === void 0 ? void 0 : lastNode.next) || null;
        }
        console.log('lastNode', JSON.stringify(lastNode));
        lastNode.next = newNode;
    };
    // 在任意位置插入
    SinglyLinkedList.prototype.insertAt = function (data, targetIndex) {
        if (targetIndex < 0) {
            console.log('index 不能小于0');
            return;
        }
        console.log('targetIndex', targetIndex);
        var newNode = this.createNode(data);
        var preNode = this.head;
        if (targetIndex === 0) {
            this.unshift(data);
            return;
        }
        for (var index = 0; index < targetIndex - 1; index++) {
            if (preNode === null || preNode === void 0 ? void 0 : preNode.next) {
                preNode = preNode.next;
            }
        }
        // console.log('preNode', preNode?.data)
        if (preNode) {
            var tempNode = preNode.next;
            preNode.next = newNode;
            newNode.next = tempNode;
        }
    };
    // 反转链表
    SinglyLinkedList.prototype.reverse = function (node) {
        // 递归法
        var currentNode = node || this.head;
        if (!(currentNode === null || currentNode === void 0 ? void 0 : currentNode.next)) {
            this.head = currentNode;
            return;
        }
        this.reverse(currentNode === null || currentNode === void 0 ? void 0 : currentNode.next);
        var nextNode = currentNode.next;
        nextNode.next = currentNode;
        currentNode.next = null;
    };
    // 从头到尾打印
    SinglyLinkedList.prototype.log = function (node) {
        if (node === void 0) { node = this.head; }
        var tempNode = node;
        // 先打印第一遍
        // 因为循环从 next 开始
        console.log(tempNode === null || tempNode === void 0 ? void 0 : tempNode.data);
        while (tempNode === null || tempNode === void 0 ? void 0 : tempNode.next) {
            tempNode = tempNode.next;
            console.log(tempNode.data);
        }
    };
    return SinglyLinkedList;
}());
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.append(1);
singlyLinkedList.append(3);
singlyLinkedList.append(4);
console.log('---- 尾部插入 ----');
singlyLinkedList.log();
console.log('----');
singlyLinkedList.unshift(0);
console.log('---- 头部插入 ----');
singlyLinkedList.log();
console.log('----');
singlyLinkedList.insertAt(2, 2);
console.log('---- 任意位置插入 ---');
singlyLinkedList.log();
console.log('----');
singlyLinkedList.reverse();
console.log('---- 反转列表 ----');
singlyLinkedList.log();
console.log('----');
