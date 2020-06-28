// 1. EXAMINE THE DOCUMENT OBJECT

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = BLAIR
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]); // h1#header-title
// // document.all[10].textContent = "HELLO"
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// 2. GETELEMENTBYID

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// console.log(header);
// headerTitle.textContent = "HELLO BLAIR";
// headerTitle.innerText = "GOODBYE BLAIR"; // 글자 넣기능(태그성질은 그대로 글자만 수정)
// console.log(headerTitle.textContent); // 숨겨있는 태크도 출력된다.
// console.log(headerTitle.innerText); // 화면에 보이는 부분만 출력된다.
// headerTitle.innerHTML = '<h3>Hellooo</h3>'; //  태그 수정이여서 글시도 스타일도 변경가
// headerTitle.style.color = 'yellow';
// header.style.borderBottom = 'solid 3px #000';


// 3. GETELEMENTBYCLASSNAME

// let items = document.getElementsByClassName('list-group-item'); //  이 클래스 이름가진 태그들 모두 변수명에 배열로 넣음
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
//
// // items.style.backgroundColor = 'grey' // 이러면 에러난다.
// for(let i = 0; i < items.length; i++) { // 이렇게 반복문 돌면서 다 적용해줘야 한다.
//   items[i].style.backgroundColor = '#d1d1d1';
// }


// 4. GETELEMENTBYTAGNAME

// let li = document.getElementsByTagName('li'); //  이 태그를 가진것 모두 배열에 담아 돌려준다.
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
//
// // li.style.backgroundColor = 'grey' // 이러면 에러난다.
// for(let i = 0; i < li.length; i++) { // 이렇게 반복문 돌면서 다 적용해줘야 한다.
//   li[i].style.backgroundColor = '#d1d1d1';
// }


// 5. QUERYSELECTOR
// let header = document.querySelector('#main-header'); // 첫번쨰꺼만 반환 querySelectorAll은 모두 반환
// header.style.borderBottom = 'solid 4px red';
//
// let input = document.querySelector('input');
// input.value = 'Hello World'; //  1만 바뀜
//
// let submit = document.querySelector('input[type="submit"]'); // 이렇게 가져올 수도 있다.
// submit.value = 'SEND';
//
// let item = document.querySelector('.list-group-item');
// item.style.color = 'red'; //  첫번째만 바뀜
//
// let lastItem = document.querySelector('.list-group-item:last-child'); // 마지막 요소 부르기
// lastItem.style.color = 'blue'; // 마지막만 바뀐다.
//
// let secondItem = document.querySelector('.list-group-item:nth-child(2)'); // 2번쨰 요소 부르기
// secondItem.style.color = 'pink';


// 6. QUERYSELECTORALL
let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = "HELLO";

let odd = document.querySelectorAll('li:nth-child(odd)'); // 짝수
let even = document.querySelectorAll('li:nth-child(even)'); // 홀수

for(let i = 0; i < odd.length; i++) { // odd, even 둘다 길이 2이므로
  odd[i].style.backgroundColor = '#f4f4f4'
  even[i].style.backgroundColor = 'pink'
}









