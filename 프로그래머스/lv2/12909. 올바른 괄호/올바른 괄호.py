def solution(s):

    result = []
    
    for i in s:
        if i=='(':
            result.append(i)
        else:
            if result and result[-1]=='(':
                result.pop()
            else:
                return False
        
        
    if result:
        return False
    

    return True