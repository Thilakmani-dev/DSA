package StringManipulation;

public class AreRotations {
  public boolean areStringRotations(String str1, String str2){
    if(str1 == null || str2 == null){
        return false;
    }

    return (str1.length() == str2.length() && (str1 + str1).contains(str2));
    //if(str1.length() != str2.length()){
      //    return false;
     // }
      //if(!(str1+str1).contains(str2)){
       //   return false;
     // }
     // return true;
  }
  public static void main(String args[]){
      AreRotations isStrRot = new AreRotations();
      boolean result = isStrRot.areStringRotations("ABCD","CDAB");
      System.out.println("Is two strings can be same when rotated several times "+result);
  }
}
