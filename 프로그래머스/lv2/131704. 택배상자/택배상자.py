from collections import deque

def solution(order):

    answer = 0
    container = deque([i+1 for i in range(len(order))])
    sub_container = []
        
    #택배 상자 크기 동일 번호 증가
    #택배 기사님이 알려준 순서에 맞게 상자 싣기
    #순서가 아닌 경우 보조 컨테이너에 넣기 (스택 구조)
    
    #ex 4 3 1 2 5
    # 스택 123
    #     12 
    # 이경우 1을 꺼낼수 없어서 종료 따라서 2개만 실림
    
    #ex 5 4 3 2 1
    
    #1. 보조 컨테이너(스택) 설치
    #2. 첫번째 순서를 만날 때 까지 스택에 넣기
    #3. 두번째 순서를 만날 경우
    #   주 컨테이너에 있는 경우: 만날 때까지 스택에 넣기
    #   없는 경우: 스택에 맨 위에 있는지 보기
    #4. 반복

    for i in order: 

        # 보조 컨테이너에 맨 위 박스가 i인지 확인
        if len(sub_container)>0 and sub_container[-1]==i:
            sub_container.pop()
            answer+=1
            continue
            
        if len(container)>0:
            cur = container.popleft()
            while(len(container)>0 and cur!=i):
                sub_container.append(cur)
                cur = container.popleft()

            if cur==i:
                answer+=1
                continue
            else:
                break
        
            
            
        
        
        
            
    return answer