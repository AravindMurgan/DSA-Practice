var isIsomorphic = function (s, t) {
    const map1 = [];
    const map2 = [];
    // Traverse all elements through the loop...
    for (let idx = 0; idx < s.length; idx++) {
        // Compare the maps, if not equal, return false...
        if (map1[s.charAt(idx)] != map2[t.charAt(idx)])
            return false;
        // Insert each character if string s and t into seperate map...
        map1[s.charAt(idx)] = idx;
        map2[t.charAt(idx)] = idx;
    }
    return true;    // Otherwise return true...
};

isIsomorphic('foo', 'baa')