$("#close").click(function () {
    $("nav").animate({ left: "-100%" }, 1500)
})
/*$(document).ready(function () {
    $("#load").fadeOut(1000,
        function () {
            $("body,html").css({ overflow: 'auto' })
        }
    )

    let navHeight = $("nav").outerHeight();

    let descriptionOffset = $("#descriptionOur").offset().top;
    $(window).scroll(function () {
        let myWindow = $(window).scrollTop();
        if (myWindow > descriptionOffset - 100) {
            $("nav").addClass("shadow bg-offset");
        }
        else {
            $("nav").removeClass("shadow bg-offset");

        }
    })
    $(".goto li a").click(function () {
        let myHref = $(this).attr("href");
        $("body,html").animate({ scrollTop: $(myHref).offset().top - navHeight }, 1000);
    })


    $('.owl-carousel').owlCarousel({
        rtl: false,
        loop: true,

        margin: 20,
        nav: false,
        responsive: {
            250: {
                items: 1
            },
            500: {
                items: 2
            },
            750: {
                items: 3
            },
            1000:
            {
                items: 4

            }
        }
    })

    $(".upPage").click(function () {
        $("body ,html").animate({ scrollTop: 0 }, 2000)
    })

    function validName(name) {
        let nameRegex = /^[A-zا-ي]{2,}$/;
        if (nameRegex.test(name)) {
            return true;
        } else {
            return false;
        }
    }

    function validEmail(email) {
        let emailRegex = /^[A-z][A-z0-9]{2,}@(yahoo|gmail).com$/;
        if (emailRegex.test(email)) {
            return true;
        } else {
            return false;
        }
    }
    function validPass(pass) {
        let passRegex = /^[A-z0-9]{8,}$/;
        if (passRegex.test(pass)) {
            return true;
        } else {
            return false;
        }
    }
    function validMassage(massage) {
        let massageRegex = /^[A-z0-9]{20,100}$/;
        if (massageRegex.test(massage)) {
            return true;
        } else {
            return false;
        }
    }
    function validPhone(phone) {
        let PhoneRegex = /^(02)?(010|011|012|015)[0-9]{7}$/;
        if (PhoneRegex.test(phone)) {
            return true;
        } else {
            return false;
        }
    }
    $("#telInp").keyup(function () {
        let telValue = $("#telInp").val();
        if (validPhone(telValue) == true) {
            $("#phoneError").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#phoneError").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#messageInp").keyup(function () {
        let messageValue = $("#messageInp").val();
        if (validMassage(messageValue) == true) {
            $("#errorMassage").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#errorMassage").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#inpPass").keyup(function () {
        let passValue = $("#inpPass").val();
        if (validPass(passValue) == true) {
            $("#errorPass").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#errorPass").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#inpName").keyup(function () {
        let nameValue = $("#inpName").val();
        if (validName(nameValue) == true) {
            $("#erorrName").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrName").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#inpEmail").keyup(function () {
        let emailValue = $("#inpEmail").val();
        if (validEmail(emailValue) == true) {
            $("#erorrEmail").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrEmail").css("display", "block")
            $("#send").attr("disabled", "true")
        }
    })

    $("#messageInp").keyup(function () {
        $("#manyChar").css("display", "block")
        let manyCharMax = $(this).attr("maxlength");
        let manyChar = document.getElementById("messageInp").value;
        let x = manyChar.length;
        $("#manyChar").text(manyCharMax - x)
        if (manyCharMax - x == 0) {
            $("#manyChar").css("color", "#ffb606")
        } else {
            $("#manyChar").css("color", "#888")

        }
    })


    $("#send").click(function () {

        resetInput();
    })

    function resetInput() {
        let inputs = document.getElementsByClassName("inp");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }

    $(".register").click(function () {
        $("#registerForm").slideDown(1000).css("display", "flex");

    })

    $(".close").click(function () {
        $("#registerForm").slideUp(1000)
    })
    // ! Set future time
    let countDownOne = new Date("July  19, 2028 9:7:00").getTime(),
        countDownTwo = new Date("March 25, 2027 1:5:00").getTime(),
        countDownThree = new Date("August   1, 2025 2:3:").getTime(),
        countDownFour = new Date("December  3, 2024 3:8:00").getTime(),
        countDownFive = new Date("November  8, 2023 4:17:00").getTime(),
        countDownSix = new Date("April 15, 2031 11:10:00").getTime();
    // ? Update the count down 1 second
    let timeOne = setInterval(function () {

        // ? Get time
        let now = new Date().getTime();

        // Find the distance between future and now
        let distanceOne = countDownOne - now;

        //find Time days, hours, minutes and seconds
        let daysOne = Math.floor(distanceOne / (1000 * 60 * 60 * 24)),
            hoursOne = Math.floor((distanceOne % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutesOne = Math.floor((distanceOne % (1000 * 60 * 60)) / (1000 * 60)),
            secondsOne = Math.floor((distanceOne % (1000 * 60)) / 1000);
        $(".dayOne").text(daysOne);
        $(".hourOne").text(hoursOne);
        $(".minuteOne").text(minutesOne);
        $(".secondOne").text(secondsOne);

        // If the count down is finished, write some text
        if (distanceOne < 0) {
            clearInterval(timeOne);
            $(".dayOne").text("EXPIRED");
        }
    }, 1000);

    let timeTwo = setInterval(function () {

        // ? Get time
        let now = new Date().getTime();

        // Find the distance between future and now
        let distanceTwo = countDownTwo - now;

        //find Time days, hours, minutes and seconds
        let daysTwo = Math.floor(distanceTwo / (1000 * 60 * 60 * 24)),
            hoursTwo = Math.floor((distanceTwo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutesTwo = Math.floor((distanceTwo % (1000 * 60 * 60)) / (1000 * 60)),
            secondsTwo = Math.floor((distanceTwo % (1000 * 60)) / 1000);
        $(".dayTwo").text(daysTwo);
        $(".hourTwo").text(hoursTwo);
        $(".minuteTwo").text(minutesTwo);
        $(".secondTwo").text(secondsTwo);


        // If the count down is finished, write some text
        if (distanceTwo < 0) {
            clearInterval(timeTwo);
            $(".daysTwo").text("EXPIRED");
        }
    }, 1000);

    let timeThree = setInterval(function () {

        // ? Get time
        let now = new Date().getTime();

        // Find the distance between future and now
        let distanceThree = countDownThree - now;

        //find Time days, hours, minutes and seconds
        let daysThree = Math.floor(distanceThree / (1000 * 60 * 60 * 24)),
            hourThree = Math.floor((distanceThree % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minuteThree = Math.floor((distanceThree % (1000 * 60 * 60)) / (1000 * 60)),
            secondsThree = Math.floor((distanceThree % (1000 * 60)) / 1000);
        $(".dayThree").text(daysThree);
        $(".hourThree").text(hourThree);
        $(".minuteThree").text(minuteThree);
        $(".secondThree").text(secondsThree);


        // If the count down is finished, write some text
        if (distanceThree < 0) {
            clearInterval(timeThree);
            $(".daysThree").text("EXPIRED");
        }
    }, 1000);

    let timeFour = setInterval(function () {

        // ? Get time
        let now = new Date().getTime();

        // Find the distance between future and now
        let distanceFour = countDownFour - now;

        //find Time days, hours, minutes and seconds
        let daysFour = Math.floor(distanceFour / (1000 * 60 * 60 * 24)),
            hourFour = Math.floor((distanceFour % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minuteFour = Math.floor((distanceFour % (1000 * 60 * 60)) / (1000 * 60)),
            secondsFour = Math.floor((distanceFour % (1000 * 60)) / 1000);
        $(".dayFour").text(daysFour);
        $(".hourFour").text(hourFour);
        $(".minuteFour").text(minuteFour);
        $(".secondFour").text(secondsFour);


        // If the count down is finished, write some text
        if (distanceFour < 0) {
            clearInterval(timeFour);
            $(".daysFour").text("EXPIRED");
        }
    }, 1000);


    let timeFive = setInterval(function () {

        // ? Get time
        let now = new Date().getTime();

        // Find the distance between future and now
        let distanceFive = countDownFive - now;

        //find Time days, hours, minutes and seconds
        let daysFive = Math.floor(distanceFive / (1000 * 60 * 60 * 24)),
            hourFive = Math.floor((distanceFive % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minuteFive = Math.floor((distanceFive % (1000 * 60 * 60)) / (1000 * 60)),
            secondsFive = Math.floor((distanceFive % (1000 * 60)) / 1000);
        $(".dayFive").text(daysFive);
        $(".hourFive").text(hourFive);
        $(".minuteFive").text(minuteFive);
        $(".secondFive").text(secondsFive);


        // If the count down is finished, write some text
        if (distanceFive < 0) {
            clearInterval(timeFour);
            $(".daysFive").text("EXPIRED");
        }
    }, 1000);

    let timeSix = setInterval(function () {

        // ? Get time
        let now = new Date().getTime();

        // Find the distance between future and now
        let distanceSix = countDownSix - now;

        //find Time days, hours, minutes and seconds
        let daysSix = Math.floor(distanceSix / (1000 * 60 * 60 * 24)),
            hourSix = Math.floor((distanceSix % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minuteSix = Math.floor((distanceSix % (1000 * 60 * 60)) / (1000 * 60)),
            secondsSix = Math.floor((distanceSix % (1000 * 60)) / 1000);
        $(".daySix").text(daysSix);
        $(".hourSix").text(hourSix);
        $(".minuteSix").text(minuteSix);
        $(".secondSix").text(secondsSix);


        // If the count down is finished, write some text
        if (distanceSix < 0) {
            clearInterval(timeSix);
            $(".daysSix").text("EXPIRED");
        }
    }, 1000);


    let windowHeight = $(window).height();
    $(".slide,.carousel-item").height("100vh");

    var typed = new Typed('.element', {
        strings: ["front end", "back end"],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true
    });
    AOS.init();
    let contSectionOffset = $("#countUp").offset().top;
    $(window).scroll(function () {
        let myWindow = $(window).scrollTop();
        if (myWindow > contSectionOffset) {
            function inc1() {
                let num1 = $("#oneCount").text();
                if (num1 < 200) {
                    num1++;
                    clearInterval(inc1)
                }
                $("#oneCount").text(num1)


            }
            function inc2() {
                let num2 = $("#twoCount").text();
                if (num2 < 2) {
                    num2++;
                    clearInterval(inc2)
                }
                $("#twoCount").text(num2)


            }
            function inc3() {
                let num3 = $("#threeCount").text();
                if (num3 < 200) {
                    num3++;
                    clearInterval(inc3)
                }
                $("#threeCount").text(num3)


            }

            function inc4() {
                let num4 = $("#fourCount").text();
                if (num4 < 200) {
                    num4++;
                    clearInterval(inc4)
                }
                $("#fourCount").text(num4)


            }
            setInterval(inc3, 100);
            setInterval(inc2, 1000);
            setInterval(inc1, 100);
            setInterval(inc4, 100);
        }
    })
})
*/