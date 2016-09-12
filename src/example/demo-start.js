import {step} from '../types/step';

let temp = [
  {
    "id": "overview",
    "data": {
      "x": "3000",
      "y": "800",
      "scale": 9
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(3000px, 1500px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(10)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-1",
    "slide": true,
    "content": "<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;&nbsp;&nbsp;&nbsp;</p>\n<p style=\"text-align: center;\">你正在準備這種<strong>傳統式</strong>投影片嗎？</p>",
    "data": {
      "x": "-1100",
      "y": -1500,
      "scale": 1
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(-1100px, -1500px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-2",
    "slide": true,
    "content": "<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\">或許你該給自己一點<strong>新的嘗試</strong></p>",
    "data": {
      "y": -1500,
      "scale": 1
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(0px, -1500px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-3",
    "slide": true,
    "content": "<p>&nbsp;</p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<h4 style=\"text-align: center;\">讓你的<strong>創意</strong>在這裡大放異彩吧！</h4>",
    "data": {
      "x": 1100,
      "y": -1500,
      "scale": 1
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(1100px, -1500px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-4",
    "content": "<h4 style=\"text-align: center;\">&nbsp;這裡是...&nbsp;</h4>\n<h1 style=\"text-align: center;\"><strong>[Oi]</strong></h1>\n<h6 style=\"text-align: center;\">&nbsp;</h6>\n<h6 style=\"text-align: center;\">&nbsp;- 創造讓人印象深刻的投影片編輯器 -</h6>",
    "data": {
      "y": "-300",
      "scale": 4
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(0px, -300px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(4)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-5",
    "content": "<h6>這是一套生成&nbsp;<a href=\"https://github.com/impress/impress.js/\" target=\"_blank\">&nbsp;impress.js&nbsp;</a>&nbsp;的編輯器</h6>\n<p>&nbsp;</p>\n<p>提供你&nbsp;<strong>更快速</strong>、<strong>更直覺&nbsp;</strong>的方式創作</p>\n<p>&nbsp;</p>\n<h6>更重要的是，你&nbsp;<span style=\"text-decoration: underline;\">不需要</span>&nbsp;撰寫任何程式碼</h6>",
    "data": {
      "x": "850",
      "y": "2800",
      "scale": 5,
      "rotate": 90,
      "rotateZ": 90
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(850px, 2800px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(90deg) scale(5)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-6",
    "content": "<p style=\"text-align: center;\">你只需要</p>\n<h1 style=\"text-align: center;\"><strong>專注</strong></h1>\n<p style=\"text-align: center;\">&nbsp;於你的流程設計</p>",
    "data": {
      "x": "3100",
      "y": "1300",
      "scale": 6,
      "rotate": 180,
      "rotateZ": 180
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(3100px, 1300px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(180deg) scale(6)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-7",
    "content": "<p style=\"text-align: center;\">和<strong>想像力</strong></p>",
    "data": {
      "x": "2900",
      "y": "1400",
      "z": -3000,
      "scale": 1,
      "rotate": 300,
      "rotateZ": 300
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(2900px, 1400px, -3000px) rotateX(0deg) rotateY(0deg) rotateZ(300deg) scale(1)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-8",
    "content": "<h6>這是參考 <a href=\"http://impress.github.io/impress.js\" target=\"_blank\">&nbsp;impress.js&nbsp;Demo </a></h6>\n<h6>&nbsp;</h6>\n<h6>使用 <strong>[ Oi ] </strong>快速建立的範例</h6>\n<h6>&nbsp;</h6>\n<h6>你可以直接參考或修改</h6>\n<h6>&nbsp;</h6>\n<h6>但我們更<sub>期待</sub>看到<strong>你的創作</strong></h6>",
    "data": {
      "x": "2950",
      "y": "-2200",
      "scale": 6,
      "rotate": 270,
      "rotateZ": 270
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(2950px, -2200px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(270deg) scale(6)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-9",
    "content": "<p style=\"text-align: center;\">別讓範例限制你的</p>\n<h1 style=\"text-align: center;\">想像力</h1>",
    "data": {
      "x": "5600",
      "y": "-900",
      "scale": 6
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(5600px, -900px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(6)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-10",
    "active": true,
    "content": "<h6 style=\"text-align: center;\">&nbsp;在我們震撼你的觀眾前 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</h6>\n<p>&nbsp;</p>\n<p style=\"text-align: center;\">先拿起紙筆準備<span style=\"color: #1583d6;\"><sup>創作</sup></span>吧！</p>\n<p style=\"text-align: center;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<sup><img src=\"http://rs374.pbsrc.com/albums/oo187/gamegeek2589/Gif/tumblr_lhgmxe1Pe01qbmtfl.gif~c200\" alt=\"pic by http://photobucket.com/images/wink%20gif\" width=\"97\" height=\"97\" /></sup></p>",
    "data": {
      "x": "6000",
      "y": "1500",
      "scale": 4,
      "rotate": 20,
      "rotateZ": 20
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(6000px, 1500px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(20deg) scale(4)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-11",
    "content": "<p style=\"text-align: center;\">啊！忘了提醒你...</p>",
    "data": {
      "x": "5000",
      "y": "2500",
      "scale": 2
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(5000px, 2500px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(2)",
      "transformStyle": "preserve-3d"
    }
  },
  {
    "id": "start-12",
    "content": "<p style=\"text-align: center;\">你的創作是 <strong>3D*</strong>&nbsp;的 :)</p>\n<p style=\"text-align: left;\"><span style=\"font-size: 11px;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;一起震撼你的觀眾吧！</span></p>",
    "data": {
      "x": "5350",
      "y": "2700",
      "z": "-200",
      "scale": 2,
      "rotateX": "-40",
      "rotateY": "10"
    },
    "style": {
      "0": "position",
      "1": "transform",
      "2": "transform-style",
      "position": "absolute",
      "transform": "translate(-50%, -50%) translate3d(5350px, 2700px, -200px) rotateX(-40deg) rotateY(10deg) rotateZ(0deg) scale(2)",
      "transformStyle": "preserve-3d"
    }
  }
];

let defaultSlides = new Array();

temp.forEach((s) => {
  let _step = new step(s);
  defaultSlides.push(_step);
});

export const start = defaultSlides;