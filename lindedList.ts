interface INode {
    data: number;
    next: INode | null;
}

class SinglyLinkedList {
    private head: INode | null;

    constructor() {
        this.head = null;
    }

    private createNode(data: number): INode {
        return {
            data,
            next: null
        }
    }

    // 插入链表头
    unshift(data: number) {
        const newNode = this.createNode(data)
        if (!this.head) {
            this.head = newNode;
            return
        }
        const temp = this.head
        newNode.next = temp
        this.head = newNode
    }

    // 插入链表尾
    append(data: number) {
        const newNode = this.createNode(data)
        if (!this.head) {
            this.head = newNode
            return
        }
        // 循环找到最后一个Node
        let lastNode: INode | null = this.head
        while (lastNode.next) {
            lastNode = lastNode?.next || null
        }
        console.log('lastNode', JSON.stringify(lastNode))
        lastNode.next = newNode
    }

    // 在任意位置插入
    insertAt(data: number, targetIndex: number) {
        if (targetIndex < 0) {
            console.log('index 不能小于0')
            return
        }
        const newNode = this.createNode(data)
        let preNode: INode | null = this.head

        if (targetIndex === 0) {
            this.unshift(data)
            return
        }

        for (let index = 0; index < targetIndex - 1; index++) {
            if (preNode?.next) {
                preNode = preNode.next
            }
        }
        // console.log('preNode', preNode?.data)
        if (preNode) {
            const tempNode = preNode.next
            preNode.next = newNode
            newNode.next = tempNode
        }
    }

    // 反转链表
    reverse(node?: INode | null) {
        // 递归法
        let currentNode = node || this.head;
        if (!currentNode?.next) {
            this.head = currentNode
            return
        }
        this.reverse(currentNode?.next)
        const nextNode = currentNode.next;
        nextNode.next = currentNode
        currentNode.next = null
    }


    // 从头到尾打印
    log(node: INode | null = this.head) {
        let tempNode = node;
        // 先打印第一遍
        // 因为循环从 next 开始
        console.log(tempNode?.data)
        while (tempNode?.next) {
            tempNode = tempNode.next
            console.log(tempNode.data)
        }
    }
}


const singlyLinkedList = new SinglyLinkedList();


singlyLinkedList.append(1)
singlyLinkedList.append(3)
singlyLinkedList.append(4)
console.log('---- 尾部插入 ----')
singlyLinkedList.log()
console.log('----')

singlyLinkedList.unshift(0)

console.log('---- 头部插入 ----')
singlyLinkedList.log()
console.log('----')

singlyLinkedList.insertAt(2, 2)
console.log('---- 任意位置插入 ---')
singlyLinkedList.log()
console.log('----')

singlyLinkedList.reverse()
console.log('---- 反转列表 ----')
singlyLinkedList.log()
console.log('----')