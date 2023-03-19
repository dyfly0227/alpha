<template>
  <div class="container">
    <img
      alt="logo"
      class="logo"
      src="@/assets/logo.png"
      width="190"
      height="40"
    />
    <div class="right-zone">
      <div class="r1 btn">
        <img src="@/assets/icons/r1.svg" alt="" width="20" height="20" />
        <span>BNB Chain</span>
        <div class="drop">
          <div class="r1-title">Select network</div>
          <ul class="drop-list">
            <li>
              <img src="@/assets/icons/r1-1.png" alt="" />
              Arbitrum
            </li>
            <li>
              <img src="@/assets/icons/r1.svg" alt="" />
              BNB Chain
            </li>
            <li>
              <img src="@/assets/icons/r1-3.svg" alt="" />
              Ethereum
            </li>
            <li>
              <img src="@/assets/icons/r1-4.svg" alt="" />
              KuCoin Community Chain
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="r2 btn">
        <img src="@/assets/icons/r2.svg" alt="" width="20" height="20" />
        0
        <div class="drop">
          <ul class="drop-list">
            <li>
              Buy on
              <img src="@/assets/icons/r2-1.png" alt="" />
              PancakeSwap
            </li>
            <li>
              Buy on
              <img src="@/assets/icons/r2-2.svg" alt="" />
              KuCoin
            </li>
            <li>
              Buy on
              <img src="@/assets/icons/r2-3.png" alt="" />
              Crypto.com
            </li>
            <li>
              Buy on
              <img src="@/assets/icons/r2-4.png" alt="" />
              MetaMask
            </li>
          </ul>
        </div>
      </div> -->
      <div class="r3 btn" @click="connect" id="connectwallet">
        Connect Wallet
      </div>
      <!-- <div class="r4 btn">
        <ellipsis-outlined />
        <div class="drop">
          <ul class="drop-list">
            <li></li>
          </ul>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const connect = () => {
  let account;
  ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
    account = accounts[0];
    let showaddress = account.substring(0, 5) + "..." + account.substring(38);
    document.getElementById("connectwallet").innerText = showaddress;
    if (window.frame) {
      window.frame.contentWindow.document.getElementById(
        "connectwallet2"
      ).innerText = "Start at 5th, April.";
    }
  });
};
onMounted(() => {});
</script>
<style scoped>
.container {
  height: 106px;
  position: relative;
}
.logo {
  margin-top: 40px;
  margin-left: 45px;
}
.right-zone {
  display: flex;
  align-items: center;
  position: absolute;
  right: 45px;
  top: 40px;
}
.btn {
  display: flex;
  align-items: center;
  border-radius: 8px;
  height: 40px;
  cursor: pointer;
  position: relative;
  margin-left: 10px;
}
.r1 {
  background: linear-gradient(
    270deg,
    rgba(77, 126, 233, 0.35) 0%,
    rgba(230, 65, 135, 0.35) 100%
  );
  padding: 0 12px;
}
.r1 span {
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  padding-left: 10px;
}
.r1 > i {
  font-weight: bold;
}
.btn.r1:hover .drop {
  height: 220px;
}
.btn.r2:hover .drop {
  height: 190px;
}
.btn .drop {
  width: 280px;
  background: rgb(255, 255, 255);
  border-radius: 8px;
  transition: all 0.3s;
  position: absolute;
  z-index: 1;
  top: 40px;
  left: 0px;
  height: 0px;
  overflow: hidden;
  padding: 0px 12px;
}
.r2 .drop {
  width: 220px;
  left: -10px;
}
.r2 .drop ul {
  padding: 10px 0;
}

.drop-list li {
  display: flex;
  align-items: center;
  line-height: 40px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: rgb(45, 54, 64);
  padding: 0px 12px;
  margin-bottom: 4px;
}
.drop-list li:hover {
  background: rgb(216, 223, 233);
}
.drop-list li img {
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.r1-title {
  color: rgb(140, 151, 167);
  font-size: 16px;
  margin: 0px;
  line-height: 40px;
}

.r2 {
  padding: 0 10px;
  background: linear-gradient(
    270deg,
    rgb(81, 111, 209),
    rgba(249, 32, 127, 0.6)
  );
}

.r3 {
  color: rgb(255, 29, 124);
  background: rgb(47, 58, 65);
  font-size: 14px;
  padding: 0 14px;
}
.r3:hover {
  color: rgba(255, 255, 255, 0.5);
}
.r4 {
  background: rgb(47, 58, 65);
  width: 40px;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 20px;
}
</style>
