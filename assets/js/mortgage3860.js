/*
 Theme Name: houzez
 Description: houzez
 Author: Favethemes
 Version: 1.0
 */
var houzezThemeGlobal = {};

(function ($) {
    "use strict";
    var currency_position = "before";
    var currency_symb = "AED";

    var addCommas = function (nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    var thousandSeparator = (n) => {
        if (typeof n === 'number') {
            n += '';
            var x = n.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + thousands_separator + '$2');
            }
            return x1 + x2;
        } else {
            return n;
        }
    }

    /* ------------------------------------------------------------------------ */
    /*  Number format
     /* ------------------------------------------------------------------------ */
    function number_format(number) {

        var decimals, dec_point, thousands_sep;

        dec_point = '.';
        thousands_sep = ',';

        var i, j, kw, kd, km;

        // input sanitation & defaults
        if (isNaN(decimals = Math.abs(decimals))) {
            decimals = 2;
        }

        dec_point = dec_point || ",";
        thousands_sep = thousands_sep || ".";

        i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
        j = (j = i.length) > 3 ? j % 3 : 0;

        km = (j ? i.substr(0, j) + thousands_sep : "");
        kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);

        kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");

        return km + kw + kd;
    }

    if ($('#houzez-calculator-form').length > 0) {
        $('#houzez-calculator-form input').on('input', () => {
            mortgage_calucaltion_section();
        });

        mortgage_calucaltion_section();
    }

    function calculateMonthlyPayment(principal, annualInterestRate, loanTermInYears) {
        const monthlyInterestRate = annualInterestRate / 12 / 100;
        const numberOfMonths = loanTermInYears * 12;

        if (monthlyInterestRate === 0) {
            return principal / numberOfMonths;
        }

        return principal * (monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfMonths)) / (Math.pow((1 + monthlyInterestRate), numberOfMonths) - 1);
    }

    // Define a helper function to parse and validate our inputs
    function parseInput(selector) {
        const rawValue = $(selector).val();

        if (!rawValue) return 0;  // if value is empty or undefined, return 0

        // Remove any non-digit character except the decimal point
        const cleanedValue = rawValue.replace(/[^0-9.]/g, '');

        // Parsing to number
        const parsedValue = parseFloat(cleanedValue);

        // if parsedValue is NaN, return 0, otherwise return the parsed number
        return isNaN(parsedValue) ? 0 : parsedValue;
    }


    function mortgage_calucaltion_section() {
        const homePrice = parseInput('#homePrice');
        const downPaymentPercentage = parseInput('#downPaymentPercentage');
        const annualInterestRate = parseInput('#annualInterestRate');
        const loanTermInYears = parseInput('#loanTermInYears');
        const annualPropertyTaxRate = parseInput('#annualPropertyTaxRate');
        const annualHomeInsurance = parseInput('#annualHomeInsurance');
        const monthlyHOAFees = parseInput('#monthlyHOAFees');
        const pmi = parseInput('#pmi');

        const downPayment = homePrice * (downPaymentPercentage / 100);
        const principal = homePrice - downPayment;
        const monthlyPayment = calculateMonthlyPayment(principal, annualInterestRate, loanTermInYears);
        const monthlyPropertyTax = (homePrice * (annualPropertyTaxRate / 100)) / 12;
        const monthlyHomeInsurance = annualHomeInsurance / 12;

        const pmiRequired = (downPayment / homePrice) < 0.2;

        const monthlyPMI = pmiRequired ? (principal * (pmi / 100)) / 12 : 0;

        const totalMonthlyPayment = monthlyPayment + monthlyPropertyTax + monthlyHomeInsurance + monthlyHOAFees + monthlyPMI;

        const loanAmount = homePrice - downPayment;

        const formattedDownPayment = number_format(downPayment);
        const formattedLoanAmount = number_format(loanAmount);
        const formattedMonthlyPayment = number_format(monthlyPayment);
        const formattedPropertyTax = number_format(monthlyPropertyTax);
        const formattedHomeInsurance = number_format(monthlyHomeInsurance);
        const formattedPMI = pmiRequired ? number_format(monthlyPMI) : '';
        const formattedHOAFees = number_format(monthlyHOAFees);
        const formattedTotalMonthlyPayment = number_format(totalMonthlyPayment);

        $('#downPaymentResult').html(currencyFormate(formattedDownPayment));
        $('#loadAmountResult').html(currencyFormate(formattedLoanAmount));
        $('#monthlyMortgagePaymentResult').html(currencyFormate(formattedMonthlyPayment));
        $('#monthlyPropertyTaxResult').html(currencyFormate(formattedPropertyTax));
        $('#monthlyHomeInsuranceResult').html(currencyFormate(formattedHomeInsurance));

        if (pmiRequired) {
            $('.rslt-pmi').show();
            $('#monthlyPMIResult').html(currencyFormate(formattedPMI));
        } else {
            $('.rslt-pmi').hide();
        }

        $('#monthlyHOAResult').html(currencyFormate(formattedHOAFees));
        $('#m_monthly_val').html(currencyFormate(formattedTotalMonthlyPayment));

        const chartData = [
            { label: 'Monthly Mortgage Payment', value: monthlyPayment, color: '#ff6384' },
            { label: 'Property Tax', value: monthlyPropertyTax, color: '#36a2eb' },
            { label: 'Home Insurance', value: monthlyHomeInsurance, color: '#ffce56' },
            { label: 'HOA', value: monthlyHOAFees, color: '#c2d500' },
        ];

        if (pmiRequired) {
            chartData.push({ label: 'PMI', value: monthlyPMI, color: '#4bc0c0' });
        }

        updateChart(chartData);
    }

    const inputElements = document.querySelectorAll('#calculator-form input');
    inputElements.forEach(input => {
        input.addEventListener('input', () => {
            formatInputValue(input);
            updateResults();
        });
    });

    function updateChart(chartData) {
        const ctx = $('#mortgage-calculator-chart')[0].getContext('2d');

        if (window.myChart) {
            window.myChart.destroy();
        }

        window.myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                //labels: chartData.map(item => item.label),
                datasets: [{
                    data: chartData.map(item => item.value),
                    backgroundColor: chartData.map(item => item.color),
                }],
            },
            options: {
                cutoutPercentage: 85,
                responsive: false,
                tooltips: false,
            },
        });
    }

    /*if( $('#calculate_loan').length > 0 ) {

        $('#calculate_loan').on('click', function(e) {
            e.preventDefault();

            var total_amount = $('#total_amount').val();
            var down_payment = $('#down_payment').val();
            var interest_rate = $('#interest_rate').val();
            var loan_term = $('#loan_term').val();
            var property_tax = $('#property_tax').val();
            var home_insurance = $('#home_insurance').val();
            var pmi = $('#pmi').val();

            mortgage_calucaltion_section(total_amount, down_payment, interest_rate, loan_term, property_tax, home_insurance, pmi);

        });

        $(document).ready(function() {
            var total_amount = $('#total_amount').val();
            var down_payment = $('#down_payment').val();
            var interest_rate = $('#interest_rate').val();
            var loan_term = $('#loan_term').val();
            var property_tax = $('#property_tax').val();
            var home_insurance = $('#home_insurance').val();
            var pmi = $('#pmi').val();

            mortgage_calucaltion_section(total_amount, down_payment, interest_rate, loan_term, property_tax, home_insurance, pmi);
        })
    }*/

    function currencyFormate(price_value) {

        var value;

        if (currency_position == '' || currency_symb == '') {
            return price_value;
        }

        value = 'after' === currency_position ? price_value + '' + currency_symb : currency_symb + '' + price_value;
        return value;

    }

})(jQuery);