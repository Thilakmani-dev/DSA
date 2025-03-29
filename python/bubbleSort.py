numbers = [2222,10,212,16,54,2342,676,3];

def bubbleSort(toSort):
    for i in range(len(toSort)):
        for j in range(1, len(toSort)-i):
            if(toSort[j]<toSort[j-1]):
                temp = toSort[j];
                toSort[j] = toSort[j-1];
                toSort[j-1] = temp;
            j+=1;
        i+=1;
    return toSort;
    
print(bubbleSort(numbers));