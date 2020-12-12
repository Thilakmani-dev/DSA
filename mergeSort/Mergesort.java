package mergeSort;

import java.util.Arrays;
//O(n logn)
//log n for divide 
// n for conquering based on array length-n
public class Mergesort {
    public void sort(int[] array){

        //break the recursion when the array length becomes one
        if(array.length<2){
            return;
        }
        //divide the array into half;
        var middle = array.length /2;
        int[] left = new int[middle];
        for(int i = 0; i < middle ; i++){
            left[i] = array[i];
        }
        int right[] = new int[array.length - middle];
        for(int i = middle ; i < array.length ; i++){
            right[i-middle] = array[i];
        }

        //sort the each half
        sort(left);
        sort(right);

        //call merge method
        merge(left,right,array);
    }
        //merge the result
        private void merge(int[] left, int[] right, int[] result){
            int i = 0, j = 0, k=0;
            while(i<left.length && j < right.length){
                if(left[i]<=right[j]){
                    result[k++] = left[i++];
                }
                else{
                    result[k++] = right[j++];
                }
            }    
            while(i < left.length){
                result[k++] = left[i++];
            }       
            while(j < right.length){
                result[k++] = right[j++];
            }
        }
        public static void main(String args[]){
            Mergesort ms = new Mergesort();
            int[] numbers = {900,6000,300,45,2000,39};
            ms.sort(numbers);
            System.out.println(Arrays.toString(numbers));
        }
}
