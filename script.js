const infoData = {
    caffeine: {
        title: "카페인 한 잔의 비밀",
        desc: "카페인은 뇌의 '아데노신' 수용체를 차단하여 도파민이 더 잘 활동하게 돕습니다. 적당하면 집중력 UP, 과하면 뇌가 쉬지 못해요!"
    },
    food: {
        title: "음식의 즐거움",
        desc: "생존에 필요한 에너지를 얻을 때 뇌는 자연스러운 보상으로 도파민을 분비합니다."
    }
};

function showInfo(type) {
    const info = infoData[type];
    if (info) {
        document.getElementById('info-card').innerHTML = `<h3>${info.title}</h3><p>${info.desc}</p>`;
        // 여기서 도파민 레벨 숫자를 변경하는 로직 추가
    }
}

function reset() {
    document.getElementById('info-card').innerHTML = "아이콘을 클릭하여 기전을 확인하세요.";
}
