function solution(board)
{
  let answer = 0;
  const row = board.length;
  const column = board[0].length;

  //이 경우 넓이는 1
  if (row <= 1 || column <= 1) return 1;

   
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (board[i][j] > 0) {
        //현재 위치에서 위,왼쪽,왼쪽 위 대각선의 값 구하기 
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const cross = board[i - 1][j - 1];
        //가장 작은 값 구하기
        const minNum = Math.min(up, left, cross);
        board[i][j] = minNum + 1;
        
        //가장 큰 값이 정답
        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer * answer;
}