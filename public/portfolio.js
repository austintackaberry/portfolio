
window.onload = function() {
  var yeggleVideo = document.getElementById("yeggle");
  var stockitVideo = document.getElementById("stockit");
  var jobsortVideo = document.getElementById("jobsort");
  let yeggleVideoFn = function() {
    yeggleVideo.parentElement.style.height = yeggleVideo.offsetHeight + yeggleVideo.marginTop + 'px';
    yeggleVideo.style.marginTop = yeggleVideo.offsetHeight * -35.5 / 400 + 'px';
    console.log('hey');
  };
  let stockitVideoFn = function() {
    stockitVideo.parentElement.style.height = stockitVideo.offsetHeight + stockitVideo.marginTop + 'px';
    stockitVideo.style.marginTop = stockitVideo.offsetHeight * -35.5 / 400 + 'px';
    console.log(stockitVideo.videoHeight);
    console.log(stockitVideo.videoWidth);
  };
  let jobsortVideoFn = function() {
    jobsortVideo.parentElement.style.height = jobsortVideo.offsetHeight + jobsortVideo.marginTop + 'px';
    jobsortVideo.style.marginTop = jobsortVideo.offsetHeight * -35.5 / 400 + 'px';
  };

  yeggleVideo.onloadeddata = yeggleVideoFn();
  window.addEventListener('resize', yeggleVideoFn);
  stockitVideo.onloadeddata = stockitVideoFn();
  window.addEventListener('resize', stockitVideoFn);
  jobsortVideo.onloadeddata = jobsortVideoFn();
  window.addEventListener('resize', jobsortVideoFn);
}
