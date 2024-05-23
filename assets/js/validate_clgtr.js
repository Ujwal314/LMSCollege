$(document).ready(function () {

    var present_date = new Date();
    var d = present_date.getDate();
    var m = present_date.getMonth() + 1; //Month from 0 to 11
    var y = present_date.getFullYear();
    var admDate = y + "-" + ((m < 9) ? "0" + m : m) + "-" + ((d < 9) ? "0" + d : d);

    $('#ug_pacad_12th_pcm_total_marks').focus(function () {
        var totalmarks_12th = parseInt($('#ug_pacad_12th_physics_marks').val()) + parseInt($('#ug_pacad_12th_chemistry_marks').val()) + parseInt($('#ug_pacad_12th_maths_marks').val());
        $('#ug_pacad_12th_pcm_total_marks').val(totalmarks_12th);
    });

    $('#ug_pacad_12th_pcm_percentage').focus(function () {
        $('#ug_pacad_12th_pcm_percentage').val(parseFloat($('#ug_pacad_12th_pcm_total_marks').val() / 3.0).toFixed(2));
    });

    $('#ug_pacad_dip_total_marks').focus(function () {
        var totalmarks_dip = parseInt($('#ug_pacad_dip_5th_marks').val()) + parseInt($('#ug_pacad_dip_5th_marks').val());
        $('#ug_pacad_dip_total_marks').val(totalmarks_dip);
    });

    $("input[name='st_adm_quota']").click(function () {
        var st_adm_quota = this.value
        if (st_adm_quota == 1) {
            $("#order_copy_dcet").prop("checked", true);
        }

        if (st_adm_quota == 2) {
            $("#order_copy_mgmt").prop("checked", true);
        }
    });
    $('#btn_photo_details').click(function () {
        if ($("#snap").val() != "" || $('#stImage').get(0).files.length != 0 || $('#st_photo').prop('src') != undefined) {
            $(window).scrollTop(0);
            $('#list_photo_details').removeClass('active active_tab1');
            $('#list_photo_details').removeAttr('href data-toggle');
            $('#photo_details').removeClass('active');
            $('#list_photo_details').addClass('inactive_tab1');
            $('#list_login_details').removeClass('inactive_tab1');
            $('#list_login_details').addClass('active_tab1 active');
            $('#list_login_details').attr('href', '#personal_details');
            $('#list_login_details').attr('data-toggle', 'tab');
            $('#login_details').addClass('active show');
        }
        else {
            alert("Please capture/upload the image")
        }
    });

    $('#btn_login_details').click(function () {
        $(window).scrollTop(0);

        if ($('#st_year_of_adm option:selected').text().length > 8) {
            alert("Please Select Year of Admission");
            $('#st_year_of_adm').addClass('has-error');
            return false;
        }
        else
            $('#st_year_of_adm').removeClass('has-error');

        if ($('#st_acad_year option:selected').text().length != 7) {
            alert("Please select Academic Year");
            $('#st_acad_year').addClass('has-error');
            return false;
        }
        else
            $('#st_acad_year').removeClass('has-error');

        if ($.trim($('#adm_date').val()).length == 0) {
            alert('Admission Date is required');
            $('#adm_date').addClass('has-error');
            return false;
        }
        else if ($.trim($('#adm_date').val()) > admDate) {
            alert('Please enter the valid admission date');
            $('#adm_date').addClass('has-error');
            return false;
        }
        else {
            $('#adm_date').removeClass('has-error');
        }

        var error_st_name = '';
        if ($.trim($('#st_name').val()).length == 0) {
            error_st_name = 'Name of the applicant is required';
            $('#error_st_name').text(error_st_name);
            $('#st_name').addClass('has-error');
            return false;
        }
        else {
            error_st_name = '';
            $('#error_st_name').text('');
            $('#st_name').removeClass('has-error');
        }

        if ($('#st_branch_applied option:selected').text() == "--Select Branch--") {
            alert("Please select Branch");
            $('#st_branch_applied').addClass('has-error');
            return false;
        }
        else
            $('#st_branch_applied').removeClass('has-error');

        if ($('input[type=radio][name=st_adm_quota]:checked').length == 0) {
            alert("Please select Admission Quota");
            $('#error_st_admission_quota').text('\nPlease select admission quota');
            return false;
        }
        else
            $('#error_st_admission_quota').text('');
        var strDate = (y - 18) + "-" + ((m < 9) ? "0" + m : m) + "-" + ((d < 9) ? "0" + d : d);
        if ($.trim($('#st_dob').val()).length == 0) {
            alert('Date of Birth is required');
            $('#st_dob').addClass('has-error');
            return false;
        }
        else if ($.trim($('#st_dob').val()) > strDate) {
            alert('Please enter the valid date of birth');
            $('#st_dob').addClass('has-error');
            return false;
        }
        else {
            $('#st_dob').removeClass('has-error');
        }

        if ($('input[type=radio][name=st_gender]:checked').length == 0) {
            alert("Please select Gender");
            $('#error_st_gender').text("Please select Gender");
            return false;
        }
        else
            $('#error_st_gender').text('');

        if ($('input[type=radio][name=st_locality]:checked').length == 0) {
            alert("Please select Locality as Urban or Rural");
            $('#error_st_locality').text("Please select Locality as Urban or Rural");
            return false;
        }
        else
            $('#error_st_locality').text('');

        if ($('#st_religion option:selected').text() == "--Select Religion--") {
            alert("Please select Religion");
            $('#st_religion').addClass('has-error');
            return false;
        }
        else
            $('#st_religion').removeClass('has-error');

        var error_st_caste = '';
        if ($.trim($('#st_caste').val()).length == 0) {
            error_st_caste = 'Caste is required';
            $('#error_st_caste').text(error_st_caste);
            $('#st_caste').addClass('has-error');
            return false;
        }
        else {
            error_st_caste = '';
            $('#error_st_caste').text(error_st_caste);
            $('#st_caste').removeClass('has-error');
        }

        if ($('input[type=radio][name=st_category]:checked').length == 0) {
            alert("Please select your Category");
            $('#error_st_category').text("Please select a category");
            return false;
        }
        else
            $('#error_st_category').text('');

        var error_st_mobile_no = '';
        if ($.trim($('#st_mobile_no').val()).length == 0) {
            error_st_mobile_no = 'Mobile No. is required';
            $('#error_st_mobile_no').text(error_st_mobile_no);
            $('#st_mobile_no').addClass('has-error');
            return false;
        }
        else if ($.trim($('#st_mobile_no').val()).length != 10) {
            error_st_mobile_no = 'Valid Mobile No. is required';
            $('#error_st_mobile_no').text(error_st_mobile_no);
            $('#st_mobile_no').addClass('has-error');
            return false;
        }
        else {
            error_st_mobile_no = '';
            $('#error_st_mobile_no').text(error_st_mobile_no);
            $('#st_mobile_no').removeClass('has-error');
        }


        /* if(error_adm_date != '' || error_st_name != '' || error_st_caste != '' || error_st_mobile_no != '')
           {
           return false;
           } 
           //  else
           // {*/
        $('#list_login_details').removeClass('active active_tab1');
        $('#list_login_details').removeAttr('href data-toggle');
        $('#login_details').removeClass('active');
        $('#list_login_details').addClass('inactive_tab1');
        $('#list_personal_details').removeClass('inactive_tab1');
        $('#list_personal_details').addClass('active_tab1 active');
        $('#list_personal_details').attr('href', '#personal_details');
        $('#list_personal_details').attr('data-toggle', 'tab');
        $('#personal_details').addClass('active show');
        //}
    });

    $('#previous_btn_login_details').click(function () {
        $(window).scrollTop(0);
        $('#list_login_details').removeClass('active active_tab1');
        $('#list_login_details').removeAttr('href data-toggle');
        $('#login_details').removeClass('active show');
        $('#list_login_details').addClass('inactive_tab1');
        $('#list_photo_details').removeClass('inactive_tab1');
        $('#list_photo_details').addClass('active_tab1 active');
        $('#list_photo_details').attr('href', '#login_details');
        $('#list_photo_details').attr('data-toggle', 'tab');
        $('#photo_details').addClass('active show');
    });

    $('#previous_btn_personal_details').click(function () {
        $(window).scrollTop(0);
        $('#list_personal_details').removeClass('active active_tab1');
        $('#list_personal_details').removeAttr('href data-toggle');
        $('#personal_details').removeClass('active show');
        $('#list_personal_details').addClass('inactive_tab1');
        $('#list_login_details').removeClass('inactive_tab1');
        $('#list_login_details').addClass('active_tab1 active');
        $('#list_login_details').attr('href', '#login_details');
        $('#list_login_details').attr('data-toggle', 'tab');
        $('#login_details').addClass('active show');
    });

    //Personal Details - Next Button
    $('#btn_personal_details').click(function () {
        $(window).scrollTop(0);
        var error_st_father_name = '';
        if ($.trim($('#st_father_name').val()).length == 0) {
            error_st_father_name = 'Father name is required';
            $('#error_st_father_name').text(error_st_father_name);
            $('#st_father_name').addClass('has-error');
        }
        else {
            $('#error_st_father_name').text(error_st_father_name);
            $('#st_father_name').removeClass('has-error');
        }

        var error_st_mother_name = '';
        if ($.trim($('#st_mother_name').val()).length == 0) {
            error_st_mother_name = 'Mother name is required';
            $('#error_st_mother_name').text(error_st_mother_name);
            $('#st_mother_name').addClass('has-error');
        }
        else {
            $('#error_st_mother_name').text(error_st_mother_name);
            $('#st_mother_name').removeClass('has-error');
        }

        var error_st_father_mobile_no = '';
        if ($.trim($('#st_father_mobile_no').val()).length == 0) {
            error_st_father_mobile_no = "Father's Phone Number is required";
            $('#error_st_father_mobile_no').text(error_st_father_mobile_no);
            $('#st_father_mobile_no').addClass('has-error');
        }
        else if ($.trim($('#st_father_mobile_no').val()).length != 10) {
            error_st_father_mobile_no = "Please enter Valid Phone Number";
            $('#error_st_father_mobile_no').text(error_st_father_mobile_no);
            $('#st_father_mobile_no').addClass('has-error');
        }
        else {
            $('#error_st_father_mobile_no').text(error_st_father_mobile_no);
            $('#st_father_mobile_no').removeClass('has-error');
        }

        var error_st_father_income = '';
        if ($.trim($('#st_father_income').val()).length == 0) {
            error_st_father_income = "Income is required";
            $('#error_st_father_income').text(error_st_father_income);
            $('#st_father_income').addClass('has-error');
        }
        else {
            $('#error_st_father_income').text(error_st_father_income);
            $('#st_father_income').removeClass('has-error');
        }

        var error_st_parent_address = '';
        if ($.trim($('#st_parent_address').val()).length == 0) {
            error_st_parent_address = 'Permanent Address is required';
            $('#error_st_parent_address').text(error_st_parent_address);
            $('#st_parent_address').addClass('has-error');
        }
        else {
            $('#error_st_parent_address').text(error_st_parent_address);
            $('#st_parent_address').removeClass('has-error');
        }

        var error_st_parent_address_city = '';
        if ($.trim($('#st_parent_address_city').val()).length == 0) {
            error_st_parent_address_city = 'City is required';
            $('#error_st_parent_address_city').text(error_st_parent_address_city);
            $('#st_parent_address_city').addClass('has-error');
        }
        else {
            $('#error_st_parent_address_city').text(error_st_parent_address_city);
            $('#st_parent_address_city').removeClass('has-error');
        }

        var error_st_parent_address_district = '';
        if ($.trim($('#st_parent_address_district').val()).length == 0) {
            error_st_parent_address_district = 'District is required';
            $('#error_st_parent_address_district').text(error_st_parent_address_district);
            $('#st_parent_address_district').addClass('has-error');
        }
        else {
            $('#error_st_parent_address_district').text(error_st_parent_address_district);
            $('#st_parent_address_district').removeClass('has-error');
        }

        if ($('#st_parent_address_state option:selected').text() == "--Select State--") {
            alert("Please select State for Permanent Address");
            $('#st_parent_address_state').addClass('has-error');
            return false;
        }
        else
            $('#st_parent_address_state').removeClass('has-error');

        var error_st_parent_address_pincode = '';
        if ($.trim($('#st_parent_address_pincode').val()).length == 0) {
            error_st_parent_address_pincode = 'Pincode is required';
            $('#error_st_parent_address_pincode').text(error_st_parent_address_pincode);
            $('#st_parent_address_pincode').addClass('has-error');
        }
        if ($.trim($('#st_parent_address_pincode').val()).length != 6) {
            error_st_parent_address_pincode = 'Valid Pincode is required';
            $('#error_st_parent_address_pincode').text(error_st_parent_address_pincode);
            $('#st_parent_address_pincode').addClass('has-error');
        }
        else {
            $('#error_st_parent_address_pincode').text(error_st_parent_address_pincode);
            $('#st_parent_address_pincode').removeClass('has-error');
        }

        $("#st_postal_same_address").click(function () {
            $("#st_postal_address").val($("#st_parent_address").val());
            $("#st_postal_address_city").val($("#st_parent_address_city").val());
            $("#st_postal_address_district").val($("#st_parent_address_district").val());
            $("#st_postal_address_state").val($("#st_parent_address_state").val());
            $("#st_postal_address_pincode").val($("#st_parent_address_pincode").val());
        }
        );
        var error_st_postal_address = '';
        if ($.trim($('#st_postal_address').val()).length == 0) {
            error_st_postal_address = 'Postal Address is required';
            $('#error_st_postal_address').text(error_st_postal_address);
            $('#st_postal_address').addClass('has-error');
        }
        else {
            $('#error_st_postal_address').text(error_st_postal_address);
            $('#st_postal_address').removeClass('has-error');
        }

        var error_st_postal_address_city = '';
        if ($.trim($('#st_postal_address_city').val()).length == 0) {
            error_st_postal_address_city = 'City is required';
            $('#error_st_postal_address_city').text(error_st_postal_address_city);
            $('#st_postal_address_city').addClass('has-error');
        }
        else {
            $('#error_st_postal_address_city').text(error_st_postal_address_city);
            $('#st_postal_address_city').removeClass('has-error');
        }

        var error_st_postal_address_district = '';
        if ($.trim($('#st_postal_address_district').val()).length == 0) {
            error_st_postal_address_district = 'District is required';
            $('#error_st_postal_address_district').text(error_st_postal_address_district);
            $('#st_postal_address_district').addClass('has-error');
        }
        else {
            $('#error_st_postal_address_district').text(error_st_postal_address_district);
            $('#st_postal_address_district').removeClass('has-error');
        }

        if ($('#st_postal_address_state option:selected').text() == "--Select State--") {
            alert("Please select State for Postal Address");
            $('#st_postal_address_state').addClass('has-error');
            return false;
        }
        else
            $('#st_postal_address_state').removeClass('has-error');

        var error_st_postal_address_pincode = '';
        if ($.trim($('#st_postal_address_pincode').val()).length == 0) {
            error_st_postal_address_pincode = 'Pincode is required';
            $('#error_st_postal_address_pincode').text(error_st_postal_address_pincode);
            $('#st_postal_address_pincode').addClass('has-error');
        }
        if ($.trim($('#st_postal_address_pincode').val()).length != 6) {
            error_st_postal_address_pincode = 'Valid Pincode is required';
            $('#error_st_postal_address_pincode').text(error_st_postal_address_pincode);
            $('#st_postal_address_pincode').addClass('has-error');
        }
        else {
            $('#error_st_postal_address_pincode').text(error_st_postal_address_pincode);
            $('#st_postal_address_pincode').removeClass('has-error');
        }
        //if( error_st_father_name != '' || error_st_mother_name != '' || error_st_father_mobile_no != '' ||  error_st_parent_address != '' || error_st_postal_address != '')
        if (error_st_father_name != '' || error_st_mother_name != '' || error_st_father_mobile_no != '' || error_st_father_income != '') {
            return false;
        }
        if (error_st_parent_address != '' || error_st_parent_address_city != '' || error_st_parent_address_district != '' || error_st_parent_address_pincode != '') {
            return false;
        }
        if (error_st_postal_address != '' || error_st_postal_address_city != '' || error_st_postal_address_district != '' || error_st_postal_address_pincode != '') {
            return false;
        }
        //add some more 
        else {
            $('#list_personal_details').removeClass('active active_tab1');
            $('#list_personal_details').removeAttr('href data-toggle');
            $('#personal_details').removeClass('active');
            $('#list_personal_details').addClass('inactive_tab1');
            $('#list_academic_details').removeClass('inactive_tab1');
            $('#list_academic_details').addClass('active_tab1 active');
            $('#list_academic_details').attr('href', '#academic_details');
            $('#list_academic_details').attr('data-toggle', 'tab');
            $('#academic_details').addClass('active show');
        }
    });

    $('#previous_btn_academic_details').click(function () {
        $(window).scrollTop(0);
        $('#list_academic_details').removeClass('active active_tab1');
        $('#list_academic_details').removeAttr('href data-toggle');
        $('#academic_details').removeClass('active show');
        $('#list_academic_details').addClass('inactive_tab1');
        $('#list_personal_details').removeClass('inactive_tab1');
        $('#list_personal_details').addClass('active_tab1 active');
        $('#list_personal_details').attr('href', '#personal_details');
        $('#list_personal_details').attr('data-toggle', 'tab');
        $('#personal_details').addClass('active show');
    });

    //Academic Details - Next
    $('#btn_academic_details').click(function () {
        $(window).scrollTop(0);

        var error_ug_pacad_10th_board = '';
        if ($.trim($('#ug_pacad_10th_board').val()).length == 0) {
            error_ug_pacad_10th_board = 'Class-10 Board name is required';
            $('#error_ug_pacad_10th_board').text(error_ug_pacad_10th_board);
            $('#ug_pacad_10th_board').addClass('has-error');
        }
        else {
            $('#error_ug_pacad_10th_board').text(error_ug_pacad_10th_board);
            $('#ug_pacad_10th_board').removeClass('has-error');
        }

        var error_ug_pacad_10th_schoolname = '';
        if ($.trim($('#ug_pacad_10th_schoolname').val()).length == 0) {
            error_ug_pacad_10th_schoolname = 'Class-10 School Name is required';
            $('#error_ug_pacad_10th_schoolname').text(error_ug_pacad_10th_schoolname);
            $('#ug_pacad_10th_schoolname').addClass('has-error');
        }
        else {
            $('#error_ug_pacad_10th_schoolname').text(error_ug_pacad_10th_schoolname);
            $('#ug_pacad_10th_schoolname').removeClass('has-error');
        }

        if ($('#ug_pacad_10th_pass_month option:selected').text() == "--Select Month--") {
            alert("Please select Month of Passing");
            $('#ug_pacad_10th_pass_month').addClass('has-error');
            return false;
        }
        else
            $('#ug_pacad_10th_pass_month').removeClass('has-error');

        var error_ug_pacad_10th_pass_year = '';
        if ($.trim($('#ug_pacad_10th_pass_year').val()).length == 0) {
            error_ug_pacad_10th_pass_year = '10th Pass Year is required';
            $('#error_ug_pacad_10th_pass_year').text(error_st_mobile_no);
            $('#ug_pacad_10th_pass_year').addClass('has-error');
            return false;
        }

        else if ($.trim($('#ug_pacad_10th_pass_year').val()).length != 4) {
            error_ug_pacad_10th_pass_year = 'Enter year in the YYYY format';
            $('#error_ug_pacad_10th_pass_year').text(error_ug_pacad_10th_pass_year);
            $('#ug_pacad_10th_pass_year').addClass('has-error');
            return false;
        }
        else {
            error_ug_pacad_10th_pass_year = '';
            $('#error_ug_pacad_10th_pass_year').text(error_ug_pacad_10th_pass_year);
            $('#ug_pacad_10th_pass_year').removeClass('has-error');
        }

        if ($('#ug_pacad_10th_pass_state option:selected').text() == "--Select State--") {
            alert("Please select state of Passing");
            $('#ug_pacad_10th_pass_state').addClass('has-error');
            return false;
        }
        else
            $('#ug_pacad_10th_pass_state').removeClass('has-error');

        var error_ug_pacad_10th_medium = '';
        if ($.trim($('#ug_pacad_10th_medium').val()).length == 0) {
            error_ug_pacad_10th_medium = 'Class-10 Medium of Instruction is required';
            $('#error_ug_pacad_10th_medium').text(error_ug_pacad_10th_medium);
            $('#ug_pacad_10th_medium').addClass('has-error');
        }
        else {
            $('#error_ug_pacad_10th_medium').text(error_ug_pacad_10th_medium);
            $('#ug_pacad_10th_medium').removeClass('has-error');
        }

        var error_ug_pacad_10th_reg_no = '';
        if ($.trim($('#ug_pacad_10th_reg_no').val()).length == 0) {
            error_ug_pacad_10th_reg_no = 'Class-10 Registration Number is required';
            $('#error_ug_pacad_10th_reg_no').text(error_ug_pacad_10th_reg_no);
            $('#ug_pacad_10th_reg_no').addClass('has-error');
        }
        else {
            $('#error_ug_pacad_10th_reg_no').text(error_ug_pacad_10th_reg_no);
            $('#ug_pacad_10th_reg_no').removeClass('has-error');
        }
        var error_ug_pacad_10th_total_marks_cgpa = '';
        if ($.trim($('#ug_pacad_10th_total_marks_cgpa').val()).length == 0) {
            error_ug_pacad_10th_total_marks_cgpa = 'Class-10 Total Marks / CGPA is required';
            $('#error_ug_pacad_10th_total_marks_cgpa').text(error_ug_pacad_10th_total_marks_cgpa);
            $('#ug_pacad_10th_total_marks_cgpa').addClass('has-error');
        }
        else {
            $('#error_ug_pacad_10th_total_marks_cgpa').text(error_ug_pacad_10th_total_marks_cgpa);
            $('#ug_pacad_10th_total_marks_cgpa').removeClass('has-error');
        }
        var error_ug_pacad_10th_percentage_cgpa = '';
        if ($.trim($('#ug_pacad_10th_total_marks_cgpa').val()).length == 0) {
            error_ug_pacad_10th_percentage_cgpa = 'Class-10 Percentage / CGPA is required';
            $('#error_ug_pacad_10th_percentage_cgpa').text(error_ug_pacad_10th_percentage_cgpa);
            $('#ug_pacad_10th_percentage_cgpa').addClass('has-error');
        }
        else {
            $('#error_ug_pacad_10th_percentage_cgpa').text(error_ug_pacad_10th_percentage_cgpa);
            $('#ug_pacad_10th_percentage_cgpa').removeClass('has-error');
        }

        // var error_ug_pacad_dip_board = '';
        // if ($.trim($('#ug_pacad_dip_board').val()).length == 0) {
        //     error_ug_pacad_dip_board = 'Diploma Board name is required';
        //     $('#error_ug_pacad_dip_board').text(error_ug_pacad_dip_board);
        //     $('#ug_ug_pacad_dip_board').addClass('has-error');
        // }
        // else {
        //     $('#error_ug_pacad_dip_board').text(error_ug_pacad_dip_board);
        //     $('#ug_ug_pacad_dip_board').removeClass('has-error');
        // }

        // var error_ug_pacad_dip_schoolname = '';
        // if ($.trim($('#ug_pacad_dip_schoolname').val()).length == 0) {
        //     error_ug_pacad_dip_schoolname = 'Diploma College Name is required';
        //     $('#error_ug_pacad_dip_schoolname').text(error_ug_pacad_dip_schoolname);
        //     $('#ug_pacad_dip_schoolname').addClass('has-error');
        // }
        // else {
        //     $('#error_ug_pacad_dip_schoolname').text(error_ug_pacad_dip_schoolname);
        //     $('#ug_pacad_dip_schoolname').removeClass('has-error');
        // }

        // if ($('#ug_pacad_dip_pass_month option:selected').text() == "--Select Month--") {
        //     alert("Please select Month of Passing");
        //     $('#ug_pacad_dip_pass_month').addClass('has-error');
        //     return false;
        // }
        // else
        //     $('#ug_pacad_dip_pass_month').removeClass('has-error');

        // var error_ug_pacad_dip_pass_year = '';
        // if ($.trim($('#ug_pacad_dip_pass_year').val()).length == 0) {
        //     error_ug_pacad_dip_pass_year = 'Diploma Pass Year is required';
        //     $('#error_ug_pacad_dip_pass_year').text(error_ug_pacad_dip_pass_year);
        //     $('#ug_pacad_dip_pass_year').addClass('has-error');
        //     return false;
        // }

        // else if ($.trim($('#ug_pacad_dip_pass_year').val()).length != 4) {
        //     error_ug_pacad_dip_pass_year = 'Enter year in the YYYY format';
        //     $('#error_ug_pacad_dip_pass_year').text(error_ug_pacad_dip_pass_year);
        //     $('#ug_pacad_dip_pass_year').addClass('has-error');
        //     return false;
        // }
        // else {
        //     error_ug_pacad_dip_pass_year = '';
        //     $('#error_ug_pacad_dip_pass_year').text(error_ug_pacad_dip_pass_year);
        //     $('#ug_pacad_dip_pass_year').removeClass('has-error');
        // }

        // if ($('#ug_pacad_dip_pass_state option:selected').text() == "--Select State--") {
        //     alert("Please select state of Passing");
        //     $('#ug_pacad_dip_pass_state').addClass('has-error');
        //     return false;
        // }
        // else
        //     $('#ug_pacad_dip_pass_state').removeClass('has-error');

        // var error_ug_pacad_dip_medium = '';
        // if ($.trim($('#ug_pacad_dip_medium').val()).length == 0) {
        //     error_ug_pacad_dip_medium = 'Diploma Medium of Instruction is required';
        //     $('#error_ug_pacad_dip_medium').text(error_ug_pacad_dip_medium);
        //     $('#ug_pacad_dip_medium').addClass('has-error');
        // }
        // else {
        //     $('#error_ug_pacad_dip_medium').text(error_ug_pacad_dip_medium);
        //     $('#ug_pacad_dip_medium').removeClass('has-error');
        // }

        // var error_ug_pacad_dip_reg_no = '';
        // if ($.trim($('#ug_pacad_dip_reg_no').val()).length == 0) {
        //     error_ug_pacad_dip_reg_no = 'Class-12 / PUC Registration Number is required';
        //     $('#error_ug_pacad_dip_reg_no').text(error_ug_pacad_dip_reg_no);
        //     $('#ug_pacad_dip_reg_no').addClass('has-error');
        // }
        // else {
        //     $('#error_ug_pacad_dip_reg_no').text(error_ug_pacad_dip_reg_no);
        //     $('#ug_pacad_dip_reg_no').removeClass('has-error');
        // }


        // var error_ug_pacad_dip_5th_marks = '';
        // if ($.trim($('#ug_pacad_dip_5th_marks').val()).length == 0) {
        //     error_ug_pacad_dip_5th_marks = 'Diploma 5th Sem Marks is required';
        //     $('#error_ug_pacad_dip_5th_marks').text(error_ug_pacad_dip_5th_marks);
        //     $('#ug_pacad_dip_5th_marks').addClass('has-error');
        // }
        // else {
        //     $('#error_ug_pacad_dip_5th_marks').text(error_ug_pacad_dip_5th_marks);
        //     $('#ug_pacad_dip_5th_marks').removeClass('has-error');
        // }

        // var error_ug_pacad_dip_6th_marks = '';
        // if ($.trim($('#ug_pacad_dip_6th_marks').val()).length == 0) {
        //     error_ug_pacad_dip_6th_marks = 'Diploma 6th Sem Marks is required';
        //     $('#error_ug_pacad_dip_6th_marks').text(error_ug_pacad_dip_6th_marks);
        //     $('#ug_pacad_dip_6th_marks').addClass('has-error');
        // }
        // else {
        //     $('#error_ug_pacad_dip_6th_marks').text(error_ug_pacad_dip_6th_marks);
        //     $('#ug_pacad_dip_6th_marks').removeClass('has-error');
        // }

        // var error_ug_pacad_dip_total_marks = '';
        // if ($.trim($('#ug_pacad_dip_total_marks').val()).length == 0) {
        //     error_ug_pacad_dip_total_marks = 'Diploma Total Score is required';
        //     $('#error_ug_pacad_dip_total_marks').text(error_ug_pacad_dip_total_marks);
        //     $('#ug_pacad_dip_total_marks').addClass('has-error');
        // }
        // else {
        //     $('#error_ug_pacad_dip_total_marks').text(error_ug_pacad_dip_total_marks);
        //     $('#ug_pacad_dip_total_marks').removeClass('has-error');
        // }

        // var error_ug_pacad_total_percentage = '';
        // if ($.trim($('#ug_pacad_total_percentage').val()).length == 0) {
        //     error_ug_pacad_total_percentage = 'Diploma Percentage is required';
        //     $('#error_ug_pacad_total_percentage').text(error_ug_pacad_total_percentage);
        //     $('#ug_pacad_total_percentage').addClass('has-error');
        // }
        // else {
        //     $('#error_ug_pacad_total_percentage').text(error_ug_pacad_total_percentage);
        //     $('#ug_pacad_total_percentage').removeClass('has-error');
        // }


        var error_ug_prv_clgtr_name = '';
        if ($.trim($('#ug_prv_clgtr_name').val()).length == 0) {
            error_ug_prv_clgtr_name = 'Previous College name is missing';
            $('#error_ug_prv_clgtr_name').text(error_ug_prv_clgtr_name);
            $('#ug_prv_clgtr_name').addClass('has-error');
        }
        else {
            $('#error_ug_prv_clgtr_name').text(error_ug_prv_clgtr_name);
            $('#ug_prv_clgtr_name').removeClass('has-error');
        }

        var error_ug_prv_clgtr_crd = '';
        if ($.trim($('#ug_prv_clgtr_crd').val()).length == 0) {
            error_ug_prv_clgtr_crd = 'Previous College credits earned is missing';
            $('#error_ug_prv_clgtr_crd').text(error_ug_prv_clgtr_crd);
            $('#ug_prv_clgtr_crd').addClass('has-error');
        }
        else {
            $('#error_ug_prv_clgtr_crd').text(error_ug_prv_clgtr_crd);
            $('#ug_ug_prv_clgtr_crd').removeClass('has-error');
        }

        var error_ug_prv_clgtr_crd_balance = '';
        if ($.trim($('#ug_prv_clgtr_crd_balance').val()).length == 0) {
            error_ug_prv_clgtr_crd_balance = 'Credits remaining is missing';
            $('#error_ug_prv_clgtr_crd_balance').text(error_ug_prv_clgtr_crd_balance);
            $('#ug_prv_clgtr_crd_balance').addClass('has-error');
        }
        else {
            $('#error_ug_prv_clgtr_crd_balance').text(error_ug_prv_clgtr_crd_balance);
            $('#ug_prv_clgtr_crd_balance').removeClass('has-error');
        }

        var error_ug_prv_clgtr_cur_cgpa = '';
        if ($.trim($('#ug_prv_clgtr_cur_cgpa').val()).length == 0) {
            error_ug_prv_clgtr_cur_cgpa = 'Current CGPA is missing';
            $('#error_ug_prv_clgtr_cur_cgpa').text(error_ug_prv_clgtr_cur_cgpa);
            $('#ug_prv_clgtr_cur_cgpa').addClass('has-error');
        }
        else {
            $('#error_ug_prv_clgtr_cur_cgpa').text(error_ug_prv_clgtr_cur_cgpa);
            $('#ug_prv_clgtr_cur_cgpa').removeClass('has-error');
        }

        if (error_ug_pacad_10th_board != '' || error_ug_pacad_10th_schoolname != '' || error_ug_pacad_10th_medium != '' || error_ug_pacad_10th_reg_no != '' || error_ug_pacad_10th_total_marks_cgpa != '' || error_ug_pacad_10th_percentage_cgpa != '') {
            return false;
        }
        if (error_ug_prv_clgtr_name != '' || error_ug_prv_clgtr_crd != '' || error_ug_prv_clgtr_crd_balance != '' || error_ug_prv_clgtr_cur_cgpa != '') {
            return false;
        }
        // if (error_ug_pacad_dip_board != '' || error_ug_pacad_dip_schoolname != '' || error_ug_pacad_dip_medium != '' || error_ug_pacad_dip_reg_no != '' || error_ug_pacad_dip_5th_marks != '' || error_ug_pacad_dip_6th_marks != '' || error_ug_pacad_dip_total_marks != '' || error_ug_pacad_total_percentage != '') {
        //     return false;
        // }
        /* if( error_ug_pacad_12th_physics_marks  != '' || error_ug_pacad_12th_chemistry_marks  != '' || error_ug_pacad_12th_maths_marks  != '' || error_ug_pacad_12th_pcm_total_marks != '' || error_ug_pacad_12th_pcm_percentage != '')
         {
           return false;
         } */
        else {
            $('#list_academic_details').removeClass('active active_tab1');
            $('#list_academic_details').removeAttr('href data-toggle');
            $('#academic_details').removeClass('active');
            $('#list_academic_details').addClass('inactive_tab1');
            $('#list_admission_details').removeClass('inactive_tab1');
            $('#list_admission_details').addClass('active_tab1 active');
            $('#list_admission_details').attr('href', '#admission_details');
            $('#list_admission_details').attr('data-toggle', 'tab');
            $('#admission_details').addClass('active show');
        }
    });

    $('#previous_btn_admission_details').click(function () {
        $(window).scrollTop(0);
        $('#list_admission_details').removeClass('active active_tab1');
        $('#list_admission_details').removeAttr('href data-toggle');
        $('#admission_details').removeClass('active show');
        $('#list_admission_details').addClass('inactive_tab1');
        $('#list_academic_details').removeClass('inactive_tab1');
        $('#list_academic_details').addClass('active_tab1 active');
        $('#list_academic_details').attr('href', '#academic_details');
        $('#list_academic_details').attr('data-toggle', 'tab');
        $('#academic_details').addClass('active show');
    });

    $('#btn_admission_details').click(function () {

        var error_clg_trns_exam_type = '';
        alert("register button clicked");
        if ($('input[type=radio][name=clg_trns_exam_type]:checked').length == 0) {
            error_clg_trns_exam_type = "Order Copy is required";
            alert("Please select Allotment Order Copy");
            return false;
        }
        var error_exam_adm_ord_no = '';
        var error_dip_dcet_no = '';
        var error_dip_rank = '';
        var error_dip_cat_claimed = '';
        var error_dip_cat_allotted = '';
        var error_dip_allot_date = '';
        var error_dip_fees_paid = '';
        var error_dip_college_fees_paid = '';
        var error_dip_total_fees_paid = '';
        var error_dip_challan_date = '';
        var error_dip_challan_no = '';
        if ($("#exam_adm_ord_no").is(":checked")) {
            if ($.trim($('#exam_adm_ord_no').val()).length == 0) {
                //alert("Admission order number is required.");
                error_exam_adm_ord_no = 'Admission order number is required.';
                $('#error_exam_adm_ord_no').text(error_exam_adm_ord_no);
                $('#exam_adm_ord_no').addClass('has-error');
                //return false;
            }
            else {
                error_exam_adm_ord_no = '';
                $('#error_exam_adm_ord_no').text(error_exam_adm_ord_no);
                $('#exam_adm_ord_no').removeClass('has-error');
            }
            if ($.trim($('#exam_rgd_no').val()).length == 0) {
                //alert("DCET Number is required");
                error_exam_rgd_no = 'DCET is required.';
                $('#error_exam_rgd_no').text(error_exam_rgd_no);
                $('#exam_rgd_no').addClass('has-error');
                //return false;
            }
            else {
                error_exam_rgd_no = '';
                $('#error_exam_rgd_no').text(error_exam_rgd_no);
                $('#exam_rgd_no').removeClass('has-error');
            }

            if ($.trim($('#exam_rank').val()).length == 0) {
                //alert("DCET Rank is required");
                error_exam_rank = 'DCET Rank is required.';
                $('#error_exam_rank').text(error_exam_rank);
                $('#exam_rank').addClass('has-error');
                //return false;
            }
            else {
                error_dip_rank = '';
                $('#error_exam_rank').text(error_exam_rank);
                $('#exam_rank').removeClass('has-error');
            }
            if ($.trim($('#exam_cat_claimed').val()).length == 0) {
                //alert("Claimed Category is required");
                error_exam_cat_claimed = 'Claimed Category is required';
                $('#error_exam_cat_claimed').text(error_exam_cat_claimed);
                $('#exam_cat_claimed').addClass('has-error');
                //return false;
            }
            else {
                error_dip_cat_claimed = '';

                $('#error_dip_cat_claimed').text(error_dip_cat_claimed);
                $('#dip_cat_claimed').removeClass('has-error');
            }
            if ($.trim($('#dip_exam_cat_allot').val()).length == 0) {
                //alert("Allotted Category is required");
                error_exam_cat_allot = 'Allotted Category is required';
                $('#error_exam_cat_allot').text(error_exam_cat_allot);
                $('#dip_exam_cat_allot').addClass('has-error');
                //return false;
            }
            else {
                error_dip_cat_allotted = '';
                $('#error_exam_cat_allot').text(error_dip_cat_allotted);
                $('#dip_exam_cat_allot').removeClass('has-error');
            }
            if ($.trim($('#exam_allot_date').val()).length == 0) {
                //alert("Allotment Date is required");
                error_exam_allot_date = 'Allotment Date is required';
                $('#error_exam_allot_date').text(error_exam_allot_date);
                $('#exam_allot_date').addClass('has-error');
                //return false;
            }
            else if ($.trim($('#exam_allot_date').val()) > admDate) {
                error_exam_allot_date = 'Valid Allotment Date is required';
                $('#error_exam_allot_date').text(error_exam_allot_date);
                $('#exam_allot_date').addClass('has-error');
                //return false;
            }
            else {
                error_dip_allot_date = '';
                $('#error_exam_allot_date').text(error_dip_allot_date);
                $('#exam_allot_date').removeClass('has-error');
            }

            if ($.trim($('#exam_fee_paid').val()).length == 0) {
                //alert("Fees paid at KEA is required");
                error_exam_fee_paid = 'Fees paid at COMEDK is required';
                $('#error_exam_fee_paid').text(error_exam_fee_paid);
                $('#exam_fee_paid').addClass('has-error');
                //return false;
            }
            else {
                error_dip_fees_paid = '';
                $('#error_exam_fee_paid').text(error_exam_fee_paid);
                $('#exam_fee_paid').removeClass('has-error');
            }

            if ($.trim($('#fee_paid_to_college').val()).length == 0) {
                //alert("Fees paid at college is required");
                error_fee_paid_to_college = 'Fees paid at college is required';
                $('#error_fee_paid_to_college').text(error_fee_paid_to_college);
                $('#fee_paid_to_college').addClass('has-error');
                //return false;
            }
            else {
                error_dip_college_fees_paid = '';
                $('#error_fee_paid_to_college').text(error_dip_college_fees_paid);
                $('#dip_fee_paid_to_college').removeClass('has-error');
            }


            if ($.trim($('#dip_total_fees_paid').val()).length == 0) {
                //alert("Total Fees paid at college is required");
                error_total_fee_paid = 'Fees paid at college is required';
                $('#error_total_fee_paid').text(error_total_fee_paid);
                $('#total_fee_paid').addClass('has-error');
                //return false;
            }
            else {
                error_total_fee_paid = '';
                $('#error_total_fee_paid').text(error_total_fee_paid);
                $('#total_fee_paid').removeClass('has-error');
            }

            if ($.trim($('#exam_challan_date').val()).length == 0) {
                error_exam_challan_date = 'Challan Date is required';
                //alert(error_dip_challan_date);
                $('#error_exam_challan_date').text(error_exam_challan_date);
                $('#exam_challan_date').addClass('has-error');
                //return false;
            }
            else if ($.trim($('#exam_challan_date').val()) > admDate) {
                error_exam_challan_date = 'Valid Challan Date is required';
                //alert(error_dip_challan_date);
                $('#error_exam_challan_date').text(error_exam_challan_date);
                $('#exam_challan_date').addClass('has-error');
                //return false;
            }
            else {
                error_exam_challan_date = '';
                $('#error_exam_challan_date').text(error_exam_challan_date);
                $('#exam_challan_date').removeClass('has-error');
            }

            if ($.trim($('#dip_challan_no').val()).length == 0) {
                error_dip_challan_no = 'Challan Number is required';
                //alert(error_dip_challan_no);
                $('#error_dip_challan_no').text(error_dip_challan_no);
                $('#dip_challan_no').addClass('has-error');
                //return false;
            }
            else {
                error_dip_challan_no = '';
                $('#error_dip_challan_no').text(error_dip_challan_no);
                $('#dip_challan_no').removeClass('has-error');
            }
        }//end-of-if #comedk is checked

        var error_mgmt_rank = '';
        var error_mgmt_college_fees_paid = '';
        var error_mgmt_challan_date = '';
        var error_mgmt_challan_no = '';
        var error_mgmt_entrance_exam = '';
        if ($("#mgmt").is(":checked")) {
            if ($("#mgmt_dcet").is(":checked")) {
                error_mgmt_entrance_exam = '';
                $('#error_mgmt_entrance_exam').text(error_mgmt_entrance_exam);
            }
            else {
                //alert("Please select at least one entrance exam appeared");
                error_mgmt_entrance_exam = "Please select at least one entrance exam appeared";
                $('#error_mgmt_entrance_exam').text(error_mgmt_entrance_exam);
                return false;
            }

            if ($.trim($('#mgmt_rank').val()).length == 0) {
                error_mgmt_rank = 'Entrance Exam Rank is required.';
                //alert(error_mgmt_rank);
                $('#error_mgmt_rank').text(error_mgmt_rank);
                $('#mgmt_rank').addClass('has-error');
                //return false;
            }
            else {
                error_mgmt_rank = '';
                $('#error_mgmt_rank').text(error_mgmt_rank);
                $('#mgmt_rank').removeClass('has-error');
            }
            if ($.trim($('#mgmt_college_fees_paid').val()).length == 0) {
                //alert("Fees paid at college is required");
                error_mgmt_college_fees_paid = 'Fees paid at college is required';
                $('#error_mgmt_college_fees_paid').text(error_mgmt_college_fees_paid);
                $('#mgmt_college_fees_paid').addClass('has-error');
                //return false;
            }
            else {
                error_mgmt_college_fees_paid = '';
                $('#error_mgmt_college_fees_paid').text(error_mgmt_college_fees_paid);
                $('#mgmt_college_fees_paid').removeClass('has-error');
            }

            if ($.trim($('#mgmt_challan_date').val()).length == 0) {
                error_mgmt_challan_date = 'Challan Date is required';
                //alert(error_mgmt_challan_date);
                $('#error_mgmt_challan_date').text(error_mgmt_challan_date);
                $('#mgmt_challan_date').addClass('has-error');
                //return false;
            }
            else if ($.trim($('#mgmt_challan_date').val()) > admDate) {
                error_mgmt_challan_date = 'Valid Challan Date is required';
                //alert(error_mgmt_challan_date);
                $('#error_mgmt_challan_date').text(error_mgmt_challan_date);
                $('#mgmt_challan_date').addClass('has-error');
                //return false;
            }
            else {
                error_mgmt_challan_date = '';
                $('#error_mgmt_challan_date').text(error_mgmt_challan_date);
                $('#mgmt_challan_date').removeClass('has-error');
            }

            if ($.trim($('#mgmt_challan_no').val()).length == 0) {
                error_mgmt_challan_no = 'Challan Number is required';
                //alert(error_mgmt_challan_no);
                $('#error_mgmt_challan_no').text(error_mgmt_challan_no);
                $('#mgmt_challan_no').addClass('has-error');
                //return false;
            }
            else {
                error_mgmt_challan_no = '';
                $('#error_mgmt_challan_no').text(error_mgmt_challan_no);
                $('#mgmt_challan_no').removeClass('has-error');
            }
        }//end-of-if #mgmt is checked

        /*  if(error_cet_order_no != '' || error_cet_no != '' || error_cet_rank != '' || error_cet_cat_claimed != '' || error_cet_cat_allotted != '' || error_cet_allot_date != '' || error_cet_kea_fees_paid != '' || error_cet_college_fees_paid != '' || error_cet_total_fees_paid != '' || error_cet_challan_date != '' || error_cet_challan_no != ''){
            return false;    
          }*/
        // if (error_exam_adm_ord_no != '' || error_dip_dcet_no != '' || error_dip_rank != '' || error_dip_cat_claimed != '' || error_dip_cat_allotted != '' || error_dip_allot_date != '' || error_dip_fees_paid != '' || error_dip_college_fees_paid != '' || error_dip_total_fees_paid != '' || error_dip_challan_date != '' || error_dip_challan_no != '') {
        //     return false;
        // }

        // if (error_mgmt_rank != '' || error_mgmt_college_fees_paid != '' || error_mgmt_challan_date != '' || error_mgmt_challan_no != '') {
        //     return false;
        // }
        // if (error_alt_order_copy != '') {

        //     return false;
        // }

        var error_st_total_fees = '';
        if ($.trim($('#st_total_fees').val()).length == 0) {
            error_st_total_fees = 'Fee_details is required';
            $('#error_st_total_fees').text(error_st_total_fees);
            $('#st_total_fees').addClass('has-error');
        }
        else {
            error_st_total_fees = '';
            $('#error_fees').text(error_st_total_fees);
            $('#st_total_fees').removeClass('has-error');
        }

        var error_st_rt_no = '';
        if ($.trim($('#st_rt_no').val()).length == 0) {
            error_st_rt_no = 'challan_no no. is required';
            $('#error_st_rt_no').text(error_st_rt_no);
            $('#st_rt_no').addClass('has-error');
        }
        else {
            error_st_rt_no = '';
            $('#error_st_rt_no').text(error_st_rt_no);
            $('#st_rt_no').removeClass('has-error');
        }


        var error_st_adm_date = '';
        if ($.trim($('#st_adm_date').val()).length == 0) {
            error_st_adm_date = 'Challan Date is required';
            $('#error_st_adm_date').text(error_st_adm_date);
            $('#st_adm_date').addClass('has-error');
        }
        else if ($.trim($('#st_adm_date').val()) > admDate) {
            error_st_adm_date = 'Enter the valid challan date';
            $('#error_st_adm_date').text(error_st_adm_date);
            $('#st_adm_date').addClass('has-error');
        }
        else {
            error_st_adm_date = '';
            $('#error_st_adm_date').text(error_st_adm_date);
            $('#st_adm_date').removeClass('has-error');
        }
        if (error_st_total_fees != '' || error_st_rt_no != '' || error_st_adm_date != '') {
            
            return false;
        }
        else {
            $('#btn_admission_details').attr("disabled", "disabled");
            $(document).css('cursor', 'prgress');
            $("#clgtr_register_form").submit();
        }
    })
});
