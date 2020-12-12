public class LeapYear {
    public static void main(String args[]){
        int year = 2004;
        if(year%4==0){
            if(year%100==0){
                if(year%400==0){
                    System.out.println("Yes");
                }
                else{
                    System.out.println("no");
                }
            }
            else{
                System.out.println("Yes");
            }
        }
        else{
System.out.println("No");
        }
    }
}
