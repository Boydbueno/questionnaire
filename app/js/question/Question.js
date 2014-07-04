(function() {
    "use strict";

    var app = angular.module('cardGameApp');

    app.factory('Question', ['$http', function($http) {

        var defaults = {
            flipped: false
        };

        function Question(props) {
            this.setData(defaults);

            if (props) {
                this.setData(props);
            }
        }

        Question.prototype = {
            setData: function(props) {
                angular.extend(this, props);
            },
            flip: function() {
                this.flipped = !this.flipped;
            },
            getQuestions: function(difficulty, callback, context) {
                // Todo: Extract in repository
                // Todo: Clean up
                $http({
                    method: 'GET',
                    url: '/questions.json'
                }).success(function(data) {
                    var questions = [];

                    data.forEach(function(question) {
                        questions.push( new Question(question) );
                    });

                    questions = questions.filter(function(question) {
                        return question.difficulty == difficulty;
                    });

                    var i = 3; // 3 random questions
                    var randomQuestions = [];
                    while(i--) {
                        var randomIndex = Math.floor(Math.random() * questions.length);
                        randomQuestions.push( questions.splice(randomIndex, 1)[0]);
                    }

                    callback.apply(context, [randomQuestions]);
                });
            }
        };

        return Question;
    }]);
})();
