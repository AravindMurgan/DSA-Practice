class Solution:
    temp = None      # static variables
    head = None
    def bToDLL(self,root):
        # do Code here
        # in order traversal - left, root, right
        if root is None:
            return
        #left
        self.bToDLL(root.left)
        #root
        # condition for extreme left of binary tree
        if self.temp is None:
            self.head = root
        # creating doubling linked list
        else:
            self.temp.right = root         
            root.left = self.temp
         
        self.temp = root
        #right
        self.bToDLL(root.right)
    
        return self.head