def binarySearch(numbers, target):
    left = 0;
    right = len(numbers)-1;
    #middle = left + (right-left) // 2
    while left <= right:
        middle = (left + right) // 2;
        if(numbers[middle] == target):
            return middle;
        elif target < numbers[middle]:
            right = middle+1;
        else:
            left = middle-1;
            
    return -1;

numbers = [10,20,30,35,40,250,1000]

result = binarySearch(numbers, 250);
print('result',result);