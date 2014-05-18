function cardsController($scope) {
  $scope.topics = [
      {
        id: 1, 
        label: 'Science',
        selected: true
      }, 
      {
        id: 2, 
        label: 'Sports',
        selected: true
      }, 
      {
        id: 3, 
        label: 'Dev',
        selected: true
      }, 
      {
        id: 4, 
        label: 'Dublin',
        selected: false
      }, 
      {
        id: 5, 
        label: 'South Africa',
        selected: true
      }];
      
  $scope.cards = [
      {
        id: 1,
        title: 'Card 1',
        topic_id: 1
      },
      {
        id: 1,
        title: 'Card 2',
        topic_id: 1
      },
      {
        id: 1,
        title: 'Card 3',
        topic_id: 1
      },
      {
        id: 1,
        title: 'Card 4',
        topic_id: 2
      },
      {
        id: 1,
        title: 'Card 5',
        topic_id: 2
      },
      {
        id: 1,
        title: 'Card 6',
        topic_id: 3
      },
      {
        id: 1,
        title: 'Card 7',
        topic_id: 3
      },
      {
        id: 1,
        title: 'Card 8',
        topic_id: 4
      },
      {
        id: 1,
        title: 'Card 9',
        topic_id: 4
      },
      {
        id: 1,
        title: 'Card 10',
        topic_id: 4
      },
      {
        id: 1,
        title: 'Card 11',
        topic_id: 4
      },
      {
        id: 1,
        title: 'Card 12',
        topic_id: 4
      },
      {
        id: 1,
        title: 'Card 13',
        topic_id: 1
      },
      {
        id: 1,
        title: 'Card 14',
        topic_id: 1
      },
      {
        id: 1,
        title: 'Card 15',
        topic_id: 1
      },
      {
        id: 1,
        title: 'Card 16',
        topic_id: 1
      }];
      
  $scope.bySelectedTopics = function(item) {
    var ret = false;
    angular.forEach($scope.topics, function(topic) {
        var topic_id = null;
        if (item.topic_id) {
          topic_id = item.topic_id
        } else {
          topic_id = item.id;
        }
        if ((topic_id == topic.id) && (topic.selected)) {
          ret = true;
        }
      });
    return ret;
  };
  
  $scope.cardCountByTopic = function(topic_id) {
    var count = 0;
    angular.forEach($scope.cards, function(card) {
      if (card.topic_id == topic_id) {
        count++;
      }
    });
    return count;
  };
};