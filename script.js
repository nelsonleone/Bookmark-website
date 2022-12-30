// the navigation toggle handling
const toggleMenu =  document.querySelector('.toggle-menu')
const topNav = document.getElementById('top-nav')
const logoIcon = document.querySelector('.top-logo')

toggleMenu.addEventListener('click',()=>  {
   if (toggleMenu.src.match('hamburger')){
      toggleMenu.setAttribute("src","images/icon-close.svg")
      toggleMenu.setAttribute("aria-expanded",true)
      topNav.style.display = "block"
      document.body.style.overflow = "hidden"
      logoIcon.src = "images/logo-bookmark2.svg"
   }else{
      toggleMenu.setAttribute("src","images/icon-hamburger.svg")
      toggleMenu.setAttribute("aria-expanded",false)
      topNav.style.display = "none"
      document.body.style.overflowY = "auto"
      logoIcon.src = "images/logo-bookmark.svg"
   }
})



// Tab section content navigation handling
const tabsContainer = document.querySelector('.tab-section')
const tab1 =  document.querySelector('[data-bookmark]')
const tab2 =  document.querySelector('[data-searching]')
const tab3 =  document.querySelector('[data-sharing]')
let tabImage;
let tabHeading;
let tabTextContent;

tab2.addEventListener('click',(e) => {
   e.preventDefault()
   handleDemoActiveTabs()
   tabImage = "images/illustration-features-tab-2.svg";
   tabHeading = "Intelligent search"
   tabTextContent = `Our powerful search feature will help you find saved sites in no time at all.
   No need to trawl through all of your bookmarks.`;
   e.target.classList.add('active')
  renderTabs()
})
tab3.addEventListener('click',(e) => {
   e.preventDefault()
   handleDemoActiveTabs()
   tabImage = "images/illustration-features-tab-3.svg";
   tabHeading = "Share your bookmarks"
   tabTextContent = `Easily share your bookmarks and collections with others. Create a shareable 
   link that you can send at the click of a button.`;
   e.target.classList.add('active')
   renderTabs()
})
tab1.addEventListener('click',(e) => {
   e.preventDefault()
   handleDemoActiveTabs()
   tabImage = "images/illustration-features-tab-1.svg";
   tabHeading = "Bookmark in one click"
   tabTextContent = `Organize your bookmarks however you like. Our simple drag-and-drop interface 
   gives you complete control over how you manage your favourite sites.`;
   e.target.classList.add('active')
   renderTabs()
})

function handleDemoActiveTabs(){
   document.querySelectorAll('.active').forEach(element => {
      return element.classList.remove('active')
   })
}

function renderTabs(){
 setTimeout(() => {
   tabsContainer.innerHTML = 
   `
   <div class="tabImage-container">
      <img src=${tabImage}  alt="" aria-hidden="true"/>
   </div>
   <div class="tab-textContent">
      <h2>${tabHeading}</h2>
      <p>
         ${tabTextContent}
      </p>
      <button class="more-infoBtn">More Info</button>
   </div>
   `
 }, 300);
}



// input error handling
const input = document.querySelector('input')
const errorPara = document.querySelector('.input__error')
const form = document.querySelector('form')
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

input.addEventListener('input',() => {
   errorPara.style.display = "none"
})
form.addEventListener('submit',(e) => {
   e.preventDefault()
   if(input.value.match(validRegex)){
      return
   }else{
      errorPara.style.display = "block"
   }
})




// FAQ section faq handling
class FAQ{
   appendButton(button,faqArrow){
      const id = button.getAttribute("aria-controls");
      if(button.getAttribute("aria-expanded") === "false"){
         button.setAttribute('aria-expanded',true)
         this.display(id,true)

         faqArrow.src = "images/icon-arrow-invert.svg";
         faqArrow.classList.add('arrow-rotate')
      }else{
         button.setAttribute('aria-expanded',false)
         this.display(id,false)

         faqArrow.src = "images/icon-arrow.svg";
         faqArrow.classList.remove('arrow-rotate')
      }
   }

   display(element,state){
      if(state){
         document.getElementById(element).style.display = "block"
      }else{
         document.getElementById(element).style.display = "none"
      }
   }
}

const arrowImg = document.querySelectorAll('.arrow')
const faq = new FAQ()
const faqButtons = document.querySelectorAll('button[aria-controls]')
faqButtons.forEach((button,index) => {
   button.addEventListener('click',() => {
      const faqButton  = button;
      const faqArrow = arrowImg[index]
      faq.appendButton(faqButton,faqArrow)
   })
})