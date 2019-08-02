
var skillsList = [];

if(localStorage.skills) {
    skillsList = JSON.parse(localStorage.getItem('skills'));
    //console.log(skillsList);
    $.each(skillsList, function(i) {
        $('ul').append(skillsList[i]);
        
    });
}

$('#submit').on('click', function () {

    var $input = $('#skill').val();
    var $newSkill = `<li><button class="remove">X</button>${$input}</li>`
    $('ul').append($newSkill);
    //console.log($input);
    skillsList.push($newSkill);
    //console.log(skillsList);
    localStorage.setItem('skills', JSON.stringify(skillsList));
    $('#skill').val('');
});

$('ul').on('click', 'button', function () {
    $(this).closest('li').fadeOut(1000, function () {
        skillsList = JSON.parse(localStorage.getItem('skills'));
        //console.log(this);
        
        let delSkill = `<li>${$(this).html()}</li>`;
        //console.log(delSkill);
        let delIdx = skillsList.indexOf(delSkill);
        //console.log(delIdx);
        skillsList.splice(delIdx, 1);
        localStorage.setItem('skills', JSON.stringify(skillsList));
        $(this).remove();
    });
});


