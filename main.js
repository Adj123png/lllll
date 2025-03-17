/**
 * 表白网页主要JavaScript文件
 * 实现各种动画和自动播放效果
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化变量
    const loadingScreen = document.getElementById('loading');
    const mainContent = document.getElementById('main-content');
    
    // 初始化函数
    function init() {
        // 模拟加载过程
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            mainContent.style.opacity = '1';
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                
                // 初始化打字效果
                initTypewriter();
                
                // 初始化粒子效果
                initParticles();
                
                // 初始化星星背景
                createStars();
                
                // 初始化流星效果
                createShootingStars();
                
                // 初始化爱心雨
                createHeartRain();
                
                // 初始化爱心波纹
                createHeartRipples();
                
                // 初始化花瓣飘落
                createFallingPetals();
                
                // 添加动态渐变背景
                addGradientBackground();
                
                // 添加自动爱心烟花效果
                startAutomaticHeartFireworks();
            }, 500);
        }, 2000);
    }
    
    // 创建星星背景
    function createStars() {
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars';
        document.body.appendChild(starsContainer);
        
        // 创建200个星星
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // 随机大小、位置和闪烁时间
            const size = Math.random() * 3 + 1;
            const opacity = Math.random() * 0.5 + 0.3;
            const duration = Math.random() * 5 + 2;
            
            star.style.setProperty('--star-opacity', opacity);
            star.style.setProperty('--twinkle-duration', `${duration}s`);
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            
            starsContainer.appendChild(star);
        }
    }
    
    // 创建流星效果
    function createShootingStars() {
        const starsContainer = document.querySelector('.stars');
        if (!starsContainer) {
            const starsContainer = document.createElement('div');
            starsContainer.className = 'stars';
            document.body.appendChild(starsContainer);
        }
        
        // 创建流星函数
        function createShootingStar() {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            
            // 随机角度、位置和速度
            const angle = Math.random() * 60 - 30;
            const top = Math.random() * 30;
            const left = Math.random() * 100;
            const duration = Math.random() * 2 + 1;
            const delay = Math.random() * 15;
            const distance = 500 + Math.random() * 500;
            
            shootingStar.style.setProperty('--shooting-angle', `${angle}deg`);
            shootingStar.style.setProperty('--shooting-top', `${top}%`);
            shootingStar.style.setProperty('--shooting-left', `${left}%`);
            shootingStar.style.setProperty('--shooting-duration', `${duration}s`);
            shootingStar.style.setProperty('--shooting-delay', `${delay}s`);
            shootingStar.style.setProperty('--shooting-distance', `${distance}px`);
            
            starsContainer.appendChild(shootingStar);
            
            // 移除流星元素
            setTimeout(() => {
                shootingStar.remove();
                // 创建新的流星
                createShootingStar();
            }, (duration + delay) * 1000);
        }
        
        // 初始创建15个流星，增加数量
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                createShootingStar();
            }, i * 1000);
        }
    }
    
    // 创建爱心雨
    function createHeartRain() {
        const heartRainContainer = document.createElement('div');
        heartRainContainer.className = 'heart-rain-container';
        document.body.appendChild(heartRainContainer);
        
        // 创建爱心雨函数
        function createRainingHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart-rain';
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            
            // 随机大小、位置和速度
            const size = Math.random() * 20 + 10;
            const opacity = Math.random() * 0.7 + 0.3;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;
            const left = Math.random() * 100;
            
            heart.style.setProperty('--heart-size', `${size}px`);
            heart.style.setProperty('--heart-opacity', opacity);
            heart.style.setProperty('--fall-duration', `${duration}s`);
            heart.style.setProperty('--fall-delay', `${delay}s`);
            heart.style.setProperty('--heart-left', `${left}%`);
            
            heartRainContainer.appendChild(heart);
            
            // 移除爱心元素
            setTimeout(() => {
                heart.remove();
            }, (duration + delay) * 1000);
        }
        
        // 初始创建40个爱心，增加数量
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                createRainingHeart();
            }, i * 250);
        }
        
        // 持续创建爱心，增加频率
        setInterval(() => {
            createRainingHeart();
        }, 400);
    }
    
    // 创建爱心波纹
    function createHeartRipples() {
        const rippleContainer = document.createElement('div');
        rippleContainer.className = 'heart-ripple-container';
        document.body.appendChild(rippleContainer);
        
        // 创建爱心波纹函数
        function createRipple() {
            const ripple = document.createElement('div');
            ripple.className = 'heart-ripple';
            
            // 随机延迟
            const delay = Math.random() * 2;
            ripple.style.setProperty('--ripple-delay', `${delay}s`);
            
            rippleContainer.appendChild(ripple);
            
            // 移除波纹元素
            setTimeout(() => {
                ripple.remove();
            }, 4000 + delay * 1000);
        }
        
        // 初始创建8个波纹，增加数量
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createRipple();
            }, i * 800);
        }
        
        // 持续创建波纹，增加频率
        setInterval(() => {
            createRipple();
        }, 3000);
    }
    
    // 创建花瓣飘落
    function createFallingPetals() {
        const petalContainer = document.createElement('div');
        petalContainer.className = 'petal-container';
        document.body.appendChild(petalContainer);
        
        // 创建花瓣函数
        function createPetal() {
            const petal = document.createElement('div');
            petal.className = 'petal';
            
            // 随机大小、位置、旋转和速度
            const size = Math.random() * 10 + 10;
            const opacity = Math.random() * 0.7 + 0.3;
            const duration = Math.random() * 15 + 10;
            const delay = Math.random() * 5;
            const left = Math.random() * 100;
            const rotate = Math.random() * 360;
            
            petal.style.setProperty('--petal-opacity', opacity);
            petal.style.setProperty('--petal-duration', `${duration}s`);
            petal.style.setProperty('--petal-delay', `${delay}s`);
            petal.style.setProperty('--petal-left', `${left}%`);
            petal.style.setProperty('--petal-rotate', `${rotate}deg`);
            petal.style.width = `${size}px`;
            petal.style.height = `${size}px`;
            
            // 随机颜色
            const colors = ['#ffd0d0', '#ffb6d9', '#c4a1ff', '#a1c6ff'];
            petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            petalContainer.appendChild(petal);
            
            // 移除花瓣元素
            setTimeout(() => {
                petal.remove();
            }, (duration + delay) * 1000);
        }
        
        // 初始创建30个花瓣，增加数量
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createPetal();
            }, i * 250);
        }
        
        // 持续创建花瓣，增加频率
        setInterval(() => {
            createPetal();
        }, 800);
    }
    
    // 自动爱心烟花效果
    function startAutomaticHeartFireworks() {
        // 创建爱心烟花函数
        function createHeartFirework() {
            const fireworkContainer = document.createElement('div');
            fireworkContainer.style.position = 'fixed';
            fireworkContainer.style.top = '0';
            fireworkContainer.style.left = '0';
            fireworkContainer.style.width = '100%';
            fireworkContainer.style.height = '100%';
            fireworkContainer.style.pointerEvents = 'none';
            fireworkContainer.style.zIndex = '100';
            document.body.appendChild(fireworkContainer);
            
            // 随机位置
            const top = Math.random() * window.innerHeight * 0.8;
            const left = Math.random() * window.innerWidth * 0.8 + window.innerWidth * 0.1;
            
            // 创建爱心烟花中心
            const firework = document.createElement('div');
            firework.style.position = 'absolute';
            firework.style.width = '10px';
            firework.style.height = '10px';
            firework.style.borderRadius = '50%';
            firework.style.backgroundColor = getRandomColor();
            firework.style.top = `${top}px`;
            firework.style.left = `${left}px`;
            firework.style.boxShadow = `0 0 10px 2px ${getRandomColor()}`;
            
            fireworkContainer.appendChild(firework);
            
            // 创建爱心粒子
            const particleCount = 20;
            const colors = ['#ff4b6e', '#ff85a1', '#ffd0d0', '#ff9eb5', '#ff6384'];
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.innerHTML = '<i class="fas fa-heart"></i>';
                
                // 随机角度和距离
                const angle = (i / particleCount) * 360;
                const distance = 100 + Math.random() * 50;
                const size = 10 + Math.random() * 15;
                
                // 设置样式
                particle.style.position = 'absolute';
                particle.style.top = `${top}px`;
                particle.style.left = `${left}px`;
                particle.style.color = colors[Math.floor(Math.random() * colors.length)];
                particle.style.fontSize = `${size}px`;
                particle.style.transform = 'translate(-50%, -50%)';
                particle.style.opacity = '0';
                
                // 添加动画
                particle.animate([
                    { 
                        transform: 'translate(-50%, -50%) rotate(0deg)', 
                        opacity: 1 
                    },
                    { 
                        transform: `translate(calc(-50% + ${Math.cos(angle * Math.PI / 180) * distance}px), calc(-50% + ${Math.sin(angle * Math.PI / 180) * distance}px)) rotate(${Math.random() * 360}deg)`, 
                        opacity: 0 
                    }
                ], {
                    duration: 1500,
                    easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)',
                    fill: 'forwards'
                });
                
                fireworkContainer.appendChild(particle);
                
                // 移除粒子
                setTimeout(() => {
                    particle.remove();
                }, 1500);
            }
            
            // 移除烟花容器
            setTimeout(() => {
                fireworkContainer.remove();
            }, 2000);
        }
        
        // 随机间隔触发烟花效果
        function scheduleNextFirework() {
            const delay = 2000 + Math.random() * 5000; // 2-7秒随机间隔
            setTimeout(() => {
                createHeartFirework();
                scheduleNextFirework();
            }, delay);
        }
        
        // 开始自动烟花效果
        scheduleNextFirework();
    }
    
    // 获取随机颜色
    function getRandomColor() {
        const colors = ['#ff4b6e', '#ff85a1', '#ffd0d0', '#ff9eb5', '#ff6384'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // 初始化打字效果
    function initTypewriter() {
        const letterContent = document.getElementById('typewriter-text');
        if (!letterContent) return;
        
        const paragraphs = letterContent.querySelectorAll('p');
        
        // 隐藏所有段落
        paragraphs.forEach(p => {
            if (!p.classList.contains('signature')) {
                p.style.opacity = '0';
            }
        });
        
        // 逐段显示文字
        let delay = 0;
        paragraphs.forEach((p, index) => {
            if (index === 0 || p.classList.contains('signature')) {
                p.style.opacity = '1';
                return;
            }
            
            setTimeout(() => {
                p.style.opacity = '1';
                
                // 使用Typed.js创建打字效果
                if (typeof Typed !== 'undefined') {
                    const text = p.textContent;
                    p.textContent = '';
                    
                    new Typed(p, {
                        strings: [text],
                        typeSpeed: 30,
                        startDelay: 300,
                        showCursor: false
                    });
                }
            }, delay);
            
            delay += 2000; // 每段之间的延迟
        });
    }
    
    // 初始化粒子效果
    function initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ff4b6e"
                    },
                    shape: {
                        type: ["circle", "heart"],
                        stroke: {
                            width: 0,
                            color: "#000000"
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 5,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ff85a1",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: "grab"
                        },
                        onclick: {
                            enable: true,
                            mode: "push"
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        push: {
                            particles_nb: 4
                        }
                    }
                },
                retina_detect: true
            });
        }
    }
    
    // 添加动态渐变背景
    function addGradientBackground() {
        const gradientBg = document.createElement('div');
        gradientBg.className = 'gradient-bg';
        document.body.insertBefore(gradientBg, document.body.firstChild);
    }
    
    // 初始化
    init();
});
