
def solution(brown, yellow):
    answer = []

    total = brown + yellow
    row = 1
    col = total//row
    

    for i in range(1,brown):
        row = i
        col = total//row
        if (row-2) * (col-2) == yellow and row>=col and 2*row +2*col -4 ==brown:
            break
                
    answer = [row,col]
    
    return answer