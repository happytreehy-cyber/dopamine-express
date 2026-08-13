function selectItem(type, dopamineRate, title, subtitle, desc) {
    // 도파민 수치 게이지 및 텍스트 업데이트
    document.getElementById('dopamine-val').innerText = dopamineRate + '%';
    
    // 게이지 바 계산 (최대 1200% 기준)
    let barPercent = Math.min((dopamineRate / 1200) * 100, 100);
    let fillElement = document.getElementById('gauge-bar');
    fillElement.style.width = barPercent + '%';

    // 위험도에 따라 게이지 색상 변경
    if (dopamineRate > 500) {
        fillElement.style.background = 'linear-gradient(90deg, #f43f5e, #7f1d1d)';
    } else if (dopamineRate > 200) {
        fillElement.style.background = 'linear-gradient(90deg, #f59e0b, #f43f5e)';
    } else {
        fillElement.style.background = 'linear-gradient(90deg, #38bdf8, #6366f1)';
    }

    // 정보 패널 내용 업데이트
    document.getElementById('info-title').innerText = `[${subtitle}] ${title}`;
    document.getElementById('info-desc').innerText = desc;

    // 뇌 회로 애니메이션 효과 부여
    let vtaNode = document.getElementById('node-vta');
    let nacNode = document.getElementById('node-nac');
    let pfcNode = document.getElementById('node-pfc');
    let pathDesc = document.getElementById('pathway-desc');

    vtaNode.style.borderColor = '#38bdf8';
    nacNode.style.borderColor = '#38bdf8';
    pfcNode.style.borderColor = '#38bdf8';

    if (dopamineRate > 500) {
        nacNode.style.borderColor = '#f43f5e';
        pfcNode.style.borderColor = '#f43f5e';
        pathDesc.innerHTML = `⚠️ <b>[경고]</b> ${title} 자극으로 인해 도파민이 폭발하여 <b>전두엽(이성·통제 영역)이 마비</b>되고 중독 회로가 강력하게 고착됩니다!`;
    } else if (dopamineRate > 200) {
        nacNode.style.borderColor = '#f59e0b';
        pathDesc.innerHTML = `⚡ <b>[주의]</b> 인위적 자극(${title})이 뇌에 유입되어 평소보다 훨씬 강한 쾌감 신호와 내성 반응을 유발합니다.`;
    } else {
        pathDesc.innerHTML = `🌱 <b>[안정]</b> ${title} 활동을 통해 건강한 자연 보상 경로가 활성화되었습니다.`;
    }
}

function resetSimulation() {
    document.getElementById('dopamine-val').innerText = '100%';
    document.getElementById('gauge-bar').style.width = '50%';
    document.getElementById('gauge-bar').style.background = 'linear-gradient(90deg, #38bdf8, #6366f1)';
    document.getElementById('info-title').innerText = '선택된 항목 없음';
    document.getElementById('info-desc').innerText = '자연 보상과 인위적 보상의 차이를 비교해 보세요.';
    document.getElementById('pathway-desc').innerText = '하단의 보상 아이콘을 클릭하여 뇌의 반응을 관찰하세요.';
    
    document.getElementById('node-vta').style.borderColor = '#6366f1';
    document.getElementById('node-nac').style.borderColor = '#6366f1';
    document.getElementById('node-pfc').style.borderColor = '#6366f1';
}
