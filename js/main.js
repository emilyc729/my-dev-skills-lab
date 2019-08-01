
var skillsList = [];
$('#submit').on('click', function () {

    var $input = $('#skill').val();
    var $newSkill = `<li><button class="remove">X</button>${$input}</li>`
    $('ul').append($newSkill);
    //console.log($input);
    skillsList.push($newSkill);
    //console.log(skillsList);
    localStorage.setItem('skillsList', JSON.stringify(skillsList));
    $('#skill').val('');
});

var delsList = [];
$('ul').on('click', 'button', function () {
    $(this).closest('li').fadeOut(1000, function () {
        //console.log(this.outerHTML);
        delsList.push(`${this.outerHTML}`);
        localStorage.setItem('delsList', JSON.stringify(delsList));
        $(this).remove();
    });
});

var deleted = JSON.parse(localStorage.getItem('delsList'));
console.log(deleted);
var savedSkills = JSON.parse(localStorage.getItem('skillsList'));
$.each(savedSkills, function(i) {
    $('ul').append(savedSkills[i]);
    
});
