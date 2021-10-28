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
    q: '<div class="qna-circle"><img src="../img/water_2d.png" alt="img/png"></div><div class="qText">지금의 너는<br>어떤 모습에 가까워?</div>',
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
    q: '<div class="qna-circle"><img src="../img/sky_2d.png" alt="img/png"></div><div class="qText">지금 어떤 소리를<br>듣고 싶어?</div>',
    a: [
      { answer: '창틈으로 들리는 참새 소리', type: [0, 3] },
      { answer: '빛을 내며 타는 인센스스틱', type: [4, 6] },
      { answer: '도로 위를 두들기는 빗소리', type: [2, 5] },
      { answer: '나무 장작 타는 소리', type: [7, 1] },
    ]
  },
  {
    q: '<div class="qna-circle"><img src="../img/plant_2d.png" alt="img/png"></div><div class="qText">혼자서 걷는다면<br>어디를 걷고 싶어?</div>',
    a: [
      { answer: '콘크리트 건물 사이 골목', type: [2, 0] },
      { answer: '불꽃놀이가 펼쳐지는 바닷가', type: [1, 5] },
      { answer: '눈부신 별빛이 보이는 공원', type: [3, 6] },
      { answer: '안개 낀 숲 속', type: [4, 7] },
    ]
  },
  {
    q: '<div class="qna-circle"><img src="../img/smoke_2d.png" alt="img/png"></div><div class="qText">필름이 한 장만 남았다면<br>어떤 사진을 찍을거야?</div>',
    a: [
      { answer: '초 끝에 남은 연기', type: [1, 4] },
      { answer: '하늘이 비치는 연못', type: [3, 5]},
      { answer: '무성하게 자란 담쟁이', type: [0, 7] },
      { answer: '깜빡이는 신호등', type: [2, 6] },
    ]
  },

  {
    q: '<div class="qna-circle"><img src="../img/light_2d.png" alt="img/png"></div><div class="qText">어떤 선물을<br>주거나 받고 싶어?</div>',
    a: [
      { answer: '물병에 담긴 꽃다발', type: [5, 7] },
      { answer: '도심이 보이는 전망대 티켓', type: [2, 3] },
      { answer: '환하게 빛나는 향초', type: [1, 6] },
      { answer: '방 안을 채우는 가습기', type: [0, 4] },
    ]
  },

  {
    q: '<div class="qna-circle"><img src="../img/fire_2d.png" alt="img/png"></div><div class="qText">잠시 멈춰있고 싶은 곳을<br>골라볼래?</div>',
    a: [
      { answer: '횡단보도 옆 가로수', type: [2, 7] },
      { answer: '파도가 반짝이는 바다', type: [5, 6] },
      { answer: '따뜻한 벽난로 근처', type: [0, 1] },
      { answer: '구름 연기를 뿜는 굴뚝 앞', type: [3, 4] },
    ]
  },

  {
    q: '<div class="qna-circle"><img src="../img/wall_2d.png" alt="img/png"></div><div class="qText">마지막으로,<br>지금 너의 상태는 어때?</div>',
    a: [
      { answer: '여유롭고 즐거워^0^!', type: [1, 4, 5, 6, 7] },
      { answer: '생각이 복잡해...', type: [2, 3, 8] },
      { answer: '너무 지쳤어 ㅠㅠ', type: [2, 3, 8] },
      { answer: '기분이 매우 좋아 :)', type: [1, 4, 5, 6, 7] },
    ]
  }
]

const infoList = [
  {
    name: '<p class="resultname-title-wall">방구석 몽상가</p><img src="../img/wall_logo.svg" alt="img/svg">',
    desc: '<div class="desc-title"><span class="highlight">“나는 이 안에 있는 게 제일 좋아”</span></div><div class="desc-text">벽멍은 가만히 앉아 구멍으로<br>벽을 보며 상상의 나래를 펼치곤 해<br>깜깜한 상자 안에는 벽멍이 낙서한<br>그림으로 가득하다고 전해지지만<br>아무도 그 안을 본 적은 없어</div><div class="desc-text-highlight">#상상력  #구석애호가  #방구석예술가</div><div class="desc-title"><span class="highlight">벽멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 집중력이 떨어지고 무기력할 때 멍을 때려<br>💛 차분해지고 생각이 정리되는 기분을 느끼지<br>😶 시각, 촉각, 청각에 집중해서 멍을 때려!</div><div class="desc-title"><span class="highlight">벽멍</span> 추천 방법</div><div class="desc-text">천장  벽지  담벼락  타일</div><div class="desc-title"><span class="highlight">벽멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/city_2d.png" alt="img/png"></div><div class="desc-text">도시멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/sky_2d.png" alt="img/png"></div><div class="desc-text">하늘멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/light_2d.png" alt="img/png"></div><div class="desc-text">빛멍</div></div></div><div class="result-qr">QR</div><div class="qr-desc">인스타그램에서해봐</div>'
  },
  {
    name: '<p class="resultname-title-fire">나만의 소확행을 즐기는</p><img src="../img/fire_logo.svg" alt="img/svg">',
    desc: '<div class="desc-title"><span class="highlight">“이 나뭇가지 모닥불용으로 딱이겠군!”</span></div><div class="desc-text">불멍은 혼자만의 캠핑타임을 좋아해<br>무거운 가방 안에는 어디에선가 주워온<br>나뭇가지들이 한가득이지<br>불멍의 꿈은 영원히 꺼지지 않는<br>모닥불을 보며 멍을 때리는 거야</div><div class="desc-text-highlight">#나만의시간  #캠프파이어  #엉뚱</div><div class="desc-title"><span class="highlight">불멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 여유를 즐기며 휴식하기 위해 멍을 때려<br>💛 편안해지고 차분해지는 느낌을 받아<br>😶 시각과 청각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">불멍</span> 추천 방법</div><div class="desc-text">모닥불  캠프파이어  벽난로  촛불</div><div class="desc-title"><span class="highlight">불멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/smoke_2d.png" alt="img/png"></div><div class="desc-text">연기멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/plant_2d.png" alt="img/png"></div><div class="desc-text">풀멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/water_2d.png" alt="img/png"></div><div class="desc-text">물멍</div></div></div><div class="result-qr">QR</div><div class="qr-desc">인스타그램에서해봐</div>'
  },
  {
    name: '<p class="resultname-title-city">행복한 낭만파</p><img src="../img/city_logo.svg" alt="img/svg">',
    desc: '<div class="desc-title"><span class="highlight">“오늘도 야경이 예쁘네~”</span></div><div class="desc-text">도시멍은 도로를 지키는 CCTV야<br>항상 한 자리에서 사람을 지켜보던 도시멍에게는<br>밤산책에 대한 낭만이 있었어<br>그의 간절한 소망은 연기멍이 선물한<br>멍 슈트를 통해 실현되었지</div><div class="desc-text-highlight">#낭만이필요해  #오늘은쉬는중  #밤산책</div><div class="desc-title"><span class="highlight">도시멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 지치거나 생각이 복잡할 때 멍을 때려<br>💛 생각이 정리되거나 새로운 영감을 얻기도 해<br>😶 시각과 청각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">도시멍</span> 추천 방법</div><div class="desc-text">신호등  스카이라인  빌딩  야경</div><div class="desc-title"><span class="highlight">도시멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/water_2d.png" alt="img/png"></div><div class="desc-text">물멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/wall_2d.png" alt="img/png"></div><div class="desc-text">벽멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/smoke_2d.png" alt="img/png"></div><div class="desc-text">연기멍</div></div></div><div class="result-qr">QR</div><div class="qr-desc">인스타그램에서해봐</div>'
  },
  {
    name: '<p class="resultname-title-sky">언제나 기대고 싶은</p><img src="../img/sky_logo.svg" alt="img/svg">',
    desc: '<div class="desc-title"><span class="highlight">“우와! 강아지 구름이야!”</span></div><div class="desc-text">구름멍은 폭신한 몸과 넓은 마음을 가졌어<br>항상 달콤한 솜사탕을 들고 다니는데<br>위로가 필요한 친구와 나눠먹으며<br>흘러가는 구름을 보는 것이 취미야</div><div class="desc-text-highlight">#고민상담  #푸근한  #솜사탕</div><div class="desc-title"><span class="highlight">하늘멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 지친 상태를 벗어나기 위해 멍을 때려<br>💛 편안함과 위로를 얻지<br>😶 시각, 청각, 후각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">하늘멍</span> 추천 방법</div><div class="desc-text">노을  구름  맑은하늘  밤하늘</div><div class="desc-title"><span class="highlight">하늘멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/wall_2d.png" alt="img/png"></div><div class="desc-text">벽멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/water_2d.png" alt="img/png"></div><div class="desc-text">물멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/plant_2d.png" alt="img/png"></div><div class="desc-text">풀멍</div></div></div><div class="result-qr">QR</div><div class="qr-desc">인스타그램에서해봐</div>'
  },
  {
    name: '<p class="resultname-title-smoke">호기심 넘치는 발명가</p><img src="../img/smoke_logo.svg" alt="img/svg">',
    desc: '<div class="desc-title"><span class="highlight">“앗! 재미있는 생각이 떠오른다!”</span></div><div class="desc-text">연기멍의 머리에서 뿜어져 나오는 연기는<br>상상력의 원동력이야<br>예상치 못한 발명품을 만들어<br>친구들에게 선물하는 것을 좋아해</div><div class="desc-text-highlight">#장난꾸러기  #IQ156  #호기심천국</div><div class="desc-title"><span class="highlight">연기멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 지쳐서 휴식이 필요할 때 멍을 때려<br>💛 차분해지고 생각이 정리된다고 해<br>😶 시각과 후각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">연기멍</span> 추천 방법</div><div class="desc-text">가습기  인센스스틱  굴뚝  드라이아이스</div><div class="desc-title"><span class="highlight">연기멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/fire_2d.png" alt="img/png"></div><div class="desc-text">불멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/light_2d.png" alt="img/png"></div><div class="desc-text">빛멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/city_2d.png" alt="img/png"></div><div class="desc-text">도시멍</div></div></div><div class="result-qr">QR</div><div class="qr-desc">인스타그램에서해봐</div>'
  },
  {
    name: '<p class="resultname-title-water">자유로운 영혼</p><img src="../img/water_logo.svg" alt="img/svg">',
    desc: '<div class="desc-title"><span class="highlight">“오늘 물 온도 너무 좋다”</span></div><div class="desc-text">물멍은 고무오리야<br>바다를 동경해서 하루종일 욕조 안에서 시간을 보내<br>언젠가 파도에 몸을 맡긴 채<br>유유히 떠다닐 자신을 상상하며 미소짓곤 하지</div><div class="desc-text-highlight">#물아일체  #어푸  #I♡바다</div><div class="desc-title"><span class="highlight">물멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 여유를 즐기며 휴식하기 위해 멍을 때려<br>💛 편안해지고 생각이 정리되는 기분을 느낀대<br>😶 시각과 청각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">물멍</span> 추천 방법</div><div class="desc-text">바다  비  샤워  어항</div><div class="desc-title"><span class="highlight">물멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/city_2d.png" alt="img/png"></div><div class="desc-text">도시멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/sky_2d.png" alt="img/png"></div><div class="desc-text">하늘멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/fire_2d.png" alt="img/png"></div><div class="desc-text">불멍</div></div></div><div class="result-qr">QR</div><div class="qr-desc">인스타그램에서해봐</div>'
  },
  {
    name: '<p class="resultname-title-light">언제 어디서든 빛나는</p><img src="../img/light_logo.svg" alt="img/svg">',
    desc: '<div class="desc-title"><span class="highlight">“반짝~ 반짝~”</span></div><div class="desc-text">빛멍은 전등갓을 쓰고다녀<br>재미있는 생각을 할 때<br>갓에 달린 끈을 잡아당겨서<br>몸에서 환한 빛을 내지</div><div class="desc-text-highlight">#차분한  #사색가  #2700k</div><div class="desc-title"><span class="highlight">빛멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 여유를 즐기며 휴식하기 위해 멍을 때려<br>💛 편안해지고 차분해지는 느낌을 받아<br>😶 시각과 청각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">빛멍</span> 추천 방법</div><div class="desc-text">무드등  조명  햇빛  랜턴</div><div class="desc-title"><span class="highlight">빛멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/plant_2d.png" alt="img/png"></div><div class="desc-text">풀멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/smoke_2d.png" alt="img/png"></div><div class="desc-text">연기멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/wall_2d.png" alt="img/png"></div><div class="desc-text">벽멍</div></div></div><div class="result-qr">QR</div><div class="qr-desc">인스타그램에서해봐</div>'
  },
  {
    name: '<p class="resultname-title-plant">긍정 가득 로맨티스트</p><img src="../img/plant_logo.svg" alt="img/svg">',
    desc: '<div class="desc-title"><span class="highlight">“이 꽃 너한테 어울릴 것 같아”</span></div><div class="desc-text">풀멍은 반려식물 스투키와 숲 속에서<br>여유롭게 멍 때리는 것을 좋아해<br>가끔씩 친구들에게 꽃 한 송이를<br>선물해주기도 하지</div><div class="desc-text-highlight">#꽃을든멍  #긍정파워  #오래보아야사랑스럽다</div><div class="desc-title"><span class="highlight">풀멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 여유를 즐기며 휴식하기 위해 멍을 때려<br>💛 편안해지고 차분해지는 느낌을 받아<br>😶 모든 감감을 많이 활용해서 멍을 때려</div><div class="desc-title"><span class="highlight">풀멍</span> 추천 방법</div><div class="desc-text">숲  나무  잔디  반려식물</div><div class="desc-title"><span class="highlight">풀멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/light_2d.png" alt="img/png"></div><div class="desc-text">빛멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/fire_2d.png" alt="img/png"></div><div class="desc-text">불멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/sky_2d.png" alt="img/png"></div><div class="desc-text">하늘멍</div></div></div><div class="result-qr">QR</div><div class="qr-desc">인스타그램에서해봐</div>'
  }
]
