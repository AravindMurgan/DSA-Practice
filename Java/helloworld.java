import java.util.HashMap;
import java.util.Arrays;

public class helloworld {
    public static void main(String[] args){
        
        int [] twoSum1 =twoSum(new int[] {1,2,3,4}, 5);
        System.out.println(Arrays.toString(twoSum1));

    }

    public static int[] twoSum(int[] nums, int target){
        HashMap<Integer,Integer> map = new HashMap<>();

        for(int i=0 ; i<nums.length; ++i){
            int complement = target-nums[i];

            if(map.containsKey(complement)){
                return new int[] {map.get(complement),i};
            }else{
                map.put(nums[i],i);
            }
        }

        return new int[] {};
    }
}