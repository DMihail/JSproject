window.onload = function() {
    $(document).ready(function () {
        $("#sel").change(function () {
           GetReq($(this).val());
        });
    });

    $(document).ready(function () {
        $("#bit").click(function () {
            BitRadioVal($(this).val());
        });
    });
    $(document).ready(function () {
        $("#lit").click(function () {
            LitRadioVal($(this).val());
        });
    });
    $(document).ready(function () {
        $("#eth").click(function () {
            EthRadioVal($(this).val());
        });
    });
   // RadioVal(BitRadioVal, LitRadioVal, EthRadioVal)
};
function GetReq(data) {
    alert(data);
    $.ajax({
        url : 'http://localhost:3000/currency',
        type: 'POST',
        data: {'Currency' : data},
        success: function(response){
            var data = response;
            console.log(data);
        }
    });
}
/*
function RadioVal(bitcoin, litecoin, ethereum) {
    var bit = bitcoin;
    var lit = litecoin;
    var eth = ethereum;
    var radioValue = {"bitcoin" : bit, "litecoib" : lit, "ethereum" : eth };
    alert(radioValue);
    return radioValue;
}
function LitRadioVal(data) {
    alert(data);
    return data;
}
function BitRadioVal(data) {
    alert(data);
    return data;
}
function EthRadioVal(data) {
    alert(data);
    return data;
}
*/