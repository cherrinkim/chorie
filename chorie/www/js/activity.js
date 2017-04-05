window.onload = function() {
	canvas = new fabric.Canvas('canvas');
	states = ['State 1'];
	jQuery(document).ready( function() {


		function updateStates(){
			$('#selectState').empty();
			$.each(states, function(i, p){
				$('#selectState').append($('<option></option>').val(p).html(p));
			});
		}

		updateStates();
		

		$("#addState").click(function(){
			states.push('State ' + (states.length+1).toString());
			updateStates();
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
            if(!window.localStorage){alert("This function is not supported by your browser."); return;}
            // save to localStorage
            var json = JSON.stringify(canvas);

            //window.localStorage.setItem("hoge", json);
            states.push(json);
            window.localStorage.setItem("states", states);
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