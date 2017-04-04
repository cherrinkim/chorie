window.onload = function() {
	var canvas = new fabric.Canvas('canvas');

	jQuery(document).ready( function() {
		
		$("#circle").click(function(){

            var mouse_pos = { x:0 , y:0 };

            canvas.isDrawingMode = false;

            canvas.observe('mouse:down', function(e) {

                mouse_pos = canvas.getPointer(e.e);

                canvas.add(new fabric.Circle({
                    left: mouse_pos.x,
                    top: mouse_pos.y,
                    radius: 30,
                    fill: 'white',
                    stroke: 'black',
                    strokeWidth: 3
                }));

                canvas.off('mouse:down');

            });

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