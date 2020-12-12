public class BinarySearch {
     int Search(int[] arr,int tar){
        int left=0;
        int right = arr.length-1;
        while(left<=right){
            int middle = (left+right)/2;
            if(arr[middle] == tar){
                return middle;
            }
            if(tar < arr[middle]){
                right = middle-1;
            }
            else{
                left = middle+1;
            }
        }
        return -1;
    }
    public static void main(String args[]){

        int[] numbers = {10,20,30,40,50,60,70};
        int target = 70;
        BinarySearch b = new BinarySearch();
        int result = b.Search(numbers,target);
        System.out.println(result);
    }
}
