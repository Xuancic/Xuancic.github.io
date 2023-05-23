// 获取所有玩家的信息
fetch('/api/players')
    .then(response => response.json())
    .then(data => {
        // 处理从后端获取的玩家数据
        console.log(data.players);
    });

// 创建新玩家
fetch('/api/players/create', {
    method: 'POST',
    body: JSON.stringify({
        name: '玩家名称',
        position_x: 0,
        position_y: 0
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => {
        // 处理从后端获取的响应数据
        console.log(data.message);
    });