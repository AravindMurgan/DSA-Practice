function nextGreaterElements(nums) {
    const n = nums.length;
    const st = [];
    const ans = new Array(n).fill(-1);
    for (let i = n * 2 - 1; i >= 0; i--) {
        while (st.length && st[st.length - 1] <= nums[i % n]) {
            st.pop();
        }
        if (i < n) {
            ans[i] = st.length ? st[st.length - 1] : -1;
        }
        st.push(nums[i % n]);
    }
    return ans;
};

nextGreaterElements([5, 4, 3, 2, 1])
