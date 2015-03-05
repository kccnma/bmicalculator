var BMIController = function($scope){
    
    $scope.calcBMI = function(){
        $scope.BMI =  ($scope.weight * 703) / $scope.height / $scope.height;
        var BMI = $scope.BMI;
        return (BMI); 
    };
    
    $scope.BMIhealth = function(){
        $scope.BMI =  ($scope.weight * 703) / $scope.height / $scope.height;
        var BMI = $scope.BMI;
        if (BMI < 18.5) {
            return ("Underweight");
        } else if (BMI < 25){
            return ("Normal");
        } else if (BMI < 30){
            return ("Overweight");
        } else if (BMI > 30){
            return ("Obese");
        };
    };
    
};
