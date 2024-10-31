/*
 * Demo content for FabricJS.
 */


const demoContent = (canvas, fabric) => {

  const rect = new fabric.Rect({
    left: 180, top: 50, width: 90, height: 50,
  });
  rect.setGradient('fill', {
    type: 'linear', x1: 0, y1: 0, x2: rect.width, y2: 0,
    colorStops: {
      0: 'red',
      1: 'orange'
    }
  });
  canvas.add(rect);


  const circle = new fabric.Circle({ left: 440, top: 300, radius: 65 });
  circle.setGradient('fill', {
    type: 'linear', x1: 0, y1: 0, x2: circle.width, y2: circle.height,
    colorStops: {
      0: '#D150FF',
      1: 'rgba(0,0,255,1)'
    }
  });
  canvas.add(circle);

}

export default demoContent
