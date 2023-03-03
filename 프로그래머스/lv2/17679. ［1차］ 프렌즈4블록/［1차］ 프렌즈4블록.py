import copy
#답지 참고
def del_block(board,maps,m,n):
    i,j = 0,0
    count = 0
    temp_maps = copy.deepcopy(maps)
    for i in range(m-1):
        for j in range(n-1):



            block1,block2,block3,block4 = board[i][j],board[i][j+1],board[i+1][j],board[i+1][j+1]

            if block1 == block2 == block3 == block4:
                if maps[i][j] == 1 and maps[i][j+1] == 1 and maps[i+1][j] == 1 and maps[i+1][j+1] == 1:
                    if temp_maps[i][j] != 0:
                        count+=1
#                        board[i][j] = 'x'
                        temp_maps[i][j] = 0
                    if temp_maps[i][j+1] != 0:
                        count+=1
#                        board[i][j+1] = 'x'
                        temp_maps[i][j+1] = 0
                    if temp_maps[i+1][j] != 0:
                        count+=1
#                        board[i+1][j] = 'x'
                        temp_maps[i+1][j] = 0
                    if temp_maps[i+1][j+1] != 0:
#                        board[i+1][j+1] = 'x'
                        count+=1
                        temp_maps[i+1][j+1] = 0

    for i in range(m):
        for j in range(n):
            if temp_maps[i][j] == 0:
                board[i][j] = 'x'

    maps = copy.deepcopy(temp_maps)
    return board,maps,count



def down_block(board, maps, m, n):
    count = 0
    for i in range(m-1):
        for j in range(n):
            if maps[m-i-1][j] == 0: #4 - 0 - 1 4-1-1
                l = 1
                for k in range(0,m-1-i):

                    if maps[m-i-1][j] == 1:
                        break
                    if maps[m-i-1][j] == 0 and maps[m-i-1-l][j] == 1:
                        maps[m-i-1][j] = 1
                        maps[m-i-1-l][j] = 0
                        temp = board[m-i-1][j]
                        board[m-i-1][j] = board[m-i-1-l][j]
                        board[m-i-1-l][j] = temp
                    l+=1

    return board, maps, count

def solution(m, n, board):
    new_board = []
    for i in board:
        temp_board = []
        for j in i:
            temp_board.append(j)
        new_board.append(temp_board)
    board = new_board
    answer = 0
    total_count = 0
    maps = [[1]*n for _ in range(m)]
    while True:
        board,maps,count = del_block(board,maps,m,n)
        if count == 0:
            break
        total_count += count
        board,maps,count = down_block(board,maps,m,n)
    answer = total_count
    return answer