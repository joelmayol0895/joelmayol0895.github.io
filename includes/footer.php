<div class="sections-holder">
    <footer>
        <div class="copyright">
            <div class="wrapper">
                <p>Copyright &copy; <?php echo date("Y"); ?> <small>/</small> <span>Site by Joel M. Mayol Jr.</span></p>
            </div>
        </div>
    </footer>
    <span class="back_top"></span>
</div>

<script src="js/jquery-1.9.0.min.js"></script>
<script src="js/particles.min.js"></script>
<script src="js/app.js"></script>
<script src="js/responsiveslides.min.js"></script>
<script src="js/plugins.js"></script>
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

<script>
    var Typed = new Typed(".auto-type", {
        strings: ["Coding", "Coding", "Photography", "Cycling"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    })

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

</body>
</html>