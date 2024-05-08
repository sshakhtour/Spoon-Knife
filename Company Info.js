function cancel(){
    $("button.form-close").click();
}

$(function(){

$('iframe').load(function() {
$('iframe.quickform').contents().find('.entity-form').each(function(){ $(this).css('border','none');  });
$('iframe.quickform').contents().find('.form-control-cell').each(function(){$(this).css('padding-right','0px'); $(this).css('margin','0px'); $(this).css('background-color','#FFFFFF');});

})    
$('.crmquickform-cell').css('border','none');

$('#quickViewForm_CompanyAddress').load(function() {
  $('#quickViewForm_CompanyAddress').contents().find('#icv_companyaddress').closest('td').css('padding-right','0px')
})


$('#PlanContacts section.modal.modal-form.modal-form-insert').addClass('company-info-modal sc_modal') 
$('#PlanBusinessDescription section.modal.modal-form.modal-form-insert').addClass('business-desc-modal sc_modal') 
$('#PlanCompanyOwnership section.modal.modal-form.modal-form-insert').addClass('company-own-modal sc_modal') 
$('#PlanContacts section.modal.modal-form.modal-form-edit').addClass('company-info-modal sc_modal') 
$('#PlanBusinessDescription section.modal.modal-form.modal-form-edit').addClass('business-desc-modal sc_modal') 
$('#PlanCompanyOwnership section.modal.modal-form.modal-form-edit').addClass('company-own-modal sc_modal') 
$('#PlanContacts section.modal.modal-form.modal-form-details').addClass('company-info-modal sc_modal') 
$('#PlanBusinessDescription section.modal.modal-form.modal-form-details').addClass('business-readonly-modal sc_modal') 
$('#PlanCompanyOwnership section.modal.modal-form.modal-form-details').addClass('company-own-modal sc_modal') 


$('.modal-title .fa.fa-pencil-square-o').css('display','none');
$('.modal-title .fa.fa-info-circle').css('display','none');
$('.modal-form-insert.company-info-modal .modal-title').text('Add Additional Contact');
$('.modal-form-insert.business-desc-modal .modal-title').text('Add New Main Activity');
$('.modal-form-insert.company-own-modal .modal-title').text('Add New Company Ownership');
$('.modal-form-edit.company-info-modal .modal-title').text('Edit Additional Contact');
$('.modal-form-edit.business-desc-modal .modal-title').text('Edit Main Activity');
$('.modal-form-edit.company-own-modal .modal-title').text('Edit Company Ownership');
$('.modal-header .form-close').css('display','none');


$('.modal-title').removeAttr('title');
$('div.actions').addClass('form-custom-actions') // add custom class to actions div 
$(".form-custom-actions").append('<div id="div-action-btns"><button type="button"  id="btn-next"  class="btn btn-primary button">Next</button></div>');
$('.form-custom-actions').addClass('card-div');


$('button#btn-next').click(function(){     
    var url = '{{ sitemarkers["PlanContractInfo"].url }}' + window.location.search;
    // Sanitize the URL
    var sanitizedUrl = url.replace(/[^a-z0-9-_\/]/gi, '');
    // Validate the URL
    if (sanitizedUrl.startsWith('http://') || sanitizedUrl.startsWith('https://')) {
        console.error('Invalid URL: ' + sanitizedUrl);
        return;
    }
    window.location.href = sanitizedUrl;
})


$("#BusinessDescription .entity-grid.subgrid").on("loaded", function(){ 
    if($('#BusinessDescription .entity-grid.subgrid table tbody tr').length == 3)
    {
        $('#btn-newBusiness').addClass('btn-disabled');
    }
    else 
    {
         $('#btn-newBusiness').removeClass('btn-disabled');
    }
})



})
