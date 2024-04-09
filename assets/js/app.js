$(function () {

    let header = $("header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /*Menu nav toggle */
    $('#nav_toggle').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
    });


    $("[data-collapse]").on('click', function (event) {
        event.preventDefault();
        
        $(this).toggleClass('active');
    });

});


function funSS(href) {
    window.location.href = href
}

document.addEventListener('DOMContentLoaded', function () {
    const customSelect = document.querySelector('.custom-select');
    const selectedOption = customSelect.querySelector('.selected-option');
    const options = customSelect.querySelector('.options');

    selectedOption.addEventListener('click', function () {
        options.classList.toggle('show');
        selectedOption.style.background = '#3D4050D9';
        selectedOption.style.color = '#ffffff';
    });

    options.querySelectorAll('li').forEach(function (option) {
        option.addEventListener('click', function () {
            selectedOption.textContent = option.textContent;
            options.classList.remove('show');
            selectedOption.style.background = '#ffffff';
            selectedOption.style.color = '#272733';
        });
    });

    document.addEventListener('click', function (event) {
        if (!customSelect.contains(event.target)) {
            options.classList.remove('show');
            selectedOption.style.background = '#ffffff';
            selectedOption.style.color = '#272733';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const optionsList = document.querySelectorAll('.options li');
    optionsList.forEach(function (option) {
        option.addEventListener('click', function () {
            const selectedValue = option.textContent;
            console.log('Выбранное значение:', selectedValue);
        });
    });
});


function toggleOptions() {

    let options = document.getElementById("options");
    if (options.style.display === "none") {
        options.style.display = "block";

    } else {
        options.style.display = "none";
        const customSelect = document.querySelector('.custom-select');
        const selectedOption = customSelect.querySelector('.selected-option');

        selectedOption.style.background = '#ffffff';
        selectedOption.style.color = '#272733';
    }
}

let ddd;

function selectOption(option) {

    let selectedValue = option.textContent;
    console.log('Выбранное значение:', selectedValue);
    ddd = selectedValue
    toggleOptions();
}

const rangeInput = document.getElementById('rangeInput');
const rangeValue = document.getElementById('rangeValue');

rangeInput.addEventListener('input', () => {
    rangeValue.textContent = `${rangeInput.value} %`;
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value;
        const name = document.querySelector('input[name="name"]').value;
        const rangeInput = document.querySelector('input[name="rangeInput"]').value;
        const fileInput = document.querySelector('input[name="fileInput"]').value;
        const selectedOption = document.querySelector('.selected-option').textContent;

        const formData = {
            email: email,
            name: name,
            range: rangeInput,
            fileInput: fileInput,
            selectedOption: selectedOption || ddd
        };
        fetch('https://dqdqw?uid=830646439#inbox', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log('Ответ:', response);
        });

        console.log('Отправленные данные:', formData);
    });
});

