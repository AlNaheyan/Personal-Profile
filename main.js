// let TyAfter = document.getElementById('tyText');
// let SbmBtn = document.getElementsByClassName('submitbtn')



// function msgAfterClick(event) {
//     event.preventDefault();
//     TyAfter.innerHTML = 'Thank You!';
// }

// SbmBtn.addEventListener = ('onclick', msgAfterClick);

let ascLink = document.querySelector('button');
let ascInfo = document.getElementById('ASCInfo');

ascLink.addEventListener("click", function() {
  ascInfo.innerHTML = ' AllStarCode is a Summer Intensive Program that offers, Young man of colors, 6 weeks of college level Computer Scince education. '
  });


// Information Page : Resume Button

function resume() {
    location.href = "https://docs.google.com/document/d/e/2PACX-1vT64E_Ymp2K8qRQKpiWNcdE0afxIcQh4Db3zKS_XLMbHo6O_MQBHN7ZMsSqj12N8VgGTp4orMlVMWjE/pub";
}
