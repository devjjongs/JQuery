//문제 객체
function Question(text, choice, answer) {
    this.text = text;
    this.choice = choice;
    this.answer = answer;
};

//퀴즈 정보 객체
function Quiz(questions) {
    this.score = 0; //  점수
    this.questions = questions; //  질문
    this.questionIndex = 0; //  질문 순서
};

//----------------------------------------------------------------------------------------------------------------------
//문제 데이터
var questions = [
    new Question('다음 중 최초의 상용 웹 브라우저는?', ['모자이크', '인터넷 익스플로러', '구글 크롬', '넷스케이프 네비게이터'], '넷스케이프 네비게이터'),
    new Question('웹 문서에서 스타일을 작성하는 언어는?', ['HTML', 'jQuery', 'CSS', 'XML'], 'CSS'),
    new Question('명령어 기반의 인터페이스를 의미하는 용어는?', ['GUI', 'CLI', 'HUD', 'SI'], 'CLI'),
    new Question('CSS 속성 중 글자의 굵기를 변경하는 속성은?', ['font-size', 'font-style', 'font-weight', 'font-variant'], 'font-weight')
];

//퀴즈 객체 생성
var quiz = new Quiz(questions);

//----------------------------------------------------------------------------------------------------------------------
//문제 출력 함수
function update_quiz() {
    var question = document.getElementById('question');
    var idx = quiz.questionIndex + 1;
    var choice = document.querySelectorAll('.btn');
}

//문제 출력
question.innerHTML = '문제' + idx + ') ' + quiz.questions[quiz.questionIndex].text;

//선택 항목 출력
for (var i = 0; i < 4; i++) {
    choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
}
progress();