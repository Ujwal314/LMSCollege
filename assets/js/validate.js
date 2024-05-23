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


  $('#cet_total_fees_paid').focus(function () {
    var totalfees_paid = parseInt($('#cet_kea_fees_paid').val()) + parseInt($('#cet_college_fees_paid').val());
    $('#cet_total_fees_paid').val(totalfees_paid);
  });


  $("input[name='st_adm_quota']").click(function () {
    var st_adm_quota = this.value
    if (st_adm_quota == 1 || st_adm_quota == 2) {
      $("#order_copy_cet").prop("checked", true);

    }
    if (st_adm_quota == 3) {
      $("#order_copy_comedk").prop("checked", true);
    }

    if (st_adm_quota == 4) {
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
    else
      $('#adm_date').removeClass('has-error');


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

    var error_st_email_id = '';
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = $.trim($('#st_email_id').val());
    var l = email.length;
    if (l == 0) {
      error_st_email_id = '';
      $('#error_st_email_id').text('');
      $('#st_email_id').removeClass('has-error');
    }
    else if (!filter.test(email)) {
      error_st_email_id = 'Not Valid Email';
      $('#error_st_email_id').text(error_st_email_id);
      $('#st_email_id').addClass('has-error');
      return false;
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

    if ($('input[type=radio][name=st_medium]:checked').length == 0) {
      alert("Please Select Medium");
      $('#error_medium').text('\nPlease Select Medium');
      return false;
    }
    else
      $('#error_medium').text('');

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

    if ($('input[type=radio][name=st_nationality]:checked').length == 0) {
      alert("Please select Nationality");
      $('#error_st_nationality').text("Please select Nationality");
      return false;
    }
    else
      $('#error_st_nationality').text('');

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


    $('#list_login_details').removeClass('active active_tab1');
    $('#list_login_details').removeAttr('href data-toggle');
    $('#login_details').removeClass('active');
    $('#list_login_details').addClass('inactive_tab1');
    $('#list_personal_details').removeClass('inactive_tab1');
    $('#list_personal_details').addClass('active_tab1 active');
    $('#list_personal_details').attr('href', '#personal_details');
    $('#list_personal_details').attr('data-toggle', 'tab');
    $('#personal_details').addClass('active show');

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
      //if($("#st_postal_same_address").is(":checked")){
      alert("Same Address");
      //if (this.checked) { 
      $("#st_postal_address").val($("#st_parent_address").val());
      $("#st_postal_address_city").val($("#st_parent_address_city").val());
      $("#st_postal_address_district").val($("#st_parent_address_district").val());
      //$("#st_postal_address_state").val($("#st_parent_address_state").val());
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
      $('#error_ug_pacad_10th_pass_year').text(error_ug_pacad_10th_pass_year);
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

    var error_ug_pacad_12th_board = '';
    if ($.trim($('#ug_pacad_12th_board').val()).length == 0) {
      error_ug_pacad_12th_board = 'Class-12 / PU-Board name is required';
      $('#error_ug_pacad_12th_board').text(error_ug_pacad_12th_board);
      $('#ug_pacad_12th_board').addClass('has-error');
    }
    else {
      $('#error_ug_pacad_12th_board').text(error_ug_pacad_12th_board);
      $('#ug_pacad_12th_board').removeClass('has-error');
    }

    var error_ug_pacad_12th_schoolname = '';
    if ($.trim($('#ug_pacad_12th_schoolname').val()).length == 0) {
      error_ug_pacad_12th_schoolname = 'Class-12 / PU College Name is required';
      $('#error_ug_pacad_12th_schoolname').text(error_ug_pacad_12th_schoolname);
      $('#ug_pacad_12th_schoolname').addClass('has-error');
    }
    else {
      $('#error_ug_pacad_12th_schoolname').text(error_ug_pacad_12th_schoolname);
      $('#ug_pacad_12th_schoolname').removeClass('has-error');
    }

    if ($('#ug_pacad_12th_pass_month option:selected').text() == "--Select Month--") {
      alert("Please select Month of Passing");
      $('#ug_pacad_12th_pass_month').addClass('has-error');
      return false;
    }
    else
      $('#ug_pacad_12th_pass_month').removeClass('has-error');

    var error_ug_pacad_12th_pass_year = '';
    if ($.trim($('#ug_pacad_12th_pass_year').val()).length == 0) {
      error_ug_pacad_12th_pass_year = '12th Pass Year is required';
      $('#error_ug_pacad_12th_pass_year').text(error_st_mobile_no);
      $('#ug_pacad_12th_pass_year').addClass('has-error');
      return false;
    }

    else if ($.trim($('#ug_pacad_12th_pass_year').val()).length != 4) {
      error_ug_pacad_12th_pass_year = 'Enter year in the YYYY format';
      $('#error_ug_pacad_12th_pass_year').text(error_ug_pacad_12th_pass_year);
      $('#ug_pacad_12th_pass_year').addClass('has-error');
      return false;
    }
    else {
      error_ug_pacad_12th_pass_year = '';
      $('#error_ug_pacad_12th_pass_year').text(error_ug_pacad_12th_pass_year);
      $('#ug_pacad_12th_pass_year').removeClass('has-error');
    }

    if ($('#ug_pacad_12th_pass_state option:selected').text() == "--Select State--") {
      alert("Please select state of Passing");
      $('#ug_pacad_12th_pass_state').addClass('has-error');
      return false;
    }
    else
      $('#ug_pacad_12th_pass_state').removeClass('has-error');

    var error_ug_pacad_12th_medium = '';
    if ($.trim($('#ug_pacad_12th_medium').val()).length == 0) {
      error_ug_pacad_12th_medium = 'Class-12 / PUC Medium of Instruction is required';
      $('#error_ug_pacad_12th_medium').text(error_ug_pacad_12th_medium);
      $('#ug_pacad_12th_medium').addClass('has-error');
    }
    else {
      $('#error_ug_pacad_12th_medium').text(error_ug_pacad_12th_medium);
      $('#ug_pacad_12th_medium').removeClass('has-error');
    }

    var error_ug_pacad_12th_reg_no = '';
    if ($.trim($('#ug_pacad_12th_reg_no').val()).length == 0) {
      error_ug_pacad_12th_reg_no = 'Class-12 / PUC Registration Number is required';
      $('#error_ug_pacad_12th_reg_no').text(error_ug_pacad_12th_reg_no);
      $('#ug_pacad_12th_reg_no').addClass('has-error');
    }
    else {
      $('#error_ug_pacad_12th_reg_no').text(error_ug_pacad_12th_reg_no);
      $('#ug_pacad_12th_reg_no').removeClass('has-error');
    }
    var error_ug_pacad_12th_total_marks = '';
    if ($.trim($('#ug_pacad_12th_total_marks').val()).length == 0) {
      error_ug_pacad_12th_total_marks = 'Class-12 / PUC Total Marks is required';
      $('#error_ug_pacad_12th_total_marks').text(error_ug_pacad_12th_total_marks);
      $('#ug_pacad_12th_total_marks').addClass('has-error');
    }
    else {
      $('#error_ug_pacad_12th_total_marks').text(error_ug_pacad_12th_total_marks);
      $('#ug_pacad_12th_total_marks').removeClass('has-error');
    }
    var error_ug_pacad_12th_percentage = '';
    if ($.trim($('#ug_pacad_12th_total_marks').val()).length == 0) {
      error_ug_pacad_12th_percentage = 'Class-12 / PUC Percentage is required';
      $('#error_ug_pacad_12th_percentage').text(error_ug_pacad_12th_percentage);
      $('#ug_pacad_12th_percentage').addClass('has-error');
    }
    else {
      $('#error_ug_pacad_12th_percentage').text(error_ug_pacad_12th_percentage);
      $('#ug_pacad_12th_percentage').removeClass('has-error');
    }
    var error_ug_pacad_12th_physics_marks = '';
    if ($.trim($('#ug_pacad_12th_physics_marks').val()).length == 0) {
      error_ug_pacad_12th_physics_marks = 'Class-12 / PUC Physics Marks is required';
      $('#error_ug_pacad_12th_physics_marks').text(error_ug_pacad_12th_physics_marks);
      $('#ug_pacad_12th_physics_marks').addClass('has-error');
    }
    else {
      $('#error_ug_pacad_12th_physics_marks').text(error_ug_pacad_12th_physics_marks);
      $('#ug_pacad_12th_physics_marks').removeClass('has-error');
    }
    var error_ug_pacad_12th_chemistry_marks = '';
    if ($.trim($('#ug_pacad_12th_chemistry_marks').val()).length == 0) {
      error_ug_pacad_12th_chemistry_marks = 'Class-12 / PUC Chemistry Marks is required';
      $('#error_ug_pacad_12th_chemistry_marks').text(error_ug_pacad_12th_chemistry_marks);
      $('#ug_pacad_12th_chemistry_marks').addClass('has-error');
    }
    else {
      $('#error_ug_pacad_12th_chemistry_marks').text(error_ug_pacad_12th_chemistry_marks);
      $('#ug_pacad_12th_chemistry_marks').removeClass('has-error');
    }
    var error_ug_pacad_12th_maths_marks = '';
    if ($.trim($('#ug_pacad_12th_maths_marks').val()).length == 0) {
      error_ug_pacad_12th_maths_marks = 'Class-12 / PUC Maths Marks is required';
      $('#error_ug_pacad_12th_maths_marks').text(error_ug_pacad_12th_maths_marks);
      $('#ug_pacad_12th_maths_marks').addClass('has-error');
    }
    else {
      $('#error_ug_pacad_12th_maths_marks').text(error_ug_pacad_12th_maths_marks);
      $('#ug_pacad_12th_maths_marks').removeClass('has-error');
    }

    var error_ug_pacad_12th_pcm_total_marks = '';
    if ($.trim($('#ug_pacad_12th_pcm_total_marks').val()).length == 0) {
      error_ug_pacad_12th_pcm_total_marks = 'Class-12 / PUC PCM Total Score is required';
      $('#error_ug_pacad_12th_pcm_total_marks').text(error_ug_pacad_12th_pcm_total_marks);
      $('#ug_pacad_12th_pcm_total_marks').addClass('has-error');
    }
    else {
      $('#error_ug_pacad_12th_pcm_total_marks').text(error_ug_pacad_12th_pcm_total_marks);
      $('#ug_pacad_12th_pcm_total_marks').removeClass('has-error');
    }

    var error_ug_pacad_12th_pcm_percentage = '';
    if ($.trim($('#ug_pacad_12th_pcm_percentage').val()).length == 0) {
      error_ug_pacad_12th_pcm_percentage = 'Class-12 / PUC PCM Percentage is required';
      $('#error_ug_pacad_12th_pcm_percentage').text(error_ug_pacad_12th_pcm_percentage);
      $('#ug_pacad_12th_pcm_percentage').addClass('has-error');
    }
    else {
      $('#error_ug_pacad_12th_pcm_percentage').text(error_ug_pacad_12th_pcm_percentage);
      $('#ug_pacad_12th_pcm_percentage').removeClass('has-error');
    }

    if (error_ug_pacad_10th_board != '' || error_ug_pacad_10th_schoolname != '' || error_ug_pacad_10th_medium != '' || error_ug_pacad_10th_reg_no != '' || error_ug_pacad_10th_total_marks_cgpa != '' || error_ug_pacad_10th_percentage_cgpa != '' || error_ug_pacad_10th_pass_year != '') {
      return false;
    }
    if (error_ug_pacad_12th_board != '' || error_ug_pacad_12th_schoolname != '' || error_ug_pacad_12th_medium != '' || error_ug_pacad_12th_reg_no != '' || error_ug_pacad_12th_total_marks != '' || error_ug_pacad_12th_percentage != '' || error_ug_pacad_12th_pass_year != '') {
      return false;
    }
    if (error_ug_pacad_12th_physics_marks != '' || error_ug_pacad_12th_chemistry_marks != '' || error_ug_pacad_12th_maths_marks != '' || error_ug_pacad_12th_pcm_total_marks != '' || error_ug_pacad_12th_pcm_percentage != '') {
      return false;
    }
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

  $('#btn_admission_details').click(function (ev) {

    var error_alt_order_copy = '';
    if ($('input[type=radio][name=alt_order_copy]:checked').length == 0) {
      error_alt_order_copy = "Order Copy is required";
      alert("Please select Allotment Order Copy");
      return false;
    }
    var error_cet_order_no = '';
    var error_cet_no = '';
    var error_cet_rank = '';
    var error_cet_cat_claimed = '';
    var error_cet_cat_allotted = '';
    var error_cet_allot_date = '';
    var error_cet_kea_fees_paid = '';
    var error_cet_college_fees_paid = '';
    // var error_cet_total_fees_paid = '';
    var error_cet_challan_date = '';
    var error_cet_challan_no = '';


    if ($("#cet").is(":checked") || $("#snq").is(":checked")) {
      if ($.trim($('#cet_order_no').val()).length == 0) {
        //alert("CET Admission order number is required.");
        error_cet_order_no = 'CET Admission order number is required.';
        $('#error_cet_order_no').text(error_cet_order_no);
        $('#cet_order_no').addClass('has-error');
        return false;
      }
      else {
        error_cet_order_no = '';
        $('#error_cet_order_no').text(error_cet_order_no);
        $('#cet_order_no').removeClass('has-error');
      }
      if ($.trim($('#cet_no').val()).length == 0) {
        //alert("CET Number is required");
        error_cet_no = 'CET Number is required.';
        $('#error_cet_no').text(error_cet_no);
        $('#cet_no').addClass('has-error');
        return false;
      }
      else {
        error_cet_no = '';
        $('#error_cet_no').text(error_cet_no);
        $('#cet_no').removeClass('has-error');
      }
      if ($.trim($('#cet_rank').val()).length == 0) {
        //alert("CET Rank is required");
        error_cet_rank = 'CET Rank is required.';
        $('#error_cet_rank').text(error_cet_rank);
        $('#cet_rank').addClass('has-error');
        return false;
      }
      else {
        error_cet_rank = '';
        $('#error_cet_rank').text(error_cet_rank);
        $('#cet_rank').removeClass('has-error');
      }
      if ($.trim($('#cet_cat_claimed').val()).length == 0) {
        //alert("Claimed Category is required.");
        error_cet_cat_claimed = 'Claimed Category is required';
        $('#error_cet_cat_claimed').text(error_cet_cat_claimed);
        $('#cet_cat_claimed').addClass('has-error');
        //return false;
      }
      else {
        error_cet_cat_claimed = '';
        $('#error_cet_cat_claimed').text(error_cet_cat_claimed);
        $('#cet_cat_claimed').removeClass('has-error');
      }
      if ($.trim($('#cet_cat_allotted').val()).length == 0) {
        //alert("Allotted Category is required");
        error_cet_cat_allotted = 'Allotted Category is required';
        $('#error_cet_cat_allotted').text(error_cet_cat_allotted);
        $('#cet_cat_allotted').addClass('has-error');
        return false;
      }
      else {
        error_cet_cat_allotted = '';
        $('#error_cet_cat_allotted').text(error_cet_cat_allotted);
        $('#cet_cat_allotted').removeClass('has-error');
      }
      if ($.trim($('#cet_allot_date').val()).length == 0) {
        //alert("Allotment Date is required");
        error_cet_allot_date = 'Allotment Date is required';
        $('#error_cet_allot_date').text(error_cet_allot_date);
        $('#cet_allot_date').addClass('has-error');
        return false;
      }
      else if ($.trim($('#cet_allot_date').val()) > admDate) {
        error_cet_allot_date = 'Valid Allotment Date is required';
        $('#error_cet_allot_date').text(error_cet_allot_date);
        $('#cet_allot_date').addClass('has-error');
        return false;
      }
      else {
        error_cet_allot_date = '';
        $('#error_cet_allot_date').text(error_cet_allot_date);
        $('#cet_allot_date').removeClass('has-error');
      }

      if ($.trim($('#cet_kea_fees_paid').val()).length == 0) {
        //alert("Fees paid at KEA is required");
        error_cet_kea_fees_paid = 'Fees paid at KEA is required';
        $('#error_cet_kea_fees_paid').text(error_cet_kea_fees_paid);
        $('#cet_kea_fees_paid').addClass('has-error');
        return false;
      }
      else {
        error_cet_kea_fees_paid = '';
        $('#error_cet_kea_fees_paid').text(error_cet_kea_fees_paid);
        $('#cet_kea_fees_paid').removeClass('has-error');
      }

      if ($.trim($('#cet_college_fees_paid').val()).length == 0) {
        //alert("Fees paid at college is required");
        error_cet_college_fees_paid = 'Fees paid at college is required';
        $('#error_cet_college_fees_paid').text(error_cet_college_fees_paid);
        $('#cet_college_fees_paid').addClass('has-error');
        return false;
      }
      else {
        error_cet_college_fees_paid = '';
        $('#error_cet_college_fees_paid').text(error_cet_college_fees_paid);
        $('#cet_college_fees_paid').removeClass('has-error');
      }
      // if ($.trim($('#cet_total_fees_paid').val()).length == 0) {
      //   //alert("Total fees is required");
      //   error_cet_total_fees_paid = 'Total fees is required';
      //   $('#error_cet_total_fees_paid').text(error_cet_total_fees_paid);
      //   $('#cet_total_fees_paid').addClass('has-error');
      //   return false;
      // }
      // else {
      //   error_cet_total_fees_paid = '';
      //   $('#error_cet_total_fees_paid').text(error_cet_total_fees_paid);
      //   $('#cet_total_fees_paid').removeClass('has-error');
      // }
      if ($.trim($('#cet_challan_date').val()).length == 0) {
        error_cet_challan_date = 'Challan Date is required';
        //alert(error_cet_challan_date);
        $('#error_cet_challan_date').text(error_cet_challan_date);
        $('#cet_challan_date').addClass('has-error');
        return false;
      }
      else if ($.trim($('#cet_challan_date').val()) > admDate) {
        error_cet_challan_date = 'Valid Challan Date is required';
        $('#error_cet_challan_date').text(error_cet_challan_date);
        $('#cet_challan_date').addClass('has-error');
        return false;
      }
      else {
        error_cet_challan_date = '';
        $('#error_cet_challan_date').text(error_cet_challan_date);
        $('#cet_challan_date').removeClass('has-error');
      }

      if ($.trim($('#cet_challan_no').val()).length == 0) {
        error_cet_challan_no = 'Challan Number is required';
        //alert(error_cet_challan_no);
        $('#error_cet_challan_no').text(error_cet_challan_no);
        $('#cet_challan_no').addClass('has-error');
        return false;
      }
      else {
        error_cet_challan_no = '';
        $('#error_cet_challan_no').text(error_cet_challan_no);
        $('#cet_challan_no').removeClass('has-error');
      }
    }//end-of-if #cet  or #snq is checked

    var error_st_total_fees = '';
    if ($.trim($('#st_total_fees').val()).length == 0) {
      error_st_total_fees = 'Total Fees is required';
      $('#error_st_total_fees').text(error_st_total_fees);
      $('#st_total_fees').addClass('has-error');
      return false;
    }
    else {
      error_st_total_fees = '';
      $('#error_st_total_fees').text(error_st_total_fees);
      $('#st_total_fees').removeClass('has-error');
    }


    var error_st_rt_no = '';
    if ($.trim($('#st_rt_no').val()).length == 0) {
      error_st_rt_no = 'Rt/Challan No is required';
      $('#error_st_rt_no').text(error_st_rt_no);
      $('#st_rt_no').addClass('has-error');
      return false;
    }
    else {
      error_st_rt_no = '';
      $('#error_st_rt_no').text(error_st_rt_no);
      $('#st_rt_no').removeClass('has-error');
    }



    var error_st_adm_date = '';
    if ($.trim($('#st_adm_date').val()).length == 0) {
      error_st_adm_date = 'Challan date  is required';
      $('#error_st_adm_date').text(error_st_adm_date);
      $('#st_adm_date').addClass('has-error');
      return false;
    }
    else if ($.trim($('#st_adm_date').val()) > admDate) {
      error_st_adm_date = 'Valid challan date is required';
      $('#error_st_adm_date').text(error_st_adm_date);
      $('#st_adm_date').addClass('has-error');
      return false;
    }
    else {
      error_st_adm_date = '';
      $('#error_st_adm_date').text(error_st_adm_date);
      $('#st_adm_date').removeClass('has-error');
    }


    var error_comedk_sl_no = '';
    var error_comedk_tat_no = '';
    var error_comedk_rank = '';
    var error_comedk_cat_allotted = '';
    var error_comedk_allot_date = '';
    var error_comedk_fees_paid = '';
    var error_comedk_college_fees_paid = '';
    var error_comedk_challan_date = '';
    var error_comedk_challan_no = '';
    if ($("#comedk").is(":checked")) {
      if ($.trim($('#comedk_sl_no').val()).length == 0) {
        //alert("comedk Admission sl number is required.");
        error_comedk_sl_no = 'comedk Admission sl number is required.';
        $('#error_comedk_sl_no').text(error_comedk_sl_no);
        $('#comedk_sl_no').addClass('has-error');
        return false;
      }
      else {
        error_comedk_sl_no = '';
        $('#error_comedk_sl_no').text(error_comedk_sl_no);
        $('#comedk_sl_no').removeClass('has-error');
      }
      if ($.trim($('#comedk_tat_no').val()).length == 0) {
        //alert("comedk Number is required");
        error_comedk_tat_no = 'COMEDK TAT No. is required.';
        $('#error_comedk_tat_no').text(error_comedk_tat_no);
        $('#comedk_tat_no').addClass('has-error');
        return false;
      }
      else {
        error_comedk_no = '';
        $('#error_comedk_no').text(error_comedk_no);
        $('#comedk_no').removeClass('has-error');
      }

      if ($.trim($('#comedk_rank').val()).length == 0) {
        //alert("comedk Rank is required");
        error_comedk_rank = 'COMEDK Rank is required.';
        $('#error_comedk_rank').text(error_comedk_rank);
        $('#comedk_rank').addClass('has-error');
        return false;
      }
      else {
        error_comedk_rank = '';
        $('#error_comedk_rank').text(error_comedk_rank);
        $('#comedk_rank').removeClass('has-error');
      }
      if ($.trim($('#comedk_cat_allotted').val()).length == 0) {
        //alert("Allotted Category is required");
        error_comedk_cat_allotted = 'Allotted Category is required';
        $('#error_comedk_cat_allotted').text(error_comedk_cat_allotted);
        $('#comedk_cat_allotted').addClass('has-error');
        return false;
      }
      else {
        error_comedk_cat_allotted = '';
        $('#error_comedk_cat_allotted').text(error_comedk_cat_allotted);
        $('#comedk_cat_allotted').removeClass('has-error');
      }

      if ($.trim($('#comedk_allot_date').val()).length == 0) {
        //alert("Allotment Date is required");
        error_comedk_allot_date = 'Allotment Date is required';
        $('#error_comedk_allot_date').text(error_comedk_allot_date);
        $('#comedk_allot_date').addClass('has-error');
        return false;
      }
      else if ($.trim($('#comedk_allot_date').val()) > admDate) {
        error_comedk_allot_date = 'Valid Allotment Date is required';
        $('#error_comedk_allot_date').text(error_comedk_allot_date);
        $('#comedk_allot_date').addClass('has-error');
        return false;
      }
      else {
        error_comedk_allot_date = '';
        $('#error_comedk_allot_date').text(error_comedk_allot_date);
        $('#comedk_allot_date').removeClass('has-error');
      }

      if ($.trim($('#comedk_fees_paid').val()).length == 0) {
        //alert("Fees paid at KEA is required");
        error_comedk_fees_paid = 'Fees paid at COMEDK is required';
        $('#error_comedk_fees_paid').text(error_comedk_fees_paid);
        $('#comedk_fees_paid').addClass('has-error');
        return false;
      }
      else {
        error_comedk_fees_paid = '';
        $('#error_comedk_fees_paid').text(error_comedk_fees_paid);
        $('#comedk_fees_paid').removeClass('has-error');
      }

      if ($.trim($('#comedk_college_fees_paid').val()).length == 0) {
        //alert("Fees paid at college is required");
        error_comedk_college_fees_paid = 'Fees paid at college is required';
        $('#error_comedk_college_fees_paid').text(error_comedk_college_fees_paid);
        $('#comedk_college_fees_paid').addClass('has-error');
        return false;
      }
      else {
        error_comedk_college_fees_paid = '';
        $('#error_comedk_college_fees_paid').text(error_comedk_college_fees_paid);
        $('#comedk_college_fees_paid').removeClass('has-error');
      }

      if ($.trim($('#comedk_challan_date').val()).length == 0) {
        error_comedk_challan_date = 'Challan Date is required';
        //alert(error_comedk_challan_date);
        $('#error_comedk_challan_date').text(error_comedk_challan_date);
        $('#comedk_challan_date').addClass('has-error');
        return false;
      }
      else if ($.trim($('#comedk_challan_date').val()) > admDate) {
        error_comedk_challan_date = 'valid Challan Date is required';
        $('#error_comedk_challan_date').text(error_comedk_challan_date);
        $('#comedk_challan_date').addClass('has-error');
        return false;
      }
      else {
        error_comedk_challan_date = '';
        $('#error_comedk_challan_date').text(error_comedk_challan_date);
        $('#comedk_challan_date').removeClass('has-error');
      }

      if ($.trim($('#comedk_challan_no').val()).length == 0) {
        error_comedk_challan_no = 'Challan Number is required';
        //alert(error_comedk_challan_no);
        $('#error_comedk_challan_no').text(error_comedk_challan_no);
        $('#comedk_challan_no').addClass('has-error');
        return false;
      }
      else {
        error_comedk_challan_no = '';
        $('#error_comedk_challan_no').text(error_comedk_challan_no);
        $('#comedk_challan_no').removeClass('has-error');
      }
    }//end-of-if #comedk is checked

    var error_mgmt_rank = '';
    var error_mgmt_college_fees_paid = '';
    var error_mgmt_challan_date = '';
    var error_mgmt_challan_no = '';
    var error_mgmt_entrance_exam = '';
    if ($("#mgmt").is(":checked")) {
      if (($("#mgmt_comedk").is(":checked")) || ($("#mgmt_cet").is(":checked"))) {
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
        return false;
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
        return false;
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
        return false;
      }
      else if ($.trim($('#mgmt_challan_date').val()) > admDate) {
        error_mgmt_challan_date = 'Valid Challan Date is required';
        $('#error_mgmt_challan_date').text(error_mgmt_challan_date);
        $('#mgmt_challan_date').addClass('has-error');
        return false;
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
        return false;
      }
      else {
        error_mgmt_challan_no = '';
        $('#error_mgmt_challan_no').text(error_mgmt_challan_no);
        $('#mgmt_challan_no').removeClass('has-error');
      }
    }//end-of-if #mgmt is checked

    if (error_alt_order_copy != '') {
      return false;
    }
    else {
      $('#btn_admission_details').attr("disabled", "disabled");
      $(document).css('cursor', 'prgress');
      $("#register_form").submit();
    }
  })
});