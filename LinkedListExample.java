import java.util.Arrays;
import java.util.LinkedList;
public class LinkedListExample {
    public static void main(String args[]){
        LinkedList list = new LinkedList();
        list.addLast(10);
        list.addLast(20);
        list.addFirst(5);
        list.add(50);
        list.removeFirst();
        var array = list.toArray();
        boolean res = list.contains(50);
        System.out.println(list+" "+res);
        System.out.println(list.size());
        System.out.println(Arrays.toString(array));
    }
}
