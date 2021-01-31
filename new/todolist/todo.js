const toDoForm = document.querySelector(".ja-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = 'toDos';

    // function filterFn(toDo){
    //     return toDo.id === 1
    // }

    let toDos = [];   // 해야할 일을 생성할 때 마다 'toDos'라는 array에 추가 되도록 함

    function deleteToDo(event){    // 삭제해주는 기능 만들기
        const btn = event.target;
        const li = btn.parentNode;
        toDoList.removeChild(li);   // 누른 버튼의 부모(id)가 누군지 알아야 함.
        const cleanToDos = toDos.filter(function(toDo){
            return toDo.id !== parseInt(li.id);
        });
        console.log(cleanToDos);
        toDos = cleanToDos;
        saveToDos();
    }

    function saveToDos(){  // toDos를 가져와서 로컬에 저장하는 일.
        localStorage.setItem(TODOS_LS, JSON.stringify(toDos));  // JSON.stringify는 자바스크립트 object를 string으로 바꿔준다.
    }


    function paintToDo(text){
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const span = document.createElement("span");
        const newId = toDos.length + 1;
        delBtn.innerHTML = "x";
        delBtn.addEventListener("click", deleteToDo);   // delBtn버튼 클릭할때의 event 추가
        span.innerText = text;
        li.appendChild(span);
        li.appendChild(delBtn);
        li.id = newId;
        toDoList.appendChild(li);
        const toDoObj = {
            text: text,
            id: newId
        };
        toDos.push(toDoObj);
        saveToDos();     // push한 이후에 호출해야한다. 만약 이거 전 호출해버리면 saveToDos를 불러도 저장할 게 아무것도 없다. toDos는 지금 비어있으니까.
    }

    // 근데 이렇게 하면 local storage value값이 obhect로 나옴. localStorage에는 자바스크립트의 data를 저장할 수가 없다. 오직 string만 저장가능함. 자바스크립트는 local storage에 있는 모든 데이터를 string으로 저장하려고 하다.
    // 그래서 우리 object가 string이 되도록 만들어야 한다.

    function handleSubmit(event){
        event.preventDefault();
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
        toDoInput.value = ""; //submit 같은 거
    }

    // function somthing (toDo) {
    //     console.log(toDo.text);
    // };

    function loadToDos(){
        const loadedtoDos = localStorage.getItem(TODOS_LS); //localStorge 에서 온걸 가져오기
        if(loadedtoDos !== null){  // 만약 toDos가 null이 아니면 toDoForm을 여기 가져옴
            // console.log(loadedtoDos);  // parse하기 전 loadedtoDos의 모습
            const parsedToDos = JSON.parse(loadedtoDos);  // 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능
            console.log(parsedToDos);    // parse해주었더니 object로 변환된 모습
                                                    // 이제 해야하는것은 parsedToDos의 안에 있는 것들에 대해서 paintToDo funciton을 실행할거임.
            parsedToDos.forEach(function something (toDo) {
                paintToDo(toDo.text);
            });           // forEach는 array를 위한 function. forEach는 기본적으로 함수를 실행하는데, array에 담겨있는 것들을 각각에 한번씩 함수를 실행시켜주는 것. 
        }
    }

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit);
    }

    init();