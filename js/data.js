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
      { answer: '여유롭고 즐거워 ^0^!', type: [1, 4, 5, 6, 7] },
      { answer: '생각이 복잡해...', type: [2, 3, 8] },
      { answer: '너무 지쳤어 ㅠㅠ', type: [2, 3, 8] },
      { answer: '기분이 매우 좋아 :)', type: [1, 4, 5, 6, 7] },
    ]
  }
]

const infoList = [
  {
    name: '지금 벽멍 때려보는 건 어때?',
    story: '<div class="desc-title"><span class="highlight">“나는 이 안에 있는 게 제일 좋아”</span></div><div class="desc-text">벽멍은 가만히 앉아 구멍으로 벽을 보며 상상의 나래를 펼치곤 해. 깜깜한 상자 안에는 벽멍이 낙서한 그림으로 가득하다고 전해지지만 아무도 그 안을 본 적은 없어.</div><div class="desc-text-highlight">#상상력  #구석애호가  #방구석예술가</div><div class="desc-title"><span class="highlight">벽멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 집중력이 떨어지고 무기력할 때 멍을 때려<br>💛 차분해지고 생각이 정리되는 기분을 느껴<br>😶 시각, 촉각, 청각에 집중해서 멍을 때려!</div><div class="desc-title"><span class="highlight">벽멍</span> 추천 방법</div>',
    desc: '<div class="desc-text">- 천장의 오돌토돌한 부분을 찾아봐<br>- 벽지 무늬를 따라 손가락을 움직여봐<br>- 담벼락의 거친 면을 손바닥으로 만져봐<br>- 타일의 이어진 부분을 따라 눈을 움직여봐</div><div class="desc-title"><span class="highlight">벽멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/city_2d.png" alt="img/png"></div><div class="desc-text">도시멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/sky_2d.png" alt="img/png"></div><div class="desc-text">하늘멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/light_2d.png" alt="img/png"></div><div class="desc-text">빛멍</div></div></div>',
    qrTitle: '<span class="highlight">벽멍</span>이 되어보자!',
    qrDesc: 'QR코드를 인식하면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#벽멍 #무브멍트 #계멍운동</span>',
    qrButton: '<a class="test-again" href="https://www.instagram.com/ar/470880177998983">벽멍 필터 사용해보기</a>',
    qrDescMobile: '버튼을 누르면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#벽멍 #무브멍트 #계멍운동</span>'
  },
  {
    name: '지금 불멍 때려보는 건 어때?',
    story: '<div class="desc-title"><span class="highlight">“이 나뭇가지 모닥불에 딱이겠군!”</span></div><div class="desc-text">불멍은 혼자만의 캠핑타임을 좋아해. 무거운 가방 안에는 어디에선가 주워온 나뭇가지들이 한가득이지. 불멍의 꿈은 영원히 꺼지지 않는 모닥불을 보며 멍을 때리는 거야.</div><div class="desc-text-highlight">#나만의시간  #캠프파이어  #엉뚱</div><div class="desc-title"><span class="highlight">불멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 여유를 즐기며 휴식하기 위해 멍을 때려<br>💛 편안해지고 차분해지는 느낌을 받아<br>😶 시각과 청각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">불멍</span> 추천 방법</div>',
    desc: '<div class="desc-text">- 모닥불 소리에 귀를 기울여봐<br>- 캠프파이어 할 때 군고구마 들고 멍때려봐<br>- 벽난로 앞에 앉아 따뜻함을 느껴봐<br>- 촛불의 움직임을 따라 눈을 움직여봐</div><div class="desc-title"><span class="highlight">불멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/smoke_2d.png" alt="img/png"></div><div class="desc-text">연기멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/plant_2d.png" alt="img/png"></div><div class="desc-text">풀멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/water_2d.png" alt="img/png"></div><div class="desc-text">물멍</div></div></div>',
    qrTitle: '<span class="highlight">불멍</span>이 되어보자!',
    qrDesc: 'QR코드를 인식하면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#불멍 #무브멍트 #계멍운동</span>',
    qrButton: '<a class="test-again" href="https://www.instagram.com/ar/170105595332488">불멍 필터 사용해보기</a>',
    qrDescMobile: '버튼을 누르면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#불멍 #무브멍트 #계멍운동</span>'
  },
  {
    name: '지금 도시멍 때려보는 건 어때?',
    story: '<div class="desc-title"><span class="highlight">“오늘도 야경이 예쁘네~”</span></div><div class="desc-text">도시멍은 도로를 지키는 CCTV야. 항상 한 자리에서 사람을 지켜보던 도시멍에게는 밤산책에 대한 낭만이 있었어. 도시멍의 간절한 소망은 연기멍이 선물한 멍 슈트를 통해 실현되었지.</div><div class="desc-text-highlight">#낭만이필요해  #오늘은쉬는중  #밤산책</div><div class="desc-title"><span class="highlight">도시멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 지치거나 생각이 복잡할 때 멍을 때려<br>💛 생각이 정리되거나 새로운 영감을 얻어<br>😶 시각과 청각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">도시멍</span> 추천 방법</div>',
    desc: '<div class="desc-text">- 신호등이 바뀌어도 가지 말고 잠시 멈춰봐<br>- 스카이라인의 끝이 어디일지 상상해봐<br>- 고개를 젖히고 높은 빌딩을 올려다봐<br>- 주변 소리에 귀기울이며 야경을 감상해봐</div><div class="desc-title"><span class="highlight">도시멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/water_2d.png" alt="img/png"></div><div class="desc-text">물멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/wall_2d.png" alt="img/png"></div><div class="desc-text">벽멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/smoke_2d.png" alt="img/png"></div><div class="desc-text">연기멍</div></div></div>',
    qrTitle: '<span class="highlight">도시멍</span>이 되어보자!',
    qrDesc: 'QR코드를 인식하면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#도시멍 #무브멍트 #계멍운동</span>',
    qrButton: '<a class="test-again" href="https://www.instagram.com/ar/846094506055709">도시멍 필터 사용해보기</a>',
    qrDescMobile: '버튼을 누르면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#도시멍 #무브멍트 #계멍운동</span>'
  },
  {
    name: '지금 하늘멍 때려보는 건 어때?',
    story: '<div class="desc-title"><span class="highlight">“우와! 강아지 구름이야!”</span></div><div class="desc-text">구름멍은 폭신한 몸과 넓은 마음을 가졌어. 항상 달콤한 솜사탕을 들고 다니는데 위로가 필요한 친구와 나눠먹으며 흘러가는 구름을 보는 것이 취미야.</div><div class="desc-text-highlight">#고민상담  #푸근한  #솜사탕</div><div class="desc-title"><span class="highlight">하늘멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 지친 상태를 벗어나기 위해 멍을 때려<br>💛 편안함과 위로를 얻지<br>😶 시각, 청각, 후각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">하늘멍</span> 추천 방법</div>',
    desc: '<div class="desc-text">- 노을의 끝을 상상하며 해가 질 때까지 바라봐<br>- 구름의 움직임을 천천히 따라가봐<br>- 맑은 하늘 아래 선선한 바람을 느껴봐<br>- 밤하늘을 보며 천천히 걸어봐</div><div class="desc-title"><span class="highlight">하늘멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/wall_2d.png" alt="img/png"></div><div class="desc-text">벽멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/water_2d.png" alt="img/png"></div><div class="desc-text">물멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/plant_2d.png" alt="img/png"></div><div class="desc-text">풀멍</div></div></div>',
    qrTitle: '<span class="highlight">하늘멍</span>이 되어보자!',
    qrDesc: 'QR코드를 인식하면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#하늘멍 #무브멍트 #계멍운동</span>',
    qrButton: '<a class="test-again" href="https://www.instagram.com/ar/430265431797511">하늘멍 필터 사용해보기</a>',
    qrDescMobile: '버튼을 누르면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#하늘멍 #무브멍트 #계멍운동</span>'
  },
  {
    name: '지금 연기멍 때려보는 건 어때?',
    story: '<div class="desc-title"><span class="highlight">“앗! 재미있는 생각이 떠오른다!”</span></div><div class="desc-text">연기멍의 머리에서 뿜어져 나오는 연기는 상상력의 원동력이야. 예상치 못한 발명품을 만들어 친구들에게 선물하는 것을 좋아해.</div><div class="desc-text-highlight">#장난꾸러기  #IQ156  #호기심천국</div><div class="desc-title"><span class="highlight">연기멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 지쳐서 휴식이 필요할 때 멍을 때려<br>💛 차분해지고 생각이 정리된다고 해<br>😶 시각과 후각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">연기멍</span> 추천 방법</div>',
    desc: '<div class="desc-text">- 가습기 구멍에서 흩어지는 연기를 따라가봐<br>- 인센스스틱 연기를 바라보며 향을 맡아봐<br>- 굴뚝 연기가 하늘과 하나될 때까지 기다려봐<br>- 아이스크림 먹으며 드라이아이스 연기를 봐</div><div class="desc-title"><span class="highlight">연기멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/fire_2d.png" alt="img/png"></div><div class="desc-text">불멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/light_2d.png" alt="img/png"></div><div class="desc-text">빛멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/city_2d.png" alt="img/png"></div><div class="desc-text">도시멍</div></div></div>',
    qrTitle: '<span class="highlight">연기멍</span>이 되어보자!',
    qrDesc: 'QR코드를 인식하면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#연기멍 #무브멍트 #계멍운동</span>',
    qrButton: '<a class="test-again" href="https://www.instagram.com/ar/893852817889061">연기멍 필터 사용해보기</a>',
    qrDescMobile: '버튼을 누르면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#연기멍 #무브멍트 #계멍운동</span>'
  },
  {
    name: '지금 물멍 때려보는 건 어때?',
    story: '<div class="desc-title"><span class="highlight">“오늘 물 온도 너무 좋다”</span></div><div class="desc-text">물멍은 고무오리야. 바다를 동경해서 하루종일 욕조 안에서 시간을 보내지.언젠가 파도에 몸을 맡긴 채 유유히 떠다닐 자신을 상상하며 미소 짓곤 해.</div><div class="desc-text-highlight">#물아일체  #어푸  #I♡바다</div><div class="desc-title"><span class="highlight">물멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 여유를 즐기며 휴식하기 위해 멍을 때려<br>💛 편안해지고 생각이 정리되는 기분을 느낀대<br>😶 시각과 청각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">물멍</span> 추천 방법</div>',
    desc: '<div class="desc-text">- 시원한 파도 소리를 들으며 바다를 느껴봐<br>- 비 냄새를 맡으며 빗방울을 관찰해봐<br>- 몸 위로 흐르는 물을 가만히 바라봐<br>- 물고기가 돌아다니는 어항을 보며 멍때려봐</div><div class="desc-title"><span class="highlight">물멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/city_2d.png" alt="img/png"></div><div class="desc-text">도시멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/sky_2d.png" alt="img/png"></div><div class="desc-text">하늘멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/fire_2d.png" alt="img/png"></div><div class="desc-text">불멍</div></div></div>',
    qrTitle: '<span class="highlight">물멍</span>이 되어보자!',
    qrDesc: 'QR코드를 인식하면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#물멍 #무브멍트 #계멍운동</span>',
    qrButton: '<a class="test-again" href="https://www.instagram.com/ar/908733736515080">물멍 필터 사용해보기</a>',
    qrDescMobile: '버튼을 누르면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#물멍 #무브멍트 #계멍운동</span>'
  },
  {
    name: '지금 빛멍 때려보는 건 어때?',
    story: '<div class="desc-title"><span class="highlight">“반짝~ 반짝~”</span></div><div class="desc-text">빛멍은 전등갓을 쓰고 다녀. 재미있는 생각을 할 때 갓에 달린 끈을 잡아당겨서 몸에서 환한 빛을 내지.</div><div class="desc-text-highlight">#차분한  #사색가  #2700k</div><div class="desc-title"><span class="highlight">빛멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 여유를 즐기며 휴식하기 위해 멍을 때려<br>💛 편안해지고 차분해지는 느낌을 받아<br>😶 시각과 청각에 집중해서 멍을 때려</div><div class="desc-title"><span class="highlight">빛멍</span> 추천 방법</div>',
    desc: '<div class="desc-text">- 불을 끄고 은은한 무드등을 보며 멍때려봐<br>- 밝은 조명이 비추는 곳을 가만히 바라봐<br>- 창문으로 들어오는 따뜻한 햇빛을 느껴봐<br>- 랜턴에 비춰진 작은 먼지를 찾아봐</div><div class="desc-title"><span class="highlight">빛멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/plant_2d.png" alt="img/png"></div><div class="desc-text">풀멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/smoke_2d.png" alt="img/png"></div><div class="desc-text">연기멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/wall_2d.png" alt="img/png"></div><div class="desc-text">벽멍</div></div></div>',
    qrTitle: '<span class="highlight">빛멍</span>이 되어보자!',
    qrDesc: 'QR코드를 인식하면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#빛멍 #무브멍트 #계멍운동</span>',
    qrButton: '<a class="test-again" href="https://www.instagram.com/ar/462719388779400">빛멍 필터 사용해보기</a>',
    qrDescMobile: '버튼을 누르면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#빛멍 #무브멍트 #계멍운동</span>'
  },
  {
    name: '지금 풀멍 때려보는 건 어때?',
    story: '<div class="desc-title"><span class="highlight">“이 꽃 너한테 어울릴 것 같아”</span></div><div class="desc-text">풀멍은 반려식물 스투키와 숲 속에서 여유롭게 멍 때리는 것을 좋아해. 가끔씩 친구들에게 꽃 한 송이를 선물해주기도 하지.</div><div class="desc-text-highlight">#꽃을든멍  #긍정파워  #오래보아야사랑스럽다</div><div class="desc-title"><span class="highlight">풀멍</span> 때리는 사람들은</div><div class="desc-text">⏰ 여유를 즐기며 휴식하기 위해 멍을 때려<br>💛 편안해지고 차분해지는 느낌을 받아<br>😶 모든 감감을 활용해서 멍을 때려</div><div class="desc-title"><span class="highlight">풀멍</span> 추천 방법</div>',
    desc: '<div class="desc-text">- 숲 속을 걸으며 자연의 향기를 맡아봐<br>- 손바닥으로 나무를 만져보며 결을 느껴봐<br>- 바람에 흔들리는 잔디를 보며 멍때려봐<br>- 반려식물을 사랑스럽게 바라봐</div><div class="desc-title"><span class="highlight">풀멍</span>과 유사한 유형</div><div class="desc-others-wrap"><div class="desc-others"><div class="others-img"><img src="../img/light_2d.png" alt="img/png"></div><div class="desc-text">빛멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/fire_2d.png" alt="img/png"></div><div class="desc-text">불멍</div></div><div class="desc-others"><div class="others-img"><img src="../img/sky_2d.png" alt="img/png"></div><div class="desc-text">하늘멍</div></div></div>',
    qrTitle: '<span class="highlight">풀멍</span>이 되어보자!',
    qrDesc: 'QR코드를 인식하면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#풀멍 #무브멍트 #계멍운동</span>',
    qrButton: '<a class="test-again" href="https://www.instagram.com/ar/187470343560231">풀멍 필터 사용해보기</a>',
    qrDescMobile: '버튼을 누르면<br>인스타그램 필터를 사용해볼 수 있어!<br>계멍운동 확산에 동참해줄래?<br><span class="highlight">#풀멍 #무브멍트 #계멍운동</span>'
  }
]
