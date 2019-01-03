'use strict'
 class StarrySky{
  paint (ctx, paintSize, properties){
    ctx.fillRect(0,0, paintSize.width, paintSize.height);
  }
 }
 registerPaint('starry-sky',StarrySky);
