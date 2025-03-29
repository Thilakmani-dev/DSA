numbers = [2222,10,212,16,54,2342,676,3];
def selectionSort(toSort):
    for i in range(len(toSort)):
        minPos = i;
        for j in range(i+1, len(toSort)):
            if(toSort[j]<toSort[minPos]):
                minPos = j;
            
        temp = toSort[i];
        toSort[i] = toSort[minPos];
        toSort[minPos] = temp;
    return toSort;
    
print(selectionSort(numbers))