def solution(numbers):
    answer = ''
    
    arr= list(map(str,numbers))
    
    arr.sort(reverse=True, key=lambda x:x*3)
    result =''.join(arr)
    answer = str(int(result))
    return answer