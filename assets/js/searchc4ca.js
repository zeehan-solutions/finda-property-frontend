(function ($) {
    "use strict";

    $("body").on("click", "#purposeMain", function () {
        $('.rent_form_content').fadeIn();
        $('.type_form_content').fadeOut();
        $('.beds_form_content').fadeOut();
        $('.area_form_content').fadeOut();
        $('.price_form_content').fadeOut();
    })

    $("body").on("click", "#x-buy", function () {
        $(this).addClass('active');
        $("#x-rent").removeClass('active');
        $("#x-off-plan-resale").removeClass('active');
        $('#completion_st').show();
        $('#rentfr_st').hide();
        $('#development_st').hide();
        $('#purposeMainTitle').html('Buy');
        $('#s_rent_frequency').val('');
        $('#s_cheque').val('');
        $('#s_development_status').val('');
        $('#s_sale_status').val('');
        $(".rentFrequencyBtn").removeClass("active");
        $(".chequeBtn").removeClass("active");
        $(".developmentStatusBtn").removeClass("active");
        $(".saleStatusBtn").removeClass("active");
        $('#s_purpose').val('Buy');
    })

    $("body").on("click", "#x-rent", function () {
        $(this).addClass('active');
        $("#x-buy").removeClass('active');
        $("#x-off-plan-resale").removeClass('active');
        $('#completion_st').hide();
        $('#rentfr_st').show();
        $('#development_st').hide();
        $('#purposeMainTitle').html('Rent');
        $('#s_completion_status').val('');
        $('#s_development_status').val('');
        $('#s_sale_status').val('');
        $(".completionStatusBtn").removeClass("active");
        $(".developmentStatusBtn").removeClass("active");
        $(".saleStatusBtn").removeClass("active");
        $('#s_purpose').val('Rent');
    })

    $("body").on("click", "#x-off-plan-resale", function () {
        $(this).addClass('active');
        $("#x-buy").removeClass('active');
        $("#x-rent").removeClass('active');
        $('#completion_st').hide();
        $('#rentfr_st').hide();
        $('#development_st').show();
        $('#purposeMainTitle').html('Off Plan-Resale');
        $('#s_completion_status').val('');
        $('#s_rent_frequency').val('');
        $('#s_cheque').val('');
        $(".completionStatusBtn").removeClass("active");
        $(".rentFrequencyBtn").removeClass("active");
        $(".chequeBtn").removeClass("active");
        $('#s_purpose').val('Off Plan-Resale');
    })

    $("body").on("click", ".completionStatusBtn", function () {
        $(".completionStatusBtn").removeClass("active");
        $("#s_completion_status").val($(this).html());
        $(this).addClass("active");
    })

    $("body").on("click", ".rentFrequencyBtn", function () {
        $(".rentFrequencyBtn").removeClass("active");
        $("#s_rent_frequency").val($(this).html());
        $(this).addClass("active");
        if ($(this).html() === 'All' || $(this).html() === 'Yearly') {
            $('#Cheque').show()
        } else {
            $('#Cheque').hide()
            $(".chequeBtn").removeClass("active");
            $("#s_cheque").val('');
        }

    })

    $("body").on("click", ".chequeBtn", function () {
        $(".chequeBtn").removeClass("active");
        $("#s_cheque").val($(this).html());
        $(this).addClass("active");
    })

    $("body").on("click", ".developmentStatusBtn", function () {
        $(".developmentStatusBtn").removeClass("active");
        $("#s_development_status").val($(this).html());
        $(this).addClass("active");
    })

    $("body").on("click", ".saleStatusBtn", function () {
        $(".saleStatusBtn").removeClass("active");
        $("#s_sale_status").val($(this).html());
        $(this).addClass("active");
    })

    $("body").on("click", "#done_purpse", function () {
        $('.rent_form_content').fadeOut();
    })

    $("body").on("click", "#reset_purpse", function () {
        $(".completionStatusBtn").removeClass("active");
        $(".rentFrequencyBtn").removeClass("active");
        $(".chequeBtn").removeClass("active");
        $(".developmentStatusBtn").removeClass("active");
        $(".saleStatusBtn").removeClass("active");
        $("#x-buy").removeClass('active');
        $("#x-rent").removeClass('active');
        $("#x-off-plan-resale").removeClass('active');
        $('#completion_st').hide();
        $('#rentfr_st').hide();
        $('#development_st').hide();
        $('#s_purpose').val('');
        $('#s_completion_status').val('');
        $('#s_rent_frequency').val('');
        $('#s_cheque').val('');
        $('#s_development_status').val('');
        $('#s_sale_status').val('');
        $('#purposeMainTitle').html('Purpose');
    })

    $("body").on("click", "#typeMain", function () {
        $('.type_form_content').fadeIn();
        $('.rent_form_content').fadeOut();
        $('.beds_form_content').fadeOut();
        $('.area_form_content').fadeOut();
        $('.price_form_content').fadeOut();
    })

    $("body").on("click", "#x-residential", function () {
        $(this).addClass('active');
        $("#x-commercial").removeClass('active');
        $(".beds_baths_one_parant").removeClass('section-disabled');
        $('#comm_child').hide();
        $('#res_child').show();
        $(".propertyTypeBtn").removeClass("active");
        $('#s_property_type').val('Residential');
        $('#typeMainTitle').html('Type');
    })

    $("body").on("click", "#x-commercial", function () {
        $(this).addClass('active');
        $("#x-residential").removeClass('active');
        $(".beds_baths_one_parant").addClass('section-disabled');
        $(".bedsBtn").removeClass("active");
        $(".bathsBtn").removeClass("active");
        $("#s_beds").val('');
        $("#s_baths").val('');
        $('#bedsMainTitle').html('Beds');
        $('#bathsMainTitle').html('Baths');
        $('#res_child').hide();
        $('#comm_child').show();
        $(".propertyTypeBtn").removeClass("active");
        $('#s_property_type').val('Commercial');
        $('#typeMainTitle').html('Type');
    })

    $("body").on("click", ".propertyTypeBtn", function () {
        $(".propertyTypeBtn").removeClass("active");
        $("#s_property_type").val($(this).html());
        $('#typeMainTitle').html($(this).html());
        $(this).addClass("active");
    })

    $("body").on("click", "#done_pt", function () {
        $('.type_form_content').fadeOut();
    })

    $("body").on("click", "#reset_pt", function () {
        $(".propertyTypeBtn").removeClass("active");
        $(".beds_baths_one_parant").removeClass('section-disabled');
        $("#x-residential").removeClass('active');
        $("#x-commercial").removeClass('active');
        $('#res_child').hide();
        $('#comm_child').hide();
        $('#property_type').val('');
        $('#typeMainTitle').html('Type');
    })

    $("body").on("click", "#bedsMain", function () {
        $('.beds_form_content').fadeIn();
        $('.rent_form_content').fadeOut();
        $('.type_form_content').fadeOut();
        $('.area_form_content').fadeOut();
        $('.price_form_content').fadeOut();
    })

    $("body").on("click", ".bedsBtn", function () {
        $(".bedsBtn").removeClass("active");
        $("#s_beds").val($(this).html());
        $('#bedsMainTitle').html($(this).html());
        $(this).addClass("active");
    })

    $("body").on("click", ".bathsBtn", function () {
        $(".bathsBtn").removeClass("active");
        $("#s_baths").val($(this).html());
        $('#bathsMainTitle').html($(this).html());
        $(this).addClass("active");
    })

    $("body").on("click", "#done_beds", function () {
        $('.beds_form_content').fadeOut();
    })

    $("body").on("click", "#reset_beds", function () {
        $(".bedsBtn").removeClass("active");
        $(".bathsBtn").removeClass("active");
        $("#s_beds").val('');
        $("#s_baths").val('');
        $('#bedsMainTitle').html('Beds');
        $('#bathsMainTitle').html('Baths');
    })

    $("body").on("click", "#areaMain", function () {
        $('.area_form_content').fadeIn();
        $('.rent_form_content').fadeOut();
        $('.type_form_content').fadeOut();
        $('.beds_form_content').fadeOut();
        $('.price_form_content').fadeOut();
    })

    $("body").on("keyup", "#minimumsqft", function (e) {
        $("#areaMainTitle").html($(this).val() + '-' + $("#maximum_sqft").val());
    })

    $("body").on("keyup", "#maximum_sqft", function (e) {
        $("#areaMainTitle").html($("#minimumsqft").val() + '-' + $(this).val());
    })

    $("body").on("click", "#done_area", function () {
        $('.area_form_content').fadeOut();
    })

    $("body").on("click", "#reset_area", function () {
        $("#minimumsqft").val('');
        $("#maximum_sqft").val('');
        $("#areaMainTitle").html('Area(sqft)');
    })


    $("body").on("click", "#priceMain", function () {
        $('.price_form_content').fadeIn();
        $('.rent_form_content').fadeOut();
        $('.type_form_content').fadeOut();
        $('.beds_form_content').fadeOut();
        $('.area_form_content').fadeOut();
    })

    $("body").on("keyup", "#minimum_sqft2", function (e) {
        $("#priceMainTitle").html($(this).val() + '-' + $("#maximum_sqft2").val());
    })

    $("body").on("keyup", "#maximum_sqft2", function (e) {
        $("#priceMainTitle").html($("#minimum_sqft2").val() + '-' + $(this).val());
    })

    $("body").on("click", "#done_price", function () {
        $('.price_form_content').fadeOut();
    })

    $("body").on("click", "#reset_price", function () {
        $("#minimum_sqft2").val('');
        $("#maximum_sqft2").val('');
        $("#priceMainTitle").html('Price (AED)');
    })
})(window.jQuery);