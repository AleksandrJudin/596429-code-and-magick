'use strict';

window.renderStatistics = function (ctx, names, times) {
  var HISTOGRAM_WIDTH = 150;
  var BAR_WIDTH = 40;
  var INDENT = BAR_WIDTH + 50;
  var INITIAL_X = 140;
  var INITIAL_Y = 250;
  var maxElement;
  var step;

  var drawCloud = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  };

  
};