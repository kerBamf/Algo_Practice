//Practicing linked list traversal

class Node {
    constructor(val, next) {
        this.val = val
        this.next = (next === undefined) ? null : next;
    }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

const w = new Node("w")
const x = new Node("x")
const y = new Node("y")
const z = new Node("z")

// function traverseList(head, index) {
//     let current = head
//     while(current !== null){
//         if(current.val === target) {
//             return `Target is present at node position ${nodeCount}`
//         }
//         current = current.next
//         nodeCount += 1
//     }
//     return false
// }

// function traverseList(head, target) {
//     let nodeCount = 0
//     let result = search(head, target)
//     function search(head, target) {
//         if(head == null) return false
//         if(head.val == target) {
//             return `Target is present at node position ${nodeCount}`
//         }
//         nodeCount += 1
//         return search(head.next, target)
//     }
//     return result
// }

// console.log(traverseList(a, 16))


// function findAtIndex (head, idx) {
//     let current = head
//     let count = 0
//     while(current !== null) {
//         if (count == idx) {
//             return current.val
//         }
//         current = current.next
//         count += 1
//     }
//     return `Node not found`
// }

// function findAtIndex (head, idx) {
//     let count = 0
    
//     function search(head, idx) {
//         if (head == null) return `Node not found`
//         if (count == idx) return head.val
//         count += 1
//         return search(head.next, idx)
//     }

//     return search(head, idx)
// }

// console.log(findAtIndex(a, 10))

// function reverseList(head) {
//     const stack = []
//     let current = head
    
//     while(current !== null) {
//         stack.push(current)
//         current = current.next
//     }
//     while(stack.length > 0) {
//         current = stack.pop()
//         console.log(current.val)
//     }
// }

// function reverseList(head) {
//     if(head == null) return
//     if(head.next !== null) reverseList(head.next)
//     console.log(head.val)

// }

// reverseList(a)


// function zipperList(head1, head2) {
//     let current1 = head1.next
//     let current2 = head2
//     let tail = head1
//     let count = 0

//     while(current1 !== null && current2 !== null) {
//         if(count % 2 == 0){
//             console.log(tail.val)
//             tail.next = current2
//             tail = tail.next
//             current2 = current2.next
//         } else if (count % 2 !== 0) {
//             console.log(tail.val)
//             tail.next = current1
//             tail = tail.next
//             current1 = current1.next
//         }
//         count +=1

//     }
//     if(current1 !== null) tail.next = current1
//     if(current2 !== null) tail.next = current2

//     return head1
// }

function zipperList(head1, head2) {
    if(head1 === null && head2 === null) return null
    if(head1 === null) return head2
    if(head2 === null) return head1

    const next1 = head1.next
    const next2 = head2.next
    head1.next = head2
    head2.next = zipperList(next1, next2)
    return head1
}

console.log(zipperList(a, w))