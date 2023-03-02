const app = {
    data() {
        return {
            source1: "./secret/不可以看哦/真的不可以哦/所以说打咩！/12.jpg",
            source2: "./secret/不可以看哦/真的不可以哦/所以说打咩！/36.jpg",
            source3: "./secret/不可以看哦/真的不可以哦/所以说打咩！/37.jpg",
            source4: "./secret/不可以看哦/真的不可以哦/所以说打咩！/38.jpg",
            count1: 12,
            count2: 36,
            count3: 37,
            count4: 38,
            flag: 0,
            page1: "none",
            page2: "none",
            page3: "block",
            page4: "none",
            fsize: [0],
            tshadow: [0],
            tshadow2: [0],
            count: 0,
            cur: 0,
            clor: [0],
            posx: [0],
            posy: [0],
            sent: [""],
            sentnumber: 0,
            sentlist: [
                "好像也没什么最喜欢之说",
                "平等地喜欢每一个世界",
                "没有泥头车/菜旺",
                "我将扭曲时空",
                "蜘蛛一般都很可爱",
                "樱花搜索博多豚骨拉面",
                "家里的世界树",
                "再次放回豪华补番目录",
                "蜘蛛：学习离散数学，更好地规划丝的位置",
                "课就那么多，你选不选吧",
                "我国刑法规定……",
                "文乃党报道！",
                "朱紫好像也很抽象",
                "这边进行一个识破",
                "Nicholas以上发言至少涉黄99%",
                "我的音乐播放器：bilibili",
                "安娜学姐",
                "勋历过佬",
                "一招var走天下",
                "lkc毙业设计",
                "screeps隔壁的小朋友胆子很大",
                "秒速双结局，全CG收录",
                "谁知屏中窗，扇扇皆幸苦",
                "情人眼里出计算器",
                "bilibili：我成免费服务器了",
                "有没有可能 是我网上随便找的图(指微信头像)",
                "qiufen233820",
                "通常情况下，我们称之为柳展勋",
                "在明日六级的日耀之下",
                "在明日四级的日耀之下",
                "暗度陈仓Nicholas图穷匕见",
                "非法涂鸦，建议没收*门",
                "尾椎骨萎掉了",
                "我们学院最近新来了一个教英语写作的老师也叫Nicholas",
                "渗透完了/菜旺",
                "真实，画着画着走形/菜旺",
                "不愧是美赛结束的第一天",
                "文档美术大赛/菜旺",
                "无所谓，我会优化/菜旺",
                "阑尾：这把高端局",
                "脂肪酸：我呢",
                "幼小可爱的初高中生",
                "半规管：我无法呼吸",
                "英文字母：我第一个不服",
                "伊尼亚",
                "还是紧一点儿吧"
            ],
            fsize2: [0],
            tshadow3: [0],
            tshadow4: [0],
            countt: 0,
            cur2: 0,
            clor2: [0],
            posx2: [0],
            posy2: [0],
            wish: [""],
            wishnumber: 0,
            wishlist: [
                "展勋生日快乐！！",
                "Handsome Liu生日快乐！！",
                "xcc生日快乐！！",
                "蒜苗葵生日快乐！！",
                "独孤展勋生日快乐！！",
                "R·M·T祝展勋生日快乐！！",
                "R·M·T祝Handsome Liu生日快乐！！",
                "R·M·T祝xcc生日快乐！！",
                "R·M·T祝蒜苗葵生日快乐！！",
                "R·M·T祝独孤展勋生日快乐！！",
                "恋爱小行星，目标地球->展勋!",
                "Nicholas祈愿自己所有【祈愿】成为【真实】",
                "祈愿展勋做一枚白昼的月亮",
                "祈愿展勋在众星的簇拥之下",
                "祈愿展勋炙手可热，但不淆世俗潮浪，遗世独立",
                "祈愿展勋领略世界凶顽的同时也得知世界温存美好",
                "祈愿展勋不必光芒万丈，但始终温暖有光",
                "祈愿展勋人生岁月不哀戚，还有梦境与黎明",
                "祈愿展勋与海为邻，住在无尽蓝的隔壁",
                "祈愿展勋衣襟带花，岁月风平",
                "祈愿展勋温柔，也有屠龙的勇气",
                "祈愿展勋执着于理想，纯粹于当下",
                "祈愿展勋的梦想与现实就像大海与天空一样,在某刻某段水平线上紧紧融合之后再不分离",
                "朝暮与岁月并往，祈愿展勋与快乐行至天光",
                "我从树上摘取玫瑰星云，化作今天的日出，来祝展勋生日快乐",
                "你看流云慢慢地红晕，无意沉醉了凝望它的大地，有意祝福了展勋生日快乐",
                "星河长明 春暖花开 展勋展勋 生日快乐",
                "是微风 是晚霞 是无可替代和生日快乐",
                "展至朝雾里，勋入暮云间。生当作人杰，快哉千里风",
                "第一次看到宇宙，是与展勋四目相对的时候",
                "唯有你的光辉，能像漫过山岭的薄雾",
                "就像地平线每天都要亲吻落日一般",
                "即使全世界与你为敌",
                "一直都会有人偏爱你"
            ],
        }
    },
    methods: {
        change1() {
            this.count1 = Math.floor(Math.random() * 45) + 1;
            this.source1 = "./secret/不可以看哦/真的不可以哦/所以说打咩！/" + this.count1 + ".jpg";
        },
        change2() {
            this.count2 = Math.floor(Math.random() * 45) + 1;
            this.source2 = "./secret/不可以看哦/真的不可以哦/所以说打咩！/" + this.count2 + ".jpg";
        },
        change3() {
            this.count3 = Math.floor(Math.random() * 45) + 1;
            this.source3 = "./secret/不可以看哦/真的不可以哦/所以说打咩！/" + this.count3 + ".jpg";
        },
        change4() {
            this.count4 = Math.floor(Math.random() * 45) + 1;
            this.source4 = "./secret/不可以看哦/真的不可以哦/所以说打咩！/" + this.count4 + ".jpg";
        },
        checkif() {
            if ((((this.count1 <= 16) && (this.count2 <= 16)) && (this.count3 <= 16)) && (this.count4 <= 16)) {
                this.flag = 1;
            }
            if ((((this.count1 >= 39) && (this.count2 >= 39)) && (this.count3 >= 39)) && (this.count4 >= 39)) {
                this.flag = 2;
            }
            if ((((this.count1 <= 19) && (this.count2 <= 19)) && (this.count3 <= 19)) && (this.count4 <= 19)) {
                if ((((this.count1 >= 14) && (this.count2 >= 14)) && (this.count3 >= 14)) && (this.count4 >= 14)) {
                    this.flag = 3;
                }
            }
            switch (this.flag) {
                case 0: alert("我们无法一起使这些照片【都只有文乃】！"); break;
                case 1: alert("我们无法一起使这些照片【出场人数超过3人】(不含想象)！"); break;
                case 2: alert("我们无法一起使这些图片都是【想象】！"); break;
                case 3: alert("你成功了！截屏可向Nicholas领取奖励"); this.page1 = "none"; this.page3 = "block"; this.page4 = "block"; break;
            }
        },
        advice() {
            alert("随便点，展勋！");
        },
        word(event) {
            this.count++;
            this.sentnumber = Math.floor(Math.random() * 46);
            this.sent[this.count] = this.sentlist[this.sentnumber];
            this.fsize[this.count] = Math.floor(Math.random() * 100) + 10;
            this.tshadow[this.count] = this.fsize[this.count] / 20 + 1;
            this.tshadow2[this.count] = this.fsize[this.count] / 5;
            this.posx[this.count] = event.screenX;
            this.posy[this.count] = event.screenY - this.fsize[this.count] * 2 - 70;
            this.clor[this.count] = Math.floor(Math.random() * 360);
            if (this.count >= 66) {
                this.page2 = "none";
                this.page1 = "block";
            }
        },
        word2(event) {
            this.countt++;
            this.wishnumber = Math.floor(Math.random() * 32);
            this.wish[this.countt] = this.wishlist[this.wishnumber];
            this.fsize2[this.countt] = Math.floor(Math.random() * 100) + 10;
            this.tshadow3[this.countt] = this.fsize2[this.countt] / 20 + 1;
            this.tshadow4[this.countt] = this.fsize2[this.countt] / 5;
            this.posx2[this.countt] = event.screenX;
            this.posy2[this.countt] = event.screenY - this.fsize2[this.countt] * 2 - 70;
            this.clor2[this.countt] = Math.floor(Math.random() * 360);
            if (this.countt == 33) {
                this.page3 = "none";
                this.page2 = "block";
            }
        }
    }
}
Vue.createApp(app).mount('#app1')
