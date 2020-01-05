import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

// 导入自定义翻译文件
import zh_cn from '@/i18n/zh_cn.ts';
import en_us from '@/i18n/en_us.ts';

export default new Vuetify({
    // 设置语言
    lang: {
        locales: {
            zh_cn,
            en_us
        },
        current: 'zh_cn'
    }
});