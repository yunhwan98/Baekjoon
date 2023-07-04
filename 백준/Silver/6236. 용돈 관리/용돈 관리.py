import sys
input = sys.stdin.readline

if __name__ == "__main__":
    n, m = map(int, input().split())
    lst = [int(input()) for _ in range(n)]

    start = max(lst)
    end = sum(lst)

    while start <= end:
        mid = (start + end) // 2
        current = mid

        cnt = 1
        ans = 0

        for money in lst:
            if current < money:
                cnt += 1
                current = mid
            current -= money

        if cnt > m:
            start = mid + 1
        else:
            ans = mid
            end = mid - 1

    print(ans)