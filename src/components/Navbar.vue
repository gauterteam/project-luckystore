<template>
  <nav class="nav-bar">
    <div class="logo"><router-link to="/"><img src="../assets/Lo-go.png" alt="logo"></router-link></div>

    <ul class="nav-menu">
      <li class="nav-menu-link">
        <div class="border-line">
          <router-link to="/men">Men</router-link>
        </div>
        <div class="menu-men"><img src="../assets/Arrow.png" alt=""></div>
        <ul class="men-under_menu">
          <li><div>Jeans</div></li>
          <li><div>Shorts</div></li>
          <li><div>T-shirts</div></li>
          <li><div>Sweaters</div></li>
        </ul>
      </li>
      <li class="nav-menu-link">
        <div class="border-line">
          <router-link to="/women">Women</router-link>
        </div>
        <div class="menu-women"><img src="../assets/Arrow.png" alt=""></div>
        <ul class="women-under_menu">
          <li><div>T-shirts</div></li>
          <li><div>Sweaters</div></li>
          <li><div>Jeans</div></li>
          <li><div>Shorts</div></li>
        </ul>
      </li>
      <li class="nav-menu-link">
        <div class="border-line">
          <router-link to="/sale">Sale!</router-link>
        </div>
      </li>
      <li class="nav-menu-link">
        <div class="border-line">
          <router-link to="/info">Info</router-link>
        </div>
      </li>
      <li class="nav-menu-link">
        <div class="border-line">
          <router-link to="/contact">Contacts</router-link>
        </div>
      </li>
    </ul>

    <div class="search"><img src="../assets/Search-Icon.png" alt="logo"></div>
    <div class="shopping"><img src="../assets/Shoppin-Cart-Icon.png" alt="logo"></div>
    <div class="profile"><img src="../assets/Profile-Icon.png" alt="logo"></div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style scoped lang="scss">

.nav-bar {
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3c5569;
  border-radius: 4px;
  height: 60px;

  .logo {
    position: relative;
    height: 100%;
    margin-right: 1px;
    padding: 14px 18px 14px 20px;

    &::after {
      content: '';
      background: #324758;
      width: 1px;
      height: 60px;
      position: absolute;
      top: 0px;
      right: -1px;
    }

    img {
      width: 32px;
      height: 32px;
      margin: auto;
      transition: 0.5s ease-out;
    }

    &:hover {
      img {
        transition: 0.5s ease-in;
        transform: rotate(-180deg);
      }
    }

    &:active {
      img {
        transition: 0.1s;
        transform: rotate(-90deg);
      }
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;

    .nav-menu-link {
      list-style-type: none;
      text-transform: uppercase;
      padding: 0 35px;
      font-size: 16px;
      position: relative;
      margin: 0 1px;

      a {
        color: #fff;
        text-decoration: none;
      }

      &::after {
        content: '';
        background: #324758;
        width: 1px;
        height: 60px;
        position: absolute;
        top: 0px;
        right: -1px;
      }

      &::before {
        content: '';
        background: #546a7b;
        width: 1px;
        height: 60px;
        position: absolute;
        top: 0px;
        left: -1px;
      }

      &:nth-child(1) {
        padding: 19px 52px 19px 34px;
        width: 119px;
        height: 60px;
        transition: 0.5s ease-in-out;

        &:hover {
          img {
            transform: rotate(180deg);
          }

          .border-line {
            border-bottom: 4px solid #fff;
            position: absolute;
            height: 41px;
          }

          .men-under_menu {
            display: block;
            transition: 0.5s ease-in;
            overflow: hidden;
            height: 140px;

            li {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 35px;
              cursor: pointer;
              background: #fff;

              &:hover {
                background: rgba(0, 0, 0, 0.192);
              }
            }
          }
        }

        img {
          position: absolute;
          top: 28px;
          left: 75px;
        }

        .men-under_menu {
          position: absolute;
          left: -1px;
          top: 60px;
          list-style-type: none;
          display: none;
          transition: 0.5 ease-out;
          border: 1px solid #000;
          height: 0px;

          li {
            padding: 0;
            margin: auto;
            width: 119px;
            font-size: 12px;
            color: #3c5569;
            transition: 0.5s ease-out;
            border-bottom: 1px solid #000;

            &:last-child {
              border-bottom: 0;
            }
          }
        }
      }

      &:nth-child(2) {
        padding: 19px 52px 19px 36px;
        width: 148px;
        height: 60px;

        &:hover {
          img {
            transform: rotate(180deg);
          }

          .border-line {
            border-bottom: 4px solid #fff;
            position: absolute;
            height: 41px;
          }

          .women-under_menu {
            display: block;
            transition: 0.5s ease-in;
            overflow: hidden;
            height: 140px;

            li {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 35px;
              cursor: pointer;
              background: #fff;

              &:hover {
                background: rgba(0, 0, 0, 0.192);
              }
            }
          }
        }

        img {
          position: absolute;
          top: 28px;
          left: 104px;
        }

        .women-under_menu {
          position: absolute;
          left: -1px;
          top: 60px;
          list-style-type: none;
          display: none;
          transition: 0.5 ease-out;
          border: 1px solid #000;
          height: 0px;

          li {
            padding: 0;
            margin: auto;
            width: 148px;
            font-size: 12px;
            color: #3c5569;
            transition: 0.5s ease-out;
            border-bottom: 1px solid #000;

            &:last-child {
              border-bottom: 0;
            }
          }
        }
      }

      &:nth-child(3) {
        padding: 19px 44px 19px 42px;
        width: 125px;
        height: 60px;

        &:hover {
          .border-line {
            border-bottom: 4px solid #fff;
            position: absolute;
            height: 41px;
          }
        }
      }

      &:nth-child(4) {
        padding: 19px 44px 19px 42px;
        width: 122px;
        height: 60px;

        &:hover {
          .border-line {
            border-bottom: 4px solid #fff;
            position: absolute;
            height: 41px;
          }
        }
      }

      &:nth-child(5) {
        padding: 19px 40px 19px 40px;
        width: 164px;
        height: 60px;

        &:hover {
          .border-line {
            border-bottom: 4px solid #fff;
            position: absolute;
            height: 41px;
          }
        }
      }
    }
  }

  .search {
    padding: 16px;
    margin-left: 1px;
  }

  .shopping {
    padding: 17px;
    margin: 0 2px;
  }

  .profile {
    padding: 18px;
    margin-right: 1px;
    position: relative;
    width: 58px;
    height: 60px;
    cursor: pointer;
    transition: 0.5s ease-out;

    &:hover {
      img {
        transition: 0.5s ease-in;
        transform: scale(0.9);
      }
    }

    &:active {
      img {
        transition: 0s;
        transform: scale(1.1);
      }
    }

    &::before {
      content: '';
      background: #546a7b;
      width: 1px;
      height: 60px;
      position: absolute;
      top: 0px;
      left: -1px;
    }
  }

  .search,
  .shopping {
    position: relative;
    width: 58px;
    height: 60px;
    cursor: pointer;
    transition: 0.5s ease-out;

    &:hover {
      img {
        transition: 0.5s ease-in;
        transform: scale(0.9);
      }
    }

    &:active {
      img {
        transition: 0s;
        transform: scale(1.1);
      }
    }

    &::after {
      content: '';
      background: #324758;
      width: 1px;
      height: 60px;
      position: absolute;
      top: 0px;
      right: -1px;
    }

    &::before {
      content: '';
      background: #546a7b;
      width: 1px;
      height: 60px;
      position: absolute;
      top: 0px;
      left: -1px;
    }
  }
}

</style>
