
<script setup>

    import { useRouter } from 'vue-router';

import { ref, onMounted } from 'vue';

const isLoading = ref(true);

onMounted(() => {
    
    $('#filter-icon').on('click', function() {
        $('.filter-container').toggle();
    });
});

onMounted(() => {
  fetchData().then(() => {
    isLoading.value = false;
  });

  function fetchData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000); 
    });
  }

  // Clock
  const h1 = document.getElementById("time");

function getTime() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');
  const time = `${hour}:${minute}:${second}`;
  h1.textContent = time;
}

// 최초에 한 번 시간 설정
getTime();

// 1초마다 getTime 함수를 호출하도록 타이머 설정
setInterval(getTime, 1000);

});

const router = useRouter();

$(document).ready(function() {
        $('#filter-icon').on('click', function() {
            $('.filter-container').toggle();
        });
    });
</script>

<template>
    <body>
    <div class="container-fluid position-relative d-flex p-0">
        <!-- Spinner Start -->
    <div v-if="isLoading" id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <!-- Spinner End -->


        <!-- Sidebar Start -->
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-secondary navbar-dark">
                <a href="index.html" class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary" style="display: flex; justify-content: center;"><img src="@/assets/img/hotelity_logo.png" width="60%"></h3>
                </a>
                
                <div class="container">
                    <div class="clock">
                        <h1 id="time" style="display: flex; justify-content: center; font-family: fantasy; color:#798a69;"></h1>
                    </div>
                </div>

                <div class="navbar-nav w-100">
                    <router-link to="" class="nav-item nav-link"><i class="emoji bi bi-building-fill"></i>지점 리스트</router-link>
                    <router-link to="" class="nav-item nav-link active"><i class="emoji bi bi-door-open-fill"></i>객실</router-link>
                    <router-link to="" class="nav-item nav-link"><i class="emoji bi bi-pin-map-fill"></i>부대 시설</router-link>
                </div>
            </nav>
        </div>
        <!-- Sidebar End -->


        <!-- Content Start -->
        <div class="content">
            <!-- Navbar Start -->
            <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
                </a>
                <a href="#" class="sidebar-toggler flex-shrink-0">
                    <i class="fa fa-bars"></i>
                </a>
                
                <div class="navbar-nav align-items-center ms-auto" style="display: flex; gap: 12px;">
                
                    <!-- Existing dropdowns and items -->
            
                    <!-- New Menu Items -->
    
                    <a href="" class="nav-item nav-link">고객</a>
                    <a href="" class="nav-item nav-link">직원</a>
                    <a href="" class="nav-item nav-link">호텔 서비스</a>
                    <a href="" class="nav-item nav-link active">호텔 관리</a>
                    <a href="" class="nav-item nav-link">마케팅</a>
                    <a href="" class="nav-item nav-link">영업관리</a>

                </div>

                <div class="navbar-nav align-items-center ms-auto">
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="emoji bi bi-envelope-fill"></i>
                            <span class="d-none d-lg-inline-flex">Message</span>
                            <i class="bi bi-caret-down-fill dropdown-icon"  style="background: none"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="emoji bi bi-bell-fill"></i>
                            <span class="d-none d-lg-inline-flex">Notificatin</span>
                            <i class="bi bi-caret-down-fill dropdown-icon" style="background: none"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img class="rounded-circle me-lg-2" src="" alt="" style="width: 40px; height: 40px;">
                            <span class="d-none d-lg-inline-flex">John Doe</span>
                            <i class="bi bi-caret-down-fill dropdown-icon" style="background: none"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">My Profile</a>
                            <a href="#" class="dropdown-item">Settings</a>
                            <a href="#" class="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>

            
            </nav>
            <!-- Navbar End -->

<!-- Table Start -->
<div class="container-fluid pt-4 px-4">
    <div class="bg-secondary rounded-top p-4">
        <h3 class="mb-4">지점 리스트</h3>
    

        <div class="button" style="display: flex;justify-content:right">
        <button id="download-icon" class="btn btn-success me-2">지점 등록</button>

        </div>
    

       
        <br>
        <div class="row">
            <div class="col-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">지점 코드</th>
                            <th scope="col">지점명</th>
                            <th scope="col">주소</th>
                            <th scope="col">전화번호</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">HQ</th>
                            <td>본사</td>
                            <td>서울특별시 동작구 보라매로 87</td>
                            <td>02-486-0246</td>
                        </tr>
                        <tr>
                            <th scope="row">SE</th>
                            <td>서울 종로점</td>
                            <td>서울특별시 종로구 오키로 79 마우스빌딩</td>
                            <td>02-777-7777</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<!-- Table End -->
            


        </div>
        <!-- Content End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
</body>
</template>

<style>

@import "@/css/style.css";
  @import "@/css/bootstrap.min.css"; 

  .dropdown-icon {
    transition: transform 0.5s;
}

.filter-container {
            display: none;
            position: absolute;
            top: 50px;
            right: 10px;
            width: 500px;
            padding: 10px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            display: flex;
            gap: 10px;
        }

        .filter-container::before {
            content: "";
            position: absolute;
            top: -10px;
            right: 20px;
            border-width: 0 10px 10px 10px;
            border-style: solid;
            border-color: transparent transparent white transparent;
        }

        .position-relative-container {
            position: relative;
            display: flex;
            justify-content: space-between;
        }

        .emoji {
            margin-right: 10px;
        }
</style>