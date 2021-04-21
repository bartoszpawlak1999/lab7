var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope)
{
    $scope.galleries = 
    [
        { 'title':'Sergio Ramos',
        'when':'Styczeń 2021',
        'thumbnailUrl':'img/4.jpg'
        },
        { 'title':'Cristiano Ronaldo',
        'when':'Luty 2021',
        'thumbnailUrl':'img/5.jpg'
        },
        { 'title':'Karim Benzema',
        'when':'Marzec 2021',
        'thumbnailUrl':'img/6.jpg'
        },
        { 'title':'Toni Kroos',
        'when':'Kwiecień 2021',
        'thumbnailUrl':'img/7.jpg'
        },
        { 'title':'Luka Modric',
        'when':'Maj 2021',
        'thumbnailUrl':'img/8.jpg'
        },
        { 'title':'Dani Carvajal',
        'when':'Czerwiec 2021',
        'thumbnailUrl':'img/9.jpg'
        }
    ];
    $scope.sortList = 
    [
        {
            'label':'Alfabetycznie',
            'value':'title'
        },
        {
            'label':'Chronologicznie',
            'value':'when'
        },
        {
            'label':'Od Najnowszych',
            'value':'-when'
        },
    ];
});