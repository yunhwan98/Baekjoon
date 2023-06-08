n,m = map(int,input().split())

arr1 = list(map(int,input().split()))
arr2 = list(map(int,input().split()))
union_cnt = len(set(arr1+arr2))

intersection_cnt = len(arr1) +len(arr2) -union_cnt

print(len(arr1)-intersection_cnt + len(arr2) -intersection_cnt)