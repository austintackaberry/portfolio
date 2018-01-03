
window.onload = function() {
  if (window.innerWidth > 860) {
    document.getElementById('my-calendar').style.display = "block";
  }
  if (window.innerWidth < 415) {
    $('.icons').children().removeClass('fa-3x');
    $('.icons').children().addClass('fa-2x');
    $('.icons').children().css('width','40px');
    $('.icons').children().css('margin','5px');
  }
  var yeggleVideo = document.getElementById("yeggle");
  var stockitVideo = document.getElementById("stockit");
  var jobsortVideo = document.getElementById("jobsort");
  var codeclubVideo = document.getElementById("codeclub");
  let yeggleVideoFn = function() {
    let diff = yeggleVideo.parentElement.offsetHeight - yeggleVideo.offsetHeight;
    yeggleVideo.style.marginTop = yeggleVideo.offsetHeight * -37 / 400 + 'px';
    yeggleVideo.parentElement.style.height = yeggleVideo.offsetHeight + parseFloat(yeggleVideo.style.marginTop.replace('px','')) + 'px';
  };
  let stockitVideoFn = function() {
    stockitVideo.style.marginTop = stockitVideo.offsetHeight * -37 / 400 + 'px';
    stockitVideo.parentElement.style.height = stockitVideo.offsetHeight + parseFloat(stockitVideo.style.marginTop.replace('px','')) + 'px';
  };
  let jobsortVideoFn = function() {
    jobsortVideo.style.marginTop = jobsortVideo.offsetHeight * -37 / 400 + 'px';
    jobsortVideo.parentElement.style.height = jobsortVideo.offsetHeight + parseFloat(jobsortVideo.style.marginTop.replace('px','')) + 'px';
  };
  let codeclubVideoFn = function() {
    codeclubVideo.style.marginTop = codeclubVideo.offsetHeight * -37 / 400 + 'px';
    codeclubVideo.parentElement.style.height = codeclubVideo.offsetHeight + parseFloat(codeclubVideo.style.marginTop.replace('px','')) + 'px';
  };

  yeggleVideo.onloadeddata = yeggleVideoFn();
  window.addEventListener('resize', yeggleVideoFn);
  codeclubVideo.onloadeddata = codeclubVideoFn();
  window.addEventListener('resize', codeclubVideoFn);
  stockitVideo.onloadeddata = stockitVideoFn();
  window.addEventListener('resize', stockitVideoFn);
  jobsortVideo.onloadeddata = jobsortVideoFn();
  window.addEventListener('resize', jobsortVideoFn);
  window.addEventListener('resize', function() {
    if (window.innerWidth < 860) {
      document.getElementById('my-calendar').style.display = "none";
    }
    else {
      document.getElementById('my-calendar').style.display = "block";
    }
  });
}
