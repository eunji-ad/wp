<template>
    <div class="content_wrap m_content">
        <!-- main_t start -->
        <div class="main_t content flex">
            <!-- main_t_left start -->
            <div class="left_main">
                <div class="main_visual">
                    <span>Global leader in eco-friendly energy</span>
                    <p>새로운 시대를 여는 <br>친환경 에너지 글로벌 리더</p>
                </div>
                <ul class="simple_menu flex">
                    <li>
                        <a href="#">
                            <img src="../assets/img/main/ic_F-Clipboard.png" alt="과제등록 아이콘">
                            <p>과제등록</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/main/ic_F-Search.png" alt="과제조회/실시 아이콘">
                            <p>과제조회/실시</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/main/ic_F-Cloud Upload.png" alt="사후관리 등록 아이콘">
                            <p>사후관리 등록</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/main/ic_F-Trophy.png" alt="성과보상신청 아이콘">
                            <p>성과보상신청</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/main/ic_F-Academic.png" alt="혁신인력현황 아이콘">
                            <p>혁신인력현황</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/main/ic_F-VerifiedCheck.png" alt="자격인증신청 아이콘">
                            <p>자격인증신청</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/main/ic_F-Notebook.png" alt="혁신활동 교재 아이콘">
                            <p>혁신활동 교재</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/main/ic_QnA.png" alt="QnA 아이콘">
                            <p>Q&#38;A</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/main/ic_F-Folder.png" alt="MBB자료실 아이콘">
                            <p>MBB 자료실</p>
                        </a>
                    </li>
                </ul>

                <div class="tab_area">
                    <div class="tab_title_wrap flex">
                        <ul class="tab_title flex">
                            <li 
                            class="tab_title_tit tab1_title"
                            @click="show_tab01"
                            :class="{on: tab01}"
                            >
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
                        <div class="tab_left">
                            <div 
                            class="tab tab01"
                            v-if="tab01" 
                            >
                                <ul class="reference_list tab_list flex">
                                    <li class="file_pdf">
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
            <!-- main_t_left end -->
            <!-- main_t_right start -->            
            <div class="my_menu">
                <div class="flex my_flex">
                    <div class="my">
                        <a href="#" class="system_btn"></a>
                    </div>
                    <div class="connect">
                        <h3>안녕하세요.<strong class="user-name">김서부FEA</strong>님</h3>
                        <p class="c_final">최종접속 <span class="c_final_ip">10.131.39.52</span> / <span class="c_final_date">2024.07.24 08:21:28:0</span></p>
                    </div>
                </div>
                <div class="flex btn_flex">
                    <div class="btn_sign flex">
                        <img src="../assets/img/common/ic_sign.png" alt="결재함 아이콘">
                        <p>결재함</p>
                    </div>
                    <div class="btn_personal flex">
                        <img src="../assets/img/common/ic_person.png" alt="개인정보 아이콘">
                        <p>개인정보</p>
                    </div>
                </div>
                <ul>
                    <li class="personal_list flex">
                        <p class="personal_list_title">결재문서</p>
                        <strong class="personal_list_count">
                            <span>미승인 결재 확인요망</span> <!-- script 추가 되도록 -->
                            5
                        </strong>
                    </li>
                    <li class="personal_list flex">
                        <p class="personal_list_title">검토확인</p>
                        <strong class="personal_list_count">2</strong>
                    </li>
                    <li class="personal_list flex">
                        <p class="personal_list_title">수행프로젝트</p>
                        <strong class="personal_list_count">10</strong>
                    </li>
                </ul>
                <div class="pts_schedule">
                    <div class="pts_schedule_title flex">
                        <img src="../assets/img/common/pts.png" alt="pts ci">주요일정
                        <div class="btn_more g">
                            <p>더보기</p>
                            <img src="../assets/img/common/ic_arrowup_g.png" alt="더보기 버튼">
                        </div>
                    </div>
                    <div class="schedule_box">
                        <div class="schedule_box_content">
                            <div class="schedule flex">
                                <div class="flex">
                                    <span class="schedule_date">7. 9</span>
                                    <span class="schedule_day">&#40;화&#41;</span>
                                </div>
                                ------ 
                                <span class="schedule_name">테스트,커뮤니케이션</span>
                            </div>
                            <div class="schedule flex">
                                <div class="flex">
                                    <span class="schedule_date">7. 23</span>
                                    <span class="schedule_day">&#40;화&#41;</span>
                                </div>
                                ------ 
                                <span class="schedule_name">TEST</span>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" class="personal_b_btn btn_instal">
                    <img src="../assets/img/main/banner_minitab.png" alt="minitab 설치 버튼">
                </a>
            </div>
            <!-- main_t_right end -->
        </div>
        <!-- main_t end -->
        <!-- main_b start -->
        <div class="main_news">
            <div class="content">
                <div class="news_title flex">
                    <h2>경영혁신뉴스</h2>
                    <p>Message</p>
                </div>
                <div class="news_con flex">
                    <div class="news_con_list flex">
                        <div class="news_con_left">
                            <strong class="news_con_num latest">519</strong>
                            <span class="news_con_date">2024.07.09</span>
                        </div>
                        <div class="news_con_right">
                            <p class="news_con_title w_space_1">새로운 시대를 여는 친환경 에너지 새로운 시대를 여는 친환경 에너지</p>
                            <span class="news_con_con w_space_1">한국서부발전은 2001년 4월 2일 한국전력공사 한국서부발전은 2001년 4월 2일 한국전력공사</span>
                        </div>
                    </div>
                    <div class="news_con_list flex">
                        <div class="news_con_left">
                            <strong class="news_con_num">518</strong>
                            <span class="news_con_date">2024.07.09</span>
                        </div>
                        <div class="news_con_right">
                            <p class="news_con_title w_space_1">공익 신고 처리 및 신고자 보호등 공익 신고 처리 및 신고자 보호등</p>
                            <span class="news_con_con w_space_1">공익신고자 보호법 개정, 더 많은 공익신고를 공익신고자 보호법 개정, 더 많은 공익신고를</span>
                        </div>
                    </div>
                    <div class="news_con_list flex">
                        <div class="news_con_left">
                            <strong class="news_con_num">517</strong>
                            <span class="news_con_date">2024.07.09</span>
                        </div>
                        <div class="news_con_right">
                            <p class="news_con_title w_space_1">복지 보조금 부정 신고 홍보 리플렛</p>
                            <span class="news_con_con w_space_1">리플렛_240724.pdf</span>
                        </div>
                    </div>
                    <div class="news_con_list flex">
                        <div class="news_con_left">
                            <strong class="news_con_num">516</strong>
                            <span class="news_con_date">2024.07.09</span>
                        </div>
                        <div class="news_con_right">
                            <p class="news_con_title w_space_1">2024년 개선과제 추진일정</p>
                            <span class="news_con_con w_space_1">2024년 전사 개선과제 및 개선전문가 추진 일정.hwp</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- main_b end -->
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tab01:true,
                tab02:false,
            }
        },

        methods: {
            show_tab01(){
                this.tab01 = true;
                if(this.tab01){
                    this.tab02 = false;
                }
            },
            show_tab02(){
                this.tab02 = true;
                if(this.tab02){
                    this.tab01 = false;
                }
            }
        },

    }
</script>

<style style="scss" scoped>
    /* background-img*/
    .main_visual {background:url(@/assets/img/main/main_visual.png) no-repeat center/cover;}
    .tab_right {background:url(@/assets/img/main/bg_tabBanner.png) no-repeat center/cover;}
    .tab_list li .new {
        padding-left:25px;
        background:url(../assets/img/common/ic_new.png) no-repeat;
    }

    .ic_file_area.ic_pdf {background:url(../assets/img/common/ic_pdf.png) no-repeat center/auto;}
    .ic_file_area.ic_han {background:url(../assets/img/common/ic_han.png) no-repeat center/auto;}

    .my {background:url(../assets/img/common/i.png) no-repeat center/cover;}
    .system_btn {background:url(../assets/img/common/ic_system.png) no-repeat center/15px #FFF; }
</style>