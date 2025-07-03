// Initialize particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});

// Button functionality
document.getElementById('aboutBtn').addEventListener('click', function() {
    document.getElementById('aboutSection').style.display = 'block';
    document.getElementById('contactSection').style.display = 'none';
    document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('contactSection').style.display = 'block';
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('contactSection').scrollIntoView({ behavior: 'smooth' });
});

// Close sections when clicking outside
document.addEventListener('click', function(e) {
    const aboutSection = document.getElementById('aboutSection');
    const contactSection = document.getElementById('contactSection');
    
    if (aboutSection.style.display === 'block' && 
        !aboutSection.contains(e.target) && 
        e.target !== document.getElementById('aboutBtn')) {
        aboutSection.style.display = 'none';
    }
    
    if (contactSection.style.display === 'block' && 
        !contactSection.contains(e.target) && 
        e.target !== document.getElementById('contactBtn')) {
        contactSection.style.display = 'none';
    }
});