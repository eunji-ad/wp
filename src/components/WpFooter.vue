<template>
    <div class="footer">
        <ul class="footer_li">
            <li
            class="pop"
            :title="Pop-Use"
            @click="WpPop1 = true"
            >
                이용규정
            </li>
            <li
            class="pop"
            :title="Pop-Privacy"
            :denialTxt="denialTxt"
            :agreeTxt="agreeTxt2"
            @click="WpPop2 = true"
            >
                개인정보처리방침
            </li>
            <li>
                회사소개서 다운로드
            </li>
            <li>
                영상정보처리방침
            </li>
            <li>
                회원약관
            </li>
        </ul>
        <p>Copyright &copy; Korea Western Power Co., Ltd. 2005 All rights reserved.</p>

        <!-- test -->
        <!-- <div class="test_wrap" style="display:flex; width:20%; margin:50px auto;">
            <v-btn color="primary">CLICK1 <v-icon>mdi-close</v-icon></v-btn>
            <v-spacer></v-spacer>
            <v-btn color="primary">CLICK2</v-btn>
        </div> -->
        <!--  -->
        <WpPop
        v-model="WpPop1"
        :pop_tit="pop_tit_use"
        :denialTxt="denialTxt"
        :agreeTxt="agreeTxt"
        >
            <PopUse/>
        </WpPop>

        <WpPop
        v-model="WpPop2"
        :pop_tit="pop_tit_pri"
        :denialTxt="denialTxt"
        :agreeTxt="agreeTxt2"
        >
            <PopPri/>
        </WpPop>
    </div>
</template>

<script>
// modal
import WpPop from './WpPop.vue'
import PopUse from '../views/PopUse.vue'
import PopPri from '../views/PopPrivacy.vue'

export default{
    components: {
        WpPop,
        PopUse,
        PopPri,
    },

    data(){
        return {
            WpPop1:false,
            WpPop2:false,
            pop_tit_use:"PopUse",
            pop_tit_pri:"PopPri",
            denialTxt:"닫기",
            agreeTxt:"동의함",
            agreeTxt2:"상세보기",
        }
    }
}


</script>