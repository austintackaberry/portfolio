
window.onload = function() {

  var yeggleVideo = document.getElementById("yeggle");
  yeggleVideo.onloadeddata = function() {
    yeggleVideo.parentElement.style.height = yeggleVideo.offsetHeight + yeggleVideo.marginTop + 'px';
    yeggleVideo.style.marginTop = yeggleVideo.offsetHeight * -35.5 / 400 + 'px';
  };

  var stockitVideo = document.getElementById("stockit");
  stockitVideo.onloadeddata = function() {
    stockitVideo.parentElement.style.height = stockitVideo.offsetHeight + stockitVideo.marginTop + 'px';
    stockitVideo.style.marginTop = stockitVideo.offsetHeight * -35.5 / 400 + 'px';
  };

  var jobsortVideo = document.getElementById("jobsort");
  jobsortVideo.onloadeddata = function() {
    jobsortVideo.parentElement.style.height = jobsortVideo.offsetHeight + jobsortVideo.marginTop + 'px';
    jobsortVideo.style.marginTop = jobsortVideo.offsetHeight * -35.5 / 400 + 'px';
  };

}
