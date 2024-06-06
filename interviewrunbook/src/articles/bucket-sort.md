# 🪣 Bucket Sort Algorithm 🪣

Bucket Sort is a comparison sort algorithm that distributes elements into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm or by recursively applying the bucket sort. After sorting each bucket, the elements are concatenated to form the final sorted array.

We needed Bucket Sort to effectively solve the [Top K frequent elements problem](https://leetcode.com/problems/top-k-frequent-elements)

More specifically we 
* calculated the frequency of each element | O(n)
* initialize frequency buckets | O(n)
* collect the top k frequent elements | k


```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // calculate frequency of each element
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        // initialize frequency buckets
        List<Integer>[] frequencyBuckets = new List[nums.length + 1];
        for(int num : freq.keySet()) {
            Integer frequency = freq.get(num);
            List<Integer> frequencyBucket = frequencyBuckets[frequency];
            if(frequencyBucket == null) {
                frequencyBuckets[frequency] = new ArrayList<>(List.of(num));
            } else {
                frequencyBuckets[frequency].add(num);
            }
        }
        // collect the top k frequent elements
        int[] answer = new int[k];
        int pos = k - 1;
        int index = frequencyBuckets.length - 1;
        do{

            if(frequencyBuckets[index] != null) {
                for (Integer num : frequencyBuckets[index]) {
                    answer[pos] = num;
                    pos--;
                }
            }
            index--;
        } while (pos >= 0);

        return answer;
    }
}
```