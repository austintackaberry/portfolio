
window.onload = function() {

  // Hide github calendar for small screen sizes on load
  if (window.innerWidth > 860) {
    document.getElementById('my-calendar').style.display = "block";
  }

  // Hide github calendar for small screen sizes on resize
  window.addEventListener('resize', function() {
    if (window.innerWidth < 860) {
      document.getElementById('my-calendar').style.display = "none";
    }
    else {
      document.getElementById('my-calendar').style.display = "block";
    }
  });

  // Use smaller icons for mobile
  let yeggleVideo = document.getElementById("yeggle");
  let stockitVideo = document.getElementById("stockit");
  let jobsortVideo = document.getElementById("jobsort");
  let codeclubVideo = document.getElementById("codeclub");

  // Crop top of videos to only show window.innerHeight as a function of the video height
  let yeggleVideoFn = function() {
    yeggleVideo.style.marginTop = yeggleVideo.offsetHeight * -37 / 400 + 'px';
    yeggleVideo.parentElement.style.height = yeggleVideo.offsetHeight + parseFloat(yeggleVideo.style.marginTop.replace('px','')) + 'px';
  };
  let stockitVideoFn = function() {
    stockitVideo.style.marginTop = stockitVideo.offsetHeight * -37 / 400 + 'px';
    stockitVideo.parentElement.style.height = stockitVideo.offsetHeight + parseFloat(stockitVideo.style.marginTop.replace('px','')) + 'px';
  };
  let jobsortVideoFn = function() {
    jobsortVideo.style.marginTop = jobsortVideo.offsetHeight * -0.037 + 'px';
    jobsortVideo.style.marginBottom = jobsortVideo.offsetHeight * -0.037 + 'px';
    jobsortVideo.parentElement.style.height = jobsortVideo.offsetHeight + 2*parseFloat(jobsortVideo.style.marginTop.replace('px','')) + 'px';
  };
  let codeclubVideoFn = function() {
    codeclubVideo.style.marginTop = codeclubVideo.offsetHeight * -37 / 400 + 'px';
    codeclubVideo.parentElement.style.height = codeclubVideo.offsetHeight + parseFloat(codeclubVideo.style.marginTop.replace('px','')) + 'px';
  };

  // Execute functions when video data is loaded and on resize
  yeggleVideo.onloadeddata = yeggleVideoFn();
  window.addEventListener('resize', yeggleVideoFn);
  codeclubVideo.onloadeddata = codeclubVideoFn();
  window.addEventListener('resize', codeclubVideoFn);
  stockitVideo.onloadeddata = stockitVideoFn();
  window.addEventListener('resize', stockitVideoFn);
  jobsortVideo.onloadeddata = jobsortVideoFn();
  window.addEventListener('resize', jobsortVideoFn);
}
