{"filter":false,"title":"menu.js","tooltip":"/assets/js/controllers/menu.js","undoManager":{"mark":70,"position":70,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["myApp.controller(\"shoutbox\", function($scope, ShoutboxMessages) {","    $scope.newMsgUser = \"John Locke\";","    $scope.shoutboxMessages = ShoutboxMessages.getMessages();","    $scope.addMessage = function(msg, newMsgUser) {","        ShoutboxMessages.addMessage({","            user: newMsgUser,","            date: Date.now(),","            msg: msg","        });","        delete $scope.newMessage;","    };","    $scope.removeMessage = function (id) {","        ShoutboxMessages.removeMessage(id);","    };","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":18},"end":{"row":0,"column":26},"action":"remove","lines":["shoutbox"]},{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":4},"end":{"row":13,"column":6},"action":"remove","lines":["$scope.shoutboxMessages = ShoutboxMessages.getMessages();","    $scope.addMessage = function(msg, newMsgUser) {","        ShoutboxMessages.addMessage({","            user: newMsgUser,","            date: Date.now(),","            msg: msg","        });","        delete $scope.newMessage;","    };","    $scope.removeMessage = function (id) {","        ShoutboxMessages.removeMessage(id);","    };"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":42},"end":{"row":0,"column":58},"action":"remove","lines":["ShoutboxMessages"]},{"start":{"row":0,"column":42},"end":{"row":0,"column":43},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":43},"end":{"row":0,"column":44},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":44},"end":{"row":0,"column":45},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":45},"end":{"row":0,"column":46},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":42},"end":{"row":0,"column":46},"action":"remove","lines":["Menu"]},{"start":{"row":0,"column":42},"end":{"row":0,"column":55},"action":"insert","lines":["MenuPositions"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":11},"end":{"row":1,"column":37},"action":"remove","lines":["newMsgUser = \"John Locke\";"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":13},"end":{"row":1,"column":14},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":14},"end":{"row":1,"column":15},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":11},"end":{"row":1,"column":15},"action":"remove","lines":["menu"]},{"start":{"row":1,"column":11},"end":{"row":1,"column":24},"action":"insert","lines":["menuPositions"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":24},"end":{"row":1,"column":25},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":25},"end":{"row":1,"column":26},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":26},"end":{"row":1,"column":27},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":27},"end":{"row":1,"column":28},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":28},"end":{"row":1,"column":29},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":29},"end":{"row":1,"column":30},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":30},"end":{"row":1,"column":31},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":27},"end":{"row":1,"column":31},"action":"remove","lines":["Menu"]},{"start":{"row":1,"column":27},"end":{"row":1,"column":40},"action":"insert","lines":["MenuPositions"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":40},"end":{"row":1,"column":41},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["C"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":41},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":15},"end":{"row":2,"column":17},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":20},"action":"remove","lines":["menu"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":29},"action":"insert","lines":["menuPositions"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["\\"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"remove","lines":["\\"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"remove","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"remove","lines":["P"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"remove","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"remove","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"remove","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"remove","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["M"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":16},"end":{"row":2,"column":20},"action":"remove","lines":["Menu"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":29},"action":"insert","lines":["MenuPositions"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":41},"end":{"row":2,"column":31},"action":"remove","lines":["","    console.log(MenuPositions);"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":2,"column":3},"action":"remove","lines":["   "]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":41},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":2,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":41,"mode":"ace/mode/javascript"}},"timestamp":1422733621888,"hash":"639cacde96a5b400c3697f9f973df44998e1f18b"}