<template>
    <!-- follow-up page -->
    <div class="content_wrap f_content">
        <div class="content">
            <h3>Follow-up page</h3>
            <v-btn
            class="show_pop"
            @click="WpPop = true"
            >
                SHOW_POP
            </v-btn>
        </div>
        
        <WpPop
        v-model="WpPop"
        :pop_tit="wpPop_01"
        :denialTxt="denialTxt"
        :agreeTxt="agreeTxt"
        >
            <PopUser/>
        </WpPop>
    </div>
</template>

<script>
import WpPop from '../components/WpPop.vue'
import PopUser from './PopUser.vue'

export default {
    components: {
        WpPop,
        PopUser,
    },
    
    data(){
        return {
            WpPop:false,
            wpPop_01:"POP01",
            denialTxt:"닫기",
            agreeTxt:"동의함",
        }
    }
}
</script>

<style lang="scss" scoped>
    .content {
        border:1px solid #ddd;
        text-align:center;
        height:72vh;
        line-height:72vh;
        position:realtive;
        
        h3 {font-weight:bold;}
    }

    .show_pop {
        position:absolute;
        top:55%; left:50%;
        transform:translateX(-50%);
    }
</style>