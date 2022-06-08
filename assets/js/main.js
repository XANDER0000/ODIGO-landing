// INTRO FORM ===================================
document.querySelectorAll('.intro__input').forEach((item) =>
 item.addEventListener('input', () => {
  const parent = item.parentNode;
  if (item.value.length > 0) {
   parent.classList.add('filled')
  } else if(item.value.length < 3) {
   parent.classList.remove('filled')
  }
 })
)

// HEADER ===========================================
const mainHeader = document.getElementById('header');
const mainIntro = document.getElementById('intro').offsetHeight;
window.onload = function() {
    if (document.documentElement.clientWidth < 770) {
        onScroll()
        function onScroll() {
            window.addEventListener("scroll", headerFixed);
            function headerFixed() {
                var pageY = window.pageYOffset;
                if (pageY > mainIntro) {
                    mainHeader.classList.add('visible')
                } else {
                    mainHeader.classList.remove('visible')
                }
            }
        }
    }
}

const nav = document.getElementById('nav');
const bodyFixed = document.querySelector('.body__fixed');
const navToggle = document.querySelectorAll('.burger').forEach((item) =>
item.addEventListener('click', () => {
    nav.classList.toggle('visible')
    document.body.classList.toggle('fixed')
})
)

// VIDEO ============================================================================
const videoCover = document.querySelector('.video__cover');
const videoFrame = document.querySelector('.video__player_iframe');

videoCover.addEventListener('click', function() {
    this.style.transition = `opacity 1000ms`;
    this.style.opacity = 0;
    setTimeout(() => {
        this.style.display = 'none';
    }, 1000);

    videoFrame.src += "&autoplay=1";
})




