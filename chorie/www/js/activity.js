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
		

		$("#addState").click(function(){
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

        $("#saveState").click(function(){
            canvas.isDrawingMode = false;
            // save to localStorage
            //var json = JSON.stringify(canvas);

            //window.localStorage.setItem("hoge", json);
            // var val = $("#selectState option:selected").text();
            // states[val] = json;
            // window.localStorage.setItem("states", JSON.stringify(states));
            var json = JSON.stringify(canvas);
			var val = $("#selectState option:selected").text();
            states[val] = json;
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