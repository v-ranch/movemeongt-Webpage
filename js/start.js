const testMain = document.querySelector("#testMain");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 8;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0];


function calResult() {
  console.log(select);
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult() {
  let point = calResult();
  const resultName = document.querySelector('.resultname');
  resultName.innerHTML = infoList[point].name;

  var resultImg = document.createElement('img');
  const imgDiv = document.querySelector('#resultImg');
  var imgURL = '../img/image-' + point + '.jpg';
  resultImg.src = imgURL;
  resultImg.alt = point;
  resultImg.classList.add('img-fluid');
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector('.resultDesc');
  resultDesc.innerHTML = infoList[point].story;

  var resultHowImg = document.createElement('img');
  const imgHowDiv = document.querySelector('#resultHowImg');
  var imgHowURL = '../img/image-' + point + '.gif';
  resultHowImg.src = imgHowURL;
  resultHowImg.alt = point;
  resultHowImg.classList.add('img-fluid');
  imgHowDiv.appendChild(resultHowImg);

  const resultHow = document.querySelector('.resultHow');
  resultHow.innerHTML = infoList[point].desc;

  var qrImg = document.createElement('img');
  const qrImgDiv = document.querySelector('.qr-img');
  var qrImgURL = '../img/qr-' + point + '.png';
  qrImg.src = qrImgURL;
  qrImg.alt = point;
  qrImg.classList.add('img-fluid');
  qrImgDiv.appendChild(qrImg);

  const qrTitle = document.querySelector('.qr-title');
  qrTitle.innerHTML = infoList[point].qrTitle;
  qrTitle.classList.add('desc-title');

  const qrDesc = document.querySelector('.qr-desc');
  qrDesc.innerHTML = infoList[point].qrDesc;
  qrDesc.classList.add('desc-text');

  /*mobile*/
  var qrImgMob = document.createElement('img');
  const qrImgMobDiv = document.querySelector('.qr-img-mobile');
  var qrImgMobURL = '../img/qrMob-' + point + '.png';
  qrImgMob.src = qrImgMobURL;
  qrImgMob.alt = point;
  qrImgMob.classList.add('img-fluid');
  qrImgMobDiv.appendChild(qrImgMob);

  const qrButton = document.querySelector('.qr-button');
  qrButton.innerHTML = infoList[point].qrButton;
  /*qrButton.classList.add('desc-title');*/

  const qrDescMob = document.querySelector('.qr-desc-mobile');
  qrDescMob.innerHTML = infoList[point].qrDescMobile;
  qrDescMob.classList.add('desc-text');
}

function goResult() {
  qna.style.WebkitAnimaion = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimaion = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450)
  })

  setResult();
}


function addAnswer(answerText, qIdx, idx) {
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  //Button ??????, ????????? ??????
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener("click", function() {
    var children = document.querySelectorAll('.answerList');
    for (let i = 0; i < children.length; i++) {
      children[i].disabled = true;
      children[i].style.WebkitAnimaion = "fadeOut 0.5s"; //?????? ??????????????? ???????????????
      children[i].style.animation = "fadeOut 0.5s"; //?????? ??????????????? ???????????????
    }
    setTimeout(() => {
      var target = qnaList[qIdx].a[idx].type;
      for (let i = 0; i < target.length; i++) {
        select[target[i]] += 1;
      }
      for (let i = 0; i < children.length; i++) {
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    }, 450)
  }, false);
}

function goNext(qIdx) {
  if (qIdx === endPoint) {
    goResult();
    return;
  }
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  }
  var status = document.querySelector('.statusBar')
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}

function gotest() {
  testMain.style.WebkitAnimaion = "fadeOut 1s";
  testMain.style.animation = "fadeOut 1s";
  setTimeout(() => {
    qna.style.WebkitAnimaion = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      testMain.style.display = "none";
      qna.style.display = "block";
    }, 450)
    let qIdx = 0;
    goNext(qIdx);
  }, 450);

}
