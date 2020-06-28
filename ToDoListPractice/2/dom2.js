// 아이템 추가, 삭제, 검 기능 구현
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event - ToDoList Add 구현
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click',removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);



// Add 콜백함수
// 흐름이해하기 : (입력 후 submit클릭시 발생)->요소생성->class명 할당->값 넣기->위치 시킬곳에(포함시켜주기)
function addItem(e) {
  e.preventDefault(); // 새로고침 하며 입력값 사라지는것 방지

  // Get input value - 입력한 값 변수에 담기
  let newItem = document.getElementById('item').value;
  // Create new li element - li 요소 생성
  let li = document.createElement('li');
  // Add class - 생성한 li 요소에 class 이름 주기
  li.className = 'list-group-item';
  // Add text node with input value - 생성한 li 요소에 새로 입력한 값 넣어주기
  li.appendChild(document.createTextNode(newItem));


  // Create del button element - 삭제버튼 생성하기
  let deleteBtn = document.createElement('button');
  // Add classes to del Btn - 삭제버튼에 class 이름 주기
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node - 삭제버튼에 x라는 값 넣기
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li - 생성한 삭제버튼 li요소에 넣어주기(마크업을 이렇게 구현했음)
  li.appendChild(deleteBtn);


  // Append li to list - 새로생긴 li 를 리스트에 넣어주기
  itemList.appendChild(li)
}



// Remove 콜백함수
// 흐름이해하기 : (X 클릭시 콜백함수 발생)->클릭될 지점 잡기->삭제 물어보기->삭제할 parentElement 잡아 li 변수에 담기->list에서 li변수 삭제
function removeItem(e) {
  if(e.target.classList.contains('delete')) { // 이렇게 잡아주지 않으면 다른곳을 눌러도 클릭된다.
    if(confirm('Are You Sure?')) { // 확인 누르면 true
      let li = e.target.parentElement; // 결국 삭제할것은 이거다.!
      itemList.removeChild(li);
    }
  }
}



// Filter Items
function filterItems(e) {
  // convert text to lovercase
  let text = e.target.value.toLowerCase();
  // Get lis
 let items = itemList.getElementsByTagName('li');

 // console.log(Array.from(items)[0])
 // Convert to an array
  Array.from(items).forEach((item) => { // 노드 리스트틀을 배열로 변환 후 반복문
    let itemName = item.firstChild.textContent // 한 원소의 text가져오기
    if(itemName.toLowerCase().indexOf(text) !== -1) { // 검색어가 포함된 부분이 있는지 검사
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
}