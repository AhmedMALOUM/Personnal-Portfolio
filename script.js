/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

};

    


/*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000, 
    delay: 200
});



ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



// JavaScript
// Add this to your existing JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    let skillsItems = document.querySelectorAll('ul li');

    skillsItems.forEach(item => {
        let progressBarContainer = item.querySelector('.progress-bar-container');
        let progressBar = progressBarContainer.querySelector('.progress-bar');
        let percentText = progressBarContainer.querySelector('.percent-text'); // New line
        let percentValue = item.getAttribute('data-percent');

        item.addEventListener('mouseenter', () => {
            progressBar.style.width = `${percentValue}%`;
            percentText.textContent = `${percentValue}%`; // Update the percentage text
        });

        item.addEventListener('mouseleave', () => {
            progressBar.style.width = '0';
            percentText.textContent = ''; // Clear the percentage text
        });
    });
});

  




/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst','Data Engineer','Business Analyst', 'Data Catalog Administrator', 'Data Steward', 'Data Governance Specialist', 'Chef de projet Data'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// custom js

// ...

// Ajoutez cette fonction pour gérer le basculement de la visibilité du contenu caché
function toggleVisibility() {
    var hiddenContent = document.getElementById("hiddenContent");
  
    // Vérifiez si le contenu est actuellement caché
    if (hiddenContent.style.display === "none") {
      // Si c'est le cas, changez le style pour l'afficher
      hiddenContent.style.display = "block";
    } else {
      // Sinon, cachez le contenu
      hiddenContent.style.display = "none";
    }
}



let currentDashboardImageIndex = 0;
const dashboardImages = ["images/E1.png", "images/E2.png", "images/T1.png", "images/T2.png" /* Ajoutez d'autres images ici */];

// ...

// Fonction pour ouvrir la fenêtre modale Dashboards
function openDashboardModal() {
    var dashboardModal = document.getElementById("dashboardModal");
    var dashboardModalImage = document.getElementById("dashboardModalImage");
    var prevDashboardButton = document.getElementById("prevDashboardButton");
    var nextDashboardButton = document.getElementById("nextDashboardButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentDashboardImageIndex = 0;

    dashboardModalImage.src = dashboardImages[currentDashboardImageIndex];
    dashboardModal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevDashboardButton.style.display = currentDashboardImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextDashboardButton.style.display = currentDashboardImageIndex === dashboardImages.length - 1 ? "none" : "block";

    prevDashboardButton.onclick = function() {
        showPreviousDashboardImage();
    };

    nextDashboardButton.onclick = function() {
        showNextDashboardImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextDashboardButton.style.display = currentDashboardImageIndex === dashboardImages.length - 1 ? "none" : "block";
    };

    // Ajoutez un événement de clic à la fenêtre modale Dashboards
    dashboardModal.onclick = function(event) {
        // Si le clic est en dehors de l'image, fermez la modale
        if (event.target === dashboardModal) {
            closeDashboardModal();
        }
    };
}

// Fonction pour afficher la prochaine image de la fenêtre modale Dashboards
function showNextDashboardImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentDashboardImageIndex = (currentDashboardImageIndex + 1) % dashboardImages.length;

    var dashboardModalImage = document.getElementById("dashboardModalImage");
    dashboardModalImage.src = dashboardImages[currentDashboardImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevDashboardButton = document.getElementById("prevDashboardButton");
    prevDashboardButton.style.display = currentDashboardImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la fenêtre modale Dashboards
function showPreviousDashboardImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentDashboardImageIndex = (currentDashboardImageIndex - 1 + dashboardImages.length) % dashboardImages.length;

    var dashboardModalImage = document.getElementById("dashboardModalImage");
    dashboardModalImage.src = dashboardImages[currentDashboardImageIndex];

    var prevDashboardButton = document.getElementById("prevDashboardButton");
    prevDashboardButton.style.display = currentDashboardImageIndex === 0 ? "none" : "block";

    var nextDashboardButton = document.getElementById("nextDashboardButton");
    nextDashboardButton.style.display = currentDashboardImageIndex === dashboardImages.length - 1 ? "none" : "block";
}

// Fonction pour fermer la fenêtre modale Dashboards
function closeDashboardModal() {
    var dashboardModal = document.getElementById("dashboardModal");
    dashboardModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}





let currentMapImageIndex = 0;
const mapImages = ["images/MapExecution1.png", "images/MapExecution2.png", "images/MapExecution3.png", "images/MapExecution4.png" /* Ajoutez d'autres images ici */];

// Fonction pour ouvrir la fenêtre modale Map
function openMapModal() {
    var mapModal = document.getElementById("mapModal");
    var mapModalImage = document.getElementById("mapModalImage");
    var prevMapButton = document.getElementById("prevMapButton");
    var nextMapButton = document.getElementById("nextMapButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentMapImageIndex = 0;

    mapModalImage.src = mapImages[currentMapImageIndex];
    mapModal.style.display = "block";

    // Gérer l'affichage du bouton "Image précédente"
    prevMapButton.style.display = currentMapImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Image suivante"
    nextMapButton.style.display = currentMapImageIndex === mapImages.length - 1 ? "none" : "block";

    prevMapButton.onclick = function() {
        showPreviousMapImage();
    };

    nextMapButton.onclick = function() {
        showNextMapImage();
    };

    // Fermer la modale si on clique en dehors de l'image
    mapModal.onclick = function(event) {
        if (event.target === mapModal) {
            closeMapModal();
        }
    };
}

// Fonction pour afficher l'image suivante
function showNextMapImage() {
    currentMapImageIndex = (currentMapImageIndex + 1) % mapImages.length;

    var mapModalImage = document.getElementById("mapModalImage");
    mapModalImage.src = mapImages[currentMapImageIndex];

    var prevMapButton = document.getElementById("prevMapButton");
    var nextMapButton = document.getElementById("nextMapButton");

    prevMapButton.style.display = currentMapImageIndex === 0 ? "none" : "block";
    nextMapButton.style.display = currentMapImageIndex === mapImages.length - 1 ? "none" : "block";
}

// Fonction pour afficher l'image précédente
function showPreviousMapImage() {
    currentMapImageIndex = (currentMapImageIndex - 1 + mapImages.length) % mapImages.length;

    var mapModalImage = document.getElementById("mapModalImage");
    mapModalImage.src = mapImages[currentMapImageIndex];

    var prevMapButton = document.getElementById("prevMapButton");
    var nextMapButton = document.getElementById("nextMapButton");

    prevMapButton.style.display = currentMapImageIndex === 0 ? "none" : "block";
    nextMapButton.style.display = currentMapImageIndex === mapImages.length - 1 ? "none" : "block";
}

// Fonction pour fermer la fenêtre modale Map
function closeMapModal() {
    var mapModal = document.getElementById("mapModal");
    mapModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}






let currentTreeImageIndex = 0;
const decisionTreeImages = ["images/DecisionTri_Execution.png"]; // Ajouter l'image de l'arbre de décision ici

// Fonction pour ouvrir la fenêtre modale et afficher l'image de l'arbre de décision
function openDecisionTreeModal() {
    var decisionTreeModal = document.getElementById("decisionTreeModal");
    var decisionTreeModalImage = document.getElementById("decisionTreeModalImage");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';

    decisionTreeModalImage.src = decisionTreeImages[currentTreeImageIndex]; // Correction ici
    decisionTreeModal.style.display = "block";

    // Fermer la modale si on clique en dehors de l'image
    decisionTreeModal.onclick = function(event) {
        if (event.target === decisionTreeModal) {
            closeDecisionTreeModal();
        }
    };
}

// Fonction pour fermer la fenêtre modale
function closeDecisionTreeModal() {
    var decisionTreeModal = document.getElementById("decisionTreeModal");
    decisionTreeModal.style.display = "none";
    document.body.style.overflow = 'auto';
}







let currentCarImageIndex = 0;
const CarPredImages = ["images/car1.png"]; // L'image à afficher

// Fonction pour ouvrir la fenêtre modale Car
function openCarModal() {
    var carModal = document.getElementById("CarModal");
    var modalCarImage = document.getElementById("modalCarImage");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open'); // Assure-toi que "navbar" existe bien dans ton HTML

    currentCarImageIndex = 0;

    modalCarImage.src = CarPredImages[currentCarImageIndex];
    carModal.style.display = "block";

    // Fermer la modale si on clique en dehors de l'image
    carModal.onclick = function(event) {
        if (event.target === carModal) {
            closeCarModal();
        }
    };
}

// Fonction pour fermer la fenêtre modale
function closeCarModal() {
    var carModal = document.getElementById("CarModal");
    carModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}






let currentImageIndex = 0;
const images = ["images/r1.png", "images/r2.png", "images/r3.png", "images/r4.png", "images/r5.png", "images/footer.png", /* Ajoutez d'autres images ici */];

function openModal() {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var prevButton = document.getElementById("prevButton");
    var nextButton = document.getElementById("nextButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');


    currentImageIndex = 0;

    modalImage.src = images[currentImageIndex];
    modal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevButton.style.display = currentImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextButton.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
    
    prevButton.onclick = function() {
        showPreviousImage();
    };
    
    nextButton.onclick = function() {
        showNextImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextButton.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
    };

    // Ajoutez un événement de clic à la fenêtre modale
    modal.onclick = function(event) {
        // Si le clic est en dehors de l'image, fermez la modale
        if (event.target === modal) {
            closeModal();
        }
    };
}



// Fonction pour afficher la prochaine image
function showNextImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentImageIndex = (currentImageIndex + 1) % images.length;
  
    var modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevButton = document.getElementById("prevButton");
    prevButton.style.display = currentImageIndex === 0 ? "none" : "block";
}


// Fonction pour afficher l'image précédente
function showPreviousImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  
    var modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex];

    var prevButton = document.getElementById("prevButton");
    prevButton.style.display = currentImageIndex === 0 ? "none" : "block";

    var nextButton = document.getElementById("nextButton");
    nextButton.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
}




// Fonction pour fermer la modale
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');

}






let currentPizzaImageIndex = 0;
const pizzaImages = [
    "images/pizza1.png",
    "images/pizza2.png",
    // Ajoute d'autres images ici si nécessaire
];

// Fonction pour ouvrir la fenêtre modale Pizza
function openPizzaModal() {
    var pizzaModal = document.getElementById("PizzaModal");
    var pizzaModalImage = document.getElementById("modalPizzaImage");
    var prevPizzaButton = document.getElementById("prevPizzaButton");
    var nextPizzaButton = document.getElementById("nextPizzaButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentPizzaImageIndex = 0;

    pizzaModalImage.src = pizzaImages[currentPizzaImageIndex];
    pizzaModal.style.display = "block";

    prevPizzaButton.style.display = currentPizzaImageIndex === 0 ? "none" : "block";
    nextPizzaButton.style.display = currentPizzaImageIndex === pizzaImages.length - 1 ? "none" : "block";

    prevPizzaButton.onclick = function() {
        showPreviousPizzaImage();
    };

    nextPizzaButton.onclick = function() {
        showNextPizzaImage();
    };

    pizzaModal.onclick = function(event) {
        if (event.target === pizzaModal) {
            closePizzaModal();
        }
    };
}

// Fonction pour afficher l'image suivante
function showNextPizzaImage() {
    currentPizzaImageIndex = (currentPizzaImageIndex + 1) % pizzaImages.length;

    var pizzaModalImage = document.getElementById("modalPizzaImage");
    pizzaModalImage.src = pizzaImages[currentPizzaImageIndex];

    var prevPizzaButton = document.getElementById("prevPizzaButton");
    var nextPizzaButton = document.getElementById("nextPizzaButton");

    prevPizzaButton.style.display = currentPizzaImageIndex === 0 ? "none" : "block";
    nextPizzaButton.style.display = currentPizzaImageIndex === pizzaImages.length - 1 ? "none" : "block";
}

// Fonction pour afficher l'image précédente
function showPreviousPizzaImage() {
    currentPizzaImageIndex = (currentPizzaImageIndex - 1 + pizzaImages.length) % pizzaImages.length;

    var pizzaModalImage = document.getElementById("modalPizzaImage");
    pizzaModalImage.src = pizzaImages[currentPizzaImageIndex];

    var prevPizzaButton = document.getElementById("prevPizzaButton");
    var nextPizzaButton = document.getElementById("nextPizzaButton");

    prevPizzaButton.style.display = currentPizzaImageIndex === 0 ? "none" : "block";
    nextPizzaButton.style.display = currentPizzaImageIndex === pizzaImages.length - 1 ? "none" : "block";
}

// Fonction pour fermer la fenêtre modale Pizza
function closePizzaModal() {
    var pizzaModal = document.getElementById("PizzaModal");
    pizzaModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}






let currentFunctionImageIndex = 0;
const functionImages = ["images/f1.png", "images/f2.png", /* Ajoutez d'autres images ici */];

// ...

// Fonction pour ouvrir la deuxième fenêtre modale
function openFunctionModal() {
    var functionModal = document.getElementById("functionImageModal");
    var functionModalImage = document.getElementById("functionModalImage");
    var prevFunctionButton = document.getElementById("prevFunctionButton");
    var nextFunctionButton = document.getElementById("nextFunctionButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentFunctionImageIndex = 0;

    functionModalImage.src = functionImages[currentFunctionImageIndex];
    functionModal.style.display = "block";

    // Vérifiez la taille de l'image avant d'appliquer les styles
    var img = new Image();
    img.src = functionImages[currentFunctionImageIndex];
    img.onload = function () {
        if (img.width > window.innerWidth * 0.5) {
            functionModalImage.style.maxWidth = "65%";
        } else {
            functionModalImage.style.maxWidth = "none";
        }
    };



    // Gérer l'affichage du bouton "Show Previous Image"
    prevFunctionButton.style.display = currentFunctionImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextFunctionButton.style.display = currentFunctionImageIndex === functionImages.length - 1 ? "none" : "block";

    prevFunctionButton.onclick = function() {
        showPreviousFunctionImage();
    };

    nextFunctionButton.onclick = function() {
        showNextFunctionImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextFunctionButton.style.display = currentFunctionImageIndex === functionImages.length - 1 ? "none" : "block";
    };

};


// Fonction pour afficher la prochaine image de la deuxième fenêtre modale
function showNextFunctionImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentFunctionImageIndex = (currentFunctionImageIndex + 1) % functionImages.length;

    var functionModalImage = document.getElementById("functionModalImage");
    functionModalImage.src = functionImages[currentFunctionImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevFunctionButton = document.getElementById("prevFunctionButton");
    prevFunctionButton.style.display = currentFunctionImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la deuxième fenêtre modale
function showPreviousFunctionImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentFunctionImageIndex = (currentFunctionImageIndex - 1 + functionImages.length) % functionImages.length;

    var functionModalImage = document.getElementById("functionModalImage");
    functionModalImage.src = functionImages[currentFunctionImageIndex];

    var prevFunctionButton = document.getElementById("prevFunctionButton");
    prevFunctionButton.style.display = currentFunctionImageIndex === 0 ? "none" : "block";

    var nextFunctionButton = document.getElementById("nextFunctionButton");
    nextFunctionButton.style.display = currentFunctionImageIndex === functionImages.length - 1 ? "none" : "block";
}

// Fonction pour fermer la deuxième fenêtre modale
function closeFunctionModal() {
    var functionModal = document.getElementById("functionImageModal");
    functionModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}

let currentPortfolioImageIndex = 0;
const portfolioImages = ["images/p1.png", "images/p2.png", "images/p3.png", "images/p4.png" /* Ajoutez d'autres images ici */];

// ...

// Fonction pour ouvrir la fenêtre modale Portfolio
function openPortfolioModal() {
    var portfolioModal = document.getElementById("portfolioModal");
    var portfolioModalImage = document.getElementById("portfolioModalImage");
    var prevPortfolioButton = document.getElementById("prevPortfolioButton");
    var nextPortfolioButton = document.getElementById("nextPortfolioButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentPortfolioImageIndex = 0;

    portfolioModalImage.src = portfolioImages[currentPortfolioImageIndex];
    portfolioModal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevPortfolioButton.style.display = currentPortfolioImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextPortfolioButton.style.display = currentPortfolioImageIndex === portfolioImages.length - 1 ? "none" : "block";

    prevPortfolioButton.onclick = function() {
        showPreviousPortfolioImage();
    };

    nextPortfolioButton.onclick = function() {
        showNextPortfolioImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextPortfolioButton.style.display = currentPortfolioImageIndex === portfolioImages.length - 1 ? "none" : "block";
    };

    // Ajoutez un événement de clic à la fenêtre modale
    portfolioModal.onclick = function(event) {
        // Si le clic est en dehors de l'image, fermez la modale
        if (event.target === portfolioModal) {
            closePortfolioModal();
        }
    };
}

// Fonction pour afficher la prochaine image de la fenêtre modale Portfolio
function showNextPortfolioImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentPortfolioImageIndex = (currentPortfolioImageIndex + 1) % portfolioImages.length;

    var portfolioModalImage = document.getElementById("portfolioModalImage");
    portfolioModalImage.src = portfolioImages[currentPortfolioImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevPortfolioButton = document.getElementById("prevPortfolioButton");
    prevPortfolioButton.style.display = currentPortfolioImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la fenêtre modale Portfolio
function showPreviousPortfolioImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentPortfolioImageIndex = (currentPortfolioImageIndex - 1 + portfolioImages.length) % portfolioImages.length;

    var portfolioModalImage = document.getElementById("portfolioModalImage");
    portfolioModalImage.src = portfolioImages[currentPortfolioImageIndex];

    var prevPortfolioButton = document.getElementById("prevPortfolioButton");
    prevPortfolioButton.style.display = currentPortfolioImageIndex === 0 ? "none" : "block";

    var nextPortfolioButton = document.getElementById("nextPortfolioButton");
    nextPortfolioButton.style.display = currentPortfolioImageIndex === portfolioImages.length - 1 ? "none" : "block";
}



// Fonction pour fermer la fenêtre modale Portfolio
function closePortfolioModal() {
    var portfolioModal = document.getElementById("portfolioModal");
    portfolioModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}



let currentDashImageIndex = 0;
const DashImages = ["images/D1.png", "images/D2.png", "images/D3.png", "images/D4.png", "images/D5.png", "images/D6.png" /* Ajoutez d'autres images ici */];

// ...

// Fonction pour ouvrir la fenêtre modale Portfolio
function openDashModal() {
    var DashModal = document.getElementById("DashModal");
    var DashModalImage = document.getElementById("DashModalImage");
    var prevDashButton = document.getElementById("prevDashButton");
    var nextDashButton = document.getElementById("nextDashButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentDashImageIndex = 0;

    DashModalImage.src = DashImages[currentDashImageIndex];
    DashModal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevDashButton.style.display = currentDashImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextDashButton.style.display = currentDashImageIndex === DashImages.length - 1 ? "none" : "block";

    prevDashButton.onclick = function() {
        showPreviousDashImage();
    };

    nextDashButton.onclick = function() {
        showNextDashImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextDashButton.style.display = currentDashImageIndex === DashImages.length - 1 ? "none" : "block";
    };

    // Ajoutez un événement de clic à la fenêtre modale
    DashModal.onclick = function(event) {
        // Si le clic est en dehors de l'image, fermez la modale
        if (event.target === DashModal) {
            closeDashModal();
        }
    };
}

// Fonction pour afficher la prochaine image de la fenêtre modale Portfolio
function showNextDashImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentDashImageIndex = (currentDashImageIndex + 1) % DashImages.length;

    var DashModalImage = document.getElementById("DashModalImage");
    DashModalImage.src = DashImages[currentDashImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevDashButton = document.getElementById("prevDashButton");
    prevDashButton.style.display = currentDashImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la fenêtre modale Portfolio
function showPreviousDashImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentDashImageIndex = (currentDashImageIndex - 1 + DashImages.length) % DashImages.length;

    var DashModalImage = document.getElementById("DashModalImage");
    DashModalImage.src = DashImages[currentDashImageIndex];

    var prevDashButton = document.getElementById("prevDashButton");
    prevDashButton.style.display = currentDashImageIndex === 0 ? "none" : "block";

    var nextDashButton = document.getElementById("nextDashButton");
    nextDashButton.style.display = currentDashImageIndex === DashImages.length - 1 ? "none" : "block";
}



// Fonction pour fermer la fenêtre modale Portfolio
function closeDashModal() {
    var DashModal = document.getElementById("DashModal");
    DashModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}




// Ajoutez cette fonction pour fermer la modale en appuyant sur la touche "Esc"
document.onkeydown = function(event) {
    event = event || window.event;
    if (event.key === "Escape") {
      closeModal();
      closeFunctionModal();
      closeDashboardModal();
      closePortfolioModal();
      closeDashModal();
    }
};

function toggleLanguage() {
    // Récupérez toutes les balises avec des attributs de traduction
    var elements = document.querySelectorAll('[data-lang][data-en], [data-lang][data-fr]');
    var languageIndicator = document.getElementById('languageIndicator');

    elements.forEach(function(element) {
        // Obtenez la langue actuelle de l'élément
        var currentLanguage = element.getAttribute('data-lang');
        // Déterminez la nouvelle langue
        var newLanguage = currentLanguage === 'en' ? 'fr' : 'en';

        // Obtenez la traduction pour la nouvelle langue
        var translation = element.getAttribute('data-' + newLanguage);
        if (translation) {
            // Appliquez la traduction
            element.innerText = translation;
            // Mettez à jour la langue de l'élément
            element.setAttribute('data-lang', newLanguage);
        }
    });

    // Mettez à jour le texte de languageIndicator à l'extérieur de la boucle forEach
    languageIndicator.innerText = newLanguage.toUpperCase(EN); // Mettez en majuscules "EN" ou "FR"
}



