def solution(topping):
    answer = 0
    length = len(topping)
    toppings = list(set(topping))
    #동일 가짓수의 토핑만족 시 공평
    
    a = {}
    b = {}
    
    for i in topping:
        if i not in a:
            a[i]=1
        else:
            a[i]+=1

    for i in topping:
        if i not in b:
            b[i]=1
        else:
            b[i]+=1
            
        if a[i]==1:
            a.pop(i)
        else:
            a[i]-=1
        
        
        if len(a.keys()) == len(b.keys()):
            answer+=1
    
    

    return answer