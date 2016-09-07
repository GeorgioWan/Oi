import {step} from '../types/step';

export const start = [new step({
  id: 'overview',
  active: true,
  data: {
    x: 0,
    y: 0,
    scale: 10,
  }
}), new step({
  id: 'start',
  content: '<p style=\"text-align: center;\">Hola, Welcome to <strong>[</strong><strong>Oi]</strong></p>',
  data: {
    scale: 5
  }
}), new step({
  id: 'start-2',
  content: '<p><strong>[Oi]</strong> is a Editor for <a href=\"https://github.com/impress/impress.js\" target=\"_blank\">impress.js</a></p>',
  data: {
    x: 1300,
    y: 255,
    rotateZ: 90,
  }
}), new step({
  id: 'start-3',
  content: '<p><strong>[Oi]</strong> means that you should be <span style=\"background-color: #008080;\">&nbsp;</span><strong><span style=\"color: #e8403a; background-color: #008080;\">O</span></strong><span style=\"background-color: #008080;\"><span style=\"color: #ffffff;\">h!<strong>&nbsp;</strong>It\'s</span><strong>&nbsp;<span style=\"color: #e8403a;\">i</span></strong><span style=\"color: #ffffff;\">mpressive!<strong>&nbsp;</strong></span></span></p>',
  data: {
    x: 490,
    y: 300,
    scale: 2,
    rotateZ: 180,
  }
}), new step({
  id: 'start-4',
  content: '<p style=\"text-align: right;\">Besides <em>MOVE</em> & <em>ROTATE</em>, you can also <strong>REVERT</strong> it!</p>',
  data: {
    x: 850,
    y: 228,
    rotateY: 180,
    rotateZ: 180,
  }
}), new step({
  id: 'start-5',
  content: '<p>And also has&nbsp;<span style=\"color: #ffffff; background-color: #333333;\"> <strong>DEPTH</strong>&nbsp;</span>, fun\'s it?</p>',
  data: {
    y: 900,
    z: -5000,
    rotateY: 180,
  }
}), new step({
  id: 'start-6',
  content: '<p>More interesting that it\'s <strong>3D</strong>!!</p>',
  data: {
    x: -160,
    y: 1000,
    z: -5000,
    scale: 0.5,
    rotateX: 45,
    rotateY: 180,
  }
}), new step({
  id: 'start-7',
  content: '<p>Feel complexity ?</p>',
  data: {
    x: -300,
    y: 1000,
    z: -5000,
    scale: 0.5,
    rotateX: 45,
    rotateY: 270,
  }
}), new step({
  id: 'start-8',
  content: '<p style=\"text-align: center;\"><img src=\"http://www.pixteller.com/pdata/t/l-35066.jpg\" alt=\"pic by alecu\" /></p>',
  data: {
    x: -20000,
    y: 1000,
    z: -5000,
    scale: 0.5,
    rotateX: 45,
    rotateY: 270,
  }
})];