# 장보기 목록 만들기 (Todo app)

1. Container 만들기

   - 관리할 상태를 정의합니다
   - todos => useState

2. Form 만들기

   - todos, setTodos를 받아오기
   - todo => useState
   - **대용내용** Create뿐만 아니라 Update 상항도 고려해야함 - payload 받아와서 수정할떄만 todo초기값을 변경 - 수정하는 상황을 구별할 boolean 받아오기

3. Item 만들기 (Read)

   - todos의 todo를 출력하면 됨
   - 수정 버튼을 눌렀을 때 Form을 그려주면됨
   - **주의**: payload로 todo전달, 수정하는 boolean전달

   - 삭제 기능도 필요함
   - todo, todos, setTodos를 받아와야 함
