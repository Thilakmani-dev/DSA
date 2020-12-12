import java.util.Arrays;
class InsertionSort{
    //Best case : O(n) Worst case : O(n^2)
    void sort(int[] numbers){
        for(int i = 1; i < numbers.length ; i++){
            var current = numbers[i];
            var j = i-1;
            while(j>=0 && numbers[j]>current){
                numbers[j+1] = numbers[j];
                j--;
            }
            numbers[j+1] =current; 
        }
    }
}
class BubbleSort{
    //Average time complexity is O(n^2)
    void sort(int[] numbers){
        for(int i = 0 ; i < numbers.length ; i++){
            for(int j = 1 ; j < numbers.length-i ; j++){
                if(numbers[j]<numbers[j-1]){
                    int temp = numbers[j];
                    numbers[j] = numbers[j-1];
                    numbers[j-1] = temp;
                }
            }
        }
    }
}
class SelectionSort{
    void sort(int[]array){
        for(int i = 0 ; i < array.length ; i++){
            int minIndex = i;
            for(int j = i ; j < array.length ; j++){
                if(array[j] < array[minIndex]){
                    minIndex = j;
                }
                int temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;
            }
        }
    }
}
class MergeSort{
    void sort(int[] array){
        
    }
}

public class SortingAlgorithms {
    public static void main(String args[]){
        SelectionSort ss = new SelectionSort();
int[] numbersArray = {80,43,23,10,90,56};
ss.sort(numbersArray);
System.out.println(Arrays.toString(numbersArray));
    }
}
