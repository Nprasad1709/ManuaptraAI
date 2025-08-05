const image = document.getElementById("dynamic-image");
const paragraph = document.getElementById("dynamic-text");

const content = {
  1: {
    text: "Turn long documents into concise summaries.",
    img: "images/1.png"
  },
  2: {
    text: "Experience a futuristic dashboard powered by AI insights and automation.",
    img: "images/2.png"
  },
  3: {
    text: "AI-driven OCR to convert scanned documents into searchable, editable text with precision.",
    img: "images/3.png"
  },
  4: {
    text: "Translate documents across languages instantly with AI — accurate, fast, and context-aware.",
    img: "images/4.png"
  },
//   5: {
//     text: "Get powerful summaries that highlight only what matters.",
//     img: "images/5.png"
//   }
};

function showContent(num) {
  // Animate text
  paragraph.textContent = content[num].text;
  paragraph.classList.remove("text-animate");
  void paragraph.offsetWidth;
  paragraph.classList.add("text-animate");

  // Animate image
  image.src = content[num].img;
  image.classList.remove("image-animate");
  void image.offsetWidth;
  image.classList.add("image-animate");

  // ✅ ADDING active class toggle
  const allButtons = document.querySelectorAll(".pill-btn");
  allButtons.forEach(btn => btn.classList.remove("active"));

  const activeBtn = document.querySelector(`.pill-btn[data-image="${content[num].img}"]`);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
}




// showcase-image-wrapper 

  const buttons = document.querySelectorAll('.pill-btn');
  const images = document.querySelectorAll('.check-image');

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Remove active from all images
      images.forEach(img => img.classList.remove('active'));

      // Add active to the correct image (img-1, img-2,...)
      const imgToShow = document.querySelector(`.img-${index + 1}`);
      imgToShow.classList.add('active');

      // Optional: highlight active button
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });


// Sidemenu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navOverlay = document.querySelector('.nav-overlay');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
navOverlay.classList.toggle('active');
}


const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
navOverlay.classList.remove('active');
}
const mainContent = document.querySelector('main');

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navOverlay.classList.toggle("active");
  mainContent.classList.toggle("blur-background");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  navOverlay.classList.remove("active");
  mainContent.classList.toggle("blur-background");
}

// Complete JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {

    // --- Feature Pills Interaction ---
    const pillButtons = document.querySelectorAll('.pill-btn');
    const showcaseDescription = document.querySelector('.showcase-description');

    // Store content for each feature
    const featureContent = {
        "Quick Summary": "Generate concise summaries of lengthy legal documents, saving hours of reading time.",
        "Time Line Generator": "Extract a detailed, chronological timeline of key events from its contents.",
        "AI Powered OCR": "Convert scanned documents and images into searchable, editable text with high accuracy.",
        "Judgement & Document Comparator": "Compare multiple legal documents or judgements side-by-side to instantly spot differences.",
        "Translator Drafter": "Draft and translate legal text into multiple languages with context-aware AI."
    };

    pillButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            pillButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            button.classList.add('active');
            
            // Update showcase content
            const featureName = button.textContent.trim();
            if (featureContent[featureName]) {
                // Add a fade out effect
                showcaseDescription.style.opacity = '0';
                
                // Change content after a short delay
                setTimeout(() => {
                    showcaseDescription.textContent = featureContent[featureName];
                    // Add a fade in effect
                    showcaseDescription.style.opacity = '1';
                }, 200);
            }
        });
    });
    
    // --- Scroll Animations (simple version for demonstration) ---
    // A more robust implementation would use Intersection Observer
    const sectionsToAnimate = document.querySelectorAll('.hero, .features, .showcase, .value-prop, .compliance');

    const animateOnScroll = () => {
        sectionsToAnimate.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (sectionTop < screenHeight * 0.85) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial setup for scroll animations
    sectionsToAnimate.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    
    // Animate hero section on load
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        setTimeout(() => {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

});