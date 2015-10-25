function print(node) {
	var output = '';

	//Add node name
	output = output + node.nodeName;

	//Add node attibutes
	for (var j = 0; j < node.attributes.length; j++) {
		output = output + ' ' + node.attributes[j].name;
		output = output + ' =';
		output = output + ' ' + node.attributes[j].value;
	};

	//Print
	console.log(node);
};

function domNavigation() {
	var node = document.firstElementChild; // Root = HTML
	var nodeAux = null;
	var nodeStack = [];
	
	//Add node to stack
	nodeStack.push(node);

	//DOM tree pre-order traversal. Iterative (not recursive) 
	while (nodeStack.length > 0) {
		nodoAux = nodeStack.pop();
		print(nodeAux);
		if (node != null) {
			node = node.lastElementChild;
			nodeStack.push(node);
			while (node != null) {
				node = node.previousElementSibling;	
				nodeStack.push(node);
			};
		};

		//Pull out last null node
		nodeStack.pop(); 

		//Point iterator node to top element of satck
		node = nodeStack[nodeStack.length-1];
	};
};

domNavigation();
