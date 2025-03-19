// 获取服务数据
fetch('services.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('services');
        let html = '';
        
        data.services.forEach(service => {
            html += `
                <div class="service-card ${service.hot ? 'hot' : ''}">
                    <h3>${service.name}</h3>
                    <p>💰 价格: ${service.price}元</p>
                    <p>⏳ 耗时: ${service.time}</p>
                    <button onclick="showOrderForm('${service.id}')">立即下单</button>
                </div>
            `;
        });
        
        container.innerHTML = html;
    });

// 显示订单表单
function showOrderForm(serviceId) {
    window.location.href = `order.html?service=${serviceId}`;
}
