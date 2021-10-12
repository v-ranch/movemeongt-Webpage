/*
벽,0
불,1
도시,2
하늘,3
연기,4
물,5
빛,6
풀,7
*/

const qnaList = [
  {
    q: '<div class="qna-circle"><img src="../img/water_2d.png" alt="img/png"></div><div class="qText">지금의 너는<br>어떤 모습에 가까울까?</div>',
    a: [
      { answer: '방 안에 놓인 어항', type: [0, 5] },
      { answer: '햇빛을 받고 있는 꽃', type: [6, 7] },
      { answer: '밤하늘 아래 모닥불', type: [3, 1] },
      { answer: '건물 위로 흩날리는 연기', type: [2, 4] },
    ]
  },
  {
    q: '<div class="qna-circle"><img src="../img/city_2d.png" alt="img/png"></div><div class="qText">마음에 드는 그림에<br>무엇이 그려져있을까?</div>',
    a: [
      { answer: '탁 트인 하늘과 초원', type: [3 ,7] },
      { answer: '타오르는 도시의 붉은 노을', type: [1, 2] },
      { answer: '달빛이 드리운 천장', type: [0, 6] },
      { answer: '물안개 자욱한 호수', type: [5, 4] },
    ]
  },
  {
    q: '<div class="qna-circle"><img src="../img/sky_2d.png" alt="img/png"></div><div class="qText">지금 듣고 싶은 소리는 무엇일까?</div>',
    a: [
      { answer: '창문 틈으로 들리는 참새 소리', type: [0, 3] },
      { answer: '작은 빛을 내는 인센스스틱', type: [4, 6] },
      { answer: '도로 위를 두들기는 빗소리', type: [2, 5] },
      { answer: '나무 장작 타는 소리', type: [7, 1] },
    ]
  },
  {
    q: '<div class="qna-circle"><img src="../img/plant_2d.png" alt="img/png"></div><div class="qText">혼자서 걷는다면<br>어디를 걷고 싶을까?</div>',
    a: [
      { answer: '콘크리트 건물 사이 골목', type: [2, 0] },
      { answer: '불꽃놀이가 펼쳐지는 바닷가', type: [1, 5] },
      { answer: '눈부신 별빛이 보이는 공원', type: [3, 6] },
      { answer: '안개 낀 숲 속', type: [4, 7] },
    ]
  },
  {
    q: '<div class="qna-circle"><img src="../img/smoke_2d.png" alt="img/png"></div><div class="qText">필름이 한 장만 남았다면 무엇을 찍을까?</div>',
    a: [
      { answer: '초 끝에 남은 연기', type: [1, 4] },
      { answer: '하늘이 비치는 연못', type: [3, 5]},
      { answer: '무성하게 자란 담쟁이', type: [0, 7] },
      { answer: '깜빡이는 신호등', type: [2, 6] },
    ]
  },

  {
    q: '<div class="qna-circle"><img src="../img/light_2d.png" alt="img/png"></div><div class="qText">어떤 선물을<br>주거나 받고 싶을까?</div>',
    a: [
      { answer: '물병에 담긴 꽃다발', type: [5, 7] },
      { answer: '도심이 보이는 전망대 티켓', type: [2, 3] },
      { answer: '환하게 빛나는 향초', type: [1, 6] },
      { answer: '방 안을 채우는 가습기', type: [0, 4] },
    ]
  },

  {
    q: '<div class="qna-circle"><img src="../img/fire_2d.png" alt="img/png"></div><div class="qText">잠시 멈춰 서있고 싶은 곳은 어디일까?</div>',
    a: [
      { answer: '횡단보도 옆 가로수', type: [2, 7] },
      { answer: '파도가 반짝이는 바다', type: [5, 6] },
      { answer: '따뜻한 벽난로', type: [0, 1] },
      { answer: '구름 연기를 뿜는 굴뚝 앞', type: [3, 4] },
    ]
  },

  {
    q: '<div class="qna-circle"><img src="../img/wall_2d.png" alt="img/png"></div><div class="qText">마지막으로<br>지금 너의 상태는 어때?</div>',
    a: [
      { answer: '여유롭고 즐거워', type: [1, 4, 5, 6, 7] },
      { answer: '생각이 복잡해', type: [2, 3, 8] },
      { answer: '너무 지쳤어', type: [2, 3, 8] },
      { answer: '기분이 좋아', type: [1, 4, 5, 6, 7] },
    ]
  }
]

const infoList = [
  {
    name: '벽멍',
    desc: '"나는 이 안에 있는 게 제일 좋아" <br></br> 방구석 몽상가인 벽멍은 <br> 가만히 앉아 구멍으로 벽을 보며 상상의 나래를 펼칩니다. <br> 깜깜한 상자 안에는 벽멍이 낙서한 그림으로 가득하다고 전해지지만 <br> 아무도 그 안을 본 적이 없습니다. <br> #상상력 #이불말이 #방구석예술가  <br> </br> 벽멍을 때리는 사람들은 주로... <br> - 집중력이 떨어지거나 무기력할 때 멍을 때립니다. <br> - 멍을 때리고 나면 차분해지고 생각이 정리되는 기분을 느낍니다. <br> - 시각, 청각, 또는 촉각에 집중하여 멍을 때립니다. <br> </br> 벽멍 때리는 방법 <br> 천장, 벽지, 타일, 담벼락 <br> </br> 벽멍과 유사한 멍 유형 <br> 도시멍'
  },
  {
    name: '불멍',
    desc: '<div class="desc-title"><span class="highlight">“이 나뭇가지 모닥불용으로 딱이겠군!”</span></div><div class="desc-text">불멍은 혼자만의 캠핑타임을 좋아해<br>무거운 가방 안에는 어디에선가 주워온<br>나뭇가지들이 한가득이지<br>불멍의 꿈은 영원히 꺼지지 않는<br>모닥불을 보며 멍을 때리는 거야</div><div class="desc-text-highlight">#나만의시간  #캠프파이어  #엉뚱</div><div class="desc-title"><span class="highlight">불멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 여유를 즐기며 휴식하기 위해 멍을 때려!<br>💛 편안해지고 차분해지는 느낌을 받아!<br>😶 시각과 청각에 집중해서 멍을 때려!</div><div class="desc-title"><span class="highlight">불멍</span> 추천 방법</div><div class="desc-text-highlight">모닥불  캠프파이어  벽난로  촛불</div><div class="desc-title"><span class="highlight">불멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/fire_2d.png" alt="img/png"></div><div class="desc-text">연기멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/fire_2d.png" alt="img/png"></div><div class="desc-text">연기멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/fire_2d.png" alt="img/png"></div><div class="desc-text">연기멍</div></div></div><div class="result-qr">QR</div><div class="qr-desc">인스타그램에서해봐</div><div class="desc-text">인스타그램에 공유해주세요</div>'
  },
  {
    name: '도시멍',
    desc: '"나는 도시가 좋아. 야경이 너무 예쁘잖아."<br></br>도시멍은 도로를 지키는 CCTV였습니다.<br>항상 사람들을 지켜보던 도시멍은 밤산책에 대한 낭만이 있었습니다.<br>그의 간절한 소망은 연기멍이<br>선물한 멍 슈트를 통해 실현됩니다.<br>#낭만넘치는 #오늘은쉬는중 #밤산책<br></br>도시멍을 때리는 사람들은 주로...<br>- 지치거나 생각이 복잡할 때 멍을 때립니다.<br>- 멍을 통해 생각이 정리되거나 새로운 영감을 얻기도 합니다.<br>- 시각과 청각에 집중합니다.<br></br>도시멍 때리는 방법<br>야경, 신호등, 스카이라인, 건물<br></br>도시멍과 비슷한 멍 유형<br>벽멍'
  },
  {
    name: '하늘멍',
    desc: '"달달한 솜사탕을 먹으면 괜찮아질거야"<br></br>언제든 기댈 수 있는 하늘멍<br>폭신한 몸과 넓은 마음을 가졌습니다.<br>항상 달콤한 솜사탕을 들고 다닙니다.<br>위로가 필요한 친구와 나눠먹으며<br>흘러가는 구름을 보는 것이 취미입니다.<br>#고민상담 #푸근한 #솜사탕<br></br>하늘멍을 때리는 사람들은 주로...<br>- 지쳐있는 상태에서 멍을 때립니다.<br>- 멍을 때리고 나서 편안함과 위로를 얻습니다.<br>- 시각, 청각, 또는 후각을 이용합니다.<br></br>하늘멍 때리는 방법<br>노을, 구름, 맑은하늘, 별빛<br></br>하늘멍과 비슷한 멍 유형<br>도시멍'
  },
  {
    name: '연기멍',
    desc: '"앗! 재미있는 생각이 떠오르고 있어!"<br></br>호기심 넘치는 장난꾸러기 연기멍<br>머리에서 뿜어져나오는<br>연기는 상상의 원동력이 됩니다.<br>예상치 못한 발명품을 완성시켜<br>친구들에게 선물합니다.<br>#장난꾸러기 #IQ156 #호기심천국<br></br>연기멍을 때리는 사람들은 주로...<br>- 지쳐서 휴식이 필요할 때 멍을 때립니다.<br>- 멍을 때리며 차분해지고 생각이 정리됩니다.<br>- 시각과 후각에 집중하여 멍을 때립니다.<br></br>연기멍 때리는 방법<br>가습기, 굴뚝, 인센스스틱, 드라이아이스<br></br>연기멍과 비슷한 멍 유형<br>빛멍'
  },
  {
    name: '물멍',
    desc: '"오늘 파도 소리 너무 좋다"<br></br>자유로운 영혼 물멍<br>바다를 동경하는 고무오리 입니다.<br>욕조 안에서 하루종일 바다만 생각합니다.<br>언젠가 파도에 몸을 맡긴채<br>유유히 떠다닐 자신을 상상합니다.<br>#물아일체 #자유 #I♡바다<br></br>물멍을 때리는 사람들은 주로...<br>- 휴식하며 여유를 즐길 때 멍을 때립니다.<br>- 멍을 때리면 편안해지고 생각이 정리됩니다.<br>- 시각과 청각을 주로 이용합니다.<br></br>물멍 때리는 방법<br>바다, 비, 샤워, 어항<br></br>물멍과 비슷한 멍 유형<br>불멍'
  },
  {
    name: '빛멍',
    desc: '"반짝 반짝"<br></br>언제 어디서든 빛나는 빛멍<br>전등갓을 쓴 빛멍은<br>재미있는 생각을 할 때<br>끈을 잡아당기면서<br>몸에서 빛을 냅니다.<br>#차분한 #사색가 #2700K<br></br>빛멍 때리는 사람들은 주로..<br>- 여유를 즐기며 휴식할 때 멍을 때립니다.<br>- 편안해지고 차분해지는 느낌을 받았습니다.<br>- 시각 또는 청각을 사용합니다.<br></br>빛멍 때리는 방법<br>조명/무드등, 햇빛, 랜턴<br></br>빛멍과 비슷한 멍 유형<br>연기멍'
  },
  {
    name: '풀멍',
    desc: '"이 꽃 너한테 어울릴 것 같아"<br></br>긍정 가득 로맨티스트 풀멍<br>반려식물 스투키와 숲 속에서<br>여유롭게 멍 때리는 것을 좋아합니다.<br>늘 주변을 아름답게 보며<br>가끔씩 친구들에게 꽃 한 송이를<br>선물해주기도 합니다.<br>#꽃을든멍 #긍정파워 #풀내음<br></br>풀멍을 때리는 사람들은 주로...<br>- 여유를 즐기며 휴식할 때 멍을 때립니다.<br>- 멍을 때린 후 편안해지고 차분해집니다.<br>- 시각, 후각, 청각, 또는 촉각을 사용합니다.<br>풀멍 때리는 방법<br>숲, 나무, 잔디, 반려식물<br></br>풀멍과 비슷한 유형<br>하늘멍'
  }
]
