def isBracket(x):

    arr=['']
    
    for i in x:
        if i=='}':
            if arr.pop() =='{':
                pass
            else:
                return False
        elif i==']':
            if arr.pop() =='[':
                pass
            else:
                return False
        elif i==')':
            if arr.pop() =='(':
                pass
            else:
                return False
        else:
            arr.append(i)
    
    if len(arr)>1:
        return False
    
    return True


def solution(s):
    answer = 0
    a={}

    str = list(s)  
    
    
    for i in range(len(s)):
        x = str[i:]+str[0:i]
        isBracket(x)
        if(isBracket(x)): answer+=1
    

    
    return answer