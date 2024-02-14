$(document).ready(function() {
    var skills = $('.skill'); 

    function animateSkillsSequentially() {
        skills.each(function(index) {
            var skill = $(this);
            var skillLevel = parseInt(skill.attr('data-level'));
            var skillBar = skill.find('.skill-bar');
            var skillLevelText = skill.find('.skill-level-text');

            var distanceFromTop = skill.offset().top - $(window).scrollTop();
            var windowHeight = $(window).height();
            var animationDelay = Math.max(0, windowHeight - distanceFromTop) * 0.5; 

            skillBar.stop(true, true).animate({ width: skillLevel + '%' }, {
                duration: 1000,
                progress: function() {
                    skillLevelText.text(Math.round(skillBar.width() / skillBar.parent().width() * 100) + '%');
                }
            }).delay(animationDelay);
        });

        // Comprobación al final de la animación
        skills.each(function(index) {
            var skill = $(this);
            var skillLevel = parseInt(skill.attr('data-level'));
            var skillBar = skill.find('.skill-bar');
            var skillLevelText = skill.find('.skill-level-text');

            if (parseInt(skillLevelText.text()) !== skillLevel) {
                skillLevelText.text(skillLevel + '%');
            }
        });
    }

    var scrollTimeout;
    $(window).scroll(function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(animateSkillsSequentially, 100);
    });

    animateSkillsSequentially(); 
});
