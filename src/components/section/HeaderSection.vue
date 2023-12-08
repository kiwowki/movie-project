<script setup></script>
<template>
  <header id="header" role="banner">
    <div class="header_inner">
      <nav class="header_nav">
        <h1><a href="#">Movie Star</a></h1>
        <div class="header_menu">
          <p><a href="#">하늑 영화 Top10</a></p>
          <p><a href="#">코딩 영화 Top10</a></p>
        </div>
      </nav>
      <div
        class="header_intro"
        style="
          background-image: url(http://image.tmdb.org/t/p/w1280/xgGGinKRL8xeRkaAR9RMbtyk60y.jpg);
        "
      >
        <div class="container">
          <div class="left play_icon">
            <a href="#" class="left_img_wrap">
              <img src="http://image.tmdb.org/t/p/w500/7M2pc9OboapgtoBbkU49Aim7O5B.jpg" alt="" />
            </a>
          </div>
          <div class="right">
            <h2><a href="#">트롤 밴드 투게더</a></h2>
            <p class="desc">
              전 세계 모든 트롤을 열광케 했던 최고의 아이돌 그룹 ‘브로존’. 역대급 무대 실수와 형제
              간의 불화로 결국 해체한 뒤, 모두에게 잊혀 간다. 그러던 어느 날, ‘브로존’의 황금막내
              ‘브랜치’는 메인보컬 ‘플로이드’가 슈퍼스타 ‘벨벳’과 ‘비니어’에게 잡혀 재능을 빼앗기고
              있다는 소식을 듣는다. 그를 구하기 위해서는 흩어져 있는 ‘브로존’을 재결합하고 완벽한
              화음을 되찾아야 하는데… 12월, 가장 짜릿한 컴백 무대의 시작!
            </p>
            <div class="right_info">
              <p class="release_date"><span>개봉 :</span> 2023-10-12</p>
              <p class="vote_average"><span>평점 :</span> 7.2</p>
            </div>
            <div class="credits">
              <div>
                <img src="http://image.tmdb.org/t/p/w500/yirl6fEmeXY5xcvJw3nTcCNq9Cw.jpg" alt="" />
                <!-- <p>character</p>
                <p>name</p> -->
              </div>
              <div>
                <img src="http://image.tmdb.org/t/p/w500/6Yk5t9RwkdkAT8Qv45934Eez2CA.jpg" alt="" />
              </div>
              <div>
                <img src="http://image.tmdb.org/t/p/w500/8XJzD4mrxlBvtYjP1wVNTW5K9ya.jpg" alt="" />
              </div>
              <div>
                <img src="http://image.tmdb.org/t/p/w500/e9XlcFnZQiBSQ1vISQVyTOrkIaq.jpg" alt="" />
              </div>
              <div>
                <img src="http://image.tmdb.org/t/p/w500/6u95ZNLrADSlK7CVkgEvC0jLIJh.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header_inner {
  .header_nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      a {
        border: 2px solid var(--red);
        display: inline-block;
        font-family: var(--oswald);
        padding: 2px 15px;
        margin: 15px 20px;
        color: var(--red);
        text-transform: uppercase;
        font-weight: 700;
        transition: all 0.5s;
        box-sizing: border-box;
        &:hover {
        background-color: var(--red);
        border: 2px solid var(--white);
        color: var(--white);
      }
      
      }
    }
    .header_menu {
      display: flex;
      p {
        margin-right: 20px;
        a {
          padding: 10px 20px;
          margin-right: 5px;
          transition: all 0.3s;
          border-radius: 50px;
          &:hover {
            // text-decoration-line: underline;
            // text-underline-position: under;
            background-color: var(--white);
            color: var(--black);
          }
        }
      }
    }
  }

  .header_intro {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(107, 107, 107, 0.151);
      backdrop-filter: blur(20px);
      z-index: 1;
    }

    .container {
      display: flex;
      justify-content: space-between;
      position: relative;
      z-index: 10;
      .left {
        max-width: 350px;
        width: 40%;

        z-index: 10;
        display: flex;
        align-items: center;

        .left_img_wrap {
          margin: 40px;
          img {
            min-width: 100px;

            &:hover {
              filter: brightness(0.7);
            }
          }
        }
      }
      .right {
        padding: 40px;
        width: calc(100% - 390px);
        min-width: 60%;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
          font-weight: bold;
          font-size: 30px;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          transition: all 0.3s;
          &:hover {
            color: var(--black400);
          }
        }

        .desc {
          margin: 20px 0;
          color: var(--black500);

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 11;
          -webkit-box-orient: vertical;
        }
        .right_info {
          
          color: var(--white);
          span {
            color: var(--black500);
          }
        }
        .credits {
          margin-top: 20px;
          display: flex;
          div {
            padding: 0 0.7vw;
            img {
              border-radius: 10px;
            }
            &:first-child {
              padding-left: 0;
            }
          }
        }
      }
    }
  }
}
</style>
