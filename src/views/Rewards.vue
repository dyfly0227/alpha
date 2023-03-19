<template>
  <div class="container">
    <div class="title">Current Epoch 14</div>
    <div class="flex-middle">
      <div class="three-line" style="width: 320px">
        <div class="line1">Estimated Earnings</div>
        <div class="flex-middle">
          <span
            style="font-weight: bold; color: rgb(41, 174, 96); font-size: 24px"
            >0</span
          >
          <img
            class="logo-icon"
            src="@/assets/logo_icon.png"
            alt=""
            width="18"
            height="18"
          />
        </div>
        <div class="line3">Claimable Apr 13, 23 18:00</div>
      </div>
      <div class="three-line">
        <div class="line1">Countdown</div>
        <div class="flex-middle">
          <span
            style="
              font-weight: bold;
              color: rgba(255, 255, 255, 0.8);
              font-size: 24px;
            "
            >17d 22h 34m</span
          >
        </div>
        <div class="line3">Starts Mar 16, ends Apr 6</div>
      </div>
    </div>
    <div class="flex-middle" style="margin-top: 30px">
      <div class="back-item" style="width: 355px; height: 252px">
        <div class="arrow">></div>
        <div class="text-gray">Trading Rewards</div>
        <div class="flex-middle">
          <span class="text-white">0</span>
          <img
            class="logo-icon"
            src="@/assets/logo_icon.png"
            alt=""
            width="18"
            height="18"
          />
        </div>
        <div class="text-green">ALPHA Boosted 0 OLE</div>
        <div class="text-gray">ALPHA Maximum Boost: 0 OLE</div>
        <div class="line"></div>
        <div class="text-gray">Total Reward Supply: 571.17k</div>
        <div class="text-gray">Phase 2/7 Rewards: 81,597, Diluted Ratio: 1</div>
        <div class="text-gray">(02d : 22h : {{ minute }}m : {{ second }}s)</div>
        <div class="text-gray">Learn more></div>
      </div>
      <div>
        <div class="back-item">
          <div class="arrow">></div>
          <div class="text-gray">Lending Rewards</div>
          <div class="flex-middle">
            <span class="text-white">0</span>
            <img
              class="logo-icon"
              src="@/assets/logo_icon.png"
              alt=""
              width="18"
              height="18"
            />
          </div>
          <div class="text-green">ALPHA Boosted 0 OLE</div>
          <div class="text-gray">Total Reward Supply: 584k</div>
        </div>
        <div class="back-item">
          <div class="arrow">></div>
          <div class="text-gray">Referral Rewards</div>
          <div class="flex-middle">
            <span class="text-white">0</span>
            <img
              class="logo-icon"
              src="@/assets/logo_icon.png"
              alt=""
              width="18"
              height="18"
            />
          </div>
        </div>
      </div>

      <div>
        <div class="back-item">
          <div class="arrow">></div>
          <div class="text-gray">Staking Rewards</div>
          <div class="flex-middle">
            <span class="text-white">0</span>
            <img
              class="logo-icon"
              src="@/assets/logo_icon.png"
              alt=""
              width="18"
              height="18"
            />
          </div>
          <div class="text-gray">Sharing Fees: $0</div>
        </div>
        <div class="back-item">
          <div class="arrow">></div>
          <div class="text-gray">Clans Clash Rewards</div>
          <div class="flex-middle">
            <span class="text-white">0</span>
            <img
              class="logo-icon"
              src="@/assets/logo_icon.png"
              alt=""
              width="18"
              height="18"
            />
          </div>
        </div>
      </div>

      <div>
        <div class="back-item">
          <div class="text-gray">Unlocked Retroactive</div>
          <div class="text-gray">Rewards</div>
          <div class="flex-middle">
            <span class="text-white">0</span>
            <img
              class="logo-icon"
              src="@/assets/logo_icon.png"
              alt=""
              width="18"
              height="18"
            />
          </div>
        </div>
        <div class="back-item">
          <div class="arrow">></div>
          <div class="text-gray">Campaign Rewards</div>
          <div class="flex-middle">
            <span class="text-white">0</span>
            <img
              class="logo-icon"
              src="@/assets/logo_icon.png"
              alt=""
              width="18"
              height="18"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="title" style="margin-top: 100px">
      Past Epochs
      <div class="view-more">View More</div>
    </div>
    <div class="flex-middle">
      <div class="three-line" style="width: 320px">
        <div class="line1">Accumulated Rewards</div>
        <div class="flex-middle">
          <span
            style="
              font-weight: bold;
              color: rgba(255, 255, 255, 0.8);
              font-size: 24px;
            "
            >0</span
          >
          <img
            class="logo-icon"
            src="@/assets/logo_icon.png"
            alt=""
            width="18"
            height="18"
          />
        </div>
      </div>
      <div class="three-line">
        <div class="line1">Countdown</div>
        <div class="flex-middle">
          <span
            style="
              font-weight: bold;
              color: rgba(255, 255, 255, 0.8);
              font-size: 24px;
            "
            >0</span
          >
          <img
            class="logo-icon"
            src="@/assets/logo_icon.png"
            alt=""
            width="18"
            height="18"
          />
        </div>
      </div>
      <div class="claim" style="margin-left: 0px; margin-top: 20px">Claim</div>
    </div>
    <div
      class="drop-line"
      :class="{ active: active }"
      @click="active = !active"
    >
      <span style="color: rgba(255, 255, 255, 0.8); font-size: 16px"
        >Epoch 13 Rewards</span
      >
      <div class="flex-middle">
        <span
          style="
            font-weight: bold;
            color: rgba(255, 255, 255, 0.8);
            font-size: 16px;
          "
          >0</span
        >
        <img
          class="logo-icon"
          src="@/assets/logo_icon.png"
          alt=""
          width="18"
          height="18"
        />
      </div>
    </div>
    <div class="drop-list" :class="{ active: active }">
      <ul>
        <li>
          <div class="flex-middle">
            <div class="circle"></div>
            <span>Trading Rewards</span>
          </div>
          <div class="flex-middle">
            <span
              style="
                font-weight: bold;
                color: rgba(255, 255, 255, 0.8);
                font-size: 16px;
              "
              >0</span
            >
            <img
              class="logo-icon"
              src="@/assets/logo_icon.png"
              alt=""
              width="18"
              height="18"
            />
          </div>
        </li>
        <li>
          <div class="flex-middle">
            <div class="circle"></div>
            <span>Lending Rewards</span>
          </div>
          <div class="flex-middle">
            <span
              style="
                font-weight: bold;
                color: rgba(255, 255, 255, 0.8);
                font-size: 16px;
              "
              >0</span
            >
            <img
              class="logo-icon"
              src="@/assets/logo_icon.png"
              alt=""
              width="18"
              height="18"
            />
          </div>
        </li>
        <li>
          <div class="flex-middle">
            <div class="circle"></div>
            <span>Staking Rewards</span>
          </div>
          <div class="flex-middle">
            <span
              style="
                font-weight: bold;
                color: rgba(255, 255, 255, 0.8);
                font-size: 16px;
              "
              >Sharing Fees $ 0 /0</span
            >
            <img
              class="logo-icon"
              src="@/assets/logo_icon.png"
              alt=""
              width="18"
              height="18"
            />
          </div>
        </li>
        <li>
          <div class="flex-middle">
            <div class="circle"></div>
            <span>Campaign Rewards</span>
          </div>
          <div class="flex-middle">
            <span
              style="
                font-weight: bold;
                color: rgba(255, 255, 255, 0.8);
                font-size: 16px;
              "
              >0</span
            >
            <img
              class="logo-icon"
              src="@/assets/logo_icon.png"
              alt=""
              width="18"
              height="18"
            />
          </div>
        </li>
        <li>
          <div class="flex-middle">
            <div class="circle"></div>
            <span>Referral Rewards</span>
          </div>
          <div class="flex-middle">
            <span
              style="
                font-weight: bold;
                color: rgba(255, 255, 255, 0.8);
                font-size: 16px;
              "
              >0</span
            >
            <img
              class="logo-icon"
              src="@/assets/logo_icon.png"
              alt=""
              width="18"
              height="18"
            />
          </div>
        </li>
        <li>
          <div class="flex-middle">
            <div class="circle"></div>
            <span>Clans Clash Rewards</span>
          </div>
          <div class="flex-middle">
            <span
              style="
                font-weight: bold;
                color: rgba(255, 255, 255, 0.8);
                font-size: 16px;
              "
              >$0</span
            >
          </div>
        </li>
      </ul>
    </div>
    <div class="title">
      Sponsored Rewards
      <div class="view-more">View More</div>
    </div>
    <div class="flex-middle">
      <div class="three-line">
        <div class="line1">Claimable</div>
        <div class="flex-middle">
          <span
            style="font-weight: bold; color: rgb(41, 174, 96); font-size: 24px"
            >0</span
          >
        </div>
        <div class="line3">Value: $0</div>
      </div>
      <div class="claim">claim</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const minute = ref(16);
const second = ref(48);
const active = ref(false);
onMounted(() => {
  setInterval(() => {
    if (second.value === 0) {
      second.value = 60;
      minute.value--;
    }
    second.value--;
  }, 1000);
});
</script>
<style scoped>
.title {
  font-size: 22px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 35px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}
.view-more {
  line-height: 35px;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 14px;
}
.three-line .line1 {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  margin: 0px;
}
.three-line .line3 {
  font-weight: normal;
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  margin: 0px;
}
.logo-icon {
  display: block;
  border-radius: 50%;
  margin-left: 5px;
}
.text-gray {
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
}
.text-white {
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
}
.text-green {
  font-size: 14px;
  font-weight: normal;
  color: rgb(41, 174, 96);
}
.back-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px 22px;
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;
  width: 240px;
  height: 120px;
  box-sizing: border-box;
}
.back-item .line {
  width: 100%;
  height: 1px;
  background: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.08) 28%,
    rgba(255, 255, 255, 0.08) 70%,
    rgba(0, 0, 0, 0) 100%
  ) !important;
  margin: 30px 0;
}
.back-item .arrow {
  position: absolute;
  top: 10px;
  right: 12px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
}
.claim {
  margin-left: 40px;
  background-color: rgb(140, 151, 167);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgb(140, 151, 167);
  line-height: 36px;
  font-size: 14px;
  width: 66px;
  text-align: center;
}
.drop-line {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: 30px;
  padding-right: 20px;
  cursor: pointer;
}
.drop-line:hover,
.drop-line.active {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.15) 28%,
    rgba(255, 255, 255, 0.15) 70%,
    rgba(255, 255, 255, 0) 100%
  );
}
.drop-list {
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.15) 28%,
    rgba(255, 255, 255, 0.15) 70%,
    rgba(255, 255, 255, 0) 100%
  );
  box-sizing: border-box;
  margin-bottom: 50px;
  transition: all 0.4s;
  height: 0;
  overflow: hidden;
}
.drop-list.active {
  height: 280px;
}
.drop-list ul {
  margin: 20px;
}
.drop-list ul li {
  font-size: 16px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: circle;
  height: 40px;
}
.drop-list ul li .circle {
  width: 5px;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  margin-right: 10px;
}
</style>
