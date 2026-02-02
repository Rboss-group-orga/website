<script setup lang="ts">
const year = new Date().getFullYear().toString()
</script>

<template>
  <footer class="footer">
        <div class="text">
            RBoss Group © {{year}}
        </div>
        <div class="weshre">
            Made by 
            <a href="https://studio.weshre.com" target="_blank">
                <img src="https://images.weshre.com/branding.webp" alt="WeShre SRL"/>
            </a>
        </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  justify-content: flex-start;
  margin-top: auto;
  padding-block: 20px;

  .weshre {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    gap: 10px;
    flex-direction: row;
    img {
        width: 20vw;
        max-width: 120px;
    }

    a {
        font-weight: 500;
        text-decoration: none;
    }
  }

}
</style>
