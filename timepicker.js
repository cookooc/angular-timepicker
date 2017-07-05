/**
 * Created by root on 6/30/17.
 */
angular.module('cmdbApp').directive('timePicker', function(){
    return {
        restrict: 'AE',
        template: '<div class="input-append date">' +
        '<input class="form-control input-sm" size="16" type="text" value="2016-06-11 10:10:10" ng-model="timeModel" readonly>' +
        '<span class="add-on"><i class="icon-th"></i></span>' +
        '</div>',
        replace: true,
        scope: {
            timeModel: '=',
        },
        link: function(scope, element, attrs){
            element.datetimepicker({
                format: 'yyyy-mm-dd hh:ii:ss',
                autoclose: true,
                todayBtn: true,
                pickerPosition: "bottom-right"
            });
        }
    }
});