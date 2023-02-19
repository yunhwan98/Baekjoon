from heapq import *

def solution(numbers):
    n = len(numbers)
    answer = [-1] * n

    h = []

    for i in range(n):
        value = numbers[i]

        # h가 존재하고 h[0][0]이 value보다 작으면
        while h and h[0][0] < value:
            _, idx = heappop(h)
            answer[idx] = value
        
        #힙에 [value,i] 넣기
        heappush(h, [value, i])


    return answer