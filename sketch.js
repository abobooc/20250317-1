let seaweeds = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('canvas-container'); // 將畫布添加到 canvas-container 中
  blendMode(BLEND); // 設定混合模式

  let colors = ["#3a5a40", "#344e41", "#a3b18a"];
  let numLines = 40; // 設定線條數量
  
  for (let i = 0; i < numLines; i++) {
    let x = (i + 1) * windowWidth / (numLines + 1);
    let height1 = windowHeight;
    let height2 = windowHeight * (3 / 4 + random(-0.1, 0.1));
    let height3 = windowHeight * (5 / 8 + random(-0.1, 0.1));
    let height4 = windowHeight * (1 / 2 + random(-0.1, 0.1));
    let color = colors[i % colors.length] + hex(floor(random(100, 200)), 2); // 增加透明度
    let weight = random(10, 30);
    let sway = random(30, 50); // 增加左右搖擺的範圍

    seaweeds.push({ x, height1, height2, height3, height4, color, weight, sway });
  }
}

function draw() {
  clear(); // 清除畫布，使背景透明

  for (let i = 0; i < seaweeds.length; i++) {
    let seaweed = seaweeds[i];
    let x1 = seaweed.x;
    let y1 = seaweed.height1;
    let x2 = x1 + sin(frameCount * 0.005 + i) * seaweed.sway; // 增加擺動幅度
    let y2 = seaweed.height2;
    let x3 = x1 + sin(frameCount * 0.01 + i) * seaweed.sway; // 增加擺動幅度
    let y3 = seaweed.height3;
    let x4 = x1 + sin(frameCount * 0.015 + i) * seaweed.sway; // 增加擺動幅度
    let y4 = seaweed.height4;

    stroke(seaweed.color); // 設定線條顏色
    strokeWeight(seaweed.weight); // 設定隨機線條粗細
    noFill();

    beginShape();
    vertex(x1, y1);
    bezierVertex(x2, y2, x3, y3, x4, y4);
    endShape();
  }
}
