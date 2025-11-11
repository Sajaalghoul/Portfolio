// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Navbar Background on Scroll
const navbar = document.querySelector(".navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  }

  lastScroll = currentScroll;
});

// Animate Skill Bars on Scroll
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-progress");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const width = entry.target.getAttribute("data-width");
          entry.target.style.width = width + "%";
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  skillBars.forEach((bar) => {
    observer.observe(bar);
  });
};

// Initialize skill bar animation
animateSkillBars();

// Fade in Animation on Scroll
const fadeInOnScroll = () => {
  const elements = document.querySelectorAll(
    ".language-card, .skill-item, .project-card, .education-card, .achievement-card, .timeline-item"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });
};

// Initialize fade in animation
fadeInOnScroll();

// Contact Form Handling
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (!name || !email || !subject || !message) {
    showNotification("Please fill in all fields", "error");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification("Please enter a valid email address", "error");
    return;
  }

  // Simulate form submission (replace with actual form handling)
  showNotification(
    "Message sent successfully! I'll get back to you soon.",
    "success"
  );

  // Reset form
  contactForm.reset();

  // In a real application, you would send the data to a server here
  // Example:
  // fetch('/api/contact', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, email, subject, message })
  // })
  // .then(response => response.json())
  // .then(data => {
  //     showNotification('Message sent successfully!', 'success');
  //     contactForm.reset();
  // })
  // .catch(error => {
  //     showNotification('Error sending message. Please try again.', 'error');
  // });
});

// Notification System
const showNotification = (message, type = "success") => {
  // Remove existing notification if any
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${
              type === "success" ? "fa-check-circle" : "fa-exclamation-circle"
            }"></i>
            <span>${message}</span>
        </div>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : "#ef4444"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;

  // Add animation styles
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .notification-content i {
            font-size: 1.2rem;
        }
    `;
  document.head.appendChild(style);

  // Append to body
  document.body.appendChild(notification);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = "slideInRight 0.3s ease reverse";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
};

// Active Navigation Link Highlighting
const updateActiveNavLink = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
};

// Initialize active nav link highlighting
updateActiveNavLink();

// Typing Effect for Hero Title (Optional Enhancement)
const typingEffect = () => {
  const titleElement = document.querySelector(".hero-title");
  if (!titleElement) return;

  const text = titleElement.textContent;
  const highlightText = "Your Name";
  const beforeHighlight = text.split(highlightText)[0];
  const afterHighlight = text.split(highlightText)[1] || "";

  titleElement.innerHTML = "";

  let i = 0;
  const typeText = (text, callback) => {
    if (i < text.length) {
      titleElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(() => typeText(text, callback), 100);
    } else {
      if (callback) callback();
    }
  };

  typeText(beforeHighlight, () => {
    const highlightSpan = document.createElement("span");
    highlightSpan.className = "highlight";
    highlightSpan.textContent = highlightText;
    titleElement.appendChild(highlightSpan);
    i = 0;
    typeText(afterHighlight);
  });
};

// Uncomment the line below if you want the typing effect
// typingEffect();

// Parallax Effect for Hero Section (Optional)
const parallaxEffect = () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    hero.style.transform = `translateY(${rate}px)`;
  });
};

// Uncomment the line below if you want the parallax effect
// parallaxEffect();

// Add active class styles for navigation
const style = document.createElement("style");
style.textContent = `
    .nav-menu a.active {
        color: var(--primary-color);
    }
    .nav-menu a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded successfully!");
});
