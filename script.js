// 페이지의 모든 요소가 로드된 후에 스크립트가 실행되도록 합니다.
document.addEventListener('DOMContentLoaded', function() {

    // 필요한 HTML 요소들을 가져옵니다.
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const progressBar = document.getElementById('progressBar');
    const counter = document.getElementById('counter');
    const totalTasks = checkboxes.length; // 전체 체크박스 개수

    // 진행 상황을 업데이트하는 함수
    function updateProgress() {
        // 현재 체크된 박스의 개수를 셉니다.
        let checkedCount = 0;
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                checkedCount++;
            }
        });

        // 완료 개수를 화면에 표시합니다.
        counter.textContent = checkedCount;

        // 진행률을 계산합니다 (소수점 없이).
        const progressPercentage = (checkedCount / totalTasks) * 100;

        // 진행률 바의 너비를 업데이트합니다.
        progressBar.style.width = progressPercentage + '%';
    }

    // 모든 체크박스에 '클릭' 이벤트가 발생할 때마다 updateProgress 함수를 실행하도록 설정합니다.
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', updateProgress);
    });

    // 페이지가 처음 로드될 때 진행 상황을 한 번 업데이트하여 0으로 설정합니다.
    updateProgress();
});