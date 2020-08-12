// 這裡開始寫入JavaScript主程式
// 跟流程無關的一定要註解
// 函數 => Function 
// console.log('現在JS開始運行');

// 註冊 .ingredients>li 元素的點擊事件
$('.ingredients>li').click(function () {
    // 以下的流程會在點擊後觸發
    // console.log('li被點了');
    // console.log('被點擊的li:', this);
    // 切換被點的li class="done"
    $(this).toggleClass('done');
    // 把被點擊的li移除class="done"
    // $(this).removeClass('done');
    // 把被點擊的li加上class="done"
    // $(this).addClass('done');
    // add-class-something addClassSomething
    // 把這些li加上class="done"
    // $('.ingredients>li').addClass('done');
});