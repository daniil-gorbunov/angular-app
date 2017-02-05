const txtMinLength = function () {
    return {
        restrict: 'A',
        require: 'ngModel',

        link: function (scope, elem, attr, ctrl) {
            const minLength = attr.txtMinLength;

            ctrl.$parsers.unshift(function (value) {
                const valid = value && (minLength <= value.length);
                ctrl.$setValidity('txtMinLength', valid);
                return valid ? value : '';
            });

            ctrl.$formatters.unshift(function (value) {
                ctrl.$setValidity('txtMinLength', value && (minLength <= value.length));
                return value;
            });
        }
    };
};

export default txtMinLength;
