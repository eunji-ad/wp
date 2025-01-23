<template>
<!-- 전체 모달 레이아웃 -->
    <v-dialog 
    class="modal"
    v-model="WpPop"
    v-slot:default="{isActive}"
    >
        <v-card 
        class="modal_wrap"
        width="600px"
        >
            <div class="modal_head">
                <div class="tit">
                    {{ pop_tit }}
                </div>
                <div style="font-size:12px; margin-left:12px;align-content:center;">
                    <slot></slot>
                </div>
                <v-spacer></v-spacer>
                <v-btn
                class="btn_close"
                @click="isActive.value = false"
                >
                    <v-icon>mdi-close</v-icon>        
                    <p class="a11y">닫기</p>
                </v-btn>
            </div>

            <div class="modal_body">
                <slot></slot>
            </div>
            
            <div class="modal_foot" v-if="!notfoot">
                <v-btn
                color="lightgray"
                class="gray--text"
                @click="isActive.value = false"
                >
                    {{ denialTxt }}
                </v-btn>
                <v-btn
                color="primary"
                class="white--text"
                >
                    {{ agreeTxt }}
                </v-btn>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'WpPop',

    props: [
        'pop_tit',
        'denialTxt',
        'agreeTxt',
    ],
    
    pop_tit: {
        type:String,
        required:false,
    },

    agreeTxt: {
        type:String,
        default:"확인",
    },

    denialTxt: {
        type:String,
        default:"취소",
    },

    notfoot: {
        type:Boolean,
        default:false,
    },
}
</script>