window.onload = function() {
	canvas = new fabric.Canvas('canvas');
	states = {};
	states['State 1'] = "";
	jQuery(document).ready( function() {


		function updateStates(){
			$('#selectState').empty();
			$.each(Object.keys(states), function(i, p){
				$('#selectState').append($('<option></option>').val(p).html(p));
			});
		}

		function load(indexOfState){
			canvas.clear();
			var localStates = JSON.parse(window.localStorage.getItem("states"));
			console.log(localStates);
			canvas.loadFromJSON(localStates[indexOfState]);

			canvas.renderAll();
			canvas.calcOffset();
		}

		updateStates();

		$('#selectState').change(function () {
			var val = $("#selectState option:selected").text();
			canvas.clear();

			canvas.loadFromJSON(states[val]);
			canvas.renderAll();
			canvas.calcOffset();
		});

		$('#selectState').mousedown(function(){
			saveState();
		});

		$('#previousState').click(function() {
			saveState();
			var currentIndex = $("#selectState option:selected").index();
			if(currentIndex != 0){
				var name = $('#selectState option').eq(currentIndex-1).text();
				$('#selectState').val(name).trigger('change');
			} else {
				// no more previous ones
			}
		});

		$('#nextState').click(function(){
			saveState();
			var currentIndex = $("#selectState option:selected").index();
			var name = $('#selectState option').eq(currentIndex+1).text();
			if(name != ""){
				$('#selectState').val(name).trigger('change');
			} else {
				// no more next ones
			}

		});
		

		$("#addState").click(function(){
			saveState();
			var name = 'State ' + (Object.keys(states).length+1).toString();
			states[name] = "";
			updateStates();

			$('#selectState').val(name).trigger('change');
		});

		$("#circle").click(function(){

			var mouse_pos = { x:0 , y:0 };

			canvas.isDrawingMode = false;

			canvas.observe('mouse:down', function(e) {

				mouse_pos = canvas.getPointer(e.e);

				var circle = new fabric.Circle({
					left: mouse_pos.x-30,
					top: mouse_pos.y-30,
					radius: 30,
					fill: 'white',
					stroke: 'black',
					strokeWidth: 3
				});

				canvas.add(circle);

				circle.setControlVisible('ml', false);
				circle.setControlVisible('mt', false);
				circle.setControlVisible('mr', false);
				circle.setControlVisible('mb', false);
				circle.setControlVisible('mtr', false);

				canvas.off('mouse:down');

			});
		});

		$('#inputText').click(function() {
			var activeObject = canvas.getActiveObject();
			if(activeObject){
				
				canvas.isDrawingMode = false;

				var text, size, font;

				text = $('#text').val();
				size = $('#size').val();
				font = "Palatino Linotype";

				size = parseInt(size, 10);

				var text = new fabric.Text(text, {
					fontFamily: font,
					fontSize: size,
					left: activeObject.aCoords.tl.x,
					top: activeObject.aCoords.tl.y+activeObject.radius/2,
					textAlign: "left",
				});

				canvas.remove(activeObject);
				var group = new fabric.Group([activeObject, text],{
					left: activeObject.aCoords.tl.x,
					top: activeObject.aCoords.tl.y
				});

				canvas.add(group);
				canvas.renderAll();
				canvas.calcOffset();
			}

		});

		$('#ungroupObjects').click(function(){
			var activeGroup = canvas.getActiveGroup();
			var activeObject = canvas.getActiveObject();
			if(activeGroup){
				console.log("active group");
			}
			if(activeObject){
				console.log("active object");
			}
		});

		$("#inputText2").click(function(){

			canvas.isDrawingMode = false;

			var text, size, font;

			var mouse_pos = { x:0 , y:0 };

			text = $('#text').val();
			size = $('#size').val();
			font = "Palatino Linotype";


			canvas.observe('mouse:down', function(e) {

				mouse_pos = canvas.getPointer(e.e);
				size = parseInt(size, 10);

				canvas.add(new fabric.Text(text, {
					fontFamily: font,
					fontSize: size,
					left: mouse_pos.x,
					top: mouse_pos.y,
					textAlign: "left",
				}));
				canvas.off('mouse:down');
				canvas.renderAll();
				canvas.calcOffset();
			});

		});

		function saveState(){
			canvas.isDrawingMode = false;
			var json = JSON.stringify(canvas);
			var val = $("#selectState option:selected").text();
			states[val] = json;
		}

		$("#saveState").click(function(){
			saveState();
		});

		$("#saveLocally").click(function(){
			canvas.isDrawingMode = false;
			if(!window.localStorage){alert("This function is not supported by your browser."); return;}
            // save to localStorage
            var json = JSON.stringify(canvas);

            var val = $("#selectState option:selected").text();
            states[val] = json;
            window.localStorage.setItem("states", JSON.stringify(states));
        });

		$("#saveToComputer").click(function(){
			canvas.isDrawingMode = false;
            // save to localStorage
            var json = JSON.stringify(canvas);

            var val = $("#selectState option:selected").text();
            states[val] = json;
            var blob = new Blob([JSON.stringify(states)], {type:"text/plain;charset=utf-8"});
            saveAs(blob, "formation.json");
        });

		$('#uploadForm').change(function() {
			var fr = new FileReader();
			fr.onload = function(e) {
				var result = JSON.parse(e.target.result);
				states = result;
				updateStates();
				var val = $("#selectState option:selected").text();

				canvas.clear();

				canvas.loadFromJSON(states[val]);
				canvas.renderAll();
				canvas.calcOffset();
			}
			fr.readAsText(event.target.files[0]);
		});

		$("#resetCanvas").click(function(){
			canvas.clear();
		});

	});
canvas.calcOffset();

document.onkeyup = function(e) {
	canvas.renderAll();
};

setTimeout(function() {
	canvas.calcOffset();
}, 100);
};