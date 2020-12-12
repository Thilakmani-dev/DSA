public class LCMGCD {
    public static void main(String args[]){
        int n1 = 80, n2=120;
        int gcd = 1;
        for(int i = 1; (i <= n1 && i <= n2) ; i++){
            if((n1%i==0)&&(n2%i==0)){
                gcd = i;
            }
        }
        int lcm = (n1*n2)/gcd;
        System.out.println("n1 and n2 numbers are :"+n1+" "+n2);
        System.out.println("GCD :"+gcd);
        System.out.println("LCM :"+lcm);
    }
}
