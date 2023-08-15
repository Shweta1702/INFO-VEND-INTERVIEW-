$("#user-chart-container").insertFusionCharts({
type: 'column2d',
width: '100%',
height: '100',
id: 'chart1',
dataFormat: 'json',
dataSource: {
"chart": {
  "paletteColors": "#0075c2",
  "showvalues": "0",
  "divlinealpha": "30",
  "numdivlines": "3",
  "showlabels": "0",
  "showYAxisValues": "0",
  "yAxisMaxValue": "9000",
  "palettecolors": "008ae6",
  "plotspacepercent": "0",
  "chartLeftMargin": "0",
  "chartRightMargin": "0",
  "plotToolText": "
$label,Users: $datavalue
",
  "theme": "zune"
},
"data": user_chart_data //Variable in data.js that contains the json
}
$(function() {
        var max_pickup_Date = new Date();
        var maxDate = new Date(new Date(max_pickup_Date).setMonth(max_pickup_Date.getMonth() - 1));
        $('#datetimepicker6').datetimepicker({
            format: 'DD/MM/YYYY',
            maxDate: maxDate
        });
        $('#datetimepicker7').datetimepicker({
            format: 'DD/MM/YYYY'
        });
    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker6 input').blur();
        $("#loader").removeClass("hidden");

        var pick_up_date = new Date(e.date);
        var one_month_foward = new Date(new Date(pick_up_date).setMonth(pick_up_date.getMonth() + 1));
        $('#datetimepicker7').data("DateTimePicker").date(one_month_foward);
    });
    setTimeout(function () {
        seed_data(pick_up_date, one_month_foward);
    }, 1);
});
