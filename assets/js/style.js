// code to readjust header according to height
document.addEventListener("DOMContentLoaded", function() {
    // add padding top to show content behind navbar
    cntHt1 = document.querySelector('.full-header').clientHeight;
    cntHt2 = document.querySelector('.fixed-top').clientHeight;
    if (cntHt1 > cntHt2) {
        navbar_height = cntHt1;
    } else {
        navbar_height = cntHt2;
    }

    //to prevent form resubmission issue during student admission
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }

    //navbar_height += document.querySelector('.navbar').clientHeight;
    console.log(navbar_height);
    document.body.style.marginTop = navbar_height + 'px';

    navbar_height = document.querySelector('.full-footer').offsetHeight;
    //navbar_height += document.querySelector('.full-footer').offsetHeight;
    document.body.style.paddingBottom = navbar_height + 'px';

    //code to validate credit/audit courses
    $(function() {
        $("input[name='is_credit']").click(function() {
            if ($("#course_type_1").is(":checked")) {
                $("#credits").removeAttr("disabled");
                $("#credits").focus();
            } else {
                $("#credits").attr("disabled", "disabled");
            }
        });
    });

    $(function() {
        $('#max_see_marks').keyup(function() {
            if ($('#max_see_marks').val().length > 0) {
                $('#min_see_marks').attr("disabled", false);

            }
            if ($('#max_see_marks').val().length == 0) {
                $('#min_see_marks').attr("disabled", true);
            }
        });
    });

    // Scheme Series Validation
    function copy() {
        var coursecode = document.getElementById('course_code'),
            schemeseries = document.getElementById('scheme_series');
        const ccode = coursecode.value;
        var series = "";
        for (var i = 0; i < 2; i++) {
            series = series + ccode.charAt(i);

        }
        schemeseries.value = series;
    }

    //code to load academic calendar
    $(function() {
        // Date Range Picker
        $('input[date-range-picker="datefilter"]').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear',
            },
        })
        $('input[date-range-picker="datefilter"]').on(
            'apply.daterangepicker',
            function(ev, picker) {
                $(this).val(
                    'From ' +
                    picker.startDate.format('YYYY-MM-DD') +
                    ' to ' +
                    picker.endDate.format('YYYY-MM-DD'),
                )
            },
        )
        $('input[date-range-picker="datefilter"]').on(
            'cancel.daterangepicker',
            function(ev, picker) {
                $(this).val('')
            },
        )

        // Single Date Picker
        $('input[date-picker="date"]').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear',
            },
            singleDatePicker: true,
            showDropdowns: false,
            minYear: 1901,
            maxYear: parseInt(moment().format('YYYY'), 10),
        })
        $('input[date-picker="date"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('YYYY-MM-DD'))
        });
    });

    //code to handle camera
    var video = document.querySelector('#camera-stream'),
        image = document.querySelector('#snap'),
        start_camera = document.querySelector('#start-camera'),
        controls = document.querySelector('.controls'),
        take_photo_btn = document.querySelector('#take-photo'),
        delete_photo_btn = document.querySelector('#delete-photo'),
        // download_photo_btn = document.querySelector('#download-photo'),
        error_message = document.querySelector('#error-message');

    // The getUserMedia interface is used for handling camera input.
    // Some browsers need a prefix so here we're covering all the options
    navigator.getMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);


    if (!navigator.getMedia) {
        displayErrorMessage("Your browser doesn't have support for the navigator.getUserMedia interface.");
    } else {

        navigator.getMedia({
                video: {
                    width: 414,
                    height: 571
                }
            },
            // Success Callback
            function(stream) {

                // Create an object URL for the video stream and
                // set it as src of our HTLM video element.
                //video.src = window.URL.createObjectURL(stream);

                video.srcObject = stream;

                // Play the video element to start the stream.
                video.play();
                video.onplay = function() {
                    showVideo();
                };
            },

            // Error Callback
            function(err) {
                displayErrorMessage("There was an error with accessing the camera stream: " + err.name, err);
            }
        );


    }


    start_camera.addEventListener("click", function(e) {

        e.preventDefault();
        // Start video playback manually.
        video.play();
        showVideo();

    });


    take_photo_btn.addEventListener("click", function(e) {

        e.preventDefault();

        var snap = takeSnapshot();

        // Show image. 
        image.setAttribute('value', snap);
        image.classList.add("visible");

        // Enable delete and save buttons
        delete_photo_btn.classList.remove("disabled");
        //download_photo_btn.classList.remove("disabled");

        // Set the href attribute of the download button to the snap url.
        take_photo_btn.href = snap;

        // Pause video playback of stream.
        video.pause();
    });

    delete_photo_btn.addEventListener("click", function(e) {

        e.preventDefault();

        // Hide image.
        image.setAttribute('src', "");
        image.classList.remove("visible");

        // Disable delete and save buttons
        delete_photo_btn.classList.add("disabled");
        // download_photo_btn.classList.add("disabled");

        // Resume playback of stream.
        video.play();

    });

    function dataURItoBlob(dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
    }

    function showVideo() {
        // Display the video stream and the controls.

        hideUI();
        video.classList.add("visible");
        controls.classList.add("visible");
    }


    function takeSnapshot() {
        // Here we're using a trick that involves a hidden canvas element.  

        var hidden_canvas = document.querySelector('canvas'),
            context = hidden_canvas.getContext('2d');

        var width = video.videoWidth,
            height = video.videoHeight;

        //if (width && height) {
        // Setup a canvas with the same dimensions as the video.
        hidden_canvas.width = width;
        hidden_canvas.height = height;

        // Make a copy of the current frame in the video on the canvas.
        context.drawImage(video, 0, 0, width, height);

        // Turn the canvas image into a dataURL that can be used as a src for our photo.
        // var dataURL = hidden_canvas.toDataURL('image/jpeg');
        // var blob = dataURItoBlob(dataURL);
        // var fd = new FormData(document.forms[0]);
        // return blob;
        //asdf asdf
        return hidden_canvas.toDataURL('image/jpeg');

        //}
    }

    function displayErrorMessage(error_msg, error) {
        error = error || "";
        if (error) {
            console.error(error);
        }

        error_message.innerText = error_msg;

        hideUI();
        error_message.classList.add("visible");
    }

    function hideUI() {
        // Helper function for clearing the app UI.
        controls.classList.remove("visible");
        start_camera.classList.remove("visible");
        video.classList.remove("visible");
        snap.classList.remove("visible");
        error_message.classList.remove("visible");

    }

});


function show1(str) {
    document.getElementById('div_capture').style.display = 'inline';
    document.getElementById('div_upload1').style.display = 'none';
    document.getElementById('div_upload2').style.display = 'none';
    document.getElementById('div_uploaded_img').style.display = 'none';
}

function show2(sign) {
    document.getElementById('div_capture').style.display = 'none';
    document.getElementById('div_upload1').style.display = 'inline';
    document.getElementById('div_upload2').style.display = 'inline';
    document.getElementById('div_uploaded_img').style.display = 'block';
}

const changeStatus = (status) => {
    document.getElementById('status').innerHTML = status;
}

const setProgress = (e) => {
    const fr = e.target;
    const loadingPercentage = 100 * e.loaded / e.total;

    document.getElementById('progress-bar').value = loadingPercentage;
}

var image = new Image();

const loaded = (e) => {
    const fr = e.target;
    var result = fr.result;

    image.src = result;
    image.addEventListener('load', function(e) {
        // alert('The image loads - Reload the page to confirm');
        const image = e.target;


        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var w = image.width / 414;
        var h = image.height / 571;
        canvas.width = image.width / w;
        canvas.height = image.height / h;
        context.drawImage(image,
            0,
            0,
            image.width,
            image.height,
            0,
            0,
            canvas.width,
            canvas.height
        );

        document.getElementById("up_snap").value = canvas.toDataURL('image/jpeg');
        document.getElementById("up_profile_pic").src = canvas.toDataURL('image/jpeg');
        document.getElementById('div_uploaded_img').style.display = 'block';
    }, false);

    changeStatus('Finished Loading!');
}

const errorHandler = (e) => {
    changeStatus('Error: ' + e.target.error.name);
}

const processFile = (file) => {
    const fr = new FileReader();

    fr.readAsDataURL(file);
    fr.addEventListener('loadstart', changeStatus('Start Loading'));
    fr.addEventListener('load', changeStatus('Loaded'));
    fr.addEventListener('loadend', loaded);
    fr.addEventListener('progress', setProgress);
    fr.addEventListener('error', errorHandler);
    fr.addEventListener('abort', changeStatus('Interrupted'));

}

function changeEvent(evt) {
    const file = document.getElementById('stImage').files[0];

    if (file) {
        processFile(file);
    }
}

function onlyNumberKey(evt) {

    // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function retrieveImage() {
    alert(document.getElementById('take-photo').value)
}

function FillPostalAddress(f) {
    if (f.st_postal_same_address.checked == true) {
        f.st_postal_address.value = f.st_parent_address.value;
        f.st_postal_address_city.value = f.st_parent_address_city.value;
        f.st_postal_address_district.value = f.st_parent_address_district.value;
        f.st_postal_address_state.value = f.st_parent_address_state.value;
        f.st_postal_address_pincode.value = f.st_parent_address_pincode.value;
    }
}