<template>
    <div class="header flex content">
        <router-link to="/" class="logo">
            <img src="../assets/img/common/logo.png" alt="WP PTS 로고">
        </router-link>
        <ul class="gnb flex">
            <li>
                <router-link to="/contentS">계획/현황</router-link>
            </li>
            <li>
                <router-link to="/contentT">과제관리</router-link>
            </li>
            <li>
                <router-link to="/contentF">사후관리</router-link>
                <!-- 변수 사용 원할 시 <router-link :to="/00"></router-link> -->
            </li>
            <li>
                <router-link to="/contentQ">자격관리</router-link>
            </li>
            <li>
                <router-link to="/contentI">품질개선 활동</router-link>
            </li>            
            <li>
                <router-link to ="/contentC">커뮤니케이션</router-link>
            </li>
        </ul>
        <ul class="snb flex">
            <li><a href="https://www.iwest.co.kr/iwest/index.do" target="_blank">서부홈</a></li>
            <li><a href="#">제안관리</a></li>
            <li><a href="#">그룹관리</a></li>
            <img src="../assets/img/common/ic_search.png" class="ic_search" alt="찾기버튼"> <!-- img외 태그로 들어올 시 a11y 접근성 요소 추가 -->
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>