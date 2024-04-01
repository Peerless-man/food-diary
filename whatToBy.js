const md = `# 食材处理方法

## 小龙虾

1. 买 青色的小龙虾~ 尽量不要过饱和
2. 用刷子刷干净腹部、虾头
3. 虾线直接逮住尾巴一转就可以拉出来了
4. 有条件的可以在背部开口 方便剥开
5. 使用 高度白酒~ + 盐浸泡 10 分钟 消毒
6. 处理好以后冲洗沥干

## 配料

1. 葱姜蒜~
2. 泡好的干辣椒、花椒
3. 火锅底料、豆瓣酱 或者是超市买的小龙虾调料
4. 蚝油、五香粉

## 配菜

tips: 配菜可以根据自己的喜好来添加 推荐以下蔬菜

1. 黄瓜~ 切条
2. 土豆 切片

# 制作方法

1. 锅底放入一层大概两三厘米的油 油温高一些 放入小龙虾炸 30s 左右 炸红 炸熟 捞出备用
2. 锅底放入少量的油 葱姜蒜 爆香 加点火锅底料、豆瓣酱 炒香
3. 倒入 一罐啤酒~ 大火煮沸
4. 一勺糖、蚝油、生抽、五香粉
5. 下入小龙虾
6. 加点水
7. 大火 10 分钟
8. 煮好后关火泡 30 分钟
9. 吃的时候加热一下 加入配菜即可

其实不泡也可以 直接就放入配菜煮好收汁即可

小张需要买的东西有
`;

function whichIDontHave(md) {
  return md
    .replace(/[\-|\#|\n|(\d+\.)]/g, "")
    .split(" ")
    .filter((item) => item && item.indexOf("~") != -1)
    .map((v) => v.replace(/\~/g, "").split("、"))
    .flat(1)
    .join("、");
}

console.info("您需要买的东西有: " + "\n" + whichIDontHave(md));
// Expect output: 您需要买的东西有:
//                牛肉、小苏打、土豆淀粉、豆芽、木耳、莴笋