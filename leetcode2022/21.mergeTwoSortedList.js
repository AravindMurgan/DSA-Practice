function ListNode(data, next) {
    this.data = data ? data : 0
    this.next = next ? next : null
}

var mergeTwoLists = function (list1, list2) {
    let sortedList = [...list1, ...list2].sort((a, b) => a - b);
    console.log(sortedList);
}

mergeTwoLists([1, 2, 4], [1, 3, 4]);7