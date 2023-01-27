<section class="section3" id="skills">
    <div class="wrapper">

        <div class="skills-content slide-in from-right">
            <h2>Skills</h2>

            <p>
                I specialize in developing interactive and responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development - HTML, CSS, JS, and animations.
            </p>

            <p>
                I focus on delivering work that is as accessible and optimized as possible.
            </p>
        </div>

        <div id="skills-section" class="skills-graph slide-in from-left">
            <ul>
                <li>
                    <h4>Photoshop</h4>
                    <div class="progress">
                        <div class="progress-bar" data-progress="80"></div>
                    </div>
                </li>
                <li>
                    <h4>Xara</h4>
                    <div class="progress">
                        <div class="progress-bar" data-progress="90"></div>
                    </div>
                </li>
                <li>
                    <h4>HTML5</h4>
                    <div class="progress">
                        <div class="progress-bar" data-progress="90"></div>
                    </div>
                </li>
                <li>
                    <h4>CSS3</h4>
                    <div class="progress">
                        <div class="progress-bar" data-progress="90"></div>
                    </div>
                </li>
                <li>
                    <h4>Javascript</h4>
                    <div class="progress">
                        <div class="progress-bar" data-progress="70"></div>
                    </div>
                </li>
                <li>
                    <h4>Wordpress</h4>
                    <div class="progress">
                        <div class="progress-bar" data-progress="75"></div>
                    </div>
                </li>
                <li>
                    <h4>Web Designing</h4>
                    <div class="progress">
                        <div class="progress-bar" data-progress="65"></div>
                    </div>
                </li>
                <li>
                    <h4>Developing</h4>
                    <div class="progress">
                        <div class="progress-bar" data-progress="90"></div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="skills-count">
            <ul>
                <li>
                    <h4 class="value">7</h4>
                    <span>Years Of Experience</span>
                </li>
                <li>
                    <h4 class="value">100</h4>
                    <span>Projects Completed</span>
                </li>
                <li>
                    <h4 class="value">80</h4>
                    <span>Happy Clients</span>
                </li>
            </ul>
        </div>
    </div>
</section>
<script>
    function animateValue(item, duration, start = 0) {
    var end = item.innerText.replaceAll(",", "").trim();
    var range = end - start;
    var increment = (range / (duration / 10));
    
    if(end < start){
        increment *= -1;
    }
    var current = start;
    var stepTime = 1;
    
    var timer = setInterval(function() {
        current += Math.ceil(increment);
        item.innerText = current;
        if (current >= end) {
        item.innerText = end;
        clearInterval(timer);
        }
    }, stepTime);
    }

    document.querySelectorAll('.value').forEach((item)=>{
    animateValue(item, 3000);
    });
    
</script>