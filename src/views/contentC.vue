<template>
    <!-- communication page -->
    <div class="content_wrap c_content">
        <div class="content">
            <h3>Tab_test</h3>
            <div class="tab_area">
                    <div class="tab_title_wrap flex">
                        <ul class="tab_title flex"> <!-- .tab -->
                            <li 
                            class="tab_title_tit tab1_title"
                            @click="show_tab01"
                            :class="{on: tab01}"
                            > <!-- :class="{active: tab01}" 붙여줄 클래스 지정-->
                            자료실
                            </li>
                            <li 
                            class="tab_title_tit tab2_title"
                            @click="show_tab02"
                            :class="{on: tab02}"
                            >
                            공지사항
                            </li>
                        </ul>
                        <div class="btn_more flex">
                            <p>더보기</p>
                            <img src="../assets/img/common/ic_arrowup_b.png" alt="더보기 버튼">
                        </div>
                    </div>
                    <div class="tab_con flex">
                        <div class="tab_left"> <!-- .tab-content -->
                            <div 
                            class="tab tab01"
                            v-if="tab01" 
                            > <!-- v-if 조건부 렌더링 true/false -->
                                <ul class="reference_list tab_list flex">
                                    <li class="file_pdf"><!-- v-for'(item, index)in 00list :key="index" 생략 -->
                                        <span>일반</span>
                                        <h3 class="new w_space_1">혁신벨트&#40;GB,BB&#41; 시험문제 은행</h3>
                                        <p class="w_space_2">
                                            BB 시험은 GB와 BB문제은행에서 출제됩니다. 미니텝 문제도 출제됩니다.
                                            10%는 문제은행 이외에서 출제됩니다.
                                        </p>
                                        <div class="flex">
                                            <em class="date">2024.07.24</em>
                                            <span class="ic_file_area ic_pdf"></span>
                                        </div>
                                    </li>
                                    <li class="file_han">                                        
                                        <span>업무</span>
                                        <h3 class="w_space_1">4차 웨이브 프로젝트 제목 및 리더</h3>
                                        <p class="w_space_2">
                                            4차 웨이브 BB &#38; GB 프로젝트 제목 및 리더 명단입니다.
                                        </p>
                                        <div class="flex">
                                            <em class="date">2024.05.02</em>
                                            <span class="ic_file_area ic_han"></span>
                                        </div>
                                    </li>
                                    <li class="">                                        
                                        <span>일반</span>
                                        <h3 class="w_space_1">PTS 시스템 중지 사항</h3>
                                        <p class="w_space_2">
                                            PTS 작업을 위해 2011.12.09 일 금일 19시부터 24시까지 시스템을 중지 합니다. 업무에 불편을 드려 대단히 죄송합니다 다다ㅏ다다
                                        </p>
                                        <div class="flex">
                                            <em class="date">2024.03.17</em>
                                            <span class="ic_file_area"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div 
                            class="tab tab02"
                            v-if="tab02"
                            >
                                <ul class="notice_list tab_list flex">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab_right">
                            <div class="right_banner">
                                <span>우수과제</span>
                                <p>22차 &#91;TEST9&#93;<br>ICT총괄실재무성과 분배</p>
                                <em class="date">2024.03.17</em>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tab01:true,
            tab02:false,
        } // default
    },
    methods:{
        show_tab01(){
            this.tab01 = true;
            if(this.tab01){
                this.tab02 = false;
            }
        },
        show_tab02(){
            this.tab02 = true;
            if (this.tab02){
                this.tab01 = false;
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .content {
        border:1px solid #ddd;
        text-align:center;
        height:72vh;
        h3 {font-weight:bold;}
    }

    .tab_area {   
        margin-top:120px;
        .tab_title_wrap {
            width: calc(75% - 30px); 
            margin-bottom: 23px;
            .tab_title {
                gap:30px;                    
            
                &_tit {
                    position:relative;
                    font-size:18px;
                    font-weight:normal;
                    color:#777;
                    cursor:pointer;
    
                    &.on {
                        color:#000;
                        font-weight:bold;
                        &:after {
                            content:"";
                            position:absolute;
                            bottom:-6px;left:0;
                            width:100%;height:3px;
                            background:#2d7cc5;
                        }
                    }
                }
            }
        }         

        .tab{
            &_con {
                gap:30px;
                height:260px;
                margin-bottom:82px;
            }

            &_left {
                width:calc(75% - 15px);
                height:100%;
                position:relative;

                .tab {
                    // display:none; //.on효과 자동 붙음
                    position:absolute;
                    top:0;left:0;
                    width:100%;height:100%;
                    // &.on {display: block;} //.on효과 자동 붙음

                    &_list {
                        height:100%;

                        li {
                            width:calc(100%/3 - 9px);
                            height:100%;
                            border-radius:10px;
                            border:1px solid #DDD;
                            padding:35px 35px 23px;

                            span {
                                color:#2D7CC5;
                                font-weight:500;
                                font-size:13px;
                            }
                            h3 {
                                color:#222;
                                line-height: 1.2;
                                margin:20px 0;
                                width:100%;
                            }
                            p {
                                color:#666;
                                font-weight:normal;
                                font-size:14px;
                                line-height:1.5;
                                margin-bottom:30px;
                                height:60px;
                                width:100%;
                            }
                            .flex {
                                em{
                                    font-weight:normal;
                                    color:#666;
                                    font-size:14px;
                                }
                                span {width:30px;height:30px;}
                            }
                        }
                    }
                }
            }

            &_right {
                width:calc(25% - 15px);
                height:100%;
                border-radius:10px;
                .right_banner {
                    width: 100%;height:100%;
                    padding:38px 32px;
                    span {
                        font-size:20px;
                        color:#FFD337;
                    }
                    p {
                        margin:87px 0 15px;
                        color:#FFF;
                        font-size:15px;
                        line-height:1.5;
                    }
                    em {
                        font-size:13px;
                        font-weight:normal;
                        color:#CCC;
                    }
                }
            }
        }
    }
</style>
