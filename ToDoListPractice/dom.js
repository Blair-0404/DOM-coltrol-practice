// EXAMINE THE DOCUMENT OBJECT

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


// GETELEMENTBYID

// console.log(document.getElementById('header-title'));
const headerTitle = document.getElementById('header-title');
const header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "HELLO BLAIR";
// headerTitle.innerText = "GOODBYE BLAIR"; // 글자 넣기능(태그성질은 그대로 글자만 수정)
// console.log(headerTitle.textContent); // 숨겨있는 태크도 출력된다.
// console.log(headerTitle.innerText); // 화면에 보이는 부분만 출력된다.
// headerTitle.innerHTML = '<h3>Hellooo</h3>'; //  태그 수정이여서 글시도 스타일도 변경가
headerTitle.style.color = 'yellow';
header.style.borderBottom = 'solid 3px #000';


// GETELEMENTBYCLASSNAME









