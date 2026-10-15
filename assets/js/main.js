/**
 * ==============================================================================
 * JAVASCRIPT PRINCIPAL - LANDING PAGE MOTOBOY FLORIANÓPOLIS
 * Exemplo Acadêmico de Interatividade, Navegação Suave, Carrossel Touch e Eventos
 * ==============================================================================
 */

(function () {
  "use strict";

  /* ==========================================================================
     1. PRELOADER (Transição Suave de Carregamento)
     ========================================================================== */
  window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      window.setTimeout(function () {
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.5s ease";
        window.setTimeout(function () {
          preloader.style.display = "none";
        }, 500);
      }, 300);
    }
  });

  /* ==========================================================================
     2. NAVBAR STICKY & BOTÃO VOLTAR AO TOPO (Scroll Listener)
     ========================================================================== */
  const headerNavbar = document.querySelector(".navbar-area");
  const backToTop = document.querySelector(".scroll-top");

  window.addEventListener("scroll", function () {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    // Fixa a barra de navegação após rolar 20px
    if (headerNavbar) {
      if (scrollPos > 20) {
        headerNavbar.classList.add("sticky");
      } else {
        headerNavbar.classList.remove("sticky");
      }
    }

    // Exibe ou oculta o botão de voltar ao topo
    if (backToTop) {
      if (scrollPos > 300) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    }
  });

  // Ação de clique para o botão voltar ao topo
  if (backToTop) {
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  /* ==========================================================================
     3. NAVEGAÇÃO INTERNA SUAVE (Smooth Scrolling & Offset Compensation)
     ========================================================================== */
  const pageLinks = document.querySelectorAll(".page-scroll");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navbarToggler = document.querySelector(".navbar-toggler");

  pageLinks.forEach(function (elem) {
    elem.addEventListener("click", function (e) {
      const targetId = elem.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          e.preventDefault();
          const navbarHeight = headerNavbar ? headerNavbar.offsetHeight : 70;
          const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - (navbarHeight - 10);

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });
        }
      }

      // Fecha o menu hamburguer no mobile ao clicar em um link interno
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
      if (navbarToggler && navbarToggler.classList.contains("active")) {
        navbarToggler.classList.remove("active");
      }
    });
  });

  // Alterna o menu mobile
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
      navbarCollapse.classList.toggle("show");
    });
  }

  /* ==========================================================================
     4. SCROLLSPY (Destaque do Item Ativo no Menu Durante a Rolagem)
     ========================================================================== */
  const sections = document.querySelectorAll("section[id]");

  function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(function (current) {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute("id");
      const matchingLink = document.querySelector('.navbar-nav a[href="#' + sectionId + '"]');

      if (matchingLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          matchingLink.classList.add("active");
        } else {
          matchingLink.classList.remove("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavLink);
  updateActiveNavLink();

  /* ==========================================================================
     5. CARROSSEL DE IMAGENS E AVALIAÇÕES (Touch, Swipe e Auto-Play)
     ========================================================================== */
  const carouselContainer = document.querySelector(".carousel");
  const slides = document.querySelector(".slides");
  const dotsContainer = document.querySelector(".dots");

  if (carouselContainer && slides) {
    const slideItems = slides.children;
    const totalSlides = slideItems.length;
    let currentIndex = 0;
    const slideInterval = 7000; // 7 segundos por slide
    let timer = null;

    // Garante que o número de dots seja igual ao número real de slides
    if (dotsContainer && totalSlides > 0) {
      dotsContainer.innerHTML = "";
      for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("div");
        dot.className = "dot" + (i === 0 ? " active" : "");
        dot.setAttribute("data-index", i);
        dotsContainer.appendChild(dot);
      }
    }

    const dots = document.querySelectorAll(".dot");

    function getSlideWidth() {
      return carouselContainer.getBoundingClientRect().width;
    }

    function showSlide(index) {
      if (index >= totalSlides) index = 0;
      if (index < 0) index = totalSlides - 1;
      currentIndex = index;

      const width = getSlideWidth();
      slides.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
      slides.style.transform = "translateX(" + (-width * currentIndex) + "px)";

      dots.forEach(function (d, i) {
        if (i === currentIndex) {
          d.classList.add("active");
        } else {
          d.classList.remove("active");
        }
      });
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    function startTimer() {
      stopTimer();
      timer = setInterval(nextSlide, slideInterval);
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    startTimer();

    // Controle por Dots
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        showSlide(i);
        startTimer();
      });
    });

    // Pausa no Hover para melhor experiência de leitura dos depoimentos
    carouselContainer.addEventListener("mouseenter", stopTimer);
    carouselContainer.addEventListener("mouseleave", startTimer);

    // Redimensionamento de Janela Responsivo
    window.addEventListener("resize", function () {
      slides.style.transition = "none";
      const width = getSlideWidth();
      slides.style.transform = "translateX(" + (-width * currentIndex) + "px)";
    });

    // --- Suporte a Gesto Swipe (Touch e Arraste com Mouse) ---
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    function getEventX(e) {
      return e.type.includes("mouse") ? e.pageX : e.touches[0].clientX;
    }

    function dragStart(e) {
      isDragging = true;
      startX = getEventX(e);
      stopTimer();
      slides.style.transition = "none";
    }

    function dragMove(e) {
      if (!isDragging) return;
      currentX = getEventX(e);
      const diff = currentX - startX;
      const width = getSlideWidth();
      const translate = -currentIndex * width + diff;
      slides.style.transform = "translateX(" + translate + "px)";
    }

    function dragEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      const endX = e.type.includes("mouse")
        ? e.pageX
        : (e.changedTouches ? e.changedTouches[0].clientX : startX);
      const diff = endX - startX;

      if (diff < -50) {
        showSlide(currentIndex + 1); // Swipe esquerda (avançar)
      } else if (diff > 50) {
        showSlide(currentIndex - 1); // Swipe direita (voltar)
      } else {
        showSlide(currentIndex); // Retorna ao slide atual
      }

      startTimer();
    }

    // Eventos Mouse Drag
    carouselContainer.addEventListener("mousedown", dragStart);
    carouselContainer.addEventListener("mousemove", dragMove);
    carouselContainer.addEventListener("mouseup", dragEnd);
    carouselContainer.addEventListener("mouseleave", function (e) {
      if (isDragging) dragEnd(e);
    });

    // Eventos Touch Mobile
    carouselContainer.addEventListener("touchstart", dragStart, { passive: true });
    carouselContainer.addEventListener("touchmove", dragMove, { passive: true });
    carouselContainer.addEventListener("touchend", dragEnd);
  }

  /* ==========================================================================
     6. ATUALIZAÇÃO AUTOMÁTICA DO ANO NO RODAPÉ
     ========================================================================== */
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  /* ==========================================================================
     7. INICIALIZAÇÃO DO WOW.JS (Animações de Entrada ao Rolar a Página)
     ========================================================================== */
  if (typeof WOW === "function") {
    new WOW().init();
  }
})();