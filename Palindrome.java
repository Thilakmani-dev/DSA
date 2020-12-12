public class Palindrome {
    public static void main(String args[]){
        int n = 909;
        int temp = n;
        int newnum=0,rem;
        while(n>0){
            rem = n%10;
            newnum = (newnum*10)+rem;
            n = n/10;
        }
        if(temp==newnum){
            System.out.println("True");
        }
        else{
            System.out.println("False");
        }
    }
}
