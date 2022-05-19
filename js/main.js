//윈도우 이미지 등의 파일이 모두 로드된 후에 실행
window.addEventListener('load', () => {
    // isotope 라이브러리 사용
    const grid =  new Isotope(".gallery", {
        itemSelector: 'article', // 적용할 아이템
        columnWidth: 'article', // 아티클 요소 넓이 값
        transitionDuration: "0.5s" // 전환되는 속도
    }) //grid로 반환


    const btns = document.querySelectorAll('.gallery-menu li')

    btns.forEach( btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // 새로 고침, 링크 탐색 방지

            // 함수 중복실행 방지
            const isOn = e.currentTarget.classList.contains('on')
            if(isOn === false){
                activation(e)
            }
        })


        //gallery-menu 클릭시 발생하는 함수
        function activation(event){

            //버튼 활성화
            btns.forEach( (btn) => {
                btn.classList.remove('on')
            })
            event.currentTarget.classList.add('on')


            // 탐색을 위한 값 a_href 탐색
            const btn_a = event.currentTarget.querySelector('a')
            const a_href = btn_a.getAttribute('href')


            //grid값에 arrange매서드 사용 -> filter에 들어와있는 값을 통해 해당 클래스를 탐색
            grid.arrange({filter: a_href}) 
        }
    })
})