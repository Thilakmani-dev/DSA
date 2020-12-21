package queuesInJava;

import java.util.ArrayDeque;
import java.util.Queue;
import java.util.Stack;

public class ReverseQueueUsingStack {
    public static void main(String args[]){
        Queue<Integer> q = new ArrayDeque<>();
        q.add(10);
        q.add(20);
        q.add(30);
        reverse(q);
        System.out.println(q);
    }   
    public static void reverse(Queue<Integer> queue){
        Stack<Integer> s = new Stack<>();
        while(!queue.isEmpty()){
            s.push(queue.remove());
        }
        while(!s.isEmpty()){
            queue.add(s.pop());
        }
    }
}
