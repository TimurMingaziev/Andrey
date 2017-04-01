var myApp = angular.module('myApp',[]);

myApp.controller('StudentController', ['$scope', function($scope) {

  var studentsModel =
    [
        {
            Name: "Andrey",
            Sex: "Male",
            Birthday: "1996",
            Marks: [
                5,6,1,3,2
            ],
            AverageMark: null
        },
        {
            Name: "Timur",
            Sex: "Male",
            Birthday: "1996",
            Marks: [
                5,6,1,3,2
            ],
            AverageMark: null
        },
        {
            Name: "Alex",
            Sex: "Male",
            Birthday: "1994",
            Marks: [
                5,5,5,5,5
            ],
            AverageMark: null
        },
        {
            Name: "Alina",
            Sex: "Female",
            Birthday: "1993",
            Marks: [
                5,3,4,5,1
            ],
            AverageMark: null
        },
        {
            Name: "Sergey",
            Sex: "Male",
            Birthday: "1996",
            Marks: [
                5,5,5,5,5
            ],
            AverageMark: null
        }
    ];

    $scope.students = studentsModel;
    $scope.isAverageMarkAvaible = false;

    $scope.filterBySex = function () {
        $scope.students = $scope.students.filter(student => student.Sex === "Male");
    };

    $scope.removeFilters = function () {
        $scope.students = studentsModel;
        $scope.isAverageMarkAvaible = false;
    };

    $scope.filterByMaleAndSortByName = function () {
        $scope.students.sort(studentComparator);
        $scope.filterBySex();
    };

    $scope.showBadStudents = function () {
        $scope.students = $scope.students.filter(student=>student.Marks.some(mark => mark === 2));
    };

    $scope.showGoodStudents = function () {
        $scope.students = $scope.students.filter(student=>student.Marks.every(mark => mark === 5));
    };

    $scope.showAverageMarks = function () {
        $scope.filterBySex();
        $scope.students = $scope.students.map(function (student) {
            var marks = student.Marks.reduce((a, b) => a + b, 0);
            student.AverageMark = marks/student.Marks.length;
            return student;
        })
        $scope.isAverageMarkAvaible = true;
    };

    var studentComparator = function (studentFirst, studentSecond) {
        if (studentFirst.Name > studentSecond.Name) {
            return 1;
        }
        if (studentFirst.Name < studentSecond.Name) {
            return -1;
        }

        return 0;
    }
}]);