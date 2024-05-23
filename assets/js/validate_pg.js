$(document).ready(function(){
     
  var present_date = new Date();
  var d = present_date.getDate();
  var m = present_date.getMonth() + 1; //Month from 0 to 11
  var y = present_date.getFullYear();
  var admDate = y + "-" + ((m < 9)? "0"+m : m )+ "-" + ((d < 9)? "0"+d : d);

    $('#pg_pacad_12th_pcm_percentage').focus(function(){
      $('#pg_pacad_12th_pcm_percentage').val(parseFloat($('#pg_pacad_12th_pcm_total_marks').val()/3.0).toFixed(2));
    });


    // $("input[name='st_adm_applied']").click(function(){
    //   var st_adm_applied = this.value
    //   if(st_adm_applied == 1 ) {
    //   $("#order_copy_cet").prop("checked", true);
      
    //   }
    //   if(st_adm_applied == 2){
    //     $("#order_copy_mgmt").prop("checked", true);
    //   }
    // });

    $("input[name='st_adm_quota']").click(function(){
      var st_adm_quota = this.value
      if(st_adm_quota == 5){
      $("#order_copy_pgcet").prop("checked", true);
      
      }
      if(st_adm_quota == 4){
        $("#order_copy_mgmt").prop("checked", true);
      }
    });

  $('#btn_photo_details').click(function(){
    if($("#snap").val()!= "" || $('#stImage').get(0).files.length != 0 || $('#st_photo').prop('src')!= undefined) {
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
  
  $('#btn_login_details').click(function(){
  $(window).scrollTop(0);

  if($('#st_acad_year option:selected').text().length != 7)
  {
    alert("Please select Academic Year");
    $('#st_acad_year').addClass('has-error');
    return false;
  }
  else
    $('#st_acad_year').removeClass('has-error');

    if($.trim($('#adm_date').val()).length == 0)
    {
      alert('Admission date  is required'); 
      $('#adm_date').addClass('has-error');
      return false;
    }
    else if ($.trim($('#adm_date').val()) > admDate) {
      alert('Please enter the valid admission date');
      $('#adm_date').addClass('has-error');
      return false;
   }
   else
    {
      $('#adm_date').removeClass('has-error');
    }

    if($('input[type=radio][name=st_adm_applied]:checked').length == 0)
    {
      alert("Please select Admission Quota");
      $('#error_st_adm_applied').text('\nPlease select admission applied option');
      return false;
    }
    else
      $('#error_st_adm_applied').text('');

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
    if (l == 0)
    {
      error_st_email_id = '';
      $('#error_st_email_id').text('');
      $('#st_email_id').removeClass('has-error');
    }
    else if (!filter.test(email))
    {
      error_st_email_id = 'Not Valid Email';
      $('#error_st_email_id').text(error_st_email_id);
      $('#st_email_id').addClass('has-error');
      return false;
    }

  if($('#st_branch_applied option:selected').text() == "--Select Branch--"){
    alert("Please select Branch");
    $('#st_branch_applied').addClass('has-error');
    return false;
  }
  else
    $('#st_branch_applied').removeClass('has-error');

  if($('input[type=radio][name=st_adm_quota]:checked').length == 0)
  {
            alert("Please select Admission Quota");
            $('#error_st_admission_quota').text('\nPlease select admission quota');
            return false;
  }
  else
    $('#error_st_admission_quota').text('');
      
    var strDate = (y-20) + "-" + ((m < 9)? "0"+m : m )+ "-" + ((d < 9)? "0"+d : d);
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

    if($('input[type=radio][name=st_gender]:checked').length == 0)
    {
          alert("Please select Gender");
          $('#error_st_gender').text("Please select Gender");
          return false;
    }
    else
    $('#error_st_gender').text('');

    if($('input[type=radio][name=st_locality]:checked').length == 0)
    {
          alert("Please select Locality as Urban or Rural");
          $('#error_st_locality').text("Please select Locality as Urban or Rural");
          return false;
    }
    else
        $('#error_st_locality').text('');

  if($('#st_religion option:selected').text() == "--Select Religion--")
  {
    alert("Please select Religion");
    $('#st_religion').addClass('has-error');
    return false;
  }
  else
    $('#st_religion').removeClass('has-error');

    var error_st_caste = '';
    if($.trim($('#st_caste').val()).length == 0)
    {
    error_st_caste = 'Caste is required';
    $('#error_st_caste').text(error_st_caste);
    $('#st_caste').addClass('has-error');
    return false;
    }
    else
    {
    error_st_caste = '';
    $('#error_st_caste').text(error_st_caste);
    $('#st_caste').removeClass('has-error');
    }

    if($('input[type=radio][name=st_category]:checked').length == 0)
    {
          alert("Please select your Category");
          $('#error_st_category').text("Please select a category");
          return false;
    }
    else
      $('#error_st_category').text('');

    var error_st_mobile_no = '';
    if($.trim($('#st_mobile_no').val()).length == 0)
    {
    error_st_mobile_no = 'Mobile No. is required';
    $('#error_st_mobile_no').text(error_st_mobile_no);
    $('#st_mobile_no').addClass('has-error');
    return false;
    }
    else if($.trim($('#st_mobile_no').val()).length != 10){
      error_st_mobile_no = 'Valid Mobile No. is required';
      $('#error_st_mobile_no').text(error_st_mobile_no);
      $('#st_mobile_no').addClass('has-error');
      return false;
    }
    else
    {
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
  
    $('#previous_btn_login_details').click(function(){
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
  
  $('#previous_btn_personal_details').click(function(){
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
  $('#btn_personal_details').click(function(){
  $(window).scrollTop(0);
  var error_st_father_name = '';
  if($.trim($('#st_father_name').val()).length == 0)
    {
    error_st_father_name = 'Father name is required';
    $('#error_st_father_name').text(error_st_father_name);
    $('#st_father_name').addClass('has-error');
    }
    else
    {
    $('#error_st_father_name').text(error_st_father_name);
    $('#st_father_name').removeClass('has-error');
    }
    
    var error_st_mother_name = '';
    if($.trim($('#st_mother_name').val()).length == 0)
    {
    error_st_mother_name = 'Mother name is required';
    $('#error_st_mother_name').text(error_st_mother_name);
    $('#st_mother_name').addClass('has-error');
    }
    else
    {
    $('#error_st_mother_name').text(error_st_mother_name);
    $('#st_mother_name').removeClass('has-error');
    }

    var error_st_father_mobile_no = '';
    if($.trim($('#st_father_mobile_no').val()).length == 0)
    {
    error_st_father_mobile_no = "Father's Phone Number is required";
    $('#error_st_father_mobile_no').text(error_st_father_mobile_no);
    $('#st_father_mobile_no').addClass('has-error');
    }
    else if($.trim($('#st_father_mobile_no').val()).length != 10)
    {
      error_st_father_mobile_no = "Please enter Valid Phone Number";
    $('#error_st_father_mobile_no').text(error_st_father_mobile_no);
    $('#st_father_mobile_no').addClass('has-error');
    }
    else
    {
    $('#error_st_father_mobile_no').text(error_st_father_mobile_no);
    $('#st_father_mobile_no').removeClass('has-error');
    }
  
    var error_st_father_income = '';
    if($.trim($('#st_father_income').val()).length == 0)
    {
    error_st_father_income = "Income is required";
    $('#error_st_father_income').text(error_st_father_income);
    $('#st_father_income').addClass('has-error');
    }
    else
    {
    $('#error_st_father_income').text(error_st_father_income);
    $('#st_father_income').removeClass('has-error');
    }

    var error_st_parent_address = '';
    if($.trim($('#st_parent_address').val()).length == 0)
    {
    error_st_parent_address = 'Permanent Address is required';
    $('#error_st_parent_address').text(error_st_parent_address);
    $('#st_parent_address').addClass('has-error');
    }
    else
    {
    $('#error_st_parent_address').text(error_st_parent_address);
    $('#st_parent_address').removeClass('has-error');
    }

    var error_st_parent_address_city = '';
    if($.trim($('#st_parent_address_city').val()).length == 0)
    {
    error_st_parent_address_city = 'City is required';
    $('#error_st_parent_address_city').text(error_st_parent_address_city);
    $('#st_parent_address_city').addClass('has-error');
    }
    else
    {
    $('#error_st_parent_address_city').text(error_st_parent_address_city);
    $('#st_parent_address_city').removeClass('has-error');
    }

    var error_st_parent_address_district = '';
    if($.trim($('#st_parent_address_district').val()).length == 0)
    {
    error_st_parent_address_district = 'District is required';
    $('#error_st_parent_address_district').text(error_st_parent_address_district);
    $('#st_parent_address_district').addClass('has-error');
    }
    else
    {
    $('#error_st_parent_address_district').text(error_st_parent_address_district);
    $('#st_parent_address_district').removeClass('has-error');
    }

    if($('#st_parent_address_state option:selected').text() == "--Select State--")
    {
      alert("Please select State for Permanent Address");
      $('#st_parent_address_state').addClass('has-error');
      return false;
    }
    else
      $('#st_parent_address_state').removeClass('has-error');

    var error_st_parent_address_pincode = '';
    if($.trim($('#st_parent_address_pincode').val()).length == 0)
    {
    error_st_parent_address_pincode = 'Pincode is required';
    $('#error_st_parent_address_pincode').text(error_st_parent_address_pincode);
    $('#st_parent_address_pincode').addClass('has-error');
    }
    if($.trim($('#st_parent_address_pincode').val()).length != 6)
    {
    error_st_parent_address_pincode = 'Valid Pincode is required';
    $('#error_st_parent_address_pincode').text(error_st_parent_address_pincode);
    $('#st_parent_address_pincode').addClass('has-error');
    }
    else
    {
    $('#error_st_parent_address_pincode').text(error_st_parent_address_pincode);
    $('#st_parent_address_pincode').removeClass('has-error');
    }

    $("#st_postal_same_address").click(function(){
    //if($("#st_postal_same_address").is(":checked")){
      alert("Same Address");
      //if (this.checked) { 
            $("#st_postal_address").val($("#st_parent_address").val());
            $("#st_postal_address_city").val($("#st_parent_address_city").val());
            $("#st_postal_address_district").val($("#st_parent_address_district").val()); 
            $("#st_postal_address_state").val($("#st_parent_address_state").val()); 
            $("#st_postal_address_pincode").val($("#st_parent_address_pincode").val());                         
  }
  );
    var error_st_postal_address = '';
    if($.trim($('#st_postal_address').val()).length == 0)
    {
    error_st_postal_address = 'Postal Address is required';
    $('#error_st_postal_address').text(error_st_postal_address);
    $('#st_postal_address').addClass('has-error');
    }
    else
    {
    $('#error_st_postal_address').text(error_st_postal_address);
    $('#st_postal_address').removeClass('has-error');
    }

    var error_st_postal_address_city = '';
    if($.trim($('#st_postal_address_city').val()).length == 0)
    {
    error_st_postal_address_city = 'City is required';
    $('#error_st_postal_address_city').text(error_st_postal_address_city);
    $('#st_postal_address_city').addClass('has-error');
    }
    else
    {
    $('#error_st_postal_address_city').text(error_st_postal_address_city);
    $('#st_postal_address_city').removeClass('has-error');
    }

    var error_st_postal_address_district = '';
    if($.trim($('#st_postal_address_district').val()).length == 0)
    {
    error_st_postal_address_district = 'District is required';
    $('#error_st_postal_address_district').text(error_st_postal_address_district);
    $('#st_postal_address_district').addClass('has-error');
    }
    else
    {
    $('#error_st_postal_address_district').text(error_st_postal_address_district);
    $('#st_postal_address_district').removeClass('has-error');
    }

    if($('#st_postal_address_state option:selected').text() == "--Select State--")
    {
      alert("Please select State for Postal Address");
      $('#st_postal_address_state').addClass('has-error');
      return false;
    }
    else
      $('#st_postal_address_state').removeClass('has-error');

    var error_st_postal_address_pincode = '';
    if($.trim($('#st_postal_address_pincode').val()).length == 0)
    {
    error_st_postal_address_pincode = 'Pincode is required';
    $('#error_st_postal_address_pincode').text(error_st_postal_address_pincode);
    $('#st_postal_address_pincode').addClass('has-error');
    }
    if($.trim($('#st_postal_address_pincode').val()).length != 6)
    {
    error_st_postal_address_pincode = 'Valid Pincode is required';
    $('#error_st_postal_address_pincode').text(error_st_postal_address_pincode);
    $('#st_postal_address_pincode').addClass('has-error');
    }
    else
    {
    $('#error_st_postal_address_pincode').text(error_st_postal_address_pincode);
    $('#st_postal_address_pincode').removeClass('has-error');
    }
  //if( error_st_father_name != '' || error_st_mother_name != '' || error_st_father_mobile_no != '' ||  error_st_parent_address != '' || error_st_postal_address != '')
  if( error_st_father_name != '' || error_st_mother_name != '' || error_st_father_mobile_no != '' || error_st_father_income != '')
    {
    return false;
    }
    if(error_st_parent_address != '' || error_st_parent_address_city != '' || error_st_parent_address_district != '' || error_st_parent_address_pincode != '')
    {
      return false;
    }
    if(error_st_postal_address != '' || error_st_postal_address_city != '' || error_st_postal_address_district != '' || error_st_postal_address_pincode != '')
    {
      return false;
    }
    //add some more 
    else
    {
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
  
  $('#previous_btn_academic_details').click(function(){
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
  $('#btn_academic_details').click(function(){
  $(window).scrollTop(0);
  
    var error_pg_pacad_10th_board = '';
    if($.trim($('#pg_pacad_10th_board').val()).length == 0)
    {
    error_pg_pacad_10th_board = 'Class-10 Board name is required';
    $('#error_pg_pacad_10th_board').text(error_pg_pacad_10th_board);
    $('#pg_pacad_10th_board').addClass('has-error');
    }
    else
    {
    error_pg_pacad_10th_board = '';
    $('#error_pg_pacad_10th_board').text(error_pg_pacad_10th_board);
    $('#pg_pacad_10th_board').removeClass('has-error');
    }

    if($('#pg_pacad_10th_pass_month option:selected').text() == "--Select Month--")
    {
      alert("Please select Month of Passing");
      $('#pg_pacad_10th_pass_month').addClass('has-error');
      return false;
    }
    else
    $('#pg_pacad_10th_pass_month').removeClass('has-error');

    if($('#pg_pacad_10th_pass_year option:selected').text() == "--Select Year--")
    {
      alert("Please select year of Passing");
      $('#pg_pacad_10th_pass_year').addClass('has-error');
      return false;
    }
    else
      $('#pg_pacad_10th_pass_year').removeClass('has-error');

      if($('#pg_pacad_10th_pass_state option:selected').text() == "--Select State--")
      {
        alert("Please select state of Passing");
        $('#pg_pacad_10th_pass_state').addClass('has-error');
        return false;
      }
      else
      $('#pg_pacad_10th_pass_state').removeClass('has-error');

    var error_pg_pacad_10th_reg_no = '';
    if($.trim($('#pg_pacad_10th_reg_no').val()).length == 0)
    {
      error_pg_pacad_10th_reg_no = 'Class-10 Registration Number is required';
    $('#error_pg_pacad_10th_reg_no').text(error_pg_pacad_10th_reg_no);
    $('#pg_pacad_10th_reg_no').addClass('has-error');
    }
    else
    {
      error_pg_pacad_10th_reg_no = '';
    $('#error_pg_pacad_10th_reg_no').text(error_pg_pacad_10th_reg_no);
    $('#pg_pacad_10th_reg_no').removeClass('has-error');
    }
    var error_pg_pacad_10th_total_marks_cgpa = '';
    if($.trim($('#pg_pacad_10th_total_marks_cgpa').val()).length == 0)
    {
      error_pg_pacad_10th_total_marks_cgpa = 'Class-10 Total Marks / CGPA is required';
    $('#error_pg_pacad_10th_total_marks_cgpa').text(error_pg_pacad_10th_total_marks_cgpa);
    $('#pg_pacad_10th_total_marks_cgpa').addClass('has-error');
    }
    else
    {
      error_pg_pacad_10th_total_marks_cgpa = '';
    $('#error_pg_pacad_10th_total_marks_cgpa').text(error_pg_pacad_10th_total_marks_cgpa);
    $('#pg_pacad_10th_total_marks_cgpa').removeClass('has-error');
    }
    var error_pg_pacad_10th_percentage_cgpa = '';
    if($.trim($('#pg_pacad_10th_percentage_cgpa').val()).length == 0)
    {
      error_pg_pacad_10th_percentage_cgpa = 'Class-10 Percentage / CGPA is required';
    $('#error_pg_pacad_10th_percentage_cgpa').text(error_pg_pacad_10th_percentage_cgpa);
    $('#pg_pacad_10th_percentage_cgpa').addClass('has-error');
    }
    else
    {
      error_pg_pacad_10th_percentage_cgpa = '';
    $('#error_pg_pacad_10th_percentage_cgpa').text(error_pg_pacad_10th_percentage_cgpa);
    $('#pg_pacad_10th_percentage_cgpa').removeClass('has-error');
    }

    var error_pg_pacad_degree_university = '';
    if($.trim($('#pg_pacad_degree_university').val()).length == 0)
    {
    error_pg_pacad_degree_university = 'Degree University name is required';
    $('#error_pg_pacad_degree_university').text(error_pg_pacad_degree_university);
    $('#pg_pacad_degree_university').addClass('has-error');
    }
    else
    {
      error_pg_pacad_degree_university = '';
    $('#error_pg_pacad_degree_university').text(error_pg_pacad_degree_university);
    $('#pg_pacad_degree_university').removeClass('has-error');
    }

    if($('#pg_pacad_degree_pass_month option:selected').text() == "--Select Month--")
    {
      alert("Please select Month of Passing");
      $('#pg_pacad_degree_pass_month').addClass('has-error');
      return false;
    }
    else
    $('#pg_pacad_degree_pass_month').removeClass('has-error');

    if($('#pg_pacad_degree_pass_year option:selected').text() == "--Select Year--")
    {
      alert("Please select year of Passing");
      $('#pg_pacad_degree_pass_year').addClass('has-error');
      return false;
    }
    else
      $('#pg_pacad_degree_pass_year').removeClass('has-error');

      if($('#pg_pacad_degree_pass_state option:selected').text() == "--Select State--")
      {
        alert("Please select state of Passing");
        $('#pg_pacad_degree_pass_state').addClass('has-error');
        return false;
      }
      else
      $('#pg_pacad_degree_pass_state').removeClass('has-error');
    
    var error_pg_pacad_degree_reg_no = '';
    if($.trim($('#pg_pacad_degree_reg_no').val()).length == 0)
    {
      error_pg_pacad_degree_reg_no = 'Degree Registration Number is required';
    $('#error_pg_pacad_degree_reg_no').text(error_pg_pacad_degree_reg_no);
    $('#pg_pacad_degree_reg_no').addClass('has-error');
    }
    else
    {
    error_pg_pacad_degree_reg_no = '';
    $('#error_pg_pacad_degree_reg_no').text(error_pg_pacad_degree_reg_no);
    $('#pg_pacad_degree_reg_no').removeClass('has-error');
    }

    var error_pg_pacad_degree_percentage_cgpa= '';
    if($.trim($('#pg_pacad_degree_percentage_cgpa').val()).length == 0)
    {
      error_pg_pacad_degree_percentage_cgpa = 'Degree Percentage is required';
    $('#error_pg_pacad_degree_percentage_cgpa').text(error_pg_pacad_degree_percentage_cgpa);
    $('#pg_pacad_degree_percentage_cgpa').addClass('has-error');
    }
    else
    {
    error_pg_pacad_degree_percentage_cgpa= '';
    $('#error_pg_pacad_degree_percentage_cgpa').text(error_pg_pacad_degree_percentage_cgpa);
    $('#pg_pacad_degree_percentage_cgpa').removeClass('has-error');
    }

    if($('#pg_pacad_degree_class_obtained option:selected').text() == "--Select a Class--")
    {
      alert("Please select the Class obtained in Degree.");
      $('#pg_pacad_degree_class_obtained').addClass('has-error');
      return false;
    }
    else
    $('#pg_pacad_degree_class_obtained').removeClass('has-error');

    if( error_pg_pacad_10th_board  != '' || error_pg_pacad_10th_reg_no!= '' || error_pg_pacad_10th_total_marks_cgpa != '' || error_pg_pacad_10th_percentage_cgpa != '')
    {
      return false;
    }
    if( error_pg_pacad_degree_university  != '' || error_pg_pacad_degree_reg_no!= '' || error_pg_pacad_degree_percentage_cgpa != '')
    {
      return false;
    }
    else
    {
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
  
    $('#previous_btn_admission_details').click(function(){
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
  
  $('#btn_admission_details').click(function(){

    var error_alt_order_copy = '';
    alert("Register button clicked");
    if($('input[type=radio][name=alt_order_copy]:checked').length == 0)
    {
          error_alt_order_copy = "Order Copy is required";
          alert("Please select Allotment Order Copy");
          return false;
    }
 
    var error_mgmt_rank = '';
    var error_mgmt_pg_college_fees_paid = '';
    var error_mgmt_challan_date = '';
    var error_mgmt_challan_no = '';
    var error_mgmt_entrance_exam= '';
    if($("#mgmt").is(":checked")){
      //if(($("#mgmt_exam").is(":checked")) || ($("#mgmt_pgcet").is(":checked")))
      if(($("#mgmt_pgcet").is(":checked")))
      {
        error_mgmt_entrance_exam= '';
        $('#error_mgmt_entrance_exam').text(error_mgmt_entrance_exam);
      }
      else
      {
      //alert("Please select at least one entrance exam appeared");
        error_mgmt_entrance_exam = "Please select at least one entrance exam appeared";
        $('#error_mgmt_entrance_exam').text(error_mgmt_entrance_exam);
        return false;
      }

      if($.trim($('#mgmt_pg_rank').val()).length == 0)
      {
        error_mgmt_rank = 'Entrance Exam Rank is required.';
      //alert(error_mgmt_rank);
        $('#error_mgmt_rank').text(error_mgmt_rank);
        $('#mgmt_pg_rank').addClass('has-error');
      return false;
      }
      else
      {
        error_mgmt_rank = '';
        $('#error_mgmt_rank').text(error_mgmt_rank);
        $('#mgmt_pg_rank').removeClass('has-error');
      }
      if($.trim($('#mgmt_pg_college_fees_paid').val()).length == 0)
      {
      //alert("Fees paid at college is required");
        error_mgmt_pg_college_fees_paid = 'Fees paid at college is required';
        $('#error_mgmt_pg_college_fees_paid').text(error_mgmt_pg_college_fees_paid);
        $('#mgmt_pg_college_fees_paid').addClass('has-error');
      return false;
      }
      else
      {
        error_mgmt_pg_college_fees_paid = '';
        $('#error_mgmt_pg_college_fees_paid').text(error_mgmt_pg_college_fees_paid);
        $('#mgmt_pg_college_fees_paid').removeClass('has-error');
      }
      if($.trim($('#mgmt_pg_challan_no').val()).length == 0)
      {
        error_mgmt_challan_no = 'Challan Number is required';
      //alert(error_mgmt_challan_no);
        $('#error_mgmt_challan_no').text(error_mgmt_challan_no);
        $('#mgmt_pg_challan_no').addClass('has-error');
      return false;
      }
      else
      {
        error_mgmt_challan_no = '';
        $('#error_mgmt_challan_no').text(error_mgmt_challan_no);
        $('#mgmt_pg_challan_no').removeClass('has-error');
      }
    }//end-of-if #mgmt is checked

  
  if(error_alt_order_copy != '')
    {
      alert("inside alt order copy")
      return false;
    }
    else  
    { 
      alert("all data entered, success!");
      $('#btn_admission_details').attr("disabled", "disabled");
      $(document).css('cursor', 'prgress');
      $("#register_form").submit();
    } 
  })
});
