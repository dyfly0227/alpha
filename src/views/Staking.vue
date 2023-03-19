<template>
  <div class="container">
    <div class="left">
      <div class="line1">Stake OLE-BUSD LP to Earn OLE</div>
      <div class="line2">
        Stake your LP tokens to earn OLE, share 40% of transaction fees, and get
        up to 20% boost to trading and lending rewards.
      </div>
      <a href="#" class="line3">Learn More ></a>
      <div class="apy">
        <div class="apy-left">
          <div class="apy-title">Staking APY</div>
          <div class="apy-num">
            44.01
            <span>%</span>
          </div>
          <div class="li">
            <div class="circle"></div>
            Fees Reward APY : 0.95%
          </div>
          <div class="li-after">Epoch 14 Accumulated Fees: $206.95</div>
          <div class="li">
            <div class="circle"></div>

            OLE Reward APY : 43.06%
          </div>
          <div class="li-after">Epoch 14 OLE Supply: 582k OLE</div>
          <div class="li">
            <div class="circle"></div>
            PancakeSwap LP Reward APY : 0%
          </div>
        </div>
        <div class="apy-right">
          <div class="apy-right-item">
            <div class="one">Total Staked LP Value</div>
            <div class="two">$663,440.02</div>
          </div>
          <div class="apy-right-item">
            <div class="one">Average Lock Duration</div>
            <div class="two">493.97 Days</div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="flex-between">
        <span
          style="
            font-size: 20px;
            font-weight: bold;
            color: rgba(255, 255, 255, 0.8);
          "
          >Stake</span
        >
        <div style="display: flex; align-items: center">
          <span
            style="
              font-weight: 500;
              color: rgba(255, 255, 255, 0.8);
              font-size: 14px;
            "
            >Get LP</span
          >
          <span style="color: rgba(255, 255, 255, 0.25)">></span>
        </div>
      </div>

      <div class="flex-between">
        <span>Available LP</span>
        <span>0 ($0)</span>
      </div>
      <input type="text" placeholder="Input Amount" />
      <div class="tag-wrap">
        <div class="active">25%</div>
        <div>50%</div>
        <div>75%</div>
        <div>100%</div>
        <div class="range">
          <img src="@/assets/icons/range.png" alt="" />
        </div>
      </div>
      <div class="flex-between">
        <span>Lock Duration</span>
        <span>2 Weeks</span>
      </div>

      <div class="tag-wrap">
        <div class="active">2W</div>
        <div>4W</div>
        <div>3M</div>
        <div>4Y</div>
        <div class="range">
          <img src="@/assets/icons/range.png" alt="" />
        </div>
      </div>
      <div class="flex-between">
        <span>Unlock on</span>
        <span>Mar 18, 23 21:00(0 Days)</span>
      </div>
      <div class="flex-between">
        <span>Stake LP Value</span>
        <span>$0</span>
      </div>
      <div class="flex-between">
        <span>Estimated ROI</span>
        <span>$0 (0%)</span>
      </div>
      <div class="flex-between">
        <span>Voting Power</span>
        <span>0 xOLE (0%)</span>
      </div>
      <div class="con-btn">Connect Wallet</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
onMounted(() => {});
</script>
<style scoped>
.container {
  display: flex;
}
.left {
  min-width: 570px;
}
.line1 {
  font-size: 32px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
}
.line2 {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 4px;
}
.line3 {
  font-size: 12px;
}
.apy {
  display: flex;
  padding-top: 50px;
}
.apy-left {
  flex: 1;
}
.apy-title {
  font-weight: normal;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
}
.apy-num {
  font-size: 44px;
  font-weight: bold;
  color: rgb(41, 174, 96);
  margin-top: 5px;
  margin-bottom: 30px;
}
.apy-num span {
  font-size: 30px;
  margin-left: -10px;
}
.apy-left .li {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.8);
}
.apy-left .li .circle {
  width: 5px;
  height: 5px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.8);
  margin-right: 10px;
}
.li-after {
  font-size: 12px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.5);
  line-height: 16px;
  margin-bottom: 10px;
  padding-left: 15px;
}
.apy-right {
  width: 160px;
}
.apy-right-item {
  position: relative;
  margin-top: 50px;
}
.apy-right-item::after {
  content: "";
  position: absolute;
  left: -34%;
  top: 30px;
  width: 50px;
  height: 1px;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.18) 28%,
    rgba(255, 255, 255, 0.18) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  transform: rotate(90deg);
}
.apy-right-item .one {
  font-size: 14px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.5);
}
.apy-right-item .two {
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
}

.right {
  /* width: 430px; */
  min-width: 430px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  filter: blur(0px);
  margin-top: 20px;
  padding: 20px 30px;
  box-sizing: border-box;
}
.flex-between {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
}
.right input {
  padding: 0;
  border: none;
  outline: none;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  width: 100%;
  padding-left: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.right input:hover {
  outline: 2px solid rgba(255, 255, 255, 0.3);
}
.tag-wrap {
  display: flex;
  align-items: centers;
  justify-content: space-between;
  margin-bottom: 10px;
}
.tag-wrap > div {
  width: 69px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
}
.tag-wrap > div.active,
.tag-wrap > div:hover {
  background: rgba(255, 255, 255, 0.3);
}
.tag-wrap > div.range {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tag-wrap > div.range img {
  width: 38px;
  height: 28px;
}
.con-btn {
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  background-color: rgb(255, 29, 124);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  font-size: 14px;
}
.con-btn:hover {
  color: #fff;
}
</style>
