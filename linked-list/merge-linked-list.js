var mergeKLists = function(lists) {
  if (lists === null || lists.length === 0) {
    return null;
  }
  return merge(lists, 0, lists.length - 1);
}
 
function merge(lists, left, right) {
  if (left === right) {
    return lists[left];
  }

  let mid = left + ((right - left) / 2 | 0);
  let l1 = merge(lists, left, mid);
  let l2 = merge(lists, mid + 1, right);
  return mergeTwoLists(l1, l2);
}

function mergeTwoLists(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}