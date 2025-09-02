// すべての座席ボタンを取得
const seats = document.querySelectorAll('.seat');

// 各ボタンにクリックイベントを設定
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        // 現在の状態を取得
        const currentStatus = seat.dataset.status;

        // 次の状態を決定
        let nextStatus;
        if (currentStatus === 'empty') {
            nextStatus = 'occupied'; // 空席 -> 在籍
        } else if (currentStatus === 'occupied') {
            nextStatus = 'cleaning'; // 在籍 -> お直し
        } else {
            nextStatus = 'empty'; // お直し -> 空席
        }

        // 状態を示すクラスとdata属性を更新
        seat.classList.remove(currentStatus);
        seat.classList.add(nextStatus);
        seat.dataset.status = nextStatus;
    });
});